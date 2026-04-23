import { Box, Flex, Image, Stack, Text } from "@chakra-ui/react";
import { HiShieldCheck } from "react-icons/hi";
import { FaTrophy } from "react-icons/fa";
import { IoMdLock } from "react-icons/io";

export const SextaParte = () => {
  return (
    <Box
      w="100%"
      bgImage="url('/images/bg7.png')"
      bgSize="cover"
      bgPosition="center"
      bgRepeat="no-repeat"
      display="flex"
      alignItems="center"
      justifyContent="space-around"
      px="10"
      position="relative"
    >
      {/* <Box
        position="absolute"
        top="0"
        left="0"
        w="100%"
        h="50px"
        bgGradient="linear(to-t, rgba(0,0,0,0), rgba(0,0,0,0.85), #000000)"
        pointerEvents="none"
        zIndex={2}
      /> */}
      <Flex
        direction="column"
        align={{ base: "start", md: "center" }}
        gap={10}
        margin="80px auto"
      >
        <Flex
          gap={10}
          justifyContent="center"
          alignItems="end"
          width={{ base: "80%", md: "none" }}
        >
          <Box
            marginLeft={{ base: "0", md: "150px" }}
            position={{ base: "absolute", md: "unset" }}
            top="20rem"
            right="-200"
            opacity={{ base: "0.3", md: "1" }}
          >
            <Image
              src="/images/victoria-fundo-preto.png" // troca aqui
              alt="Vitória"
              w={{ base: "auto", md: 450 }}
              h={{ base: "auto", md: 550 }}
            />
          </Box>
          <Box width={{ base: "none", md: "50%" }} position={{ base: "relative", md: "unset" }}>
            <Text
              fontSize={{ base: "2xl", md: "3xl" }}
              fontWeight="bold"
              color="yellow.400"
              mb={4}
            >
              Prazer, eu sou a Victória
            </Text>

            <Stack spacing={3} color="#fff" fontSize={18}>
              <Text>
                Há mais de 6 anos empreendendo no mercado digital, já tive a
                oportunidade de colaborar com mais de 200 empresas de diferentes
                nichos, ajudando marcas a estruturarem sua comunicação e
                posicionamento no mercado.
              </Text>

              <Text>
                Sou formada em Marketing Digital e Design Gráfico, com
                pós-graduação em Marketing, Negócios e Estratégia.
              </Text>

              <Text>
                Minha jornada começou quando decidi trocar a segurança do CLT
                pelo desafio de construir minha própria marca, mesmo começando
                sozinha, com medo e muitas incertezas.
              </Text>

              <Text>
                Foi nesse processo que descobri algo que hoje guia todo o meu
                trabalho:
              </Text>

              <Text
                display="inline-block"
                px={3}
                py={1}
                fontWeight="bold"
                bgGradient="linear(to-r, #8b0000, rgba(139,0,0,0.4), transparent)"
              >
                marcas fortes não crescem por acaso.
              </Text>

              <Text fontWeight="bold">
                Elas são resultado de{" "}
                <strong>
                  estratégia, posicionamento e decisões bem construídas.
                </strong>
              </Text>

              <Text>
                Hoje, meu trabalho é ajudar empresas a estruturarem suas marcas
                com{" "}
                <strong>mais clareza, estratégia e presença no mercado.</strong>
              </Text>
            </Stack>
          </Box>
        </Flex>
        <Box w="65%">
          <Stack spacing={3} color="#fff" fontSize={18}>
            <Text>
              Cada empresa tem uma história, um momento e um objetivo diferente.
              Por isso, cada estratégia é construída de forma personalizada,
              buscando sempre fortalecer a percepção da marca e gerar{" "}
              <strong>crescimento consistente.</strong>
            </Text>

            <Text>
              Se você chegou até aqui, talvez seja porque também acredita que
              sua marca pode ir muito mais longe com{" "}
              <strong>a estratégia certa.</strong>
            </Text>
          </Stack>
        </Box>
        <Flex
          gap={10}
          marginBottom="3rem"
          color="#fff"
          justifyContent={{ base: "center", md: "normal" }}
          flexWrap={{ base: "wrap", md: "unset" }}
        >
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
      {/* <Box
        position="absolute"
        bottom="0"
        left="0"
        w="100%"
        h="50px"
        bgGradient="linear(to-b, rgba(0,0,0,0), rgba(0,0,0,0.85), #000000)"
        pointerEvents="none"
        zIndex={2}
      /> */}
    </Box>
  );
};
