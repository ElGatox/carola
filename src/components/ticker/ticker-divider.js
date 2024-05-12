"use client";
import { HStack, Text } from "@chakra-ui/react";
import { easeInOut, motion, useScroll, useTransform } from "framer-motion";
import { Children, useRef } from "react";
import { useTranslation } from "react-i18next";

function TickerDivider({ body, direction, ...props }) {
  const ref = useRef(null);
  const translateDirection = direction === "left" ? [0, -500] : [-500, 0];
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 -0.5", "1 1.5"],
  });
  const translateX = useTransform(scrollYProgress, [0, 1], translateDirection, {
    ease: easeInOut,
    clamp: false,
  });

  return (
    <HStack
      ref={ref}
      h="40px"
      w="full"
      overflow="hidden"
      borderTop="1px solid white"
      borderBottom="1px solid  white"
      bg="gray.400"
      py="1.19rem"
      {...props}
    >
      <motion.div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "4rem",
          position: "relative",
          left: "0%",
          right: "0%",
          whiteSpace: "nowrap",
          width: "300vw",
          x: translateX,
          userSelect: "none",
        }}
      >
        {Array.from({ length: 30 }).map((_, i) => (
          <Text fontSize="12px" textColor="white" key={i}>
            {body}
          </Text>
        ))}
      </motion.div>
    </HStack>
  );
}

export default TickerDivider;
