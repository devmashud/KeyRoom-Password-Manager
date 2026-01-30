import React from "react";
import Logo from "./Logo";

function Manager() {
  return (
    <>
      <div class="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
        <div class="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-fuchsia-400 opacity-20 blur-[100px]"></div>
      </div>

      <div className="  mycontainer  bg-slate-50 px-40 ">
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
            className="bg-white rounded-3xl border border-green-500 w-full p-4 py-1"
            type="text "
          />
          <div className="flex w-full gap-10">
            <input
              className="bg-white rounded-3xl border border-green-500 w-full p-4 py-1"
              type="text "
            />
            <input
              className="bg-white rounded-3xl border border-green-500 w-full p-4 py-1"
              type="text "
            />
          </div>

          
            
            <button className="flex justify-center items-center 
            
            bg-green-500 rounded-full py-2 px-5 w-fit">
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
