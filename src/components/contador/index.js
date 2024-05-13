"use client";
import { useState, useEffect } from "react";
import { Flex, Text } from "@chakra-ui/react";

const Countdown = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = targetDate - new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <Flex width="full">
      <Flex
        px={["5px", null, null, "0"]}
        bg="#b89819"
        alignItems="center"
        justifyContent="center"
        width="full"
        h="150px"
        gap={["2px", null, null, "10px"]}
      >
        <Flex
          flexDir="column"
          justifyContent="center"
          w="100px"
          h="100px"
          border="1px solid "
          borderColor="white"
          borderRadius="90%"
        >
          {" "}
          <Text
            fontWeight="bold"
            textColor="white"
            fontSize={["10px", null, null, "12px"]}
            textAlign="center"
          >
            {" "}
            DIAS
          </Text>
          <Text
            textColor="white"
            fontSize={["17px", null, null, "20px"]}
            textAlign="center"
          >
            {timeLeft.days}
          </Text>
        </Flex>
        <Flex
          flexDir="column"
          justifyContent="center"
          w="100px"
          h="100px"
          border="1px solid "
          borderColor="white"
          borderRadius="90%"
        >
          {" "}
          <Text
            fontWeight="bold"
            textColor="white"
            fontSize={["10px", null, null, "12px"]}
            textAlign="center"
          >
            HORAS
          </Text>
          <Text
            textColor="white"
            fontSize={["17px", null, null, "20px"]}
            textAlign="center"
          >
            {" "}
            {timeLeft.hours}
          </Text>
        </Flex>
        <Flex
          flexDir="column"
          justifyContent="center"
          w="100px"
          h="100px"
          border="1px solid "
          borderColor="white"
          borderRadius="50%"
        >
          {" "}
          <Text
            fontWeight="bold"
            textColor="white"
            fontSize={["10px", null, null, "12px"]}
            textAlign="center"
          >
            MINUTOS
          </Text>
          <Text
            textColor="white"
            fontSize={["17px", null, null, "20px"]}
            textAlign="center"
          >
            {timeLeft.minutes}
          </Text>
        </Flex>
        <Flex
          flexDir="column"
          justifyContent="center"
          w="100px"
          h="100px"
          border="1px solid "
          borderColor="white"
          borderRadius="50%"
        >
          {" "}
          <Text
            fontWeight="bold"
            textColor="white"
            fontSize={["10px", null, null, "12px"]}
            textAlign="center"
          >
            SEGUNDOS
          </Text>
          <Text
            textColor="white"
            fontSize={["17px", null, null, "20px"]}
            textAlign="center"
          >
            {timeLeft.seconds}
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Countdown;
