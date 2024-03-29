/** @format */

import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Link, useNavigate, Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setCredentials } from "../../redux/slices/authSlice";
import toast from "react-hot-toast";
import axios from "axios";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const fromHandler = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:3030/api/v1/user/login",
        { email, password, role },
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      toast.success(data.message);
      dispatch(setCredentials(data));
      navigate("/");
      setEmail(""), setPassword(""), setRole("");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  if (userInfo) {
    return <Navigate to='/' />;
  }
  return (
    <>
      <section>
        <div className='grid grid-cols-1 lg:grid-cols-2'>
          <div className='relative h-screen flex items-end px-4 pb-10 pt-60 sm:px-6 sm:pb-16 md:justify-center lg:px-8 lg:pb-24'>
            <div className='absolute inset-0'>
              <img
                className='h-full w-full rounded-md object-cover object-top'
                src='https://images.unsplash.com/photo-1534120247760-c44c3e4a62f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTk0fHxkZXNpZ25lcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60'
                alt=''
              />
            </div>
            <div className='absolute inset-0 bg-gradient-to-t from-black to-transparent'></div>
            <div className='relative'>
              <div className='w-full max-w-xl xl:mx-auto xl:w-full xl:max-w-xl xl:pr-24'>
                <h3 className='text-4xl font-bold text-white'>
                  Now you dont have to rely on your designer to create a new
                  page
                </h3>
                <ul className='mt-10 grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2'>
                  <li className='flex items-center space-x-3'>
                    <div className='inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-blue-500'>
                      <svg
                        className='h-3.5 w-3.5 text-white'
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 20 20'
                        fill='currentColor'>
                        <path
                          fillRule='evenodd'
                          d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                          clipRule='evenodd'></path>
                      </svg>
                    </div>
                    <span className='text-lg font-medium text-white'>
                      {" "}
                      Commercial License{" "}
                    </span>
                  </li>
                  <li className='flex items-center space-x-3'>
                    <div className='inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-blue-500'>
                      <svg
                        className='h-3.5 w-3.5 text-white'
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 20 20'
                        fill='currentColor'>
                        <path
                          fillRule='evenodd'
                          d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                          clipRule='evenodd'></path>
                      </svg>
                    </div>
                    <span className='text-lg font-medium text-white'>
                      {" "}
                      Unlimited Exports{" "}
                    </span>
                  </li>
                  <li className='flex items-center space-x-3'>
                    <div className='inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-blue-500'>
                      <svg
                        className='h-3.5 w-3.5 text-white'
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 20 20'
                        fill='currentColor'>
                        <path
                          fillRule='evenodd'
                          d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                          clipRule='evenodd'></path>
                      </svg>
                    </div>
                    <span className='text-lg font-medium text-white'>
                      {" "}
                      120+ Coded Blocks{" "}
                    </span>
                  </li>
                  <li className='flex items-center space-x-3'>
                    <div className='inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-blue-500'>
                      <svg
                        className='h-3.5 w-3.5 text-white'
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 20 20'
                        fill='currentColor'>
                        <path
                          fillRule='evenodd'
                          d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                          clipRule='evenodd'></path>
                      </svg>
                    </div>
                    <span className='text-lg font-medium text-white'>
                      {" "}
                      Design Files Included{" "}
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className='flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24'>
            <div className='xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md'>
              <h2 className='text-3xl font-bold leading-tight text-black sm:text-4xl'>
                Sign in
              </h2>
              <p className='mt-2 text-sm text-gray-600'>
                Don&apos;t have an account?{" "}
                <Link
                  to='/register'
                  title=''
                  className='font-semibold text-black transition-all duration-200 hover:underline'>
                  Create a free account
                </Link>
              </p>
              <form onSubmit={fromHandler} method='POST' className='mt-8'>
                <div className='space-y-5'>
                  <div>
                    <label
                      htmlFor=''
                      className='text-base font-medium text-gray-900'>
                      Email address
                    </label>
                    <div className='mt-2'>
                      <input
                        className='flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50'
                        autoComplete='email'
                        type='email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder='Email'></input>
                    </div>
                  </div>
                  <div>
                    <div className='flex items-center justify-between'>
                      <label
                        htmlFor=''
                        className='text-base font-medium text-gray-900'>
                        Password
                      </label>
                      <Link
                        to='/forgetpassword'
                        title=''
                        className='text-sm font-semibold text-black hover:underline'>
                        Forgot password?
                      </Link>
                    </div>
                    <div className='mt-2'>
                      <input
                        className='flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50'
                        type='password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder='Password'></input>
                    </div>
                  </div>
                  <div>
                    <div className='flex items-center justify-between'>
                      <label
                        htmlFor=''
                        className='text-base font-medium text-gray-900'>
                        Role
                      </label>
                    </div>
                    <div className='mt-2'>
                      <select
                        className='flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50'
                        value={role}
                        onChange={(e) => setRole(e.target.value)}>
                        <option value=''>Select the Role</option>
                        <option value='Employer'>Employer</option>
                        <option value='Job Seeker'>Job Seeker</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <button
                      type='submit'
                      className='inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80'>
                      Get started <ArrowRight className='ml-2' size={16} />
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
