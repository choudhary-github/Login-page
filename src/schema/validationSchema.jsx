import * as Yup from "yup";

export const validationSchema = Yup.object({
  Username: Yup.string().min(3).max(30).required("Username is required."),
  Email: Yup.string().email().required("Email is required."),
  Password: Yup.string()
    .required("Password is required.")
    .matches(/[0-9]/, "Password requires a number")
    .matches(/[a-z]/, "Password requires a lowercase letter")
    .matches(/[A-Z]/, "Password requires an uppercase letter")
    .matches(/[^\w]/, "Password requires a symbol")
    .min(8, "Password must be 8 characters long"),
  ConfirmPassword: Yup.string().oneOf(
    [Yup.ref("Password"), null],
    "Please enter same password."
  ),
});

// username: "",
// email: "",
// password: "",
// confirmPassword: "",
