import React, { FC, useMemo, useState } from "react";
import { Box } from "@chakra-ui/react";

import FloatingButton from "./FloatingButton";
import ChatBox from "./ChatBox";

const URL = "https://api.whatsapp.com/";

interface WhatsAppFloatingButtonProps {
  children?: never;
  name: string;
  phoneNumber: string;
  position?: "left" | "right";
  avatar: string;
}

const WhatsAppFloatingButton: FC<WhatsAppFloatingButtonProps> = (props) => {
  const { name, phoneNumber, position = "right", avatar } = props;

  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");

  const time = useMemo(
    () =>
      new Date().toLocaleTimeString("en-US", {
        hour12: false,
        hour: "numeric",
        minute: "numeric",
      }),
    []
  );

  const handleSubmit = () => {
    window.open(`${URL}send?phone=${phoneNumber}&text=${message}`, "_blank");
    setMessage("");
  };

  return (
    <Box
      pos="fixed"
      bottom={0}
      right={position === "right" ? 0 : "unset"}
      left={position === "left" ? 0 : "unset"}
    >
      <ChatBox
        avatar={avatar}
        handleChange={(value) => setMessage(value)}
        handleSubmit={handleSubmit}
        handleClose={() => setIsOpen(false)}
        isOpen={isOpen}
        time={time}
        value={message}
        name={name}
      />
      <FloatingButton handleToggle={() => setIsOpen(!isOpen)} />
    </Box>
  );
};
export default WhatsAppFloatingButton;
