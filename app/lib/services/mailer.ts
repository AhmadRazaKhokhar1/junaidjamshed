
import nodemailer from "nodemailer";
import { getEnvConfig } from "@app/lib/helpers";

const {NEXT_PUBLIC_SMTP_USER, NEXT_PUBLIC_SMTP_PASSWORD, NEXT_PUBLIC_SMTP_HOST} = getEnvConfig()

export const mailTransporter = nodemailer.createTransport({
  host:NEXT_PUBLIC_SMTP_HOST ,
  port: 465,
  secure: true,
  auth: {
    user: NEXT_PUBLIC_SMTP_USER,
    pass: NEXT_PUBLIC_SMTP_PASSWORD,
  },
});