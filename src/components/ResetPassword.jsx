import React from "react";
import { Fragment, useRef } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import "../assets/css/login.css";

import eye_icon from "../assets/img/eye-icon.svg";
import gmail_icon from "../assets/img/gmail_sign.svg";
import facebook_icon from "../assets/img/facebook_sign.svg";
import apple_icon from "../assets/img/apple_sign.svg";
import twitter_icon from "../assets/img/twitter_sign.svg";
import telegram_icon from "../assets/img/telegram_sign.svg";
import whatsapp_icon from "../assets/img/whatsapp_sign.svg";

export default function ResetPassword({open, setOpen, title, setTitle}) {
  const cancelButtonRef = useRef(null)

  const onLogin = (e) => {
    e.preventDefault();
    setTitle('login');
  }

  return (
    <Transition.Root show={open && title==='reset'} as={Fragment}>
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
                    <h1 className="mb-12">Reset Password</h1>
                    <div className="input-wrapper mt-5 mb-6">
                      <label htmlFor="email">Email / Phone Number</label>
                      <input type="text" placeholder="Jackrose11@gmail.com" id="email" className="rounded-lg px-6 mt-3" />
                    </div>

                    <button className="w-full rounded-lg mt-4 mb-9">Reset Password</button>
                    <p className="dont-have-p">Already have an account! <a href="/" onClick={onLogin}>Sign In</a></p>
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
