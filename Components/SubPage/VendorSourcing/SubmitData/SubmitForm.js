import InputBox from "../../../Form/InputBox";
import { useFormik } from "formik";
import * as yup from "yup";
import { useRouter } from "next/router";
import axios from "axios";
import toast, { Toaster } from 'react-hot-toast';

const SubmitForm = ({ onSubmit }) => {
    const router = useRouter();
    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            businessPosition: '',
            requesterCompanyname: '',
            requesterJobTitle: ''
        },
        validationSchema: yup.object({
            firstName: yup.string()
                .max(15, 'Must be 15 characters or less')
                .min(3, "Must be 3 characters or more")
                .required('Field is required!'),
            lastName: yup.string()
                .max(15, 'Must be 15 characters or less')
                .min(3, "Must be 3 characters or more")
                .required('Field is required!'),
            email: yup.string()
                .email("Must be valid email!")
                .required('Field is required!'),
            businessPosition: yup.string()
                .nullable(true),
            requesterCompanyname: yup.string()
                .nullable(true),
            requesterJobTitle: yup.string()
                .nullable(true)

        }),
        onSubmit: values => {
            console.log(values)
        }
    })

    const submitForm = () => {
        window.scroll(0, 0)
        formik.setTouched({
            firstName: true,
            lastName: true,
            email: true,
            businessPosition: true,
            requesterCompanyname: true,
            requesterJobTitle: true
        }).then((r) => {
            if (!Object.keys(r).length) {
                const data = ({ ...formik.values, sourcingPosition: router.query.sourcingPosition, vendorType: router.query.vendorType, isRemote: router.query.isRemote, zipCode: router.query.zipCode })
                const loading = toast.loading('Uploading...');
                const base_url = process.env.NEXT_PUBLIC_API_URL;
                axios.post(`${base_url}vendor-sourcings`, { data: data })
                    .then((res) => {
                        if (res.data) {
                            onSubmit();
                            toast.dismiss(loading)
                        }
                    })
                    .catch((err) => {
                        toast.error(err.message)
                        toast.dismiss(loading)
                    })
            }
        })
    }
    const handleChange = e => {
        formik.setTouched({ ...formik.touched, [e.target.name]: true, })
        formik.handleChange(e)
    }


    return (
        <div className="py-10">
            <h2 style={{ color: '#0e497b' }} className="text-center text-xl md:text-2xl xl:text-4xl">I can be reached at...</h2>

            <div className="py-5 xl:mx-96 xl:px-16 3xl:px-60 lg:mx-60 mx-2 md:mx-36 xs:mx-4">
                <InputBox
                    label={'First Name'}
                    name={'firstName'}
                    value={formik.values.firstName}
                    error={formik.touched?.firstName ? (formik.errors.firstName || null) : null}
                    onChange={handleChange}
                    placeholder={'Enter your name'}
                />

                <InputBox
                    label={'Last Name'}
                    name={'lastName'}
                    value={formik.values.lastName}
                    error={formik.touched?.lastName ? (formik.errors.lastName || null) : null}
                    onChange={handleChange}
                    placeholder={'Enter your last name'}
                />

                <InputBox
                    label={'Work Email'}
                    name={'email'}
                    value={formik.values.email}
                    error={formik.touched?.email ? (formik.errors.email || null) : null}
                    onChange={handleChange}
                    placeholder={'Enter your email'}
                />

                <InputBox
                    label={'Business Position'}
                    name={'businessPosition'}
                    value={formik.values.businessPosition}
                    error={formik.touched?.businessPosition ? (formik.errors.businessPosition || null) : null}
                    onChange={handleChange}
                    placeholder={'Position'}
                />

                <InputBox
                    label={'Company Name'}
                    name={'requesterCompanyname'}
                    value={formik.values.requesterCompanyname}
                    error={formik.touched?.requesterCompanyname ? (formik.errors.requesterCompanyname || null) : null}
                    onChange={handleChange}
                    placeholder={'Enter company name'}
                />

                <InputBox
                    label={'Job Title'}
                    name={'requesterJobTitle'}
                    value={formik.values.requesterJobTitle}
                    error={formik.touched?.requesterJobTitle ? (formik.errors.requesterJobTitle || null) : null}
                    onChange={handleChange}
                    placeholder={'Enter job title'}
                />

                <p className="text-xs text-gray-700 mt-4 md:mt-6">
                    This site is protected by reCAPTCHA and the Google
                    <span className={'text-blue-600 hover:underline mx-1 cursor-pointer'}>Privacy Policy</span>
                    and
                    <span className={'text-blue-600 hover:underline mx-1 cursor-pointer'}>Terms of Service</span>
                </p>

                <p className="flex justify-center mt-8 lg:mt-12">
                    <button style={{ background: '#0e497b' }} className={'py-2 px-8 text-white text-lg'} onClick={() => submitForm()}>Submit</button>
                </p>
                <Toaster />
            </div>
        </div>
    )
}

export default SubmitForm;

