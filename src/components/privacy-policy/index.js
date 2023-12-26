"use client";
import useLocalStorage from "@/hooks/localstorage";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Center,
  Box,
  useDisclosure,
} from "@chakra-ui/react";
import { useEffect } from "react";
export default function PrivacyPolicy({ ...props }) {
  const { isOpen, onOpen } = useDisclosure();
  const [setStorageValue, storageValue] = useLocalStorage("policyAnswer");
  const handlePolicy = (value) => {
    setStorageValue(value);
  };
  useEffect(() => {
    if (storageValue !== null) onOpen();
  }, [storageValue]);
  return (
    <PrivacyPolicyContent onClose={onOpen} isOpen={isOpen}>
      <PrivacyPolicyHeader>Header</PrivacyPolicyHeader>
      <PrivacyPolicyBody>Body</PrivacyPolicyBody>
      <PrivacyPolicyFooter>
        <PolicyButton onClick={() => handlePolicy(true)}>ACEPTAR</PolicyButton>
        <PolicyButton onClick={() => handlePolicy(false)}>
          RECHAZAR
        </PolicyButton>
      </PrivacyPolicyFooter>
    </PrivacyPolicyContent>
  );
}

const PrivacyPolicyContent = ({
  children,
  isOpen,
  onClose,
  closeIcon,
  ...props
}) => {
  if (!isOpen)
    return (
      <Card variant="privacy-policy" backdropFilter="blur(12px)" {...props}>
        <CloseIcon onClick={() => onClose()}>{closeIcon}</CloseIcon>
        {children}
      </Card>
    );
};

const CloseIcon = ({ onClick, ...props }) => (
  <Center
    position="absolute"
    top="0.5rem"
    right="0.5rem"
    w="1.2rem"
    h="1.2rem"
    bg="red"
    onClick={onClick}
    cursor="pointer"
    borderRadius="50%"
    {...props}
  >
    <Box
      w="0.7rem"
      h="0.1rem"
      top="40%"
      bg="white"
      position="absolute"
      transform="rotate(45deg)"
    />
    <Box
      w="0.7rem"
      h="0.1rem"
      top="40%"
      bg="white"
      position="absolute"
      transform="rotate(-45deg)"
    />
  </Center>
);

const PrivacyPolicyHeader = ({ colorMode, children }) => {
  return <CardHeader>{children}</CardHeader>;
};

const PrivacyPolicyBody = ({ colorMode, children }) => {
  return <CardBody>{children}</CardBody>;
};

const PrivacyPolicyFooter = ({ ...props }) => <CardFooter {...props} />;

const PolicyButton = ({ value, onClick, ...props }) => (
  <Button onClick={onClick} {...props} />
);
