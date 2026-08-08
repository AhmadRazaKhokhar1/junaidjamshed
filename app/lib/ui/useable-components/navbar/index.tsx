import NavBarLogo from "@app/assets/junaidjamshed-logo.webp"

export const NavBar = () => {

    return <nav>
        <div className="bg-[#C8C0B8] h-10 w-full px-10 gap-7.5 flex items-center text-xs">
            <span>SIGN IN</span>
            <span>TRACKING INFO</span>
            <span>GIFTING</span>
        </div>
        <div className="flex justify-between px-10 items-center w-full h-15 text-sm border-b border-[#CFCFCF]">
            <div className="flex gap-4 items-center justify-center font-semibold">
                <span>WOMEN</span>
                <span>MEN</span>
                <span>FRAGRANCE & BEAUTY</span>
                <span>TEENS</span>
            </div>
            <div><img src={NavBarLogo.src} alt="Junaid Jamshed Navbar Logo" className="size-12.5" /></div>
            <div className="flex items-center justify-end gap-4">
                <span>SEARCH</span>
                <div className="flex">WISHLIST<span className="-mt-2 rounded-full flex items-center justify-center bg-[#c8c0b8] size-4 overflow-hidden"><span className="text-[10px] text-center size-full overflow-hidden">0</span></span></div>
                <div className="flex">BAG<span className="-mt-2 rounded-full flex items-center justify-center bg-[#c8c0b8] size-4 overflow-hidden"><span className="text-[10px] text-center size-full overflow-hidden">1</span></span></div>
            </div>
        </div>
        <div className="text-sm w-[80%] h-9 flex justify-between items-center gap-x-96 px-10">
            <div className="ml-0 flex">
                🇵🇰 PAK
            </div>
            <div className="flex items-start justify-center gap-4">
                <span>NEW IN</span>
                <span>READY TO WEAR</span>
                <span>UNSTICHED</span>
                <span>FORMALS</span>
                <span>FOOTWEAR</span>
                <span>ACCESSORIES</span>
            </div>
        </div>
        <div className="w-full border-b border-[#CFCFCF]"></div>
    </nav>
}