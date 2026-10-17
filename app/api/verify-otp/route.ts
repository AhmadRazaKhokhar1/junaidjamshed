import { NextRequest } from "next/server";
import { getFirebaseDocumentById, getFirebaseDocuments, updateFirebaseDocument } from "../../lib/helpers";
import { Timestamp } from "firebase-admin/firestore";
import { firebase_db } from "../../lib/services";

interface DocumentsType {
  email: string;
  otp: string;
}

interface OtpObject {
  otp: number,
  expiryTime: Timestamp,
  userEmail: string,
  isExpired: boolean
}
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = request.nextUrl;
    const otp = searchParams.get("otp");
    const email = searchParams.get("email");
    const otp_id = searchParams.get("otp_id");

    const doc = await getFirebaseDocumentById({
      collection: "OTP",
      id: otp_id || undefined
    });
    console.log({docFromFirebase:doc})
    const otpObj = doc;

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

    return Response.json({
      msg: "The OTP is validated",
      otpObj,
    });
  } catch (error) {
    return Response.json({
      msg: `The verify otp api has failed with an exception: ${error}`,
    });
  }
}
