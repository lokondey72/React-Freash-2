import { useState } from "react";

const SignUp = () => {
  let [firstName, setFirstName] = useState("");
  let [firstNameErr, setFirstNameErr] = useState("");
  let [email, setemail] = useState("");
  let [emailErr, setemailErr] = useState("");
  let [password, setpassword] = useState("");
  let [passwordErr, setpasswordErr] = useState("");
  let [confirmPass, setconfirmPass] = useState("");
  let [confirmPassErr, setConfirmPassErr] = useState("");

  const username = (item) => {
    setFirstNameErr("");
    setFirstName(item);
  };
  const handelEmail = (item) => {
    setemailErr("");
    setemail(item);
  };
  const handelPass = (item) => {
    setpasswordErr("");
    setpassword(item);
  };
  const handelConPass = (item) => {
    setConfirmPassErr("");
    setconfirmPass(item);
  };
  const clickHandel = () => {
    if (!firstName) {
      setFirstNameErr("First name required");
    } else if (!email) {
      setemailErr("First email required");
    } else if (!password) {
      setpasswordErr("First password required");
    } else if (!confirmPass) {
      setConfirmPassErr("First email required");
    }
  };

  return (
    <>
      <div className=" bg-commonbg">
        <div className="container py-32">
          <div className="flex flex-col justify-center items-center">
            <div className="p-28 bg-backcolor rounded-2xl">
              <div className="flex gap-6">
                <div>
                  <p className=" text-slate-50 text-xl">Username</p>
                  <input
                    onChange={(e) => username(e.target.value)}
                    className="py-3 px-8 rounded-xl"
                    type="text"
                    placeholder="Enter your username"
                    value={firstNameErr}
                  />
                  <p className=" text-red-400 text-xl">{firstNameErr}</p>
                </div>
                <div>
                  <p className=" text-slate-50 text-xl">Email</p>
                  <input
                    onChange={(e) => handelEmail(e.target.value)}
                    className="py-3 px-8 rounded-xl"
                    type="email"
                    placeholder="Enter your email"
                  />
                  <p className=" text-red-400 text-xl">{emailErr}</p>
                </div>
              </div>
              <br />
              <div className="flex gap-6">
                <div>
                  <p className=" text-slate-50 text-xl"> New password</p>
                  <input
                    onChange={(e) => handelPass(e.target.value)}
                    className="py-3 px-8 rounded-xl"
                    type="password"
                    placeholder="New password"
                  />
                  <p className=" text-red-400 text-xl">{passwordErr}</p>
                </div>
                <div>
                  <p className=" text-slate-50 text-xl font-semibold">
                    Confirm your password
                  </p>
                  <input
                    onChange={(e) => handelConPass(e.target.value)}
                    className="py-3 px-8 rounded-xl"
                    type="password"
                    placeholder="Confirm new password"
                  />
                  <p className=" text-red-400 text-xl">{confirmPassErr}</p>
                </div>
              </div>
              <div className="flex justify-center pt-16">
                <button
                  onClick={clickHandel}
                  className="p-3 bg-white rounded-xl"
                >
                  Sing up
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
