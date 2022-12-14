import React from "react";
import { PhoneIcon, MapIcon, EnvelopeIcon } from "@heroicons/react/20/solid";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type Props = {};

function ContactMe({}: Props) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:momohosiano001@gmail.com?subject = ${formData.subject}&body=
     Hi, my name is ${formData.name}, ${formData.message}${formData.email}`;
  };

  return (
    <div
      className=" h-screen flex flex-col relative text-center md:text-left
   md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center "
    >
      <h3 className=" absolute top-16 tracking-[20px] text-gray-600 md:text-2xl text-xl">
        {" "}
        CONTACT
      </h3>

      <div className=" flex flex-shrink-0 flex-col space-y-10">
        <h4 className=" p-4 m-4 text-lg md:text-2xl font-semibold text-center">
          Ive got just what your looking for, get in touch and{" "}
          <span className=" decoration-[#500202]/50 underline">Lets Work</span>!
        </h4>

        <div>
          <div className=" flex items-center space-x-5 justify-center">
            <PhoneIcon className=" text-red-500 h-7 w-7 animate-pulse" />
            <p className="text-xl md:text-2xl">+447576237457</p>
          </div>

          <div className=" flex items-center space-x-5 justify-center">
            <EnvelopeIcon className=" text-red-500 h-7 w-7 animate-pulse" />
            <p className=" text-xl md:text-2xl"> momohosiano001@gmail.com</p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-2 mx-auto w-fit"
          action=""
        >
          <div className="flex space-x-2">
            <input
              {...register("name")}
              placeholder="Name"
              className=" contactInput"
              type="text"
            />
            <input
              {...register("email")}
              placeholder="Email"
              className=" contactInput"
              type="email"
              name=""
              id=""
            />
          </div>

          <input
            {...register("subject")}
            placeholder="Subject"
            className=" contactInput"
            type="text"
            name=""
            id=""
          />
          <textarea
            {...register("message")}
            placeholder="Message"
            className=" contactInput"
          />
          <button
            type="submit"
            className=" bg-red-700 py-5 px-10 rounded-md text-gray-100 font-bold text-lg"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactMe;
