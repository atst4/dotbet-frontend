import React from "react";
import { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import clsx from 'clsx';
import "../assets/css/login.css";

import eye_icon from "../assets/img/eye-icon.svg";
import gmail_icon from "../assets/img/gmail_sign.svg";
import facebook_icon from "../assets/img/facebook_sign.svg";
import apple_icon from "../assets/img/apple_sign.svg";
import twitter_icon from "../assets/img/twitter_sign.svg";
import telegram_icon from "../assets/img/telegram_sign.svg";
import whatsapp_icon from "../assets/img/whatsapp_sign.svg";

export default function Login({open, setOpen, title, setTitle}) {
  const [ passVisible, setPassVisible ] = useState(false);
  const [ rememberMe, setRememberMe ] = useState(false);
  const cancelButtonRef = useRef(null)

  const onReset = (e) => {
    e.preventDefault();
    setTitle('reset');
  }

  const onRegister = (e) => {
    e.preventDefault();
    setTitle('register_email');
  }

  // const onLogin = (e) => {
  //   e.preventDefault();
  // }

  // const options = {
  //   method: 'POST',
  //   url: 'https://tttint.onlinegames22.com/wallet/login',
  //   headers: {'content-type': 'application/x-www-form-urlencoded'},
  //   data: {
  //     cert: 'GcPeqpy6yWScl6oMeMM',
  //     agentId: 'luckyagent',
  //     userId: 'testusercny',
  //     isMobileLogin: 'false',
  //     gameType: 'SLOT',
  //     platform: 'RT',
  //     language: 'en',
  //     autoBetMode: '1'
  //   }
  // };

  // axios.request(options).then(function (response) {
  //   console.log(response.data);
  // }).catch(function (error) {
  //   console.error(error);
  // });

  

  return (
    <Transition.Root show={open && title==='login'} as={Fragment}>
      <Dialog as="div" className="relative z-[10000]" initialFocus={cancelButtonRef} onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 backdrop-blur-sm bg-black bg-opacity-30 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="bg-[#181637] w-[817px] h-[696px] grid grid-cols-2 overflow-hidden border border-[#2c2a4a] rounded-[12px]">
                <div className="left-side flex flex-col items-center justify-center">
                  <img src={require('../assets/img/Group1629.png')} alt="sign in main presentation" />
                  <div className="text-white">
                    <h1 className='text-[23px] leading-[26.45px]'>Welcome to DotBet</h1>
                    <p className="mt-4 text-[18px] text-[#c7c8cf] leading-[21.6px]">Start your game journey now!</p>
                  </div>
                </div>
                <div className='right-side px-8 py-10 text-left'>
                  <form action="#" className="flex flex-col h-full">
                    <h1 className="mb-12">Sign in</h1>
                    <div className="input-wrapper">
                      <label htmlFor="email">Email / Phone Number</label>
                      <input type="text" placeholder="Jackrose11@gmail.com" id="email" className="rounded-lg px-6 mt-3" />
                    </div>
                    <div className="input-wrapper mt-5 mb-9">
                      <label htmlFor="password">Login Password</label><input type={passVisible ? "text" : "password"} placeholder="Enter your passwoard" id="password" className="rounded-lg px-6 mt-3" />
                      <img src={eye_icon} className="eye-icon cursor-pointer absolute right-[22px] top-[47px]" alt="eye icon" onClick={() => setPassVisible(!passVisible)} />
                    </div>
                    <div className="flex items-center justify-between remember-me-portion">
                      <div className="checkbox-wrapper flex items-center">
                        <div className="m-0 p-0">
                          <input type="checkbox" id="remember-me" className="hidden" />
                          <label htmlFor="remember-me" className="cursor-pointer w-5 h-5 rounded-full flex items-center justify-center border-2 border-[#c7c8cf]" onClick={() => setRememberMe(!rememberMe)}>
                            <span className={clsx("w-3 h-3 rounded-full block", rememberMe ? "bg-[#c7c8cf]" : '')}></span>
                          </label>
                        </div>
                        <label htmlFor="" className="ml-1">Remember me</label>
                      </div>
                      <a href="/" onClick={onReset}>Forgot Password?</a>
                    </div>
                    <button className="w-full rounded-lg mt-4 mb-9">Sign In</button>
                    <p className="dont-have-p">Don’t have an account! <a href="/" onClick={onRegister}>Sign up</a></p>
                    <div className="ending-point  flex-1 flex flex-col  justify-end">
                      <div className="line-breaker flex items-center mt-8">
                        <span className="flex-1 mr-2"></span><p>Or Login with</p>
                        <span className="flex-1 ml-2"></span></div>
                        <div className="mt-7 social-icons flex items-center justify-between">
                          <a href="/">
                            <img src={gmail_icon} alt="social button" />
                          </a>
                          <a href="/">
                            <img src={facebook_icon} alt="social button" />
                          </a>
                          <a href="/">
                            <img src={apple_icon} alt="social button" />
                          </a>
                          <a href="/">
                            <img src={twitter_icon} alt="social button" />
                          </a>
                          <a href="/">
                            <img src={telegram_icon} alt="social button" />
                          </a>
                          <a href="/">
                            <img src={whatsapp_icon} alt="social button" />
                          </a>
                        </div>
                      </div>
                  </form>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
