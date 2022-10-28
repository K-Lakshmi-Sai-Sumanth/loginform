import React from 'react';
import { string ,object} from 'yup'
import { useSelector } from 'react-redux';
import {useState} from 'react'
const Updateform = () => {
    const {emailValue} = useSelector((store) => store.email)
    const [inputValue, setInputValue] = useState({username:"", firstname: "", lastname: "", address:"", city:"", country:"", postalcode:"", aboutme:"" });

      let handleOnchange=(key, value)=>{
        setInputValue({...inputValue, [key]:value})
      }

    let userSchema = object({
        username: string().min(4, "Must Contain 4 Characters").max(15, "Max 15 characters only").required("Username is required"),
        firstname: string().min(3, "Must Contain 3 Characters").max(15, "Max 15 characters only").required("Firstname is required"),
        lastname: string().min(3, "Must Contain 3 Characters").max(15, "Max 15 characters only").required("Lastname is required"),
        address: string().min(4, "Must Contain 8 Characters").required("Address is required"),
        city: string().min(3, "Must Contain 3 Characters").max(25, "Max 15 characters only").required("City is required"),
        country: string().min(3, "Must Contain 3 Characters").max(25, "Max 15 characters only").required("Country is required"),
        postalcode: string().min(3, "Must Contain 3 Characters").max(25, "Max 15 characters only").required("Postalcode is required"),
        aboutme: string().min(3, "Must Contain 3 Characters").required("About Me is required"),
      });

          const handleOnSubmit=()=>{
             userSchema.validate(inputValue, { abortEarly: false })
              .then((res) => {
                 
                 alert("form submitted successfully")

                  setInputValue({username:"", firstname:"", lastname:"",address:"", city:"", country:"",postalcode:"",aboutme:"" })
                  
                 
            
               })
                .catch((error) => {
                    let errObj = {};
                    error.inner.map((valerr) => {
                    errObj[valerr.path] = valerr.message;
                    return null
                    })
                   alert(`Enter minimum 4 characters in Input Fields to Updateform`)
                 })
          }
    

      

    return (
        <div className="w-screen h-screen flex items-center justify-center">
            <div className="md:w-2/3  w-full p-3 " >
                <p className="text-left text-gray-500 text-lg mb-5">Edit Profile</p>
                <div className="grid grid-rows-1 grid-flow-col w-full  gap-2 ">
                    <div className="flex col-span-2  flex-col">
                        <p style={{ fontSize: "9px" }} className="text-left text-gray-400">COMPANY (DISABLED)</p>
                        <input type="text" disabled className="rounded bg-gray-200 w-full px-3 py-2 border-none outline-none" placeholder="Creative Code Inc." ></input>
                    </div>
                    <div className="flex col-span-1 flex-col">
                        <p style={{ fontSize: "9px" }} className="text-left text-gray-400">USERNAME</p>
                        <input type="text" onChange={(e)=>handleOnchange("username", e.target.value)} value={inputValue.username} placeholder="Username" style={{ borderWidth: "0.5px" }} className="rounded  px-3 py-2 w-full border-gray-200 outline-none"  ></input>
                    </div>
                    <div className="flex col-span-1 flex-col">
                        <p style={{ fontSize: "9px" }} className="text-left text-gray-400">EMAIL ADDRESS</p>
                        <input type="text" value={emailValue} style={{ borderWidth: "0.5px" }} className="rounded w-full px-3 py-2 border-gray-200 outline-none"  ></input>
                    </div>
                </div>

                <div className="flex mt-5 justify-between">
                    <div className="flex w-[49%] sm:w-[49.5%]  flex-col">
                        <p style={{ fontSize: "9px" }} className="text-left text-gray-400">FIRST NAME</p>
                        <input style={{ borderWidth: "0.5px" }} value={inputValue.firstname} type="text" onChange={(e)=>handleOnchange("firstname", e.target.value)} className="rounded border-gray-200 px-3 py-2  outline-none" placeholder="Company" ></input>
                    </div>
                    <div className="flex w-[49%] sm:w-[49.5%]  flex-col">
                        <p style={{ fontSize: "9px" }} className="text-left text-gray-400">LAST NAME</p>
                        <input style={{ borderWidth: "0.5px" }} value={inputValue.lastname} type="text" onChange={(e)=>handleOnchange("lastname", e.target.value)} className="rounded border-gray-200 px-3 py-2  outline-none" placeholder="Last Name" ></input>
                    </div>
                </div>
                <div className="flex w-full mt-5 flex-col">
                    <p style={{ fontSize: "9px" }} className="text-left text-gray-400">ADDRESS</p>
                    <input style={{ borderWidth: "0.5px" }} value={inputValue.address} onChange={(e)=>handleOnchange("address", e.target.value)} type="text" className="rounded border-gray-200 px-3 py-2  outline-none" placeholder="Home Address" ></input>
                </div>

                <div className="grid grid-rows-1 mt-5 grid-flow-col w-full  gap-2 ">
                    <div className="flex col-span-1  flex-col">
                        <p style={{ fontSize: "9px" }} className="text-left text-gray-400">CITY</p>
                        <input style={{ borderWidth: "0.5px" }} value={inputValue.city} type="text" onChange={(e)=>handleOnchange("city", e.target.value)} className="rounded border-gray-200 w-full px-3 py-2  outline-none" placeholder="City" ></input>
                    </div>
                    <div className="flex col-span-1 flex-col">
                        <p style={{ fontSize: "9px" }} className="text-left text-gray-400">COUNTRY</p>
                        <input type="text" placeholder="Country" value={inputValue.country} onChange={(e)=>handleOnchange("country", e.target.value)} style={{ borderWidth: "0.5px" }} className="rounded  px-3 py-2 w-full border-gray-200 outline-none"  ></input>
                    </div>
                    <div className="flex col-span-1 flex-col">
                        <p style={{ fontSize: "9px" }} className="text-left text-gray-400">POSTAL CODE</p>
                        <input type="text" value={inputValue.postalcode} onChange={(e)=>handleOnchange("postalcode", e.target.value)} style={{ borderWidth: "0.5px" }} placeholder="ZIP Code" className="rounded w-full px-3 py-2 border-gray-200 outline-none"  ></input>
                    </div>
                </div>

                <div className="flex w-full mt-5 flex-col">
                    <p style={{ fontSize: "9px" }} className="text-left text-gray-400">ABOUT ME</p>
                    <textarea style={{ borderWidth: "0.5px" }} value={inputValue.aboutme} onChange={(e)=>handleOnchange("aboutme", e.target.value)} className="rounded w-full h-28 px-3 py-2 border-gray-200 outline-none" placeholder="Here can be your description" ></textarea>
                </div>
                <div className="flex items-center justify-end">
                    <button onClick={handleOnSubmit} className="text-right px-5 py-2 mt-5 bg-cyan-400 text-white rounded">Update Profile</button></div>






            </div>
        </div>
    );
}

export default Updateform;
