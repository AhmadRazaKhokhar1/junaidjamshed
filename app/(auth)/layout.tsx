import { AuthLayout, authMetaData } from "@lib/ui/layouts";
import { ReactNode } from "react";

export {authMetaData as metadata};

export default function Auth({children}:{children:ReactNode}) {
  return <AuthLayout children={children} />
}
