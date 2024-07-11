'use client'
import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Link,
  ListItem,
  Stack,
  Text,
  UnorderedList,
} from '@chakra-ui/react';
import React from 'react';
import { IoIosArrowDroprightCircle } from 'react-icons/io';
import { FaDesktop } from "react-icons/fa";
import { FormaContact } from '@/components/formContact';

export default function Home() {
  return (
    <Box minHeight="100vh">
      <Flex width="100%" alignItems="center" padding={5}>
        <Stack width="50%" alignItems="center">
          <Text fontWeight={700} textAlign="center">
            CRIATVIH
          </Text>
          <Image src="./gif_criativih.gif" w={300} h={200}/>
        </Stack>
        <Stack width="70%">
          <Text fontWeight={600} width="60%">
            É uma empresa moderna, fundada em 2021 com o objetivo de identificar
            as estratégias necessárias para que sua empresa possa progredir com
            sucesso. É especializada em design gráfico e marketing, oferecendo
            serviços completos para ajudar as empresas a criar uma imagem única
            e memorável. <Link href='/sobre'>Saiba mais.</Link>
          </Text>
          <Flex gap={5}>
            <Button
              backgroundColor="#CD90FE"
              height={0}
              padding="13px"
              borderRadius={20}
              onClick={() => window.open('whatsapp://send?phone=5511941216687')}
            >
              Orçamentos
            </Button>
          </Flex>
        </Stack>
      </Flex>
      <Stack
        backgroundColor="#000"
        borderTop="5px solid #CD90FE"
        borderBottom="5px solid #CD90FE"
        alignItems="center"
        padding="30px 0"
        gap={10}
      >
        <Box>
          <Heading as="h2" textAlign="center" color="#CD90FE">
            Minhas Especialidades
          </Heading>
          <Text fontSize={24} textAlign="center" color="#CD90FE">
            Meu trabalho é 100% digital.
          </Text>
        </Box>
        <Flex justifyContent="space-evenly" width="80%">
          <UnorderedList
            color="#fff"
            fontSize={20}
            fontWeight={600}
            width="40%"
          >
            <Flex alignItems="center" gap={2}>
              <Box backgroundColor="#CD90FE" padding={1.6} borderRadius={50}>
                <img src='./icons/marketingHome.svg' width={60} />
              </Box>

              <Text fontSize={22} fontWeight={700}>
                Marketing Digital
              </Text>
            </Flex>

            <ListItem>Gestão de Redes Sociais</ListItem>
            <ListItem>
              Campanhas de Publicidade Online (Google Ads, Facebook Ads)
            </ListItem>
            <ListItem>Otimização de SEO</ListItem>
            <ListItem>Estratégia de Conteúdo</ListItem>
            <ListItem>Organização dos seus perfis de mÍdia social</ListItem>
          </UnorderedList>
          <UnorderedList
            color="#fff"
            fontSize={20}
            fontWeight={600}
            width="40%"
          >
            <Flex alignItems="center" gap={2}>
              <Box backgroundColor="#CD90FE" padding={4} borderRadius={50}>
                <FaDesktop size={32} color="#000" />
              </Box>

              <Text fontSize={22} fontWeight={700}>
                Design gráfico
              </Text>
            </Flex>

            <ListItem>
              Identidade Visual (logotipos, cartões de visita, papelaria...)
            </ListItem>
            <ListItem>
              Design de Materiais de Marketing (folhetos, banners, panfletos..)
            </ListItem>
            <ListItem>Artes Gráficas</ListItem>
            <ListItem>
              Design de aplicativos móveis, Sites e Landing Pages.
            </ListItem>
          </UnorderedList>
        </Flex>
      </Stack>
      <Stack>
        <Flex
          padding="20px"
          justifyContent="center"
          alignItems="center"
          textAlign="center"
        >
          <Text width="30%" fontSize={24} fontWeight={700}>
            Meus Diferencias
          </Text>
          <Text width="40%" fontSize={18} fontWeight={600} textAlign="start">
            Sou criativa e tenho abordagem personalizada para atender às suas
            necessidades, não me contentamos em apenas prestar um serviço, meu
            objetivo é trazer resultados reais aos meus clientes.
          </Text>
        </Flex>
        <Flex justifyContent="space-evenly" padding="20px">
          <Stack>
            <Flex alignItems="center" gap={2}>
              <IoIosArrowDroprightCircle color="#CD90FE" size={36} />
              <Text
                fontSize={18}
                fontWeight={500}
                border="3px solid #CD90FE"
                padding="0 10px"
                borderRadius={20}
                textTransform="uppercase"
              >
                PROCESSO DE CRIAÇÃO INTERATIVO
              </Text>
            </Flex>
            <Flex alignItems="center" gap={2}>
              <IoIosArrowDroprightCircle color="#CD90FE" size={36} />
              <Text
                fontSize={18}
                fontWeight={500}
                border="3px solid #CD90FE"
                padding="0 10px"
                borderRadius={20}
                textTransform="uppercase"
              >
                CONSTANTE APERFEIÇOAMENTO
              </Text>
            </Flex>
            <Flex alignItems="center" gap={2}>
              <IoIosArrowDroprightCircle color="#CD90FE" size={36} />
              <Text
                fontSize={18}
                fontWeight={500}
                border="3px solid #CD90FE"
                padding="0 10px"
                borderRadius={20}
                textTransform="uppercase"
              >
                RÁPIDEZ + QUALIDADE
              </Text>
            </Flex>
            <Flex alignItems="center" gap={2}>
              <IoIosArrowDroprightCircle color="#CD90FE" size={36} />
              <Text
                fontSize={18}
                fontWeight={500}
                border="3px solid #CD90FE"
                padding="0 10px"
                borderRadius={20}
                textTransform="uppercase"
              >
                Serviços e Abordagens Personalizadas
              </Text>
            </Flex>
          </Stack>
          <Stack>
            <Flex alignItems="center" gap={2}>
              <IoIosArrowDroprightCircle color="#CD90FE" size={36} />
              <Text
                fontSize={18}
                fontWeight={500}
                border="3px solid #CD90FE"
                padding="0 10px"
                borderRadius={20}
                textTransform="uppercase"
              >
                Aumento da Credibilidade
              </Text>
            </Flex>
            <Flex alignItems="center" gap={2}>
              <IoIosArrowDroprightCircle color="#CD90FE" size={36} />
              <Text
                fontSize={18}
                fontWeight={500}
                border="3px solid #CD90FE"
                padding="0 10px"
                borderRadius={20}
                textTransform="uppercase"
              >
                Satisfação Garantida
              </Text>
            </Flex>
            <Flex alignItems="center" gap={2}>
              <IoIosArrowDroprightCircle color="#CD90FE" size={36} />
              <Text
                fontSize={18}
                fontWeight={500}
                border="3px solid #CD90FE"
                padding="0 10px"
                borderRadius={20}
                textTransform="uppercase"
              >
                Impacto Visual
              </Text>
            </Flex>
          </Stack>
        </Flex>
      </Stack>
      <Box>
        <FormaContact />
      </Box>
    </Box>
  );
};
