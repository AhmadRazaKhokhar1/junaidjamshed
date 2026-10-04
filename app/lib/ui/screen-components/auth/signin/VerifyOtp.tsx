import { VerifyOtpProps } from "@utils/interfaces";
import OTPInput from "react-otp-input";

export const VerifyOtp = ({ otp, setOtp, verifyOtp}: VerifyOtpProps) => {
  return (
    <div>
      <div className="flex flex-col gap-2 my-4">
        <span className="text-black text-2xl font-bold">Enter code</span>
        <span className="text-[#5a5a59] text-sm">Sent to cloudrika@gmail.com <span className="cursor-pointer text-[#383837] font-semibold">Change</span></span>
      </div>
      <OTPInput
        value={otp}
        onChange={setOtp}
        numInputs={6}
        renderSeparator={<span>&nbsp;&nbsp;</span>}
        renderInput={(props) => <input {...props} />}
        inputStyle={{
          width: "57px",
          height: "72px",
          borderRadius: "12px",
          backgroundColor: "white",
          color: "black",
          fontWeight: "bold",
          fontSize: "1.7rem",
        }}
        onPaste={verifyOtp}
        shouldAutoFocus={true}
      />
    </div>
  );
};
