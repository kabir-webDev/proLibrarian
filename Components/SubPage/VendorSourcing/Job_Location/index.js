import InputBox from "../../../Form/InputBox";
import * as yup from "yup";
import { useFormik } from "formik";
import Checkbox from "rc-checkbox";
import "rc-checkbox/assets/index.css";
import { useRouter } from 'next/router';

function Job_Location() {
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      sourcingPosition: "",
      zipCode: "",
      isRemote: false,
    },
    validationSchema: yup.object({
      sourcingPosition: yup
        .string()
        .max(15, "Must be 15 characters or less")
        .min(3, "Must be 3 characters or more")
        .required("Field is required!"),
      zipCode: yup
        .number()
        .required("Field is required!"),
    }),
    onSubmit: (values) => {
      const value = ({ ...values, vendorType: router.query.vendorType });
      router.push({ pathname: "/vendor-sourcing/submit-data", query: value });
    },
  });

  const handleChange = (e) => {
    formik.setTouched({ ...formik.touched, [e.target.name]: true });
    formik.handleChange(e);
  };

  return (
    <div className="  pb-14 md:pb-10 py-6 2xl:py-10">
      <div className=" flex flex-col md:gap-5 justify-center items-center mt-6 2xl:mt-16 mb-9 2xl:mb-12 px-4  md:px-6 xl:px-8 2xl:px-10">
        <h1
          className=" font-normal 2xl:font-medium text-2xl lg:text-3xl xl:text-4xl 3xl:text-5xl text-center "
          style={{
            color: "#0e497b",
          }}
        >
          Add the job title and location
        </h1>
        <span
          className="mt-9 md:mt-16"
          style={{ border: "1px solid", color: "#b9b9b9" }}
        >
          <img src="/Line 3.svg" alt="Line" className="object-contain" />
        </span>
      </div>

      <div className="py-0 px-5 md:px-8 2xl:px-10 md:py-5 md:mx-28 lg:mx-48 xl:mx-60 2xl:mx-80 xl:px-16 3xl:px-60 ">
        <InputBox
          label={"Position roll"}
          name={"sourcingPosition"}
          value={formik.values.sourcingPosition}
          error={
            formik.touched?.sourcingPosition
              ? formik.errors.sourcingPosition || null
              : null
          }
          onChange={handleChange}
          placeholder={"Enter your position"}
        />

        <InputBox
          label={"Zip code"}
          type={"number"}
          name={"zipCode"}
          value={formik.values.zipCode}
          error={formik.touched?.zipCode ? formik.errors.zipCode || null : null}
          onChange={handleChange}
          placeholder={"Zip code"}
        />
        <label>
          <div className="flex items-center ">
            <div>
              <Checkbox
                name={"isRemote"}
                onChange={handleChange}
                checked={formik.values.isRemote}
                prefixCls="h-5 lg:h-6 w-5 lg:w-6 "
              />
            </div>
            <div className=" -mt-1 text-black text-sm sm:text-lg lg:text-xl xl:text-2xl ml-1 font-medium">
              Remote Position{" "}
            </div>
          </div>
        </label>

        <div className="flex mt-7 md:mt-12 xl:mt-16">
          <button
            className=" justify-center  m-auto px-10 md:px-14 xl:px-16 py-2 md:py-3 xl:py-4 text-white "
            style={{ backgroundColor: "#0e497b" }}
            onClick={formik.handleSubmit}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default Job_Location;
