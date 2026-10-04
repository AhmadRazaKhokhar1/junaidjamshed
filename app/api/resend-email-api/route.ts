import {
  createFirebaseDocument,
  getEnvConfig,
  uuid,
} from "@lib/helpers";
import { NextRequest } from "next/server";
import nodemailer from "nodemailer";
import { firebase_db } from "@lib/services";
import { Timestamp } from "firebase-admin/firestore";

const {
  NEXT_PUBLIC_SMTP_USER,
  NEXT_PUBLIC_SMTP_PASSWORD,
  NEXT_PUBLIC_SMTP_HOST,
} = getEnvConfig();

export async function POST(request: NextRequest) {
  try {
    const { searchParams } = request.nextUrl;

    const email = searchParams.get("email");
    if (!email)
      return Response.json({ error: "Email is required to call this API" });

    const mailTransporter = nodemailer.createTransport({
      host: NEXT_PUBLIC_SMTP_HOST,
      port: 465,
      secure: true,
      auth: {
        user: NEXT_PUBLIC_SMTP_USER,
        pass: NEXT_PUBLIC_SMTP_PASSWORD,
      },
    });
    const otp = Math.round(Math.random() * 999999);
    const date = new Date().getTime() + 5 * 60 * 1000;
    const expiryDate = new Date(date);
    const expiryTime = Timestamp.fromDate(expiryDate);
    const payload = {
      otp,
      expiryTime,
      userEmail:email,
      isExpired: false 
    };
    const otp_id = uuid();

    await createFirebaseDocument({
      collection: `OTP/${otp_id}`,
      data: payload,
    });

    const { messageId } = await mailTransporter.sendMail({
      from: "Junaid Jamshed <ahmadrazawebexpert@gmail.com>",
      to: email,
      subject: "Verify your email",
      html: `<div>
      <b>Email verification OTP </b> <br/>
      Your OTP Verification Code is: ${otp}
      </div>`,
    });

    return Response.json({ messageId });
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
