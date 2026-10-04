import { LoginBanner, LoginSection } from "@app/lib/ui/screen-components";
import { uuid } from "@lib/helpers";

export const SignInScreen = () => {
    const user_id  = uuid()
  return (
    <div className="flex w-full h-screen justify-center items-center bg-[#C8C0B8]">
      <LoginSection />
      <LoginBanner />
    </div>
  );
};
