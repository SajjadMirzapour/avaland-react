import * as yup from "yup";
import msg from "./messages";

const terms = {
    USERNAME: ' نام کاربری',
    PASSWORD: 'رمز عبور',
    REPEAT_PASSWPRD: 'تکرار رمز عبور'
}

const schema = yup
    .object({
        username: yup
            .string()
            .required(msg.required(terms.USERNAME))
            .min(4, msg.min(terms.USERNAME, 4))
            .max(15, msg.max(terms.USERNAME, 15)),
        password: yup
            .string()
            .required(msg.required(terms.PASSWORD))
            .min(4, msg.min(terms.PASSWORD, 4))
            .max(15, msg.max(terms.PASSWORD, 15)),
        repeatPassword: yup
            .string()
            .required(msg.required(terms.PASSWORD))
            .min(4, msg.min(terms.REPEAT_PASSWPRD))
            .max(15, msg.max(terms.REPEAT_PASSWPRD, 15)),
    })
    .required();

export default schema;