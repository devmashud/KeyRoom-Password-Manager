import React from "react";
import { useRef, useState, useEffect } from "react";

function Manager() {
  const ref = useRef();
  const [form, setform] = useState({site: "", username: "", password:""})
  const [passwordArray, setPasswordArray] = useState([]);

  useEffect(() => {
   let passwords = localStorage.getItem("passwords")
   if(passwords){
    setPasswordArray(JSON.parse(passwords))
   }
  }, [])
  

  const savePassword = () => {
    console.log(form)
    setPasswordArray([...passwordArray, form] )
    localStorage.setItem("passwords", JSON.stringify([...passwordArray, form]))
    console.log(passwordArray)
  }
  
  const showpassword = () => {
    if(ref.current.src.includes("icons/eyecross.png") ){
      ref.current.src = "icons/eye.png"
    }
    else{
      ref.current.src = "icons/eyecross.png"
    }
  }

  const handleChange = (e) => {
    setform({...form, [e.target.name] : e.target.value
     })


    console.log(e.target.value)
  }
  
  
  return (
    <>
      <div className="absolute inset-0 -z-10 h-full w-full bg-green-100 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-fuchsia-400 opacity-20 blur-[100px]"></div>
      </div>

      <div className="  mycontainer  px-40 ">
        <div className="  flex justify-center gap-10 m-2">
          <h1 className="text-4xl  font-bold text-center justify-center ">
            <div className="flex flex-col leading-none">
              <span className="text-black font-semibold tracking-wide">
                Key<span className="text-green-600">Room</span>
              </span>
              <span className="text-[10px] text-slate-500 py-2 tracking-widest uppercase">
                password vault
              </span>
            </div>
          </h1>
        </div>
        <p className=" text-green-800 text-lg text-center">
          Your Own Password Manager
        </p>

        {/* //input section */}

        <div className="  flex flex-col items-center gap-6 p-4 ">
          <input
          value={form.site}
          onChange={handleChange}
          name="site"
            placeholder="Enter Website url"
            className="bg-white rounded-3xl border border-green-500 w-full p-4 py-1"
            type="text "
          />
          <div className="flex w-full gap-10">
            <input
            value={form.username}
            onChange={handleChange}
            name="username"
              placeholder="Enter Username"
              className="bg-white rounded-3xl border border-green-500 w-full p-4 py-1"
              type="text "
            />

            <div className="relative">
              <input
              value={form.password}
              onChange={handleChange}
              name="password"
                placeholder="Enter Password"
                className="bg-white rounded-3xl border border-green-500 w-full p-4 px-6 py-1"
                type="text"
              />
              <span className="absolute py-1 right-[1px] top-[-2px] cursor-pointer" onClick={showpassword}>
                <img ref={ref} className="p-2" src="/icons/eye.png" width={31} alt="eye" />
              </span>
            </div>
          </div>

          <button
           onClick={savePassword}
            className="flex justify-center items-center 
            
            bg-green-500 hover:bg-green-400 rounded-full py-3 px-8 border border-green-600 w-fit"
          >
            <lord-icon
              src="https://cdn.lordicon.com/efxgwrkc.json"
              trigger="hover"
            ></lord-icon>
            Add Password
          </button>
        </div>
      </div>
    </>
  );
}

export default Manager;
