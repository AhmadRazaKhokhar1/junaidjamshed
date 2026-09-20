"use client";
import SignInLogo from "@app/assets/junaidjamshed-logo.webp";
import { FaArrowRight } from "react-icons/fa";
import { useState } from "react";
import Link from "next/link";
import { showToast } from "@app/lib/helpers";
import { VscLoading } from "react-icons/vsc";

export const LoginSection = () => {
  const [isEmailInputFocused, setIsEmailInputFocused] = useState(false);
  const [email, setEmail] = useState("");
  const [isSendingOtp, setIsSendingOtp] = useState(false)

  async function sendOtp() {
    try {
      setIsSendingOtp(true)
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
      }
    } catch (error) {
      console.error(error, "Error occured while sending the email");
    }finally{
      setIsSendingOtp(false)
    }
  }

  return (
    <div className="flex flex-col items-center justify-between size-full py-10">
      <div className="size-12.5 overflow-hidden">
        <img
          src={SignInLogo.src}
          alt="Sigin Logo Junaid Jamshed"
          className="size-full"
        />
      </div>
      <div className="p-8 w-95 flex flex-col gap-5">
        <div className="flex flex-col gap-2">
          <span className="text-2xl font-bold">Sign in</span>
          <span className="text-sm text-[#0000008F]">
            Sign in or create an account
          </span>
        </div>
        <div className="flex gap-2 items-center justify-center w-full">
          <span className="bg-gray-800 h-px w-full" />
          <span className="text-sm text-[#0000008F]">or</span>
          <span className="bg-gray-800 h-px w-full" />
        </div>
        <div
          className={`flex flex-col relative bg-white w-full box-border rounded-xl justify-center items-center p-2 ${isEmailInputFocused ? "border-2 border-black" : ""}`}
        >
          {email && (
            <span className="text-xs left-2 top-1 absolute text-gray-400 self-start transition-all ease-in-out delay-700 duration-700">
              Email
            </span>
          )}
          <div className={`flex w-full items-center justify-center`}>
            <input
              type="email"
              name="email"
              id="email"
              className={`w-full outline-0 h-full text-black tex-xs ${email && "pt-2"}`}
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onFocus={() => setIsEmailInputFocused(true)}
              onBlur={() => setIsEmailInputFocused(false)}
            />
            <div className="w-10 h-full flex items-center justify-center">
              <button
                type="submit"
                className="size-8.5 hover:bg-gray-200 cursor-pointer rounded-xl flex justify-center items-center"
                onClick={sendOtp}
              >
                {isSendingOtp?<VscLoading color="black" size={16} className="animate-spin"/>:<FaArrowRight color="black" size={16} />}
              </button>
            </div>
          </div>
        </div>
        <div>
          <span className="text-xs text-[#0000008F]">
            By continuing, you agree to our{" "}
            <Link
              href={"/terms-of-service"}
              className="text-[#0000008F] underline underline-[#0000008F]"
            >
              Terms of service
            </Link>
          </span>
        </div>
      </div>
      <div>
        <Link href={"/privacy-policy"} className="text-[rgb(5,5,5)] text-sm ">
          Privacy Policy
        </Link>
      </div>
    </div>
  );
};
