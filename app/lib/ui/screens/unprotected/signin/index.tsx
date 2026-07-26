
import { SignInBanner, SignInBody, SignInFooter, SignInHeader } from "@lib/ui/components"

export const SignInScreen = () => {
  return (
      <div className="flex items-center justify-center w-full h-full bg-[#C8BFB8]">
        <div className="w-[50%] h-full flex flex-col items-center justify-between">
            <SignInHeader/>
            <SignInBody/>
            <SignInFooter/>
        </div>
        <SignInBanner/>
    </div>
  )
}
