import SignInLogo from "@app/assets/junaidjamshed-logo.webp"

export const LoginSection = () => {
  return (
    <div className="flex flex-col items-center justify-between size-full">
      <div className="bg-transparent size-12.5 overflow-hidden">
        <img src={SignInLogo.src} alt="Sigin Logo Junaid Jamshed" />
      </div>
      <div></div>
      <div></div>
    </div>
  );
};
