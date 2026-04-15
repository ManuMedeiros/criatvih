import { enviarMensagemWhatsApp } from "@/util/mensagem.whats";
import { Button, Icon } from "@chakra-ui/react";
import { FaArrowAltCircleDown } from "react-icons/fa";

export const ButtomStart = ({text}) => {
  return (
    <Button
      size="lg"
      px="8"
      py="6"
      color="white"
      fontWeight="bold"
      fontSize="lg"
      bgGradient="linear(to-r, #3b2a00, #f5b700)"
      _hover={{
        bgGradient: "linear(to-r, #2a1e00, #e0a800)",
      }}
      _active={{
        bgGradient: "linear(to-r, #1a1200, #c99700)",
      }}
      rightIcon={
        <Icon
          as={FaArrowAltCircleDown}
        />
      }
      boxShadow="lg"
      onClick={enviarMensagemWhatsApp}
    >
      {text}
    </Button>
  );
}