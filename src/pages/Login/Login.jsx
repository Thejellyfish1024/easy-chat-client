/* eslint-disable react/no-unescaped-entities */
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import toast from 'react-hot-toast';
import logo from "../../assets/easy-chat-logo.jpg"

const Login = () => {

    const { signInUser } = useAuth();
    const navigate = useNavigate();

    const { register, handleSubmit, formState: { errors } } = useForm()


    const onSubmit = (data) => {
        console.log(data)

        signInUser(data.email, data.password)
            .then(result => {
                console.log(result.user);
                toast.success('Successfully logged in')
                navigate('/')
                // window.location.reload();
            })
            .catch(error => {
                // console.log(error);
                toast.error(`${error.message}`)
            })
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
                                <h2 className="text-5xl font-semibold leading-snug">Welcome back!</h2>
                                <p className="mt-4 font-medium text-xl">We are glad to see you again! Get access to your Orders, Wishlist and Recommendations.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-[50%] flex justify-center items-center'>
                    <div className='w-[65%]'>
                        <h2 className='text-3xl font-bold mb-6'>Log In</h2>

                        {/* Register form */}

                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                            <div>
                                <h4 className='font-medium'>Email Address</h4>
                                <input type="email" {...register("email", { required: true })} name="email" placeholder='Enter your email' className='py-3 pl-4 w-full border border-gray-300 mt-3 rounded-md text-lg ' id="" />
                                {errors.email && <span className='text-red-500'>Email is required</span>}
                            </div>
                            <div>
                                <h4 className='font-medium'>Password</h4>
                                <input type="password" {...register("password", { required: true })} name="password" placeholder='Enter your password' className='py-3 pl-4 w-full border border-gray-300 mt-3 rounded-md text-lg' id="" />
                                {errors.password && <span className='text-red-500'>Password is required</span>}
                            </div>
                            <div className='flex justify-between font-medium'>
                                <div className='flex gap-2 items-center'>
                                    <input type="checkbox" name="" className='w-4 h-4' id="" />
                                    <p className=''>Remember Me</p>
                                </div>
                                <p className='underline text-[#0D6EFD]'>
                                    <Link>Forgot Password ?</Link>
                                </p>
                            </div>
                            <div className='text-center'>
                                <button className='hover: bg-[#0D6EFD] w-full py-4 text-white font-bold rounded-lg'>
                                    Login
                                </button>
                            </div>
                        </form>
                        <p className='text-center mt-4'> Don't have an account?
                            <span className='text-[#0D6EFD]'><Link to={'/register'}> Sign up</Link> </span>
                            now
                        </p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;