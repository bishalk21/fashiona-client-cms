import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import fewaStoreApi from "../api/fewaStoreApi";

const SignUp = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const signUpHandler = async (e) => {
    e.preventDefault();
    try {
      if (email === "" && password === "" && name === "" && phone === "") {
        toast.warn("Please enter a valid credentials (non empty Value).");
      } else {
        const response = await fewaStoreApi.post(
          "/auth/user/signup",
          {
            name,
            email,
            phone,
            password,
          },
          {
            headers: { "Content-Type": "application/json" },
          }
        );
        if (response.status === 201) {
          toast(response.data.msg);
          navigate(`../auth/signup/otp-verification/${email}`, {
            replace: true,
          });
        } else {
          toast.warn(response.data.msg);
        }
      }
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
  return (
    <>
      <div className="min-h-screen flex items-center  justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full">
          <h2 className="mt-6  text-center text-3xl font-bold text-indigo-600">
            Create an Account
          </h2>
          <div className="mt-2 px-4 text-center text-sm text-gray-600">
            <span className="px-1 text-lg font-semibold">
              Already have an Account ?
            </span>
            <Link
              to="/auth/signin"
              className="font-semibold text-indigo-500 text-xl hover:text-indigo-500"
            >
              Sign in
            </Link>
          </div>

          <form className=" space-y-6" onSubmit={signUpHandler}>
            <div className="rounded-md  ">
              <div className="">
                <label htmlFor="name" className=" text-lg font-semibold">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="off"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder=" Enter Name"
                />
              </div>
              <div className="mt-2">
                <label htmlFor="email" className=" text-lg font-semibold">
                  Email address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="off"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="relative  rounded block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Email Address"
                />
              </div>
              <div className="mt-2">
                <label htmlFor="phone" className=" text-lg font-semibold">
                  Phone Number
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  autoComplete="off"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="relative  rounded block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Phone Number"
                />
              </div>
              <div className="mt-2">
                <label htmlFor="password" className="text-lg font-semibold">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  autoComplete="off"
                  className="rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder=" Enter Password"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <span className="ml-2 block text-sm text-gray-900">
                  by Sign up, you agree the{" "}
                  <Link className="hover:underline text-indigo-600" to="/">
                    Terms and Conditions.{" "}
                  </Link>
                </span>
              </div>
            </div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-xl font-semibold rounded-md text-white bg-indigo-400 hover:bg-indigo-500  focus:bg-indigo-500 hover:text-black "
            >
              Sign up
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
export default SignUp;
