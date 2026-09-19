import "@app/globals.css";
import { AdminLayout } from "@app/lib/ui/layouts";
import { ReactNode } from "react";

export default function AdminLayoutRoot({ children }: { children: ReactNode }) {
  return <AdminLayout children={children} />;
}
