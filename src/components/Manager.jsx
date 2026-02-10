import React from "react";
import { useRef, useState, useEffect } from "react";
import Copy from "./Copy";
import { ToastContainer, toast } from "react-toastify";
import { Bounce } from "react-toastify/unstyled";
import EditBtn from "./EditBtn";
import DeleteBtn from "./DeleteBtn";
import { v4 as uuidv4 } from "uuid";

function Manager() {
  const ref = useRef();
  const passwordRef = useRef();
  const notify = () => toast("Wow so easy !");
  const [form, setform] = useState({ site: "", username: "", password: "" });
  const [passwordArray, setPasswordArray] = useState([]);

  useEffect(() => {
    let passwords = localStorage.getItem("passwords");
    if (passwords) {
      setPasswordArray(JSON.parse(passwords));
    }
  }, []);
  // let id = uuidv4();
  const savePassword = () => {
    if (!form.site || !form.username || !form.password) {
      toast("Fill all fields");
      return;
    }

    const newItem = { ...form, id: uuidv4() };
    const updated = [...passwordArray, newItem];
    setPasswordArray(updated);
       toast("Saved password", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
     
    })
    localStorage.setItem("passwords", JSON.stringify(updated));
    setform({ site: "", username: "", password: "" });
  };

  const deletePassword = (id) => {
    console.log("Deleting password with id", id);
    let confirmAsk = window.confirm("do you want delete this password");
    if (confirmAsk) {
      const deletItem = passwordArray.filter((item) => item.id !== id);
      setPasswordArray(deletItem);
      toast("Deleted Sucessfully", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      localStorage.setItem("passwords", JSON.stringify(deletItem));
    }
  };
  const EditPassword = (id) => {
    console.log("Edit password with id", id);
    setform(passwordArray.filter((i) => i.id === id)[0]);
    setPasswordArray(passwordArray.filter((item) => item.id !== id));
  };

  const showpassword = () => {
    if (ref.current.src.includes("icons/eyecross.png")) {
      ref.current.src = "icons/eye.png";
      passwordRef.current.type = "text";
    } else {
      ref.current.src = "icons/eyecross.png";
      passwordRef.current.type = "password";
    }
  };

  const handleChange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value });

    console.log(e.target.value);
  };

  const getLink = (url) => {
    if (url.startsWith("http://") || url.startsWith("https://")) {
      return url;
    }
    return "https://" + url;
  };

  const CopyText = (text) => {
    toast("Copied to Clipboard!", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    navigator.clipboard.writeText(text);

    // alert(`copy the text ${text}`)
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />

      <div className="  mycontainer px-40 py-10">
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
            type="text"
          />
          <div className="flex w-full gap-10">
            <input
              value={form.username}
              onChange={handleChange}
              name="username"
              placeholder="Enter Username"
              className="bg-white rounded-3xl border border-green-500 w-full p-4 py-1"
              type="text"
            />

            <div className="relative">
              <input
                value={form.password}
                onChange={handleChange}
                name="password"
                placeholder="Enter Password"
                className="bg-white rounded-3xl border border-green-500 w-full p-4 px-6 py-1"
                type="password"
                ref={passwordRef}
              />
              <span
                className="absolute py-1 right-[1px] top-[-2px] cursor-pointer"
                onClick={showpassword}
              >
                <img
                  ref={ref}
                  className="p-2"
                  src="/icons/eyecross.png"
                  width={31}
                  alt="eye"
                />
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
            <span className="px-1">Save</span>
          </button>
        </div>

        <div className="passwords  ">
          <h2 className="text-2xl font-bold py-4">Your Passwords</h2>

          {passwordArray.length === 0 && (
            <div className="py-2">No Password to Show</div>
          )}
          {passwordArray != 0 && (
            <table className="table w-full overflow-hidden rounded-2xl">
              <thead className="bg-green-600 text-white">
                <tr className="">
                  <th className="py-2">Site</th>
                  <th className="py-2">Username</th>
                  <th className="py-2">Password</th>
                  <th className="py-2">Action</th>
                </tr>
              </thead>
              <tbody className="bg-green-100">
                {passwordArray.map((item, index) => (
                  <tr key={item.id} className="">
                    <td className="py-2 border border-white text-center w-32  ">
                      <div className="flex justify-center items-center gap-2">
                        <a href={getLink(item.site)} target="_blank">
                          {item.site}
                        </a>
                        <div
                          className="flex justify-center items-center"
                          onClick={() => {
                            CopyText(item.site);
                          }}
                        >
                          <Copy></Copy>
                        </div>
                      </div>
                    </td>

                    <td className=" py-2 border border-white text-center w-32">
                      <div className="flex justify-center items-center gap-2">
                        {item.username}
                        <div
                          className="flex justify-center items-center"
                          onClick={() => {
                            CopyText(item.username);
                          }}
                        >
                          <Copy></Copy>
                        </div>
                      </div>
                    </td>
                    <td className=" py-2 border border-white text-center w-32">
                      <div className="flex justify-center items-center gap-2">
                        {item.password}
                        <div
                          className="flex justify-center items-center"
                          onClick={() => {
                            CopyText(item.password);
                          }}
                        >
                          <Copy></Copy>
                        </div>
                      </div>
                    </td>
                    <td className="  py-2 border border-white text-center w-32">
                      <div className="flex justify-center items-center gap-5">
                        <span
                          onClick={() => {
                            EditPassword(item.id);
                          }}
                        >
                          <EditBtn />
                        </span>
                        <span
                          onClick={() => {
                            deletePassword(item.id);
                          }}
                        >
                          {" "}
                          <DeleteBtn />{" "}
                        </span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </>
  );
}

export default Manager;
