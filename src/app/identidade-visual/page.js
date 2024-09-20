"use client";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
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
import text from "./text.json";
import { Carousel } from "@/components/carousel";
import { Phases } from "@/components/phases";
import phases from "./phases.json";
import images from "@/app/images.json";
import { FiMinus } from "react-icons/fi";
import { IoIosAdd } from "react-icons/io";

export default function VisualIdentity() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleAccordionClick = (index) => {
    setExpandedIndex(index === expandedIndex ? null : index);
  };

  const dataCarousel = images.filter((itens) => {
    return itens.from === "Identidade Visual";
  });

  return (
    <Box minHeight="100vh">
      <TitlePage title="Identidade Visual" />

      <Stack p={{ base: "20px", md: "50px" }} gap={10}>
        <Flex
          gap={5}
          alignItems="center"
          justifyContent="center"
          direction={{ base: "column", md: "row" }}
        >
          <Box>
            <Image
              src="./imgsPages/identidade-top.png"
              width={{ base: "200px", md: "350px" }}
              height={{ base: "200px", md: "250px" }}
              objectFit="contain"
            />
          </Box>
          <Box width={{ base: "100%", md: "60%" }}>
            <Text fontSize={{ base: "14px", md: "18px" }} fontWeight="bold">
              Imagine ter o poder de transformar a sua marca em uma verdadeira
              obra de arte visual. Com o serviço de identidade visual do
              Criatvih, você não apenas conquistará uma marca única, mas também
              conquistará uma marca deslumbrante, que atraia clientes e deixe
              uma marca duradoura no mercado.
            </Text>
            <Text
              fontSize={{ base: "14px", md: "18px"  }}
              fontWeight="bold"
              marginTop={10}
            >
              Eleve sua marca a um nível superior. Feche um contrato comigo e
              descubra o poder da verdadeira identidade visual.
            </Text>
          </Box>
        </Flex>
        <Flex
          gap={10}
          alignItems="center"
          justifyContent="center"
          flexDirection={{ base: "column", md: "row" }}
        >
          <Image
            src="./imgsPages/iconPages.png"
            w={{ base: "70px", md: "100px" }}
            objectFit="contain"
          />
          <Box width={{ base: "100%", md: "70%" }}>
            <Text fontSize={{ base: 16, md: 18 }} fontWeight="bold">
              Você já refletiu sobre o fato de que a primeira impressão que sua
              empresa causa hoje em dia? No Criatvih, compreendo profundamente o
              impacto da identidade visual como um dos alicerces do sucesso
              empresarial. Eu estou preparada para conceber uma identidade
              visual única e inesquecível para a sua marca. E há diversas razões
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
                borderRadius={50}
                width={{ base: "100%", md: "30%" }}
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
        padding={{ base: 5, md: 10 }}
      >
        <Text
          fontSize={{ base: 24, md: 32 }}
          textAlign="center"
          fontWeight="bold"
          p={{ base: 10, md: 20 }}
        >
          Serviços que fazem parte de uma identidade visual
        </Text>
        <Flex
         gap={2} alignItems="center" justifyContent="center" direction={{ base: "column", md: "row" }}
        >
          <UnorderedList  fontSize={20} width={"100%"} marginLeft={38} >
            <li>Logo Principal</li>
            <li>Logo Segundario</li>
            <li>Submarca</li>
            <li>Manual da Marca</li>
            <li>Pattern</li>
          </UnorderedList>
          <UnorderedList fontSize={20} width={"100%"} marginLeft={38} >
            <li>Cartão de Visita</li>
            <li>Cartão Fidelidade</li>
            <li>Cartão digital</li>
            <li>Destaques para o Instagram</li>
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

      <Stack backgroundColor="#212123" padding={{ base: "20px", md: "30px 0" }} >
        <Phases data={phases} img="./imgsPages/identidade-bottom.png" />
      </Stack>
      <Stack p={10}>
        <Carousel data={dataCarousel} />
      </Stack>
    </Box>
  );
}
