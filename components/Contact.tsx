'use client'

import Link from "next/link"
import { IoLogoWhatsapp } from "react-icons/io";
import { IoMdMail } from "react-icons/io";
import Image from "next/image";
import { socialMedia } from "@/constants/index"
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser"



const Contact = () => {
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(false)
  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID as string, process.env.NEXT_PUBLIC_TEMPLATE_ID as string,
        form.current as HTMLFormElement, {
        publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY as string,
      })
      .then(
        () => {
          setSuccess(true);
          form.current?.reset();
        },
        (error) => {
          setError(true);
          console.log(error.text);
        },
      );
  };

  return (
    <div className='h-auto md:my-10'>
      <div className='h-auto flex flex-col justify-center items-center text-white' id="contact">
        <div className="bg-orange-600 w-full md:w-[85vw] flex flex-col justify-center items-center py-16 md:mr-12 ">
      <div className="text-xl font-bold lg:text-4xl md:text-3xl lg:self-center hidden md:flex">Let's get in touch!</div>
      {/* CARD CONTAINER*/}
      <div className="flex flex-col lg:flex-row lg:items-center items-start justify-center gap-16 lg:gap-24 mt-14 pr-8">
        {/* NAME */}
        <div className="flex gap-4 lg:gap-6 items-center justify-center">
          {/* <div className="font-extrabold text-2xl  lg:text-4xl lg:min-w-[200px]">Jay Yeung</div> */}
          {/* <Link href="https://wa.me/447826182904" target="_blank">
             <IoLogoWhatsapp style={{height: 30, width:30}} />
          </Link> */}
        </div>

        {/* DIVIDE */}
        {/* <div className="lg:hidden w-full h-[1px] bg-unselect rounded-md" /> */}
        

        {/* MESSAGE */}
        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col gap-2 w-[40vw]">
          <div className="font-bold mb-8 ">Hi Jay</div>
          <textarea
            rows={6}
            placeholder='How are you today'
            className='resize-none min-h-[30vh] px-1 py-2 rounded-sm bg-gray-100 '
            name="user_message"
          />
          <input
            type="text"
            placeholder="What's your email"
            className="text-sm px-1 py-2 rounded-sm bg-gray-100 "
            name="user_email"
          />
          <div className="mt-3 flex flex-row justify-between items-center">
          <button className=" underline font-bold self-start flex justify-center items-center mt-1 gap-2 hover:scale-105 duration-200">
            Send <span><IoMdMail /></span>
          </button>
                <div className="flex flex-row gap-4 md:gap-6 lg:gap-8">
                <Link href="https://wa.me/447826182904" target="_blank">
             <IoLogoWhatsapp style={{height: 26, width:26, color: "white"}} />
        </Link>
            {socialMedia.map(item => (
          <Link href={item.url} key={item.media} target="_blank">
            <Image
              src={item.img}
              alt={item.media}
              width={24}
              height={24}
            />
          </Link>
        ))}
        {/* {socialMedia.map(item => (
            <SocialIcon
              network={item.media}
              url={item.url}
              bgColor='black'
              className='ml-6'
              style={{ height: 30, width: 30 }}
              key={item.media}
            />
        ))} */}
            </div>
            </div>
          {success && <div className="text-sm mt-6">Thanks for getting in touch!
            <br />
            Will get back to you soon!</div>}
          {error && <div className="text-sm mt-6">
            Oops...Something went wrong!
            <br />
            Have you checked your email address?
          </div>}
        </form>
      </div>
        </div>
        </div>
    </div>
  )
}

export default Contact