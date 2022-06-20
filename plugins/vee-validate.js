import { extend } from "vee-validate";
import { required, alpha, email, min,min_value } from "vee-validate/dist/rules";

extend("required", {
  ...required,
  message: "فیلد {_field_} اجباری می باشد",
});

extend("email", {
  ...email,
  message: "ایمیل نامعتبر است",
});

extend("min", {
  ...min,
  message: "فیلد {_field_} نامعتبر است",
});
extend("min_value", {
  ...min_value,
  message: "فیلد {_field_} نامعتبر است",
});


extend("alpha", {
  ...alpha,
  message: "This field must only contain alphabetic characters",
});
