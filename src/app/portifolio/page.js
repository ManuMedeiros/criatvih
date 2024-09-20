'use client'
import {
  Box,
  Flex,
  Link,
  Spinner,
  Text,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { TitlePage } from '@/components/titlePage';
import images from "@/app/images.json";

export default function Profile() {

  const [dataImgs, setDataImgs] = useState(images);
  const [loading, setLoading] = useState(false);

  const handleFilterPages = (name) => {
    setLoading(true);
    let filteredPages = [];

    switch (name) {
      case '':
        filteredPages = images;
        break;
      case 'artes-graficas':
      case 'Ui/Ux':
      case 'Identidade Visual':
      case 'Marketing':
        filteredPages = images.filter(page => page.from === name);
        break;
      default:
        filteredPages = dataImgs;
    }

    setDataImgs(filteredPages)

    setTimeout(() => {
      setLoading(false);
    }, 1000)
  }

  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 1000)
  }, [])

  return (
    <Box minHeight="100vh" paddingX={0}>
      <TitlePage title="Portfólio" />
      <Flex
        fontSize={{ base: 14, md: 18 }}
        fontWeight={700}
        justifyContent="space-around"
        wrap="wrap"
        w={{ base: '100%', md: '80%' }}
        margin="0 auto"
        mt={{ base: 10, md: 20 }}
        gap={{ base: 2, md: 4 }}
      >
        <Text cursor='pointer' onClick={() => handleFilterPages('')}>Todos</Text>
        <Text cursor='pointer' onClick={() => handleFilterPages('Identidade Visual')}>Identidade Visual</Text>
        <Text cursor='pointer' onClick={() => handleFilterPages('artes-graficas')}>Artes Gráficas</Text>
        <Text cursor='pointer' onClick={() => handleFilterPages('Marketing')}>Redes Sociais</Text>
        <Text cursor='pointer' onClick={() => handleFilterPages('Ui/Ux')}>UI/UX</Text>
      </Flex>

      <Flex
        width={{ base: "100%", md: "70%" }}
        margin="20px auto"
        flexWrap="wrap"
        justifyContent="center"
        gap={4}
      >
        {!loading ? (
          <>
            {dataImgs?.map((img, index) => (
              <Box key={index} margin={{ base: '5px', md: '10px' }} boxSize={{ base: '150px', md: '300px' }}>
                <img src={img.img} alt={img.from} width="100%" height="100%" style={{ objectFit: 'cover' }} />
              </Box>
            ))}
          </>
        ) : (
          <Flex justifyContent="center" alignItems="center" height="200px">
            <Spinner
              thickness='4px'
              speed='0.65s'
              emptyColor='gray.200'
              color='#CD90FE'
              size='xl'
            />
          </Flex>
        )}
      </Flex>
    </Box>
  );
};