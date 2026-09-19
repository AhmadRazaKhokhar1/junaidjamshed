import LoginBannerImage from "@app/assets/junaindjamshed-signin-banner.jpg";
export const LoginBanner = () => {
  return (
    <div className="size-full overflow-hidden">
      <img src={LoginBannerImage.src} alt="Login Banner" />
    </div>
  );
};
