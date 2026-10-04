import { NextRequest } from "next/server";
import { getFirebaseDocuments } from "../../lib/helpers";

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;
  const otp = searchParams.get("otp");
  const email = searchParams.get("email");

  const docs = await getFirebaseDocuments({
    collection: "OTP",
  });
  const data = docs?.docs
  console.log("Docs from otp collection: ",data?.map((doc)=>[{data:JSON.stringify(doc.data())}]));

  const newFilteredArray = data?.filter((doc) => doc.email === email);

  console.log("filtered docs from otp collection: ", JSON.stringify(newFilteredArray));

  return Response.json({
    docs,
    newFilteredArray,
  });
}
