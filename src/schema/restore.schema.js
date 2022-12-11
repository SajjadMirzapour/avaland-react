import * as yup from "yup";
import msg from "./messages";

const terms = {
    USERNAME: ' نام کاربری',
    PHONENUMBER: 'شماره همراه',
}

const schema = yup
    .object({
        username: yup
            .string()
            .required(msg.required(terms.USERNAME))
            .min(4, msg.min(terms.USERNAME, 4))
            .max(15, msg.max(terms.USERNAME, 15)),
        phoneNumber: yup
            .number(msg.type(terms.PHONENUMBER))
            .required(msg.required(terms.PHONENUMBER))
            .min(11, msg.min(terms.PHONENUMBER, 11))
            .max(11, msg.max(terms.PHONENUMBER, 11)),
        // password: yup
        //     .string()
        //     .required(msg.required(terms.PASSWORD))
        //     .min(4, msg.min(terms.PASSWORD, 4))
        //     .max(15, msg.max(terms.PASSWORD, 15)),
    })
    .required();

export default schema;