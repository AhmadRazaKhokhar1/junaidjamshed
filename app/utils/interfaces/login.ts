import { Dispatch, SetStateAction } from "react";

export interface EnterEmailSectionProps {
  email: string;
  setEmail: Dispatch<SetStateAction<string>>;
  isEmailInputFocused: boolean;
  setIsEmailInputFocused: Dispatch<SetStateAction<boolean>>;
  isSendingOtp: boolean;
  sendOtp: () => Promise<string | undefined>;
}

export interface VerifyOtpProps {
  otp: string;
  setOtp: Dispatch<SetStateAction<string>>;
}
