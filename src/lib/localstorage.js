"use client";

const useLocalStorage = (key) => [
  localStorage.getItem(key),
  (value) => localStorage.setItem(key, value),
];

export default useLocalStorage;

//[valor, setValor] = useLocalStorsge(key)
