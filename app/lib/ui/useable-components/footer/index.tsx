"use client";

export const Footer = () => {
  return (
    <div className="flex flex-col items-start justify-start">
      <div className="flex px-7.5 pt-3.75 pb-3 w-full justify-between items-center">
        <div className="flex flex-col justify-between items-start text-wrap ">
          <div className="flex flex-col justify-start items-start h-75 w-86.25 gap-2">
            <span className="font-bold text-[16px]">CONTACT</span>
            <span className="font-normal text-[#000000D9] text-[14px]">
              +92 2137 170 445
            </span>
            <span className="font-normal text-[#000000D9] text-[14px]">
              {"(MON - SAT: 9:30AM - 10:00PM | SUN : 11AM - 8PM)"}
            </span>
            <span className="font-normal text-[#000000D9] text-[14px]">
              eshop@junaidjamshed.com
            </span>
          </div>
          <div className="flex gap-1 justify-start items-start text-[#000000D9] text-[14px] h-4.25">
            <span>TERMS & CONDITIONS</span>
            <span>Privacy policy</span>
          </div>
        </div>
        <div className="flex flex-col justify-between items-start text-wrap ">
          <div className="flex flex-col justify-start items-start h-75 w-6.75px gap-2">
            <span className="font-bold text-[16px]">COMPANY</span>
            <span className="font-normal text-[#000000D9] text-[14px]">
              ABOUT US
            </span>
            <span className="font-normal text-[#000000D9] text-[14px]">
              CAREERS
            </span>
            <span className="font-normal text-[#000000D9] text-[14px]">
              STORE LOCATOR
            </span>
            <span className="font-normal text-[#000000D9] text-[14px]">
              CORPORATE
            </span>
          </div>
        </div>
        <div className="flex flex-col justify-between items-start text-wrap ">
          <div className="flex flex-col justify-start items-start h-75 w-6.75px gap-2">
            <span className="font-bold text-[16px]">CUSTOMER SUPPORT</span>
            <span className="font-normal text-[#000000D9] text-[14px]">
              CONTACT US
            </span>
            <span className="font-normal text-[#000000D9] text-[14px]">
              DELIVERY & ORDERS
            </span>
            <span className="font-normal text-[#000000D9] text-[14px]">
              RETURNS & EXCHANGES
            </span>
            <span className="font-normal text-[#000000D9] text-[14px]">
              TRACK MY ORDER
            </span>
            <span className="font-normal text-[#000000D9] text-[14px]">
              PAYMENT GUIDE
            </span>
            <span className="font-normal text-[#000000D9] text-[14px]">
              FABRIC GROSSARY
            </span>
          </div>
        </div>
        <div className="flex flex-col justify-between items-start text-wrap ">
          <div className="flex flex-col justify-start items-start h-75 w-6.75px gap-2">
            <span className="font-bold text-[16px]">CONNECT</span>
            <span className="font-normal text-[#000000D9] text-[14px]">
              FACEBOOK
            </span>
            <span className="font-normal text-[#000000D9] text-[14px]">X</span>
            <span className="font-normal text-[#000000D9] text-[14px]">
              YOUTUBE
            </span>
            <span className="font-normal text-[#000000D9] text-[14px]">
              INSTAGRAM
            </span>
            <span className="font-normal text-[#000000D9] text-[14px]">
              LINKEDIN
            </span>
            <span className="font-normal text-[#000000D9] text-[14px]">
              PINTEREST
            </span>
          </div>
        </div>
        <div className="flex flex-col justify-start items-start text-wrap w-75 h-75 gap-2">
          <p className="font-bold text-[16px]">SIGN UP FOR OUR NEWSLETTER</p>
          <div className="flex items-center justify-start h-11">
            <input
              type="text"
              className="border border-gray-400 py-1.5 25 px-2.5 w-full h-full"
              placeholder="EMAIL ADDRESS"
            />
            <button className="bg-black w-11 h-full flex items-center justify-center">
              <svg width="14" height="14" viewBox="0 0 43 32" fill="white">
                <path
                  d="M24.958 3.708l-1.917 1.917 9.042 9.042h-26.75v2.667h26.75l-9.042 9.042 1.917 1.917 11.333-11.333 0.917-0.958-0.917-0.958z"
                  fill="white"
                ></path>
              </svg>
            </button>
          </div>
          <p className="text-[13px]">
            By providing your email, you agree to receive marketing email and
            accept our&nbsp;
            <a className="underline font-semibold" title="Privacy Policy">
              Privacy Policy
            </a>&nbsp;
            and&nbsp;
            <a title="Terms of Service" className="underline font-semibold">Terms</a>
          </p>
          <img
            src={"https://www.junaidjamshed.com/cdn/shop/files/footer-payments-grouped.svg?v=1765779328&amp;width=395"}
            alt="Payment Gateways"
            srcSet={"https://www.junaidjamshed.com/cdn/shop/files/footer-payments-grouped.svg?v=1765779328&amp;width=352 352w, //www.junaidjamshed.com/cdn/shop/files/footer-payments-grouped.svg?v=1765779328&amp;width=395 395w"}
            loading="lazy"
            className="object-cover h-4.5 w-98.75 mt-5"
          ></img>
        </div>
      </div>
      <div className="h-15 w-full text-center">
        © 2026&nbsp;
        <span className="text-red-500 underline cursor-pointer">J.</span>
        &nbsp;All Rights Reserved
      </div>
    </div>
  );
};
