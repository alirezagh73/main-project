import {ReactNode} from "react";
import {HiArrowNarrowLeft} from "react-icons/hi";

interface AuthLayoutProps {
    children: ReactNode
}

const AuthLayout = ({children}: AuthLayoutProps) => {
    return (
        <main className='grid grid-cols-12 min-h-screen'>

            {/*Right Section => Form Section*/}
            <section className='col-span-5 h-full container'>

                <div className='flex flex-col items-center justify-center h-full px-4'>
                    {/*form switch buttons*/}
                    <div className='bg-primary/10 flex w-full rounded-lg'>
                        <button className='py-5 basis-1/2 text-primary'>ورود</button>
                        <button className='py-5 basis-1/2  rounded-lg bg-primary text-white'>عضویت</button>
                    </div>

                    {children}
                </div>
            </section>

            {/*left Section*/}
            <section
                className='col-span-7 h-full bg-gradient-to-tl from-primary via-first-gradient-primary to-second-gradient-primary'>
                <div className='container'>
                    <p className='flex justify-end p-2 pt-3'>
                        <button>
                            <HiArrowNarrowLeft className='w-8 h-8 text-white'/>
                        </button>
                    </p>

                    <h1 className='font-[snapp] text-white text-5xl  px-16 leading-[70px] whitespace-pre-line word-space'>
                        برنامه نویسی رو با
                        <br/>

                        <span className='text-custom-yellow'> آموزشینو </span>

                        شروع کن
                    </h1>


                    <div className='flex justify-end'>
                        <img className='object-fill' src="../images/auth-form-image.png" alt=""/>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default AuthLayout;