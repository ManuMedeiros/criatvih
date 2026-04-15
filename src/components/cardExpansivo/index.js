import { Box, Text, IconButton, Collapse } from "@chakra-ui/react";
import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

export const CardExpansivel = ({ titulo, resumo, children }) => {
  const [open, setOpen] = useState(false);

  return (
    <Box
      bg="#d9cfc2"
      borderRadius="2xl"
      p={4}
      textAlign="center"
      maxW="300px"
      boxShadow="lg"
    >
      <Text fontWeight="bold" color="#ba0f22" letterSpacing="1px">
        {titulo}
      </Text>

      <Text mt={2} color="#ba0f22">
        {resumo}
      </Text>

      <Collapse in={open} animateOpacity>
        <Box color="#ba0f22" marginTop={5}>{children}</Box>
      </Collapse>

      <IconButton
        mt={4}
        onClick={() => setOpen(!open)}
        icon={open ? <IoIosArrowUp /> : <IoIosArrowDown />}
        borderRadius="full"
        bg="transparent"
        _hover={{ bg: "transparent" }}
        color="#ba0f22"
        fontSize="20px"
        aria-label="expandir"
      />
    </Box>
  );
};
