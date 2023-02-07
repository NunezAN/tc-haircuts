import React, { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  const [sent, setSent] = useState(false);
  const name = useRef("");
  const phone = useRef("");
  const message = useRef("");
  function handleSubmit(e) {
    e.preventDefault();
    name.current.value = "";
    phone.current.value = "";
    message.current.value = "";
    setSent(true);
  }
  return (
    <div className="w-screen min-h-[94vh] bg-black">
      <div className="max-w-7xl min-h-[94vh] bg-[black] text-white flex flex-col md:flex-row mx-auto">
        <div className="md:w-[60%] flex items-center flex-col justify-center gap-8 md:gap-16 p-6">
          <h1 className="uppercase text-3xl md:text-5xl text-center">
            We'd love to hear from you!
          </h1>
          <p className="text-center text-xl">
            Please contact us to schedule an appointment or ask any questions
            you may have about our hair salon services."
          </p>
          <div className="flex flex-col gap-2 md:gap-4">
            <FontAwesomeIcon
              icon={faLocationDot}
              className="text-2xl md:text-3xl"
            />
            <span className="text-lg md:text-2xl">
              7816 Crowley Rd Fort Worth, TX 76134
            </span>
          </div>
          <div className="flex flex-col gap-2 md:gap-4">
            <FontAwesomeIcon icon={faPhone} className="text-2xl md:text-3xl" />
            <span className="text-2xl md:text-2xl">(817) 293-1432</span>
          </div>
          <div className="flex flex-col gap-4 text-center">
            <FontAwesomeIcon icon={faClock} className="text-2xl md:text-3xl" />
            <span className="text-lg md:text-2xl">
              Monday - Friday: 9am-8pm
            </span>
            <span className="text-lg md:text-2xl">Saturday: 9am-6pm</span>
            <span className="text-lg md:text-2xl">Sunday: 9am-5pm</span>
          </div>
        </div>
        <div className="md:w-[40%] bg-[#E6DAD0] md:m-16 rounded-xl p-8 ">
          <form
            onSubmit={(e) => handleSubmit(e)}
            className="flex flex-col gap-16 justify-around h-full "
            action=""
          >
            <div className="flex flex-col">
              <label className="text-xl text-gray-800">Name</label>
              <input
                className="bg-inherit border-b-4 border-gray-800  text-gray-600 text-2xl !outline-none"
                type="text"
                ref={name}
              />
            </div>
            <div className="flex flex-col">
              <label className="text-xl text-gray-800">Phone</label>
              <input
                className="bg-inherit border-b-4 text-gray-600 text-2xl !outline-none border-gray-800 "
                type="text"
                ref={phone}
              />
            </div>
            <div className="flex flex-col">
              <label className="text-xl text-gray-800">Message</label>
              <textarea
                className="bg-inherit border-b-4 border-gray-800  text-gray-600 text-2xl !outline-none h-48"
                type="text"
                ref={message}
              />
            </div>
            <button
              className="bg-[#e5e7eb] text-black font-bold text-xl rounded-lg hover:bg-black hover:text-white"
              type="submit"
            >
              {sent ? "Message Sent" : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
