/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC, memo, useContext } from "react";
import Title from "../shared/Title";
import * as yup from "yup";
import { useFormik } from "formik";
import { sendChatRequest } from "../constants/query";
import { useMutation } from "react-query";
import { callGraphQl } from "../service/master";
import Loader from "../shared/Loader";
import { useNavigate } from "react-router-dom";
import { ProfileContext } from "../App";
import { IMasterContext } from "../context/interface";

interface Props {}

const Contact: FC<Props> = () => {
  const navigate = useNavigate();
  const { currentProfile } = useContext(ProfileContext) as IMasterContext;

  const { mutate: mutateSendChatRequest, isLoading: isGraphAPILoading } =
    useMutation("master", (values: any) => {
      const mapper = {
        name: values?.name,
        createdBy: values?.email,
        message: values?.message,
        createdFor: currentProfile?.details[0]?.email,
        employeeId: currentProfile?._id,
      };
      console.log(mapper);
      return callGraphQl(sendChatRequest(mapper));
    });

  const { values, touched, errors, handleSubmit, handleChange, handleBlur } =
    useFormik({
      initialValues: {
        name: "",
        email: "",
        message: "",
      },
      validationSchema: yup.object({
        name: yup.string().trim().required("Name is required"),
        email: yup
          .string()
          .email("Invalid email")
          .trim()
          .required("Email is required"),
        message: yup.string().trim().required("Message is required"),
      }),
      onSubmit: (values) => {
        console.log("contact me here", values);
        mutateSendChatRequest(values, {
          onSuccess: (response) => {
            console.log("chat response", response);
            navigate(
              `/chat/${response?.data?.sendChatRequest?._id}?email=${currentProfile?.details[0]?.email}`,
            );
          },
        });
      },
    });
  if (isGraphAPILoading) {
    return <Loader />;
  }
  return (
    <div className="flex flex-col items-center justify-center bg-gray-200 h-screen">
      <div className="mt-5">
        <Title text="Contact" />
      </div>
      <form className="mt-24" onSubmit={handleSubmit}>
        <div className="space-y-5 flex flex-col">
          <label htmlFor="name">
            <input
              type="text"
              name="name"
              onChange={handleChange}
              value={values.name}
              onBlur={handleBlur}
              id="name"
              placeholder="Name"
              className="rounded-lg border border-secondary-dark outline-1 outline-secondary-dark px-4 py-2"
            />
            {touched.name && (
              <p className="text-xs mt-1 ml-1 text-red-600">{errors.name}</p>
            )}
          </label>
          <label htmlFor="email">
            <input
              type="text"
              name="email"
              onChange={handleChange}
              value={values.email}
              onBlur={handleBlur}
              id="email"
              placeholder="Email"
              className="rounded-lg border border-secondary-dark outline-1 outline-secondary-dark px-4 py-2"
            />
            {touched.email && (
              <p className="text-xs mt-1 ml-1 text-red-600">{errors.email}</p>
            )}
          </label>
          <label htmlFor="message">
            <textarea
              cols={23}
              name="message"
              onChange={handleChange}
              value={values.message}
              onBlur={handleBlur}
              id="message"
              placeholder="Message"
              className="rounded-lg border border-secondary-dark outline-1 outline-secondary-dark px-4 py-2"
            />
            {touched.message && (
              <p className="text-xs mt-1 ml-1 text-red-600">{errors.message}</p>
            )}
          </label>
          <div className="flex justify-end">
            <button
              type="submit"
              className="border border-secondary-light max-w-min px-4 py-1 bg-secondary-dark text-on-primary rounded-lg"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default memo(Contact);
