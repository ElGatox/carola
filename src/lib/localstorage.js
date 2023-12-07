"use client";

import { useEffect, useRef, useState } from "react";

// const useLocalStorage = (key) => [
//   localStorage.getItem(key),
//   (value) => localStorage.setItem(key, value),
// ];
const useLocalStorage = (key) => {
  const [storageValue, setStorageValue] = useState(null);

  useEffect(() => {
    const items = localStorage.getItem(key);
    if (items !== null && storageValue === null) {
      setStorageValue(items);
    }
  }, [key]);

  const setValue = (value) => {
    setStorageValue(value);
    localStorage.setItem(key, value);
  };

  return [setValue, storageValue];
};

export default useLocalStorage;
