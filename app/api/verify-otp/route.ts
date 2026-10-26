import { NextRequest } from "next/server";
import { getEnvConfig, getFirebaseDocumentById, updateFirebaseDocument } from "../../lib/helpers";
import { Timestamp } from "firebase-admin/firestore";
import { sign } from "jsonwebtoken";

enum USER_ROLE {
  USER="USER",
  ADMIN="ADMIN"
}
interface OtpObject {
  otp: number,
  expiryTime: Timestamp,
  userEmail: string,
  userRole:USER_ROLE
  isExpired: boolean
}

const {JWT_SECRET} = getEnvConfig()
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = request.nextUrl;
    // const otp = searchParams.get("otp");
    // const email = searchParams.get("email");
    const otp_id = searchParams.get("otp_id");

    const doc = await getFirebaseDocumentById({
      collection: "OTP",
      id: otp_id || undefined
    });
    console.log({docFromFirebase:doc})
    const otpObj = doc as unknown as OtpObject;

    console.log({ otpObj })
    if (!otpObj) {
      return Response.json({
        error: "The OTP is invalid or expired",
      });
    }
    const dateNow = new Date();
    const timeNow = dateNow.getTime()
    const timeNowInSec = Math.floor(timeNow / 1000)
    console.log({ expiryTime: otpObj.expiryTime.seconds })

    console.log({ timeNowInSec })
    if(otpObj.isExpired){
      return  Response.json({
        error: "The OTP is expired",
      });
    }
    if (timeNowInSec > otpObj.expiryTime.seconds) {
      await updateFirebaseDocument({
        collection:"OTP",
        id: otp_id || undefined,
        data:{
          ...doc,
          isExpired:true
        }
      })
      return Response.json({
        error: "The OTP is expired",
      });
    }

    const jwtPayload = {
      email:otpObj.userEmail,
      role: otpObj.userRole
    }
    if(!JWT_SECRET) return Response.json({
      msg:"Internal Server Error",
    });

   const token = sign(jwtPayload, JWT_SECRET, {expiresIn:"1h"});

    return Response.json({
      msg: "The OTP is validated",
      otpObj,
      token
    });
    
  } catch (error) {
    return Response.json({
      msg: `The verify otp api has failed with an exception: ${error}`,
    });
  }
}
