"use client";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import Proptypes from "prop-types";

const animation = {
  fadeInUp: {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  },
  fadeInLeft: {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  },
  fadeInDown: {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0 },
  },
  fadeInRight: {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
  },
  opacity: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  homeHero: {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  },
  imgBlur: {
    hidden: {
      backdropFilter: "blur(10px)",
      WebkitBackdropFilter: "blur(10px)",
      msBackdropFilter: "blur(10px)",
    },
    visible: {
      backdropFilter: "blur(0px)",
      WebkitBackdropFilter: "blur(0)",
      msBackdropFilter: "blur(0)",
    },
  },
  line: {
    hidden: {
      width: "0%",
    },
    visible: {
      width: "100%",
    },
  },
  scaleX: {
    hidden: {
      scaleX: 0,
    },
    visible: {
      scaleX: 1,
    },
  },
};

const InViewAnimation = ({
  children,
  effect = "fadeInUp",
  transition = { duration: 0.6, ease: "easeInOut" },
  margin = "-10%",
  ...props
}) => {
  const initialState = animation[effect].hidden;
  const inViewState = animation[effect].visible;
  return (
    <motion.div
      initial={initialState}
      whileInView={inViewState}
      viewport={{ once: true, margin: margin }}
      transition={transition}
      {...props}
    >
      {children}
    </motion.div>
  );
};

InViewAnimation.propTypes = {
  children: Proptypes.node,
  effect: Proptypes.oneOf([
    "fadeInRight",
    "homeHero",
    "fadeInUp",
    "fadeInDown",
    "fadeInLeft",
    "opacity",
    "imgBlur",
    "line",
    "scaleX",
  ]),
  transition: Proptypes.object,
};

export default InViewAnimation;
