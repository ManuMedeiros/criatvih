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
      <Flex 
      direction={{ base: 'column', md: 'row' }} 
      alignItems="center"
      padding={{ base: 5, md: 10}}
      >
        <Stack width={{ base: '100%', md: '50%' }} alignItems="center">
          <Text fontWeight={700} textAlign="center" fontSize={{ base: '24px', md: '28px' }}>
            CRIATVIH
          </Text>
          <Image src="./gif_criativih.gif" w={{ base: 200, md: 300}} h={{ base: 150, md: 200 }} />
        </Stack>
        <Stack width={{ base: '100%', md: '70%' }} paddingTop={{ base: 4, md: 0}}>
          <Text fontWeight={600} width={{ base: '100%', md: '60%' }} textAlign={{ base: 'center', md: 'left' }}>
            É uma empresa moderna, fundada em 2021 com o objetivo de identificar
            as estratégias necessárias para que sua empresa possa progredir com
            sucesso. É especializada em design gráfico e marketing, oferecendo
            serviços completos para ajudar as empresas a criar uma imagem única
            e memorável. <Link href='/sobre'>Saiba mais.</Link>
          </Text>
          <Flex justifyContent={{ base: 'center', md: 'flex-start' }} gap={5} marginTop={4}>
            <Button
              backgroundColor="#CD90FE"
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
        backgroundColor="#212123 "
        borderTop="5px solid #CD90FE"
        borderBottom="5px solid #CD90FE"
        alignItems="center"
        padding={{ base:'20px 0', md: '30px 0'}}
        gap={{ base: 5, md: 10}}
      >
        <Box>
          <Heading as="h2" textAlign="center" color="#CD90FE" fontSize={{ base: '20px', md: '28px' }}>
            Minhas Especialidades
          </Heading>
          <Text fontSize={{ base: '18px', md: '24px' }} textAlign="center" color="#CD90FE">
            Meu trabalho é 100% digital.
          </Text>
        </Box>
        <Flex direction={{ base: 'column', md: 'row' }} justifyContent="space-evenly" width="80%" gap={{ base: 5, md: 0}} margin="0 auto" padding={{ base: "20px", md:"50px"}}>
          <UnorderedList
            color="#fff"
            fontSize={{ base: '16px', md: '22px'  }}
            fontWeight={600}
            width={{ base: '100%', md: '40%' }}
            spacing={3}
          >
            <Flex alignItems="center" gap={2}>
              <Box backgroundColor="#CD90FE" padding={2} borderRadius={50}>
                <img src='./icons/marketingHome.svg' width={40} />
              </Box>

              <Text fontSize={{ base: '20px', md: '22px' }} fontWeight={700}>
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
            fontSize={{ base: '16px', md: '22px' }}
            fontWeight={600}
            width={{ base: '100%', md: '40%' }}
            spacing={3}
          >
            <Flex alignItems="center" gap={2}>
              <Box backgroundColor="#CD90FE" padding={2} borderRadius={50}>
                <FaDesktop size={30} color="#000" />
              </Box>

              <Text fontSize={{ base: '20px', md: '22px' }} fontWeight={700}>
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
      <Stack padding={{ base: 4, md: 8 }}>
        <Flex
          justifyContent="center"
          alignItems="center"
          textAlign={{ base: 'center', md: 'start' }}
          direction={{ base: 'column', md: 'row' }}
          gap={4}
        >
          <Text width={{ base: '100%', md: '30%' }} fontSize={24} fontWeight={700}>
            Meus Diferencias
          </Text>
          <Text width={{ base: '100%', md: '40%' }} fontSize={18} fontWeight={600} textAlign="start">
            Sou criativa e tenho abordagem personalizada para atender às suas
            necessidades, não me contentamos em apenas prestar um serviço, meu
            objetivo é trazer resultados reais aos meus clientes.
          </Text>
        </Flex>
        <Flex justifyContent="space-evenly" flexDirection={{ base: 'column', md: 'row' }} padding="20px">
          <Stack>
            <Flex alignItems="center" gap={2}>
              <IoIosArrowDroprightCircle color="#CD90FE" size={28} />
              <Text 
                width={{ base: '300px', md: 'auto'}}
                minHeight={{ base: '60px', md: 'auto'}}
                fontSize={18}
                fontWeight={500}
                alignContent="center"
                textAlign="center"
                lineHeight="1"
                border="3px solid #CD90FE"
                padding="0 10px"
                borderRadius={20}
                textTransform="uppercase"
              >
                PROCESSO DE CRIAÇÃO INTERATIVO
              </Text>
            </Flex>
            <Flex alignItems="center" gap={2}>
              <IoIosArrowDroprightCircle color="#CD90FE" size={28} />
              <Text
               width={{ base: '300px', md: 'auto'}}
               minHeight={{ base: '60px', md: 'auto'}}
               fontSize={18}
               fontWeight={500}
               alignContent="center"
               textAlign="center"
               lineHeight="1"
               border="3px solid #CD90FE"
               padding="0 10px"
               borderRadius={20}
               textTransform="uppercase"
              >
                CONSTANTE APERFEIÇOAMENTO
              </Text>
            </Flex>
            <Flex alignItems="center" gap={2}>
              <IoIosArrowDroprightCircle color="#CD90FE" size={28} />
              <Text
               width={{ base: '300px', md: 'auto'}}
               minHeight={{ base: '60px', md: 'auto'}}
               fontSize={18}
               fontWeight={500}
               alignContent="center"
               textAlign="center"
               lineHeight="1"
               border="3px solid #CD90FE"
               padding="0 10px"
               borderRadius={20}
               textTransform="uppercase"
              >
                RÁPIDEZ + QUALIDADE
              </Text>
            </Flex>
            <Flex alignItems="center" gap={2}>
              <IoIosArrowDroprightCircle color="#CD90FE" size={28} />
              <Text
               width={{ base: '300px', md: 'auto'}}
               minHeight={{ base: '60px', md: 'auto'}}
               fontSize={18}
               fontWeight={500}
               alignContent="center"
               textAlign="center"
               lineHeight="1"
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
              <IoIosArrowDroprightCircle color="#CD90FE" size={28} />
              <Text
               width={{ base: '300px', md: 'auto'}}
               minHeight={{ base: '60px', md: 'auto'}}
               fontSize={18}
               fontWeight={500}
               alignContent="center"
               textAlign="center"
               lineHeight="1"
               border="3px solid #CD90FE"
               padding="0 10px"
               borderRadius={20}
               textTransform="uppercase"
               marginTop= {{ base: '10px', md:'0' }}
              >
                Aumento da Credibilidade
              </Text>
            </Flex>
            <Flex alignItems="center" gap={2}>
              <IoIosArrowDroprightCircle color="#CD90FE" size={28} />
              <Text
               width={{ base: '300px', md: 'auto'}}
               minHeight={{ base: '60px', md: 'auto'}}
               fontSize={18}
               fontWeight={500}
               alignContent="center"
               textAlign="center"
               lineHeight="1"
               border="3px solid #CD90FE"
               padding="0 10px"
               borderRadius={20}
               textTransform="uppercase"
              >
                Satisfação Garantida
              </Text>
            </Flex>
            <Flex alignItems="center" gap={2}>
              <IoIosArrowDroprightCircle color="#CD90FE" size={28} />
              <Text
               width={{ base: '300px', md: 'auto'}}
               minHeight={{ base: '60px', md: 'auto'}}
               fontSize={18}
               fontWeight={500}
               alignContent="center"
               textAlign="center"
               lineHeight="1"
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
      <Box
      >
        <FormaContact />
      </Box>
    </Box>
  );
};
