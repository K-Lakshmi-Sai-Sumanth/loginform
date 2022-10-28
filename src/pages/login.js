import React from 'react';
import { FaGithub, FaFacebook } from 'react-icons/fa'
import { AiFillGoogleCircle } from 'react-icons/ai'
import { useState } from 'react'
import { string, object} from 'yup'
import ReCAPTCHA from "react-google-recaptcha";
import {useNavigate}   from "react-router-dom";
import { useDispatch } from 'react-redux';
import { getEmail } from '../redux/emailslice';
const Login = () => {
    const dispatch = useDispatch();
    const [check, setCheck] = useState(false)
    const [inputValue, setInputValue] = useState({ email: "", password: "" });
    const [errorValue, setErrorValue] = useState({ email: "", password: "" });
    const navigate = useNavigate();

    let userSchema = object({

        email: string().email("Enter must be valid Email").required("Email is required"),

        password:
            string()
                .required('Password is required')
                .matches(
                    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
                    "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
                )
    });


    let handleOnchange=(key, value)=>{
        setInputValue({...inputValue, [key]:value})
    }

    let handleOnSubmit = () => {
        userSchema.validate(inputValue, { abortEarly: false })
        .then((res) => {
            setErrorValue("")
            check ? navigate('/updateform') : alert("Please enter Recaptcha")
            dispatch(getEmail(inputValue.email))
            
        })
        .catch((error) => {
            let errObj = {};
            error.inner.map((valerr) => {
                errObj[valerr.path] = valerr.message;
                return null
            })
            setErrorValue(errObj)
            // inputValue.email==="" && alert(`Email: ${errorValue.email}`);
            // inputValue.password==="" && alert(`Password: ${errorValue.password}`);
            alert(`Email: Enter a valid email\nPassword: Must Contain 8 Characters, One Number and one special case Character`)
        })
    }


    function onChange(value) {
      setCheck(!check)
    }
    return (
        <div className="flex items-center px-5 justify-center w-screen h-screen">
            <div className=" mx-5 w-full sm:w-2/4 lg:w-1/4 flex flex-col">
                <div className="w-full ">
                    <p className="text-left mb-6">Login With </p>
                    <ul className="flex gap-8 justify-center">
                        <li  ><FaGithub className="w-10 h-10 cursor-pointer" /></li>
                        <li  ><AiFillGoogleCircle className="w-10 cursor-pointer h-10 text-red-600" /></li>
                        <li ><FaFacebook className="cursor-pointer w-10 h-10 text-blue-600" /></li>
                    </ul>
                    <div className="flex items-center justify-center my-5"><span className="w-2/5 h-0.5 bg-slate-200 rounded-full"></span><span className="mx-5">or</span><span className="w-2/5 h-0.5 bg-slate-200 rounded-full"></span></div>
                </div>
                <div className="flex gap-y-1 flex-col w-full">
                    <input type="text"  onChange={(e)=>handleOnchange("email", e.target.value)} value={inputValue.email} className="rounded bg-gray-300 px-3 py-2 border-none outline-none" placeholder="Email" ></input>
                   
                    <input type="text"  onChange={(e)=>handleOnchange("password", e.target.value)} value={inputValue.password} className="rounded bg-gray-300 px-3 py-2 border-none outline-none" placeholder="Password" ></input>
                    <button onClick={handleOnSubmit} className="rounded bg-sky-500 px-3 py-2 border-none outline-none text-white mt-2"  >LOGIN</button>
                    <div className='w-full flex items-center justify-center mt-2 overflow-hidden'>
                        <ReCAPTCHA
                            className=" lg:scale-[100%] scale-75 "
                            sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                            onChange={onChange}

                        /></div>


                </div>
            </div>
        </div>
    );
}

export default Login;
