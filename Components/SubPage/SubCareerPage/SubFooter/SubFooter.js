import React from "react";

const SubFooter = () => {
  const onSubmit = () => {
    console.log("submit");
  };

  return (
    <div className="text-center bg-yellow-100 items-align-center overflow-hidden py-12 lg:pt-32 lg:pb-28">
      <h1 className="text-2xl md:text-4xl font-bold pb-5 md:pb-7">
        Stay in the know
      </h1>
      <div className="text-center text-gray-500">
        <h1 className="text-xs md:text-xl font-semibold">
          Don't worry if you can't find your desired position. <br />
          Let us know your expertise, and we'll keep you in mind for upcoming
          openings.
        </h1>
        {/* <h1 className="text-xs md:text-xl font-semibold">
          lacinia vitae.Quisque sit amet nisi erat.
        </h1> */}
      </div>
      {/* <div className="max-w-sm rounded overflow-hidden my-10 mx-auto bg-white">
        <form onSubmit={onSubmit} className="w-full max-w-sm">
          <div className="flex items-center border-b-2 border-rounded border-teal-500 px-3 py-3">
            <input
              onChange={(e) => setText(e.target.value)}
              className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
              type="text"
              placeholder="Enter your email address"
            />
            <button
              className="flex-shrink-0 bg-teal-500 hover:bg-teal-700  py-1 px-2 rounded" type="submit">
                  {/* <img src ="Assets/gamepad.svg"></img> */}
      {/* <HiOutlineMail className="w-8 h-8 overflow-visible"/>
              </button>
          </div>
        </form>
      </div> */}
    </div>
  );
};

export default SubFooter;
