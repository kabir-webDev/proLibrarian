import axios from "axios";
import { useRouter } from "next/router";
import React, { useState } from "react";
import AttachementsUpload from "./FilesUpload";
import toast, { Toaster } from "react-hot-toast";
import Swal from "sweetalert2";

const ApplyInformationSection = ({ handleBack }) => {
  const jobInfo = useRouter();

  const [error, setError] = useState({
    fullName: "",
    email: "",
    phone: "",
    coverLetter: "",
  });

  const [data, setData] = React.useState({
    fullName: "",
    email: "",
    phone: "",
    jobs: jobInfo.query.jobId,
    portfolioLink: "",
    coverLetter: "",
  });

  const [uploadFile, setUploadFile] = React.useState({
    attachements: [],
  });
  const base_url = process.env.NEXT_PUBLIC_API_URL;

  var applyFormData = new FormData();

  const handleFormSubmit = (e) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    e.preventDefault();
    const loading = toast.loading("Uploading...");

    for (let i = 0; i < uploadFile.attachements.length; i++) {
      applyFormData.append(
        `files.attachments`,
        uploadFile.attachements[i],
        uploadFile.attachements[i].name
      );
    }
    applyFormData.append("data", JSON.stringify(data));
    axios
      .post(`${base_url}candidates`, applyFormData, {
        headers: {
          accept: "*/*",
          "content-type": "multipart/form-data",
        },
      })
      .then((res) => {
        if (res.status === 200) {
          setData({
            fullName: "",
            email: "",
            phone: "",
            portfolioLink: "",
            coverLetter: "",
          });
          toast.dismiss(loading);
          Swal.fire({
            position: "center",
            icon: "success",
            title:
              "<span className='text-lightGreen'>Thank You for you submission.<br/>We will get back to you shortly.</span>",
            showConfirmButton: false,
            timer: 1500,
          });
          handleBack();
        }
      })
      .catch((err) => {
        toast.error(err.message);
        toast.dismiss(loading);
      });
  };

  const handleChange = (e) => {
    if (e.target.name === "coverLetter") {
      if (e.target.value?.length > 9000) {
        setError({
          ...error,
          coverLetter: "Must be 9000 characters or less",
        });
      } else {
        setError({ ...error, coverLetter: "" });
      }
    }
    if (e.target.name === "fullName") {
      if (e.target.value?.length < 3) {
        setError({
          ...error,
          fullName: "Must be 3 characters or more",
        });
      } else {
        setError({ ...error, fullName: "" });
      }
    }
    if (e.target.name === "email") {
      function validateEmail(email) {
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
      }
      if (validateEmail(e.target.value) !== true) {
        setError({
          ...error,
          email: "Enter a valid email!",
        });
      } else {
        setError({
          ...error,
          email: "",
        });
      }
    }

    if (e.target.name === "phone") {
      if (isNaN(e.target.value)) {
        setError({
          ...error,
          phone: "Enter valid phone number!",
        });
      } else {
        setError({
          ...error,
          phone: "",
        });
      }
    }
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleFileAdd = (file) => {
    setUploadFile({
      ...uploadFile,
      attachements: [...uploadFile.attachements, file],
    });
  };
  const handleFileRemove = (index) => {
    let prev = [...uploadFile.attachements];
    if (index < prev.length && index >= 0) {
      prev.splice(index, 1);
    }
    setUploadFile({ ...uploadFile, attachements: [...prev] });
  };

  return (
    <div>
      <form
        className="flex my-6 flex-col items-center"
        onSubmit={handleFormSubmit}
      >
        <div className="w-full shadow-md flex flex-col border">
          <div className="w-full border-b-2 font-semibold py-4 px-3 text-lg xl:text-2xl xl:px-6 xl:py-8">
            Your Information
          </div>
          <div className="flex flex-col items-center justify-center py-4 px-3">
            <div className="w-full flex-col md:w-4/5 flex md:flex-row md:gap-4 items-center justify-between mb-4 md:mb-2 md:mt-3 lg:mt-4 xl:mt-7 lg:gap-6">
              <label className="flex items-center md:justify-end font-bold text-xs w-full md:w-4/12 md:text-base lg:text-lg xl:text-xl">
                <span
                  className="text-red-700 mb-auto"
                  style={{
                    fontSize: "70%",
                    marginBottom: "0.5em",
                  }}
                >
                  &#x273B;
                </span>{" "}
                &nbsp; Full name
              </label>
              <input
                type="text"
                name="fullName"
                required
                onChange={handleChange}
                value={data.fullName}
                className="w-full md:w-auto md:flex-grow border text-xs px-2 py-1 md:text-base lg:text-lg xl:text-xl xl:px-3 xl:py-3 text-gray-500"
                placeholder="Please write your name here"
              ></input>
            </div>
            {error.fullName?.length !== 0 && (
              <p className=" text-red-600 -ml-44 -mt-2 mb-2 md:mb-0 md:mt-0 md:ml-6 lg:-ml-7 xl:-ml-6 3xl:-ml-20 text-xs 3xl:text-base">
                *{error.fullName}
              </p>
            )}

            <div className="w-full flex-col md:w-4/5 flex md:flex-row md:gap-4 items-center justify-between mb-4 md:mb-2 md:mt-3 lg:mt-4 xl:mt-7 lg:gap-6">
              <label className="flex items-center md:justify-end font-bold text-xs w-full md:w-4/12 md:text-base lg:text-lg xl:text-xl">
                <span
                  className="text-red-700 mb-auto"
                  style={{
                    fontSize: "70%",
                    marginBottom: "0.5em",
                  }}
                >
                  &#x273B;
                </span>{" "}
                &nbsp; Email Address
              </label>
              <input
                type="email"
                required
                name="email"
                onChange={handleChange}
                value={data.email}
                className="w-full md:w-auto md:flex-grow border text-xs px-2 py-1 md:text-base lg:text-lg xl:text-xl xl:px-3 xl:py-3 text-gray-500"
                placeholder="Please write your email address here"
              ></input>
            </div>
            {error.email?.length !== 0 && (
              <p className=" text-red-600 -ml-56 -mt-2 mb-2 md:mb-0 md:mt-0 md:-ml-8 lg:-ml-20  3xl:-ml-36 text-xs 3xl:text-base">
                *{error.email}
              </p>
            )}

            <div className="w-full flex-col md:w-4/5 flex md:flex-row md:gap-4 items-center justify-between mb-4 md:mb-2 md:mt-3 lg:mt-4 xl:mt-7 lg:gap-6">
              <label className="flex items-center md:justify-end font-bold text-xs w-full md:w-4/12 md:text-base lg:text-lg xl:text-xl">
                <span
                  className="text-red-700 mb-auto"
                  style={{
                    fontSize: "70%",
                    marginBottom: "0.5em",
                  }}
                >
                  &#x273B;
                </span>{" "}
                &nbsp; Phone Number
              </label>
              <input
                type="text"
                required
                name="phone"
                onChange={handleChange}
                value={data.phone}
                className="w-full md:w-auto md:flex-grow border text-xs px-2 py-1 md:text-base lg:text-lg xl:text-xl xl:px-3 xl:py-3 text-gray-500"
                placeholder="Please write your phone number here"
              ></input>
            </div>
            {error.phone?.length !== 0 && (
              <p className=" text-red-600 -ml-48 -mt-2 mb-2 md:mb-0 md:mt-0 md:ml-3 lg:-ml-9 xl:-ml-9 3xl:-ml-24 text-xs 3xl:text-base">
                *{error.phone}
              </p>
            )}

            <div className="w-full flex-col md:w-4/5 flex md:flex-row md:gap-4 items-center justify-between mb-4 md:mb-2 md:mt-3 lg:mt-4 xl:mt-7 lg:gap-6">
              <label className="flex items-center md:justify-end font-bold text-xs w-full md:w-4/12 md:text-base lg:text-lg xl:text-xl">
                {" "}
                &nbsp; Portfolio link
              </label>
              <input
                type="text"
                name="portfolioLink"
                onChange={handleChange}
                value={data.portfolioLink}
                className="w-full md:w-auto md:flex-grow border text-xs px-2 py-1 md:text-base lg:text-lg xl:text-xl xl:px-3 xl:py-3 text-gray-500"
                placeholder="Please write your product model here"
              ></input>
            </div>

            <div className="w-full flex-col md:w-4/5 flex md:flex-row md:gap-4 items-start justify-between mb-4 md:mb-2 md:mt-3 lg:mt-4 xl:mt-7 lg:gap-6">
              <label className="flex items-center md:justify-end font-bold text-xs w-full md:w-4/12 md:text-base lg:text-lg xl:text-xl">
                <span
                  className="text-red-700 mb-auto"
                  style={{
                    fontSize: "70%",
                    marginBottom: "0.5em",
                  }}
                >
                  &#x273B;
                </span>{" "}
                &nbsp; Cover Letter
              </label>
              <div className="w-full flex flex-col md:w-auto md:flex-grow">
                <textarea
                  required
                  name="coverLetter"
                  rows={5}
                  onChange={handleChange}
                  value={data.coverLetter}
                  className="w-full md:w-auto md:flex-grow border text-xs px-2 py-1 md:text-base lg:text-lg xl:text-xl xl:px-3 xl:py-3 text-gray-500 resize-none"
                  placeholder="Tell us something about yourself"
                ></textarea>
                <div
                  className="flex flex-grow justify-end px-2 text-gray-600 text-xs lg:text-sm"
                  style={{
                    transform: "translateY(-100%)",
                  }}
                >
                  {data.coverLetter?.length}/9000
                </div>
              </div>
              {error.coverLetter?.length !== 0 && <p>{error.coverLetter}</p>}
            </div>
            <AttachementsUpload
              handleFileAdd={handleFileAdd}
              handleFileRemove={handleFileRemove}
              addedFiles={uploadFile.attachements}
            />
          </div>
        </div>
        <div className="flex flex-row justify-between w-full mt-8">
          <button
            onClick={handleBack}
            className="px-5 xl:px-74 2xl:px-20 py-2 xl:py-3 3xl:py-5 text-primary font-normal text-xs lg:text-base xl:text-xl 3xl:text-2xl flex justify-center border-primary border-2"
          >
            Back
          </button>
          <button
            type="submit"
            className="bg-primary px-5 text-xs lg:text-base xl:px-74 2xl:px-20 py-2 xl:py-3 3xl:py-5 text-white font-normal xl:text-xl 3xl:text-2xl flex justify-center"
          >
            Submit Application
          </button>
        </div>
      </form>
      <Toaster />
    </div>
  );
};
export default ApplyInformationSection;
