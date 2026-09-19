import { ReactNode } from "react";
import { Toaster } from "react-hot-toast";

export const AdminLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <Toaster />
      {children}
    </div>
  );
};
