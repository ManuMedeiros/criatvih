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
    <Box minHeight="100vh">
      <TitlePage title="Portfólio" />
      <Flex fontSize={18} fontWeight={700} justifyContent="space-around" w="80%" margin="0 auto" mt={20}>
        <Text cursor='pointer' onClick={() => handleFilterPages('')}>Todos</Text>
        <Text cursor='pointer' onClick={() => handleFilterPages('Identidade Visual')}>Identidade Visual</Text>
        <Text cursor='pointer' onClick={() => handleFilterPages('artes-graficas')}>Artes Gráficas e Impressas</Text>
        <Text cursor='pointer' onClick={() => handleFilterPages('Marketing')}>Gestão de Redes Sociais</Text>
        <Text cursor='pointer' onClick={() => handleFilterPages('Ui/Ux')}>Design de Site (UI / UX)</Text>
      </Flex>

      <Flex width="70%" margin="30px auto" flexWrap="wrap" justifyContent="center">
        {!loading ? (
          <>
            {dataImgs?.map((img, index) => (
              <Box margin="5px" key={index}>
                <img src={img.img} alt={img.from} width="300px" h="300px" />
              </Box>
            ))}
          </>
        ) : (
          <Flex>
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
