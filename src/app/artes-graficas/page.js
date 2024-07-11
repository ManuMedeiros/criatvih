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

      <Stack p="50px" gap={10}>
        <Flex
          gap={10}
          alignItems="center"
          justifyContent="center"
          direction="row-reverse"
        >
          <Box>
            <Image src="./imgsPages/artes-top.png" width={350} height={250} />
          </Box>
          <Box width="60%">
            <Text fontSize={18} fontWeight="bold">
              Transforme sua visão em realidade com o poder do design e das
              artes gráficas e impressas da Criatvih. Com os meus serviços
              especializados você não apenas terá trabalhos excepcionais, mas
              também elevará sua expressão visual a um novo patamar, cativando
              seu público e destacando você na concorrência.
            </Text>
            <Text fontSize={18} fontWeight="bold" marginTop={10}>
              Entre em contato comigo para alcançar uma excelência incomparável
              em suas criações gráficas e impressões. Ao firmar parceria comigo,
              você terá o poder de produzir peças visuais surpreendentes e
              inesquecíveis.
            </Text>
          </Box>
        </Flex>
        <Flex gap={10} alignItems="center" justifyContent="center">
          <Image src="./imgsPages/iconPages.png" w="90px" />
          <Box width="70%">
            <Text fontSize={18} fontWeight="bold">
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

      <Stack margin="0 30px">
        <>
          <Accordion
            display="flex"
            justifyContent="space-between"
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
                width="20%"
              >
                {({ isExpanded }) => (
                  <>
                    <h2>
                      <AccordionButton
                        justifyContent="space-between"
                        borderBottom="1px solid #000"
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

      <Stack backgroundColor="#000" color="#fff" marginTop={10} padding={10}>
        <Text fontSize={32} textAlign="center" fontWeight="bold" p="30px">
          Serviços que fazem parte das artes gráficas e impressas
        </Text>
        <Flex
          alignItems="flex-start"
          justifyContent="space-evenly"
          width="80%"
          margin="0 auto"
        >
          <ul style={{ fontSize: 22 }}>
            <li>Packs</li>
            <li>Receituário</li>
            <li>Certificado</li>
            <li>Cardápio</li>
            <li>Convites ou Cartões</li>
          </ul>
          <ul style={{ fontSize: 22 }}>
            <li>Flyers ou Folder</li>
            <li>Banner</li>
            <li>Catálogo</li>
            <li>Agenda</li>
            <li>Crachá</li>
          </ul>
          <ul style={{ fontSize: 22, width: "35%" }}>
            <li>Assinatura de E-mail</li>
            <li>
              Design de embalagens de produtos
              <br /> considerando os aspectos práticos e estéticos
            </li>
          </ul>
        </Flex>
      </Stack>

      <Stack textAlign="center" p="30px" background="#c9c9c9">
        <Text fontSize={32} fontWeight={600}>
          PRAZOS
        </Text>
        <Text fontSize={28}>
          Aqui você encontra Qualidade e<br />
          Velocidade na mesma proporção!
        </Text>
        <Text fontSize={28} fontWeight={600} marginTop={5}>
          Entrega Final - De 5 a 15 dias úteis dependendo do Serviço escolhido
          <br /> O prazo pode aumentar ou diminuir de acordo com as demandas do
          projeto e o envio das informações.
        </Text>
      </Stack>

      <Stack backgroundColor="#000" padding="30px 0" position="relative">
        <Phases
          data={phases}
          img="./imgsPages/artes-bottom.png"
          widthImg={580}
          mrImg="5rem"
          mtImag="-25rem"
        />
      </Stack>
      <Stack p={10}>
        <Carousel data={dataCarousel} />
      </Stack>
    </Box>
  );
}
