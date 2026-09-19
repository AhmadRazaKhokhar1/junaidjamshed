"use client";
import toast from "react-hot-toast";
import { ToastProps } from "@app/utils/interfaces";
import { ImCross } from "react-icons/im";
import { FaCheck } from "react-icons/fa";
import { TiWarning } from "react-icons/ti";
import Error from "next/error";


export const showToast = ({ type, msg }: ToastProps) => {
    switch (type){
        case "error":
            return toast("Email is required", { icon: <ImCross size={12} color="red" /> });
        case "success":
            return toast("Email is required", { icon: <FaCheck size={12} color="green" /> });
        case "warning":
            return toast("Email is required", { icon: <TiWarning size={18} color="mustard" /> });
        default:
            throw new Error({statusCode:400, title:"Wrong Input"})
    }
};
