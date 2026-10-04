"use client";
import SignInLogo from "@app/assets/junaidjamshed-logo.webp";
import { useState } from "react";
import Link from "next/link";
import { showToast } from "@app/lib/helpers";
import { LoginStep } from "@utils/enums";
import { EnterEmailSection } from "./EnterEmail";
import { VerifyOtp } from "./VerifyOtp";

export const LoginSection = () => {
  const [isEmailInputFocused, setIsEmailInputFocused] = useState(false);
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [isSendingOtp, setIsSendingOtp] = useState(false);
  const [signInStep, setSignInStep] = useState<LoginStep>(
    LoginStep.ENTER_EMAIL,
  );

  async function sendOtp() {
    try {
      setIsSendingOtp(true);
      if (!email) {
        return showToast({ type: "error", msg: "Email is a required field" });
      }

      const resp = await fetch(`/api/resend-email-api?email=${email}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (resp.ok) {
        showToast({
          type: "success",
          msg: `OTP is sent to your email: ${email}`,
        });
        setSignInStep(LoginStep.VERIFY_OTP);
      }
    } catch (error) {
      console.error(error, "Error occured while sending the email");
    } finally {
      setIsSendingOtp(false);
    }
  }

  async function verifyOtp() {
    // if (!otp) {
    //   return showToast({
    //     msg: "OTP is a required value, please fill in to continue",
    //     type: "error",
    //   });
    // }
    // if(!email){
    //   showToast({
    //     msg: "Email is a required value, please fill in to continue",
    //     type: "error",
    //   });
    //   return setSignInStep(LoginStep.ENTER_EMAIL)
    // }

    const response = await fetch(`/api/verify-otp?email=${email}&otp=${otp}`);
    // const data = await response.json();
    console.log("data from verify otp api path: ", {response})
  }

  console.log({otp})
  return (
    <div className="flex flex-col items-center justify-between size-full py-10">
      <div className="size-12.5 overflow-hidden">
        <img
          src={SignInLogo.src}
          alt="Sigin Logo Junaid Jamshed"
          className="size-full"
        />
      </div>
      {signInStep === LoginStep.ENTER_EMAIL ? (
        <EnterEmailSection
          email={email}
          isEmailInputFocused={isEmailInputFocused}
          setIsEmailInputFocused={setIsEmailInputFocused}
          isSendingOtp={isSendingOtp}
          sendOtp={sendOtp}
          setEmail={setEmail}
          key={LoginStep.ENTER_EMAIL}
        />
      ) : (
        <VerifyOtp otp={otp} setOtp={setOtp} verifyOtp={verifyOtp} />
      )}
      <div>
        <Link href={"/privacy-policy"} className="text-[rgb(5,5,5)] text-sm ">
          Privacy Policy
        </Link>
      </div>
    </div>
  );
};
