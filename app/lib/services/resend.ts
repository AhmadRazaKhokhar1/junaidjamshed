import { Resend } from "resend";
import { getEnvConfig } from "@app/lib/helpers";

const { NEXT_PUBLIC_RESEND_API_KEY } = getEnvConfig();
const resend = new Resend(NEXT_PUBLIC_RESEND_API_KEY);

export async function testConnection() {
  const { data, error } = await resend.emails.send({
    from: "Junaid Jamshed <ahmadrazawebexpert@gmail.com>",
    to: ["cloudrika@gmail.com"],
    subject: "hello world",
    html: "<p>it works!</p>",
  });

  console.warn("Testing Resend API", {data, error})
}
