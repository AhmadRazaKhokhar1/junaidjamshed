import "@app/globals.css";
import { ClientLayout, clientMetaData } from "@lib/ui/layouts";
import { ReactNode } from "react";

export { clientMetaData as metadata };

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return<ClientLayout children={children} key={"Client-Layout"} />
}
