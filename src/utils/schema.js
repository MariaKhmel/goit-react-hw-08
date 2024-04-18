import * as Yup from "yup";
export const contactFormSchema = Yup.object({
    name: Yup.string()
        .min(3, "Too short!")
        .max(50, "Too long!")
        .required("Required"),
    number: Yup.string()
        .min(3, "Too short!")
        .max(50, "Too long!")
        .required("Required"),
});

export const loginFormSchema = Yup.object({
    email: Yup.string()
        .email('Invalid email').required('Required'),
    password: Yup.string()
        .min(7, "Too short!")
        .max(15, "Too long!")
        .required("Required"),
});

export const registrationFormSchema = Yup.object({
    email: Yup.string()
        .email('Invalid email')
        .required('Required')
        .matches(/.*@.*/, 'Email must contain "@"'),
    password: Yup.string()
        .min(7, "Too short!")
        .max(15, "Too long!")
        .required("Required"),
    name: Yup.string()
        .min(3, "Too short!")
        .max(50, "Too long!")
        .required("Required"),
});

