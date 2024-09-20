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
import React, { useState } from "react";
import { TitlePage } from "@/components/titlePage";
import { BiPaint } from "react-icons/bi";
import { IoIosAdd } from "react-icons/io";
import { FiMinus } from "react-icons/fi";
import text from "./text.json";
import phases from "./phases.json";
import { Carousel } from "@/components/carousel";
import { Phases } from "@/components/phases";
import images from "@/app/images.json";

export default function GraficArts() {
  const dataCarousel = images.filter((itens) => {
    return itens.from === "artes-graficas";
  });

  const [openAccordionIndex, setOpenAccordionIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenAccordionIndex(openAccordionIndex === index ? null : index);
  };

  return (
    <Box minHeight="100vh">
      <TitlePage title="Artes gráficas e artes para impressão" />

      <Stack p={{ base: "20px", md: "50px" }} gap={10}>
        <Flex
          gap={5}
          alignItems="center"
          justifyContent="center"
          direction={{ base: "column", md: "row" }}
        >
          <Box>
            <Image src="./imgsPages/artes-top.png"
             width={{ base: 250, md: 350 }}
             height={{ base: 250, md: 250 }} />
          </Box>
          <Box width={{ base: "100%", md: "60%" }}>
            <Text fontSize={{ base: 16, md: 18 }} fontWeight="bold">
              Transforme sua visão em realidade com o poder do design e das
              artes gráficas e impressas da Criatvih. Com os meus serviços
              especializados você não apenas terá trabalhos excepcionais, mas
              também elevará sua expressão visual a um novo patamar, cativando
              seu público e destacando você na concorrência.
            </Text>
            <Text fontSize={{ base: 16, md: 18 }} fontWeight="bold" marginTop={5}>
              Entre em contato comigo para alcançar uma excelência incomparável
              em suas criações gráficas e impressões. Ao firmar parceria comigo,
              você terá o poder de produzir peças visuais surpreendentes e
              inesquecíveis.
            </Text>
          </Box>
        </Flex>
        <Flex gap={10} alignItems="center" justifyContent="center" direction={{ base: "column", md: "row" }}>
          <Image src="./imgsPages/iconPages.png" 
           w={{ base: "70px", md: "100px" }}/>
          <Box width={{ base: "100%", md: "70%" }}>
            <Text fontSize={{ base: 16, md: 18 }} fontWeight="bold">
              Já refletiu sobre o poder transformador das artes gráficas e
              impressas para sua empresa? No Criatvih, compreendo o impacto
              essencial dessas expressões visuais no mundo dos negócios atual.
              Estou pronta para conceber criações genuinamente excepcionais,
              aquelas que farão sua marca se destacar de forma única. Há uma
              série de motivos sólidos para considerar meus serviços:
            </Text>
          </Box>
        </Flex>
      </Stack>

      <Stack margin="0 20px">
        <>
          <Accordion
            display="flex"
            justifyContent="space-between"
            width="100%"
            alignItems="flex-start"
            gap={4}
            allowMultiple
            flexDirection={{ base:"column", md: "row" }}
          >
            {text.map((p, index) => (
              <AccordionItem
                backgroundColor="#CD90FE"
                padding={4}
                borderRadius={30}
                width={{ base: "100%", md: "20%" }}
                key={index}
              >
                {({ isExpanded }) => (
                  <>
                    <h2>
                      <AccordionButton
                        justifyContent="space-between"
                      >
                        <Box
                          as="span"
                          fontSize={{ base: 16, md: 18 }}
                          fontWeight={700}
                          textAlign="center"
                        >
                          {p.title}
                        </Box>
                        {isExpanded ? (
                          <FiMinus size={20} />
                        ) : (
                          <IoIosAdd size={20} />
                        )}
                      </AccordionButton>
                    </h2>
                    <AccordionPanel
                      fontSize={{ base: 14, md: 16 }}
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
        padding={{ base: 5, md: 10 }}
      >
        <Text
          fontSize={{ base: 24, md: 32 }}
          textAlign="center"
          fontWeight="bold"
          p={{ base: 10, md: 20 }}
        >
          Serviços que fazem parte das artes gráficas e impressas
        </Text>
         <Flex
         alignItems="center"
         justifyContent="space-evenly"
         width="100%"
         margin="0 auto"
         direction={{ base: "column", md: "row" }}
        >
        
        <UnorderedList fontSize={20} width={"100%"} marginLeft={38}>
            <li>Packs</li>
            <li>Receituário</li>
            <li>Certificado</li>
            <li>Cardápio</li>
            <li>Convites ou Cartões</li>
          </UnorderedList>
          <UnorderedList fontSize={20} width={"100%"} marginLeft={38}>
            <li>Flyers ou Folder</li>
            <li>Banner</li>
            <li>Catálogo</li>
            <li>Agenda</li>
            <li>Crachá</li>
          </UnorderedList>
          <UnorderedList fontSize={20} width={"100%"} marginLeft={42}>
            <li>Assinatura de E-mail</li>
            <li>
              Design de embalagens de produtos
              <br /> considerando os aspectos práticos e estéticos
            </li>
          </UnorderedList>
        </Flex>
      </Stack>

      <Stack textAlign="center" p="8px" background="#c9c9c9">
        <Text fontSize={{ base: 22, md: 32 }} fontWeight={600}>
          PRAZOS
        </Text>
        <Text fontSize={{ base: 18, md: 28 }}>
          Aqui você encontra Qualidade e<br />
          Velocidade na mesma proporção!
        </Text>
        <Text fontSize={{ base: 18, md: 28 }} fontWeight={600} marginTop={4}>
          Entrega Final - De 5 a 15 dias úteis dependendo do Serviço escolhido
          <br /> O prazo pode aumentar ou diminuir de acordo com as demandas do
          projeto e o envio das informações.
        </Text>
      </Stack>

      <Stack backgroundColor="#212123" padding={{ base: "20px", md: "30px 0" }}>
        <Phases
          data={phases}
          img="./imgsPages/artes-bottom.png"
          widthImg={400}
          mrImg="5rem"
          mtImag="-15rem"
        />
      </Stack>
      <Stack p={10}>
        <Carousel data={dataCarousel} />
      </Stack>
    </Box>
  );
}
