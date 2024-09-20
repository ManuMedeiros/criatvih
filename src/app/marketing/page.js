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
import { TitlePage } from "@/components/titlePage";
import { BiPaint } from "react-icons/bi";
import { IoIosAdd } from "react-icons/io";
import { FiMinus } from "react-icons/fi";
import text from "./text.json";
import phases from "./phases.json";
import { Carousel } from "@/components/carousel";
import { Phases } from "@/components/phases";
import images from "@/app/images.json";

export default function Marketing() {
  const dataCarousel = images.filter((itens) => {
    return itens.from === "Marketing";
  });

  return (
    <Box minHeight="100vh">
      <TitlePage title="Marketing" />

      <Stack p={{ base: "20px", md: "50px" }} gap={10} >
        <Flex gap={5} 
          alignItems="center" 
          justifyContent="center"
          direction={{ base: "column", md: "row" }}>
          <Box>
            <Image
              src="./imgsPages/marketing-top.png"
              width={{ base: 250, md: 300 }}
              height={{ base: 200, md: 250 }}
            />
          </Box>
          <Box width={{ base: "100%", md: "60%" }}>
            <Text fontSize={{ base: 16, md: 18 }} fontWeight="bold">
              Você já imaginou a capacidade de potencializar sua estratégia de
              marketing e gestão de conta a um patamar excepcional? No Criatvih,
              compreendo profundamente a importância de uma abordagem eficaz de
              marketing e do gerenciamento de contas como fundamentais para o
              sucesso empresarial.
            </Text>
          
            <Flex gap={10}
            marginTop={25}
             alignItems="center" 
             justifyContent="center" 
             flexDirection={{ base: "column", md: "row" }}>
              <Image src="./imgsPages/iconPages.png"
               w={{ base: "70px", md: "100px" }}
                />
              

              <Box width={{ base: "100%", md: "70%" }}>
                <Text fontSize={{ base: 16, md: 18 }} fontWeight="bold">
                  Estou pronta para ajudar a criar uma estratégia de marketing
                  sob medida, projetada não apenas para atingir, mas também para
                  superar seus objetivos. Há diversas razões sólidas para
                  escolher meus serviços:
                </Text>
              </Box>
            </Flex>
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

      <Stack backgroundColor="#212123 " color="#fff" marginTop={10} padding={10} >
        <Text fontSize={32} textAlign="center" fontWeight="bold" p="30px">
          Serviços que fazem parte do marketing
        </Text>
        <Flex
          gap={2} alignItems="center" justifyContent="center" direction={{ base: "column", md: "row" }}
        >
          <UnorderedList fontSize={20} width={"100%"} marginLeft={38}  >
            <li>Gestão de Redes Sociais</li>
            <li>Organização dos seus Perfis de Mídia Sociais</li>
            <li>
              Campanhas de publicidade online (google ads,
              <br /> facebook ads)
            </li>
            <li>Otimização de SEO</li>
          </UnorderedList>
          <UnorderedList fontSize={20} width={"100%"} marginLeft={38}>
            <li>Estratégia de Conteúdo </li>
            <li>Desenvolvimento e lançamento de produtos</li>
            <li>Planejamento e Promoção de eventos</li>
            <li>Engajamento do público por meio de conteúdo relevante</li>
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
          Entrega Final - Até 10 dias úteis
        </Text>
      </Stack>

      <Stack backgroundColor="#212123" padding={{ base: "20px", md: "30px 0" }}>
        <Phases data={phases} img="./imgsPages/marketing-bottom.png" />
      </Stack>
      <Stack p={10}>
        <Carousel data={dataCarousel} />
      </Stack>
    </Box>
  );
}
