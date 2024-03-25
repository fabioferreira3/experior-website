"use client";
import { useEffect, useRef, useState } from "react";

const Typewriter = ({
  words,
  speed = 70,
}: {
  words: string[];
  speed?: number;
}) => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [direction, setDirection] = useState(1); // 1 for forward, -1 for backward
  const [wait, setWait] = useState(false);

  const timeoutId = useRef<any>();

  useEffect(() => {
    if (wait) {
      return;
    }

    timeoutId.current = setTimeout(() => {
      setDisplayedText(
        words[currentWordIndex].slice(0, currentCharIndex + direction)
      );
      setCurrentCharIndex((prevIndex) => prevIndex + direction);
    }, speed);

    return () => clearTimeout(timeoutId.current); // clean up on unmount
  }, [currentWordIndex, speed, currentCharIndex, direction, wait]);

  useEffect(() => {
    if (
      currentCharIndex === words[currentWordIndex].length &&
      direction === 1
    ) {
      // reached the end of the word, switch direction to backward
      setWait(true);
      setTimeout(() => {
        setDirection(-1);
        setWait(false);
      }, 500);
    } else if (currentCharIndex === 0 && direction === -1) {
      // reached the start of the word, switch direction to forward and proceed to next word
      setDirection(1);
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }
  }, [currentCharIndex, direction]);

  return displayedText;
};

export default Typewriter;
