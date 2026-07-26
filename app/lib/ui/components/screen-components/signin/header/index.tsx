import JunaidJamshedLogo from "@/app/assets/junaidjamshed-logo.webp"

export const SignInHeader = () => {
  return (
    <div className="overflow-hidden size-12.5">
      <img
        src={JunaidJamshedLogo.src}
        alt="Junaid Jamshed Logo"
        className="size-full"
      />
    </div>
  );
}
