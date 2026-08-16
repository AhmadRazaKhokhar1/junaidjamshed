import "@app/globals.css";
import { ClientLayout, clientMetaData } from "@lib/ui/layouts";

export {clientMetaData as metadata};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <ClientLayout children={children} />
}
