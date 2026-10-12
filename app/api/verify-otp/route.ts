import { NextRequest } from "next/server";
import { getFirebaseDocuments } from "../../lib/helpers";
import { Timestamp } from "firebase-admin/firestore";

interface DocumentsType {
  email: string;
  otp: string;
}
export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;
  const otp = searchParams.get("otp");
  const email = searchParams.get("email");

  const docs = await getFirebaseDocuments({
    collection: "OTP",
  });
  const data = docs?.docs as unknown as DocumentsType[];

  const flatenedArray: {
    otp: number,
    expiryTime: Timestamp,
    userEmail: string,
    isExpired: boolean
  }[] = data?.flatMap((doc) => [doc.data()]);
  console.log(flatenedArray)
  // .sort((a, b) => a.expiryTime._nanoseconds - b.expiryTime._nanoseconds)?
  const newFilteredArray = flatenedArray.filter((doc) => doc.userEmail === email && Number(doc.otp) === Number(otp));
  const otpObj = newFilteredArray[0]
  console.log({otpObj})
  if(!otpObj){
    return Response.json({
      error:"The OTP is invalid or expired",
    });
  }
const dateNow = new Date();
const timeNow = dateNow.getTime()
  if(otpObj.expiryTime.nanoseconds > timeNow){
    return Response.json({
      error:"The OTP is expired",
    });
  }

  return Response.json({
    msg:"The OTP is validated",
    otpObj,
  });
}
