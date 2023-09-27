import { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import "../assets/css/login.css";
import axios from 'axios';

import eye_icon from "../assets/img/eye-icon.svg";
import gmail_icon from "../assets/img/gmail_sign.svg";
import facebook_icon from "../assets/img/facebook_sign.svg";
import apple_icon from "../assets/img/apple_sign.svg";
import twitter_icon from "../assets/img/twitter_sign.svg";
import telegram_icon from "../assets/img/telegram_sign.svg";
import whatsapp_icon from "../assets/img/whatsapp_sign.svg";

export default function RegisterEmail({open, setOpen, title, setTitle}) {
  const [ passVisible, setPassVisible ] = useState(false);
  const cancelButtonRef = useRef(null);
  const emailRef = useRef(null);

  const onLogin = (e) => {
    e.preventDefault();
    setTitle('login');
  }

  const onRegisterPhone = (e) => {
    e.preventDefault();
    setTitle('register_phone');
  }

  const onRegister = async (e) => {
    e.preventDefault();
    const userdata = emailRef.current.value;

    const options = {
      method: 'POST',
      url: 'https://' + process.env.REACT_APP_PUBLIC_AWC_HOST + '/wallet/createMember',
      headers: {'content-type': 'application/x-www-form-urlencoded'},
      data: {
        cert: process.env.REACT_APP_PUBLIC_AWC_CERT,
        agentId: process.env.REACT_APP_PUBLIC_AWC_AGENT_ID,
        userId: userdata,
        currency: 'THB',
        language: 'en',
        userName: userdata
      }
    };

    await axios.request(options).then(function (response) {
      console.log(response.data);
    }).catch(function (error) {
      console.error(error);
    });
  }

  return (
    <Transition.Root show={open && title==='register_email'} as={Fragment}>
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
                  <form action="#" className="flex flex-col h-full" onSubmit={onRegister}>
                    <h1 className="mb-3">Sign Up</h1>
                    <div className="grid grid-cols-2 tabs-wrapper gap-3 mb-5">
                      <button className="rounded-lg active">Email</button>
                      <button className="rounded-lg " onClick={onRegisterPhone}>Phone Number</button>
                    </div>
                    <div className="input-wrapper">
                      <label htmlFor="email">Email</label>
                      <input type="text" placeholder="Jackrose11@gmail.com" ref={emailRef} id="email" className="rounded-lg px-6 mt-3" />
                    </div>
                    <div className="input-wrapper mt-4 mb-5">
                      <label htmlFor="password">Login Password</label><input type={passVisible ? "text" : "password"} placeholder="Enter your passwoard" id="password" className="rounded-lg px-6 mt-3" />
                      <img src={eye_icon} className="eye-icon cursor-pointer absolute right-[22px] top-[47px]" alt="eye icon" onClick={() => setPassVisible(!passVisible)} />
                    </div>
                    <div className="agreement flex items-center">
                      <h1 className="mr-2">Enter Referral / Promo Code</h1>
                      <svg width="22" height="17" viewBox="0 0 22 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.51825 4.59054L11.0911 9.64645L15.664 4.59054C15.7731 4.4699 15.9027 4.37421 16.0453 4.30892C16.1878 4.24363 16.3406 4.21002 16.4949 4.21002C16.6492 4.21002 16.802 4.24363 16.9446 4.30892C17.0872 4.37421 17.2167 4.4699 17.3258 4.59054C17.4349 4.71119 17.5215 4.85441 17.5806 5.01203C17.6396 5.16965 17.67 5.3386 17.67 5.50921C17.67 5.67982 17.6396 5.84876 17.5806 6.00638C17.5215 6.16401 17.4349 6.30723 17.3258 6.42787L11.9161 12.4089C11.8071 12.5297 11.6776 12.6256 11.535 12.691C11.3924 12.7564 11.2396 12.79 11.0852 12.79C10.9309 12.79 10.7781 12.7564 10.6355 12.691C10.4929 12.6256 10.3634 12.5297 10.2544 12.4089L4.84467 6.42787C4.73541 6.30732 4.64873 6.16413 4.58959 6.00649C4.53044 5.84885 4.5 5.67987 4.5 5.50921C4.5 5.33855 4.53044 5.16956 4.58959 5.01192C4.64873 4.85429 4.73541 4.7111 4.84467 4.59054C5.30431 4.09538 6.05861 4.08235 6.51825 4.59054Z" fill="white"></path>
                      </svg>
                    </div>

                    <div className="agreement-list mt-4"><div className="list-inner flex items-start">
                      <div className="CheckboxStyle CheckboxStyleSignUp">
                        <input type="checkbox" id="user-agree" className="hidden" />
                        <label htmlFor="user-agree" className="cursor-pointer w-5 h-5 rounded-full flex items-center justify-center">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#181837" className="w-6 h-6">
                            <path fillRule="evenodd" d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z" clipRule="evenodd"></path>
                          </svg>
                        </label>
                      </div>
                      <p className="ml-3">I agree to the User <a href="/">Agreement &amp; Confirm</a> i am at I east 18 years old</p>
                      </div>
                      <div className="list-inner mt-2 flex items-center">
                        <div className="CheckboxStyle CheckboxStyleSignUp">
                          <input type="checkbox" id="marketing" className="hidden" />
                          <label htmlFor="marketing" className="cursor-pointer w-5 h-5 rounded-full flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#181837" className="w-6 h-6">
                              <path fillRule="evenodd" d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z" clipRule="evenodd"></path>
                            </svg>
                          </label>
                        </div>
                        <p className="ml-3" style={{ fontSize: '12px'}}>I agree to receive marketing promotions from TMTCash</p>
                      </div>
                    </div>

                    <button className="w-full rounded-lg mt-4 mb-4" type='submit'>Sign Up</button>
                    <p className="dont-have-p">Already have an account! <a href="/" onClick={onLogin}>Sign In</a></p>
                    <div className="ending-point  flex-1 flex flex-col  justify-end">
                      <div className="line-breaker flex items-center mt-3">
                        <span className="flex-1 mr-2"></span><p>Or Login with</p>
                        <span className="flex-1 ml-2"></span></div>
                        <div className="mt-3 social-icons flex items-center justify-between">
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
