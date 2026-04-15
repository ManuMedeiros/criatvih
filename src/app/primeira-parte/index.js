import { Box, Flex, Img, Text } from "@chakra-ui/react";
import { ButtomStart } from "@/components/bottoms";
import { HiShieldCheck } from "react-icons/hi";
import { IoMdLock } from "react-icons/io";
import { FaTrophy } from "react-icons/fa";

export const PrimeiraParte = () => {
  return (
    <Box
      w="100%"
      h="100vh"
      position="relative"
      bgImage="url('/images/bg1.png')"
      bgSize="cover"
      bgPosition="center"
      bgRepeat="no-repeat"
      display="flex"
      alignItems="center"
      justifyContent="space-around"
      px="10"
    >
      <Flex
        maxW="500px"
        flexDirection="column"
        alignItems="center"
        gap={10}
        color="white"
        marginLeft={20}
        mb="5rem"
      >
        <Box>
          <Text fontSize={22} fontWeight={500}>
            A verdade é simples.
          </Text>
          <br />
          <Text fontSize={22} fontWeight={500}>
            Toda marca que hoje se{" "}
            <strong style={{ color: "#f4b000" }}>destaca</strong> no mercado um
            dia foi apenas mais uma tentando vender.
          </Text>
          <br />
          <Text fontSize={22} fontWeight={500}>
            A <strong style={{ color: "#f4b000" }}>virada</strong> de chave
            começa quando alguém decide construir posicionamento.
          </Text>
          <br />
          <Text fontSize={22} fontWeight={500}>
            Direcionamento estratégico com acompanhamento direto da{" "}
            <strong style={{ color: "#f4b000" }}>Victória.</strong>
          </Text>
          <br />
        </Box>
        <Box>
          <ButtomStart text={'Começar agora'}/>
        </Box>
        <Flex gap={10}>
          <Flex alignItems="center" gap={2}>
            <HiShieldCheck size={50} />
            <Box>
              <Text m={0} lineHeight={1}>
                Checkout <br />
                <strong>Seguro</strong>
              </Text>
            </Box>
          </Flex>
          <Flex alignItems="center" gap={2}>
            <FaTrophy size={50} />
            <Box>
              <Text m={0} lineHeight={1}>
                Satisfação <br />
                <strong>Garantida</strong>
              </Text>
            </Box>
          </Flex>
          <Flex alignItems="center" gap={2}>
            <IoMdLock size={50} />
            <Box>
              <Text m={0} lineHeight={1}>
                Privacidade <br />
                <strong>Protegida</strong>
              </Text>
            </Box>
          </Flex>
        </Flex>
      </Flex>

      {/* Conteúdo da direita (imagem da pessoa) */}
      <Flex position="relative" justifyContent="center" mr={100} mt={16}>
        <Img
          src="/images/victoria.png"
          h={720}
          opacity={0.4}
          position="absolute"
          left="-160px"
        />
        <Img
          src="/images/victoria.png"
          h={760}
          position="relative"
          zIndex={1}
          bottom={29}
        />
        <Img
          src="/images/victoria.png"
          h={720}
          opacity={0.4}
          position="absolute"
          right="-160px"
        />
      </Flex>
      <Box
        position="absolute"
        bottom="0"
        left="0"
        w="100%"
        h="120px"
        bgGradient="linear(to-b, rgba(0,0,0,0), rgba(0,0,0,0.85), #000000)"
        pointerEvents="none"
        zIndex={2}
      />
    </Box>
  );
};
