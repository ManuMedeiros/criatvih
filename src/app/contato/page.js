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
      <Stack p={{ base: "20px", md: "50px"}}>
        <Flex gap={{ base: 5, md: 10 }} justifyContent="center" flexWrap="wrap" >
          <Flex
            direction="column"
            justifyContent="center"
            alignItems="center"
            border="2px solid #CD90FE"
            borderRadius={20}
            p={6}
            w={{ base: "150px", md: "250px"}}
          >
            <FaWhatsapp size={40} />
            <Text fontSize={{ base: 16, md: 20 }} fontWeight={700} mt={2}>
              Whatsapp
            </Text>
            <Text fontSize={{ base: 14, md: 16 }}>(11) 941216687</Text>
          </Flex>
          <Flex
            direction="column"
            justifyContent="center"
            alignItems="center"
            border="2px solid #CD90FE"
            borderRadius={20}
            p={6}
            w={{ base: "150px", md: "250px" }}
          >
            <HiOutlineMail size={40}/>
            <Text fontSize={{ base: 16, md: 20 }} fontWeight={700} mt={2}>
              E-mail
            </Text>
            <Text fontSize={{ base: 14, md:16 }}>criatvih21@gmail.com</Text>
          </Flex>
          <Flex
            direction="column"
            justifyContent="center"
            alignItems="center"
            border="2px solid #CD90FE"
            borderRadius={20}
            p={6}
            w={{ base: "150px", md: "250px" }}
          >
            <HiOutlineLocationMarker size={40}/>
            <Text fontSize={{ base: 16, md: 20 }} fontWeight={700} mt={2}>
              Endereço
            </Text>
            <Text fontSize={{ base: 14, md: 16 }} textAlign="center">
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
            p={6}
            w={{ base: "150px", md: "250px" }}
          >
            <IoMdTime size={40}/>
            <Text fontSize={{ base: 6, md: 20 }} fontWeight={700} mt={2}>
              Atendimento
            </Text>
            <Text fontSize={{ base: 14, md:16 }} textAlign="center">
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
