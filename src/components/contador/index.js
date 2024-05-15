"use client";
import { useState, useEffect } from "react";
import { Flex, Text } from "@chakra-ui/react";
import InViewAnimation from "../animations/in-view";

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
    <Flex flexDirection={["column", null, null, "row"]} width="full">
      <Flex
        h={["100vh", null, null, "50vh"]}
        flexDirection={["column", null, null, "row"]}
        bg="#FF5580"
        alignItems="center"
        justifyContent="center"
        width="full"
        gap={["2rem", null, null, "10px"]}
      >
        <InViewAnimation
          effect="fadeInLeft"
          transition={{
            duration: 0.6,
            ease: "easeInOut",
          }}
        >
          <Flex
            flexDir="column"
            justifyContent="center"
            w={["150px", null, null, "150px"]}
            h={["150px", null, null, "150px"]}
            border="2px solid "
            borderColor="#FFAA80"
            borderRadius="90%"
          >
            {" "}
            <Text
              fontWeight="bold"
              textColor="white"
              fontSize={["12px", null, null, "12px"]}
              textAlign="center"
            >
              {" "}
              DIAS
            </Text>
            <Text
              textColor="white"
              fontSize={["40px", null, null, "30px"]}
              textAlign="center"
            >
              {timeLeft.days}
            </Text>
          </Flex>
        </InViewAnimation>

        <InViewAnimation
          effect="fadeInLeft"
          transition={{
            duration: 0.6,
            ease: "easeInOut",
            delay: 0.2,
          }}
        >
          <Flex
            flexDir="column"
            justifyContent="center"
            w={["150px", null, null, "150px"]}
            h={["150px", null, null, "150px"]}
            border="2px solid "
            borderColor="#FFAA80"
            borderRadius="90%"
          >
            {" "}
            <Text
              fontWeight="bold"
              textColor="white"
              fontSize={["12px", null, null, "12px"]}
              textAlign="center"
            >
              HORAS
            </Text>
            <Text
              textColor="white"
              fontSize={["40px", null, null, "30px"]}
              textAlign="center"
            >
              {" "}
              {timeLeft.hours}
            </Text>
          </Flex>
        </InViewAnimation>

        <InViewAnimation
          effect="fadeInRight"
          transition={{
            duration: 0.6,
            ease: "easeInOut",
            delay: 0.2,
          }}
        >
          <Flex
            flexDir="column"
            justifyContent="center"
            w={["150px", null, null, "150px"]}
            h={["150px", null, null, "150px"]}
            border="2px solid "
            borderColor="#FFAA80"
            borderRadius="50%"
          >
            {" "}
            <Text
              fontWeight="bold"
              textColor="white"
              fontSize={["12px", null, null, "12px"]}
              textAlign="center"
            >
              MINUTOS
            </Text>
            <Text
              textColor="white"
              fontSize={["40px", null, null, "30px"]}
              textAlign="center"
            >
              {timeLeft.minutes}
            </Text>
          </Flex>
        </InViewAnimation>

        <InViewAnimation
          effect="fadeInRight"
          transition={{
            duration: 0.6,
            ease: "easeInOut",
          }}
        >
          <Flex
            flexDir="column"
            justifyContent="center"
            w={["150px", null, null, "150px"]}
            h={["150px", null, null, "150px"]}
            border="2px solid "
            borderColor="#FFAA80"
            borderRadius="50%"
          >
            {" "}
            <Text
              fontWeight="bold"
              textColor="white"
              fontSize={["12px", null, null, "12px"]}
              textAlign="center"
            >
              SEGUNDOS
            </Text>
            <Text
              textColor="white"
              fontSize={["40px", null, null, "30px"]}
              textAlign="center"
            >
              {timeLeft.seconds}
            </Text>
          </Flex>
        </InViewAnimation>
      </Flex>
    </Flex>
  );
};

export default Countdown;
