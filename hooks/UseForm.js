import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "../lib/axios";

const useForm = ({ submitForm }) => {
  const [recaptchaValue, setRecaptchaValue] = useState(null);
  const initialFormData = {
    name: "",
    email: "",
    phone: "",
    city: "",
    messages: "",
  };
  const [values, setValues] = useState({ initialFormData });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleRecaptchaChange = (value) => {
    setRecaptchaValue(value);
  };
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    if (!recaptchaValue) {
      toast("Please complete the reCAPTCHA.");
      setIsSubmitting(false);
    }
    setIsSubmitting(true);

    if (errors) {
      setErrors({});
    }

    const BookingData = {
      name: values.name,
      email: values.email,
      phone: values.phone,
      city: values.city,
      messages: values.messages,
      recaptchaToken: recaptchaValue,
    };
    try {
      const response = await axios.post("/api/send", BookingData);
      if (response.data.status === 200) {
        submitForm();
        toast(response.data.msg);
        setIsSubmitting(false);
        setErrors({});
        setValues(initialFormData);
      } else if (response.data.status === 400) {
        toast(response.data.error);
        setErrors(response.data.error);
        setIsSubmitting(false);
        setValues(initialFormData);
      }
      // Handle success or redirect to a success page
    } catch (error) {
      toast("Error submitting form:", error);
      setIsSubmitting(false);
      // Handle error
    }
  };
  return {
    handleChange,
    handleFormSubmit,
    handleRecaptchaChange,
    errors,
    values,
    isSubmitting,
    ToastContainer,
  };
};
export default useForm;
