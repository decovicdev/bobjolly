import React, { useEffect, useState } from "react";
import { VStack, Box } from "@chakra-ui/react";
import { AnimatePresence, motion, useTime } from "framer-motion";

import Footer, { FooterProps } from "./Footer";
import Header, { HeaderProps } from "./Header";
import Message, { MessageProps } from "./Message";
import Typing from "./Typing";

const variants = {
  show: {
    scale: [0, 1.03, 1],
    opacity: 1,
  },
  hide: {
    scale: 0,
    opacity: 0,
  },
};

const style = {
  transformOrigin: "bottom right",
  marginBottom: 100,
  marginRight: 20,
};

interface ChatBoxProps extends HeaderProps, FooterProps, MessageProps {
  isOpen: boolean;
}

const ChatBox: React.FC<ChatBoxProps> = (props) => {
  const {
    name,
    handleChange,
    handleClose,
    handleSubmit,
    time,
    value,
    isOpen,
    avatar,
  } = props;

  const progress = useTime();
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const unsubscribe = progress.onChange((value) => {
      if (value > 4000) {
        setIsTyping(false);
      }
    });
    return () => unsubscribe();
  }, [progress]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          style={style}
          variants={variants}
          initial="hide"
          animate="show"
          exit="hide"
        >
          <VStack
            justify="space-between"
            align="stretch"
            w={{
              base: "100%",
              md: "375px",
            }}
            overflow="hidden"
            borderRadius="2xl"
            boxShadow="lg"
            spacing={0}
          >
            <Header avatar={avatar} handleClose={handleClose} />
            <Box
              bgColor="#e5ddd5"
              bgImage="url('/images/whatsapp-bg.png')"
              bgSize="cover"
              h="200px"
              p="5"
            >
              {isTyping ? <Typing /> : <Message name={name} time={time} />}
            </Box>

            <Footer
              handleChange={handleChange}
              value={value}
              handleSubmit={handleSubmit}
            />
          </VStack>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
export default ChatBox;
