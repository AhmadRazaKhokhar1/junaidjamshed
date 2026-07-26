import JunaidJamshedSignInBanner from "@/app/assets/junaindjamshed-signin-banner.jpg"

export const SignInBanner = () => {
  return (
    <div className="w-[50%] h-full overflow-hidden">
      <img
        src={JunaidJamshedSignInBanner.src}
        className="size-full"
        alt="Junaid Jamshed Clothing"
      />
    </div>
  );
};
