"use server";

import { postFetch } from "@/utils/fetch";
import { handleError } from "@/utils/helper";

async function login(stateLogin, formData) {
    const cellphone = formData.get('cellphone');

    if (cellphone === '') {
        return {
            status: "error",
            message: "شماره موبایل الزامی است."
        }
    }

    const pattern = /^(\+98|0)?9\d{9}$/;
    if (!pattern.test(cellphone)) {
        return {
            status: "error",
            message: "فرمت شماره موبایل معتبر است."
        }
    }

    // const data = await postFetch('/contact-us', { name, email, subject, text });

    // if (data.status === 'success') {
    //     return {
    //         status: data.status,
    //         message: "پیام شما با موفقیت ثبت شد",
    //     }
    // } else {
    //     return {
    //         status: data.status,
    //         message: handleError(data.message),
    //     }
    // }

}

export { login }