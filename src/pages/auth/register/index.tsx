import {NextPageWithLayout} from "../../_app";
import AuthLayout from "../../../layouts/authLayout";

const Register: NextPageWithLayout = () => {
    return (
        <>
            <form className='flex flex-col w-full gap-y-7 mt-16'>
                <input type="text" className='border border-gray-200 w-full rounded-md py-3 px-4'
                       placeholder='نام خود را وارد کنید'/>
                <input type="email" className='border border-gray-200 w-full rounded-md py-3 px-4 '
                       placeholder='ایمیل خود را وارد کنید'/>
                <input type="password" className='border border-gray-200 w-full rounded-md py-3 px-4 '
                       placeholder='رمز خود را وارد کنید'/>
                <button
                    className='bg-gradient-to-tl from-primary  to-third-gradient-primary py-4 rounded-md text-white font-bold'>عضویت
                    در سایت
                </button>
            </form>

            {/*divider*/}
            <div className='w-full mt-12'>
                <span
                    className='w-full text-custom-gray text-sm  flex justify-center items-center gap-x-2  after:inline-block  after:w-1/3 after:h-[1px] after:bg-custom-gray before:w-1/3 before:h-[1px] before:bg-custom-gray'>
                    و یا عضویت با
                </span>
            </div>

            {/* social networks   */}

            <div className='flex justify-around flex-col lg:flex-row gap-x-4 w-full'>
                <button className='flex rounded-md mt-8 justify-center items-center gap-x-2 py-4 bg-custom-second-gray flex-1'>
                    <img src="../images/github.png" alt=""/>
                    <span>گیت هاب</span>
                </button>

                <button className='flex rounded-md mt-8 justify-center items-center gap-x-2 py-4 bg-custom-second-gray flex-1'>
                    <img src="../images/google.png" alt=""/>
                    <span>گوگل</span>
                </button>

                <button className='flex rounded-md mt-8 justify-center items-center gap-x-2 py-4 bg-custom-second-gray flex-1'>
                    <img src="../images/linkedin.png" alt=""/>
                    <span>لینکداین</span>
                </button>

            </div>

        </>
    );
};


Register.getLayout = (page) => <AuthLayout>{page}</AuthLayout>

export default Register;