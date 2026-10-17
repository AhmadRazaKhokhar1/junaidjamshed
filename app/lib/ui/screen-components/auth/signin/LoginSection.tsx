"use client";
import SignInLogo from "@app/assets/junaidjamshed-logo.webp";
import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { showToast } from "@app/lib/helpers";
import { LoginStep } from "@utils/enums";
import { EnterEmailSection } from "./EnterEmail";
import { VerifyOtp } from "./VerifyOtp";

export const LoginSection = () => {
  const [otpId, setOtpId] = useState(null);
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
        const data = await resp.json();
        setOtpId(data.otp_id)
      }
    } catch (error) {
      console.error(error, "Error occured while sending the email");
    } finally {
      setIsSendingOtp(false);
    }
  }
console.log({otpId})
  const verifyOtp = useCallback(async () => {
    if(!email){
      console.log({email}, "EMAIL FROM VALIDATION")
      showToast({
        msg: "Email is a required value, please fill in to continue",
        type: "error",
      });
      setSignInStep(LoginStep.ENTER_EMAIL)
      return;``
    }
    const response = await fetch(`/api/verify-otp?email=${email}&otp=${otp}&otp_id=${otpId}`, {
      method: "GET"
    });
    const data = await response?.json();
    console.log("data from verify otp api path: ", { response:data })
    return response
  }, [otp, email]);

  useEffect(()=>{
    if(otp.length >= 6){
      verifyOtp()
    }
  },[otp])
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
