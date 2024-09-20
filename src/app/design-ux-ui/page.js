"use client";
import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
  Flex,
  Image,
  Stack,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import React from "react";
import { TitlePage } from "../../components/titlePage";
import { BiPaint } from "react-icons/bi";
import { IoIosAdd } from "react-icons/io";
import { FiMinus } from "react-icons/fi";
import text from "./text.json";
import phases from "./phases.json";
import { Carousel } from "../../components/carousel";
import { Phases } from "../../components/phases";
import images from "@/app/images.json";

export default function Design() {
  const dataCarousel = images.filter((itens) => {
    return itens.from === "artes-graficas";
  });
  return (
    <Box minHeight="100vh">
      <TitlePage title="Ui / Ux" />

      <Stack p={{ base: "20px", md: "50px" }} gap={10}>
        <Flex
            gap={5}
            alignItems="center"
            justifyContent="center"
            direction={{ base: "column", md: "row" }}
        >
          <Box>
            <Image src="./imgsPages/ux-top.png" 
             width={{ base: 250, md: 300 }}
              height={{ base: 250, md: 250 }} />
          </Box>
          <Box width={{ base: "100%", md: "60%" }}>
            <Text fontSize={{ base: 16, md: 18 }} fontWeight="bold">
              Transforme a experiência do usuário em sua plataforma com a
              excelência em UI/UX da Criatvih. Ofereça interfaces únicas e
              experiências envolventes que vão além das expectativas, criando um
              impacto marcante no mercado.
            </Text>
            <Text  fontSize={{ base: 16, md: 18 }}
              fontWeight="bold"
              marginTop={10}
              >
              Invista em nossa parceria para aprimorar a usabilidade, criar
              conexões emocionais e destacar sua marca de forma inesquecível.
              Descubra o poder da UI/UX da Criatvih e transforme a interação do
              seu público com sua plataforma.
            </Text>
          </Box>
        </Flex>
        <Flex gap={10}
          alignItems="center"
          justifyContent="center"
          flexDirection={{ base: "column", md: "row" }}
          >
          <Image src="./imgsPages/iconPages.png" 
          w={{ base: "70px", md: "100px" }}/>
          <Box width={{ base: "100%", md: "70%" }}>
            <Text fontSize={{ base: 16, md: 18 }} fontWeight="bold">
              No Criatvih, compreendo profundamente o poder da experiência do
              usuário (UI/UX) como uma base sólida para o sucesso digital. E
              possuo conhecimento para criar uma experiência que não apenas
              atraia, mas também conquiste seus usuários. E há diversas razões
              sólidas para você considerar a contratação dos meus serviços:
            </Text>
          </Box>
        </Flex>
      </Stack>

      <Stack margin="0 20px">
        <>
        <Accordion
            display="flex"
            justifyContent="space-between"
            flexDirection={{ base: "column", md: "row" }}
            width="100%"
            alignItems="flex-start"
            gap={10}
            allowMultiple
          >
             {text.map((p, index) => (
              <AccordionItem
                backgroundColor="#CD90FE"
                padding={4}
                borderRadius={20}
                width={{ base: "100%", md: "20%" }}
              >
                {({ isExpanded }) => (
                  <>
                    <h2>
                      <AccordionButton
                        justifyContent="space-between"
                        
                      >
                        <Box
                          as="span"
                          fontSize={18}
                          fontWeight={700}
                          textAlign="center"
                        >
                          {p.title}
                        </Box>
                        {isExpanded ? (
                          <FiMinus size={30} />
                        ) : (
                          <IoIosAdd size={30} />
                        )}
                      </AccordionButton>
                    </h2>
                    <AccordionPanel
                      fontSize={16}
                      fontWeight={600}
                      textAlign="center"
                      pb={4}
                    >
                      {p.description}
                    </AccordionPanel>
                  </>
                )}
              </AccordionItem>
            ))}
          </Accordion>
        </>
      </Stack>

      <Stack
       backgroundColor="#212123"
        color="#fff"
        marginTop={10}
        padding={{ base: 5, md: 10 }}>
        <Text 
        fontSize={{ base: 24, md: 32 }}
          textAlign="center"
          fontWeight="bold"
          p="10 0">
          Serviços que fazem parte de ui / ux
        </Text>
        <Flex
       alignItems="center"
       justifyContent="space-evenly"
       width="100%"
       direction={{ base: "column", md: "row" }}
       gap={4}
        >
          <UnorderedList fontSize={20} width={"100%"} marginLeft={{ base: 4, md: 415}}>
            <li>Design de websites e aplicativosLogo Principal</li>
            <li>Foco na usabilidade e na experiência do usuário</li>
            <li>Prototipagem e testes de usabilidade.</li>
            </UnorderedList>
        </Flex>
      </Stack>

      <Stack  textAlign="center" p="8px" background="#c9c9c9">
        <Text fontSize={{ base: 22, md: 32 }} fontWeight={600}>
          PRAZOS
        </Text>
        <Text fontSize={{base: 18, md: 28 }}>
          Aqui você encontra Qualidade e<br />
          Velocidade na mesma proporção!
        </Text>
        <Text fontSize={{ base: 22, md: 32 }} fontWeight={600} marginTop={4}>
          Entrega Final - De 10 a 30 dias úteis
          <br /> O prazo pode aumentar ou diminuir de acordo com as demandas do
          projeto e o<br /> envio das informações (Textos e Imagens).
        </Text>
      </Stack>

      <Stack backgroundColor="#212123" padding="30px 0" position="relative">
        <Phases
          data={phases}
          img="./imgsPages/ux-bottom.png"
          mrImg="3rem"
          mtImag="-25rem"
        />
      </Stack>
      <Stack p={10}>
        <Carousel data={dataCarousel} />
      </Stack>
    </Box>
  );
}
