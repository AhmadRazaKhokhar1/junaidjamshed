import { LoginBanner, LoginSection } from "@app/lib/ui/screen-components";

export const SignInScreen = () => {
  return (
    <div className="flex w-full h-screen justify-center items-center bg-[#C8C0B8]">
      <LoginSection />
      <LoginBanner />
    </div>
  );
};
