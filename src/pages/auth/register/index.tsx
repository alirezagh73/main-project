import {NextPageWithLayout} from "../../_app";
import AuthLayout from "../../../layouts/authLayout";

const Register: NextPageWithLayout = () => {
    return (
        <h1 className=''>
            Register
        </h1>
    );
};


Register.getLayout = (page) => <AuthLayout>{page}</AuthLayout>

export default Register;