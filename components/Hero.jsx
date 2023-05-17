"use client";

import Image from "next/image";
import { useState } from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";

const Hero = () => {
    const [showCursor, setShowCursor] = useState(true);
  const [text, count] = useTypewriter({
    words: [
      "a Software Engineer",
      "a Web Developer",
      "a Coffee Enthusiast",
      "Victoria Lizzi",
    ],
    delaySpeed: 2000,
    cursor: true,

  });

  return (
    <div>
      <h1>
        <span className="font-secondary">Hi, I'm {text}</span>
        <Cursor cursorColor="#E5A061" />
      </h1>
      <p></p>
    </div>
  );
};

export default Hero;
