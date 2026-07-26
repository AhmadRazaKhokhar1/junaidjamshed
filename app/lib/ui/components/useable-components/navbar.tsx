export default function Navbar() {
  return (
    <div className="flex flex-col P-3">
      <div className="flex h-10 justify-start items-center gap-2">
        <span>SIGN IN</span>
        <span>TRACKING INFO</span>
        <span>GIFTING</span>
      </div>
      <div className="flex h-15 justify-between items-center">
          <div className="flex items-center justify-center gap-2">
            <span>WOMEN</span>
            <span>MEN</span>
            <span>FRAGRANCE & BEAUTY</span>
            <span>TEENS</span>
          </div>
          <div className="flex items-center justify-center gap-2"></div>
          <div className="flex items-center justify-center gap-2"></div>
      </div>
      <div className="flex h-9 justify-start items-center gap-2"></div>
    </div>
  )
}

