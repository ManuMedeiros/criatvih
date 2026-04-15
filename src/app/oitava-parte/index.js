import { Box, Flex, IconButton, Image, Text } from "@chakra-ui/react";
import { useState } from "react";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";

const imagens = [
  "/prints/print1.png",
  "/prints/print2.png",
  "/prints/print3.png",
  "/prints/print4.png",
  "/prints/print5.png",
  "/prints/print6.png",
  "/prints/print7.png",
  "/prints/print8.png",
  "/prints/print9.png",
  "/prints/print10.png",
];

export const OitavaParte = () => {
  const [index, setIndex] = useState(0);

  const visibleItems = 4; // 👈 controla quantos aparecem

  const next = () => {
    if (index < imagens.length - visibleItems) {
      setIndex(index + 1);
    }
  };

  const prev = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };
  return (
    <Box
      w="100%"
      bgImage="url('/images/bg8.png')"
      bgSize="cover"
      bgPosition="center"
      bgRepeat="no-repeat"
      display="flex"
      alignItems="center"
      justifyContent="space-around"
      px="10"
      position="relative"
    >
      <Box
        position="absolute"
        top="0"
        left="0"
        w="100%"
        h="50px"
        bgGradient="linear(to-t, rgba(0,0,0,0), rgba(0,0,0,0.85), #000000)"
        pointerEvents="none"
        zIndex={2}
      />
      <Box margin="100px auto">
        <Text
          textAlign="center"
          fontSize={{ base: "2xl", md: "3xl" }}
          fontWeight="bold"
          color="yellow.400"
          mb={10}
        >
          Resultados de quem já confiou no meu trabalho
        </Text>

        <IconButton
          icon={<GoArrowLeft />}
          position="absolute"
          left="20px"
          top="50%"
          transform="translateY(-50%)"
          zIndex={2}
          onClick={prev}
          borderRadius="full"
          bg="rgba(255,255,255,0.1)"
          _hover={{ bg: "rgba(255,255,255,0.2)" }}
        />

        <IconButton
          icon={<GoArrowRight />}
          position="absolute"
          right="20px"
          top="50%"
          transform="translateY(-50%)"
          zIndex={2}
          onClick={next}
          borderRadius="full"
          bg="rgba(255,255,255,0.1)"
          _hover={{ bg: "rgba(255,255,255,0.2)" }}
        />

        {/* VIEWPORT */}
        <Box overflow="hidden" w="100%">
          <Flex
            transition="0.5s ease"
            transform={`translateX(-${index * (100 / visibleItems)}%)`}
          >
            {imagens.map((img, i) => (
              <Box
                key={i}
                minW={`${100 / visibleItems}%`}
                display="flex"
                justifyContent="center"
              >
                <Image
                  src={img}
                  w="280px"
                  h="400px"
                  borderRadius="20px"
                />
              </Box>
            ))}
          </Flex>
        </Box>
      </Box>
      <Box
        position="absolute"
        bottom="0"
        left="0"
        w="100%"
        h="50px"
        bgGradient="linear(to-b, rgba(0,0,0,0), rgba(0,0,0,0.85), #000000)"
        pointerEvents="none"
        zIndex={2}
      />
    </Box>
  );
};
