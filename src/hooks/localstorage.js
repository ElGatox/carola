"use client";
import { useEffect, useRef, useState } from "react";

export default function useLocalStorage(key) {
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
}
