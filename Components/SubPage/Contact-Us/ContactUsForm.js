import React from "react";
import emailjs from "emailjs-com";
import toast, { Toaster } from "react-hot-toast";
const ContactUsForm = () => {
  const USER_ID = process.env.NEXT_PUBLIC_EMAILJS_USER_ID;

  const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
  const initialState = {
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  };
  const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
  const [data, setData] = React.useState({
    ...initialState,
  });
  const [inProgress, setInprogress] = React.useState(false);
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const formRef = React.useRef();

  const handleConfirmation = (e) => {
    // console.log("submitted");
    setInprogress(true);
    // console.log("USER_ID", USER_ID);
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, USER_ID).then(
      (result) => {
        setInprogress(false);
        setData({ ...initialState });
        setSuccess(true);
        setTimeout(() => setSuccess(false), 1500);
        // console.log(result.text);
      },
      (error) => {
        console.log(error.text);
        setInprogress(false);
        setData({ ...initialState });
      }
    );
  };
  const [success, setSuccess] = React.useState(false);
  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };
  const isButtonDisabled = () => {
    data.firstName.length < 2 ||
      data.firstName.length > 20 ||
      data.lastName.length < 2 ||
      data.lastName.length > 20 ||
      !validateEmail(data.email) ||
      inProgress ||
      data.subject.length < 4;
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    toast((t) => (
      <div className="flex flex-col flex-wrap gap-3 px-3">
        <p className="text-xl font-bold">
          Are you sure want to send the message?
        </p>
        <div className="flex flex-row justify-end flex-grow">
          <button
            className="bg-yellow-500 px-4 py-2 rounded-md mr-2 text-white"
            onClick={async () => {
              toast.remove(t.id);
              handleConfirmation();
            }}>
            Send
          </button>
          <button
            className="bg-blue-100 text-black px-4 py-2 rounded-md mr-2"
            onClick={async () => {
              await toast.remove(t.id);
            }}>
            Cancel
          </button>
        </div>
      </div>
    ));
  };

  return (
    <form onSubmit={(e) => {
      if(!isButtonDisabled()){
        handleSubmit(e)
      }
    }} ref={formRef}>
      {!inProgress && <Toaster />}
      <div className="flex flex-row items-start justify-center gap-5 ml-6 mb-3 mt-3 mr-3">
        <div className="flex flex-col w-full">
          <input
            className="w-full px-2 py-3"
            value={data.firstName}
            required
            type="text"
            name="firstName"
            style={{
              backgroundColor: "#f3f3f3",
            }}
            onChange={handleChange}
            placeholder="First Name"
          />
          {(data.firstName.length < 2 || data.firstName.length > 20) &&
            data.firstName.length !== 0 && (
              <span className="text-red-600 my-1 font-bold text-xs md:text-sm">
                Must be 2 to 20 characters long
              </span>
            )}
        </div>
        <div className="flex flex-col w-full">
          <input
            className="w-full px-2 py-3"
            placeholder="Last Name"
            value={data.lastName}
            onChange={handleChange}
            name="lastName"
            type="text"
            style={{
              backgroundColor: "#f3f3f3",
            }}
          />
          {(data.lastName.length < 2 || data.lastName.length > 20) &&
            data.lastName.length !== 0 && (
              <span className="text-red-600 my-1 font-bold text-xs md:text-sm">
                Must be 2 to 20 characters long
              </span>
            )}
        </div>
      </div>
      <div className="flex flex-row items-start justify-center gap-5 ml-6 mb-3 mt-3 mr-3">
        <div className="flex flex-col w-full">
          <input
            className="w-full px-2 py-3"
            value={data.email}
            name="email"
            type="email"
            onChange={handleChange}
            required
            style={{
              backgroundColor: "#f3f3f3",
            }}
            placeholder="Email"
          />
          {!validateEmail(data.email) && data.email.length !== 0 && (
            <span className="text-red-600 my-1 font-bold text-xs md:text-sm">
              Email is not valid
            </span>
          )}
        </div>
        <div className="flex flex-col w-full">
          <input
            className="w-full px-2 py-3"
            placeholder="Subject"
            value={data.subject}
            required
            type="text"
            name="subject"
            onChange={handleChange}
            style={{
              backgroundColor: "#f3f3f3",
            }}
          />
          {data.subject.length < 4 && data.subject.length !== 0 && (
            <span className="text-red-600 my-1 font-bold text-xs md:text-sm">
              Must be at least 4 characters long
            </span>
          )}
        </div>
      </div>
      <div className="flex flex-row items-center justify-center gap-5 ml-6 mb-3 mt-3 mr-3">
        <textarea
          className="w-full px-2 py-3 resize-none"
          placeholder="Your Message"
          value={data.message}
          required
          type="text"
          name="message"
          rows={6}
          onChange={handleChange}
          style={{
            backgroundColor: "#f3f3f3",
          }}
        />
      </div>
      {
        success
        &&
        (<div className="flex gap-5 ml-6 mb-3 mt-3 mr-3 text-green-800 bg-green-300 p-2">
        Message Sent! We Will reach out to you shortly.
      </div>)
      }
      <div className="flex gap-5 ml-6 mb-3 mt-3 mr-3">
        
        <button
          type="submit"
          disabled={
            data.firstName.length < 2 ||
            data.firstName.length > 20 ||
            data.lastName.length < 2 ||
            data.lastName.length > 20 ||
            !validateEmail(data.email) ||
            inProgress ||
            data.subject.length < 4
          }
          onClick={handleSubmit}
          className="w-auto px-4 py-3 font-bold text-white"
          style={{
            backgroundColor: "#e5a518",
            opacity:
              (data.firstName.length < 2 ||
              data.firstName.length > 20 ||
              data.lastName.length < 2 ||
              data.lastName.length > 20 ||
              !validateEmail(data.email) ||
              inProgress ||
              data.subject.length < 4)
                ? 0.6
                : 1,
          }}>
          {inProgress ? "Sending..." : "Send Message"}
        </button>
      </div>
    </form>
  );
};
export default ContactUsForm;
