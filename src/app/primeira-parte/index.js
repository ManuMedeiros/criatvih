import { Box, Flex, Img, Text } from "@chakra-ui/react";
import { ButtomStart } from "@/components/bottoms";
import { HiShieldCheck } from "react-icons/hi";
import { IoMdLock } from "react-icons/io";
import { FaTrophy } from "react-icons/fa";

export const PrimeiraParte = () => {
  return (
    <Box
      w="100%"
      h={{ base: "auto", md: "100vh" }}
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
        maxW={{ base: "stretch", md: "500px" }}
        flexDirection="column"
        alignItems="center"
        gap={10}
        color="white"
        mb="5rem"
        marginLeft={{ base: "0", md: 20 }}
        marginTop={{ base: "5rem", md: 0 }}
        position={{ base: "absolute", md: "unset" }}
        p={{ base: "20px", md: "0" }}
        zIndex={{ base: "2", md: "0" }}
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
          <ButtomStart text={"Começar agora"} />
        </Box>
        <Flex gap={10} justifyContent={{ base: "center", md: "normal" }} flexWrap={{ base: "wrap", md: "unset" }}>
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
      <Flex position="relative" justifyContent="center" mr={{ base: 0, md: 16 }} mt={{ base: 0, md: 16 }}>
        <Img
          src="/images/victoria.png"
          h={720}
          opacity={{ base: '0.1', md: "0.4" }}
          position="absolute"
          left="-160px"
        />
        <Img
          src="/images/victoria.png"
          h={760}
          position="relative"
          zIndex={{ base: "1", md: "2" }}
          opacity={{ base: '0.2', md: "1" }}
          bottom={45}
        />
        <Img
          src="/images/victoria.png"
          h={720}
          opacity={{ base: '0.1', md: "0.4" }}
          position="absolute"
          right="-160px"
        />
      </Flex>
      <Box
        position="absolute"
        bottom="0"
        left="0"
        w="100%"
        h="100px"
        bgGradient="linear(to-b, rgba(0,0,0,0), rgba(0,0,0,0.85), #000000)"
        pointerEvents="none"
        zIndex={2}
      />
    </Box>
  );
};
