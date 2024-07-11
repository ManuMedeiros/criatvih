import { Box, Flex, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import { TitlePage } from '../../components/titlePage';
import { FaWhatsapp } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { IoMdTime } from 'react-icons/io';
import { FormaContact } from '@/components/formContact';

export default function Contact() {
  return (
    <Box>
      <TitlePage title="Contato" />
      <Stack p="50px">
        <Flex gap={10} justifyContent="center">
          <Flex
            direction="column"
            justifyContent="center"
            alignItems="center"
            border="2px solid #CD90FE"
            borderRadius={20}
            p={10}
            w="250px"
          >
            <FaWhatsapp size={60} />
            <Text fontSize={20} fontWeight={700}>
              Whatsapp
            </Text>
            <Text>(11) 941216687</Text>
          </Flex>
          <Flex
            direction="column"
            justifyContent="center"
            alignItems="center"
            border="2px solid #CD90FE"
            borderRadius={20}
            p={10}
            w="250px"
          >
            <HiOutlineMail size={60}/>
            <Text fontSize={20} fontWeight={700}>
              E-mail
            </Text>
            <Text>criatvih21@gmail.com</Text>
          </Flex>
          <Flex
            direction="column"
            justifyContent="center"
            alignItems="center"
            border="2px solid #CD90FE"
            borderRadius={20}
            p={10}
            w="250px"
          >
            <HiOutlineLocationMarker size={60}/>
            <Text fontSize={20} fontWeight={700}>
              Endereço
            </Text>
            <Text>
              São Paulo - SP
              <br />
              Home Office
            </Text>
          </Flex>
          <Flex
            direction="column"
            justifyContent="center"
            alignItems="center"
            border="2px solid #CD90FE"
            borderRadius={20}
            p={10}
            w="250px"
          >
            <IoMdTime size={60}/>
            <Text fontSize={20} fontWeight={700}>
              Atendimento
            </Text>
            <Text>
              Seg. a Sex. <br />
              09:00 - 20:00
            </Text>
          </Flex>
        </Flex>
      </Stack>
      <Box>
        <FormaContact />
      </Box>
    </Box>
  );
};
