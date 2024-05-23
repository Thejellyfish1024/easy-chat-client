/* eslint-disable react/no-unescaped-entities */
import { useForm } from "react-hook-form";
import logo from "../../assets/easy-chat-logo.jpg"
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
import Swal from "sweetalert2";

const ForgotPassword = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const { forgotPassword } = useAuth();
    const navigate = useNavigate();


    const onSubmit = (data) => {
        // console.log(data)
        const email = data?.email;
        try {
            forgotPassword(email)
                .then(() => {
                    Swal.fire({
                        title: "Sent!",
                        text: "A password reset email has been sent to your given email address!",
                        confirmButtonColor: "#3085d6",
                        cancelButtonColor: "#d33",
                        confirmButtonText: "Go to Login"
                    }).then((result) => {
                        if (result.isConfirmed) {
                            navigate('/login')
                        }
                    });
                })
        } catch (error) {
            toast.error(`${error.message}`);
        }
    }

    return (
        <div className='h-screen'>
            <div className="flex flex-col-reverse lg:flex-row h-screen rounded-lg">
                <div className="w-[50%] relative">
                    <img className='rounded-l-lg h-full hidden md:block object-cover' src="https://harnishdesign.net/demo/html/oxyy/images/login-bg.jpg" alt="" />
                    <div className="absolute bg-[#0D6EFD] h-screen w-full top-0 opacity-80">
                    </div>
                    <div className="absolute h-screen w-full top-0 text-white flex justify-center ">
                        <div className="w-[75%] mt-14">
                            <div className="flex gap-4 items-center">
                                <img src={logo} className="w-[56px] h-[56px] rounded-full" alt="" />
                                <h4 className="text-4xl font-bold">Easy Chat</h4>
                            </div>
                            <div className="mt-44">
                                <h2 className="text-5xl font-semibold leading-snug">Don't worry,</h2>
                                <p className="mt-4 font-medium text-xl">We are here help you to recover your password.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-[50%] flex justify-center items-center'>
                    <div className='w-[65%]'>
                        <h2 className='text-3xl font-bold mb-6'>Reset Password</h2>

                        <p className="text-lg my-4 text-slate-600">Enter the email address or mobile number associated with your account.</p>
                        {/* Register form */}

                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                            <div>
                                <h4 className='font-medium'>Email Address</h4>
                                <input type="email" {...register("email", { required: true })} name="email" placeholder='Enter your email' className='py-3 pl-4 w-full border border-gray-300 mt-3 rounded-md text-lg ' id="" />
                                {errors.email && <span className='text-red-500'>Email is required</span>}
                            </div>
                            <div className='text-center'>
                                <button className='hover: bg-[#0D6EFD] w-full py-4 text-white font-bold rounded-lg'>
                                    Continue
                                </button>
                            </div>
                        </form>
                        <p className='text-center mt-4'> Return to
                            <span className='text-[#0D6EFD]'><Link to={'/login'}> login</Link> </span>
                        </p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ForgotPassword;