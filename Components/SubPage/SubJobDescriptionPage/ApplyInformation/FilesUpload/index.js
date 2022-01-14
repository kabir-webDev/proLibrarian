import React from "react";
import { GiCancel } from "react-icons/gi";
const AttachementsUpload = ({
  handleFileAdd,
  handleFileRemove,
  addedFiles,
}) => {
  const dndContainer = React.useRef(null);
  const inputElem = React.useRef(null);

  const dragEnter = () => {
    dndContainer.current.classList.add("bg-gray-500");
    dndContainer.current.classList.add("shadow-inner");
    dndContainer.current.classList.add("border-2");
  };

  const dragEnd = () => {
    dndContainer.current.classList.remove("shadow-inner");
    dndContainer.current.classList.remove("bg-gray-500");
    dndContainer.current.classList.remove("border-2");
  };

  const uploadImage = (e) => {
    if (e.target.files[0]) {
      const fileReader = new FileReader();

      fileReader.onload = () => {
        // dispatch(changeFormValueAction({name: 'productImage', value: fileReader.result}));
        //console.log(fileReader.result);
      };
      //console.log(e.target.files[0].name);
      //fileReader.readAsDataURL(e.target.files[0]);
      //setErrors({image: ''})
      handleFileAdd(e.target.files[0]);
    }
  };

  return (
    <div className="w-full flex-col md:w-4/5 flex md:flex-row md:gap-4 items-start justify-between mb-4 md:mb-2 md:mt-3 lg:mt-4 xl:mt-7 lg:gap-6">
      <label className="flex items-center md:justify-end font-bold text-xs w-full md:w-4/12 md:text-base lg:text-lg xl:text-xl">
        Attachements
      </label>
      <div
        className="w-full md:w-auto md:flex-grow border text-xs px-2 py-1 md:text-base lg:text-lg xl:text-xl xl:px-3 xl:py-3 text-gray-500 shadow-lg"
        style={{
          border: "1px solid gray",
          borderStyle: "dashed",
        }}
      >
        {addedFiles?.length < 3 && (
          <div
            ref={dndContainer}
            onDrop={dragEnd}
            onDragEnter={dragEnter}
            onDragLeave={dragEnd}
            className="w-full flex-grow
                     overflow-hidden cursor-pointer relative grid justify-items-center bg-white py-3 px-5"
          >
            <input
              ref={inputElem}
              onChange={uploadImage}
              type="file"
              accept={".png,.jpg,.jpeg,.doc,.docx,.xlsx,.xls,.ppt,.pdf"}
              className={
                "w-full md:w-auto md:flex-grow cursor-pointer h-full absolute opacity-0 -top-0 -left-0 z-10 text-white"
              }
            />
            <>
              <div className="max-h-10">
                <img
                  className="h-full w-full"
                  src="/Assets/cloud-upload.svg"
                  alt=""
                />
              </div>
              <div className=" pt-3 text-center">
                <p className="max-w-xl text-gray-400 text-xs md:text-sm">
                  Drag and drop here
                </p>
                <p className="max-w-xs text-gray-400 text-xs md:text-sm">or</p>
                <div className="text-center">
                  <p className="font-medium max-w-xl text-blue-300 text-sm">
                    Browse
                  </p>
                </div>
              </div>
            </>
          </div>
        )}
        {addedFiles?.map((obj, index) => {
          return (
            <div
              className="shadow-lg border flex flex-row justify-between px-2 py-2 rounded-md items-center"
              key={index}
            >
              <p>{obj.name}</p>
              <GiCancel
                className="cursor-pointer text-red-800"
                onClick={() => handleFileRemove(index)}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AttachementsUpload;
