"use client";

import { useRef } from "react";
import Title from "./Title";
import BackgroundCode from "./BackgroundCode";
import SideTitle from "./SideTitle";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const contactForm = useRef();
  const onSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_hsulip4",
        "template_ed1qg3k",
        contactForm.current,
        "7vGZNTLUsIzHyjIPm"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <div className="max-w-6xl mx-auto relative">
      <SideTitle name="contact me" />
      <BackgroundCode
        image="https://toriadev-portfolio.s3.us-west-2.amazonaws.com/background/bg-code-contact.png"
        alignRight={false}
        width={500}
        height={500}
      />
      <div className="mb-96 pt-16 flex flex-col lg:flex-row gap-80 justify-center lg:justify-between items-center">
        <div className="flex flex-col gap-8">
          <Title name="Contact" />
          <Title name="Me" />
        </div>
        <motion.div
          initial={{
            y: 50,
            opacity: 0,
          }}
          whileInView={{
            y: 0,
            opacity: 1,
          }}
          transition={{
            duration: 1,
            delay: 1,
          }}
          viewport={{
            once: true,
          }}
          className="bg-beige-100/60 py-16 px-4 mx-10 md:px-24 rounded-lg shadow-xl z-10 flex flex-col gap-10 items-center justify-center"
        >
          <p className="font-secondary text-center">
            If you have any questions, comments, or just want to have a quick
            chat, shoot me a message below. I look forward to hearing from you!
          </p>
          <form
            ref={contactForm}
            onSubmit={onSubmit}
            className="flex flex-col gap-4"
          >
            <input
              className="contactInput"
              type="text"
              placeholder="Name"
              name="name"
              //{...register("name", { required: true })}
            />
            <input
              className="contactInput"
              type="email"
              placeholder="Email"
              name="email"
              //{...register("email", { required: true })}
            />
            <textarea
              className="contactInput"
              type="text"
              placeholder="Message"
              name="message"
              //{...register("message", { required: true })}
            />
            <button className="primaryButton" type="submit">
              send message
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
