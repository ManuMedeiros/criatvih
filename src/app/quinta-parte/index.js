import { useCounter, useInView } from "@/hook/observar.insercao";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";

export const QuintaParte = () => {
  const MotionBox = motion(Box);
  const [ref, visible] = useInView();
  const count = useCounter(200, visible);
  return (
    <Box
      w="100%"
      bgImage="url('/images/bg5.png')"
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
      <Flex gap={6} margin="4rem 0 5rem 0" justifyContent="center">
        <MotionBox
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <Image src="/images/computer.png" w={520} />
        </MotionBox>
        <Box width="40%" margin="auto 20px">
          <Box
            ref={ref}
            border="2px solid #ebdcc4"
            borderRadius={24}
            p="10px 35px"
          >
            <Text color="#fff" fontSize={30} textAlign="center">
              <Text as="span" fontSize={83}>
                +{count}
              </Text>
              <br />
              EMPRESAS ATENDIDAS
            </Text>
          </Box>
          <Box
            color="#fff"
            border="2px solid #ebdcc4"
            borderRadius={24}
            p="10px 35px"
            marginTop={10}
          >
            <Text marginTop={2}>
              Já confiaram no meu trabalho para estruturar, posicionar e
              fortalecer suas marcas no mercado.
            </Text>
            <Text
              display="inline-block"
              px={2}
              py={1}
              color="white"
              bgGradient="linear(to-r, rgba(180,0,0,0.9), rgba(180,0,0,0.3), transparent)"
            >
              Estratégia não é improviso.
            </Text>
            <Text marginTop={2}>
              É o que transforma marcas comuns em marcas que ocupam espaço.
            </Text>
          </Box>
        </Box>
      </Flex>
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
