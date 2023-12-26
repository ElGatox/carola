"use client";
import { useState, useEffect, useRef } from "react";

function useLoadingPage(promiseLoader) {
  const [show, setShow] = useState(true);
  const [percentOfCharge, changeFinalNumberToEndAnimation] = useNumberRange(
    0,
    0,
  );

  const number = useRef(0);
  const intervalRef = useRef(0);

  useEffect(() => {
    if (promiseLoader) {
      promiseLoader(changeFinalNumberToEndAnimation);
    } else {
      intervalRef.current = setInterval(() => {
        number.current += 10;
        changeFinalNumberToEndAnimation(number.current);
      }, 100);
    }

    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);

  useEffect(() => {
    if (percentOfCharge === 100) {
      setTimeout(() => {
        setShow(false);
      }, 600);
    }
  }, [percentOfCharge]);

  return { show, percentOfCharge };
}

function useNumberRange(from, to) {
  const [currentNumber, setCurrentNumber] = useState(from);
  const toRef = useRef(to);

  const requestRef = useRef();

  const animate = (time) => {
    setCurrentNumber((prevNumber) => {
      if (prevNumber < toRef.current) {
        return prevNumber + 1;
      }
      return prevNumber;
    });

    requestRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current);
  }, []);

  if (currentNumber >= 100) {
    cancelAnimationFrame(requestRef.current);
  }

  const changeActualTo = (newTo) => {
    toRef.current = newTo;
  };

  return [currentNumber, changeActualTo];
}
