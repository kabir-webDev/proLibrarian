import Layout from "../../../Layout";
import SubmitForm from "../../../Components/SubPage/VendorSourcing/SubmitData/SubmitForm";
import {useState} from "react";
import ThanksYou from "../../../Components/SubPage/VendorSourcing/SubmitData/ThanksYou";


const SubmitData = () => {

    const [submitted, setSubmitted] = useState(false)




    return (
        <Layout>
            {
                submitted ? <ThanksYou /> : <SubmitForm onSubmit={() => setSubmitted(true)} />
            }

        </Layout>
    )
}

export default SubmitData;
