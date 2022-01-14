import ContactUsForm from "./ContactUsForm";

const ContactFormContainer = () => {
  return (
    <div className="flex justify-center gap-6 flex-wrap my-20 container">
      <div
        className="hidden lg:block w-1/3"
        style={{
          background: "url('Assets/contactuspage/bg.webp')",
        }}
      ></div>
      <div className="w-full lg:w-1/2 flex flex-col">
        <h3
          className="font-bold text-sm ml-6 mb-3 mt-3"
          style={{
            color: "#0e497b",
          }}
        >
          {" "}
          FILL THIS FORM
        </h3>
        <h1 className="font-bold text-2xl md:text-3xl ml-6 mb-3 mt-3">
          {" "}
          Leave A Message
        </h1>
        <p className="text-sm md:text-base ml-6 mb-3 mt-3 mr-3">
          Please let us know your scope of work and we will get back to you soon
          with our estimate.
        </p>
        <ContactUsForm />
      </div>
    </div>
  );
};
export default ContactFormContainer;
