import {
    Box,
    Flex,
    Image,
    Stack,
    Text,
  } from '@chakra-ui/react';
  import React from 'react';
  import { TitlePage } from '../../components/titlePage';
  import { FiTarget } from 'react-icons/fi';
  import { IoIosHeart } from 'react-icons/io';
  import { MdVisibility } from 'react-icons/md';
  
  export default function About () {
    return (
      <Box minHeight="100vh">
        <TitlePage title="Sobre" />
  
        <Flex justifyContent="center" gap={10} alignItems="center" padding={10}>
          <Box>
            <Image
              src="./profile.jpg"
              w={400}
            />
          </Box>
  
          <Stack width="50%" fontSize={22} fontWeight={500} gap={8}>
            <Text fontSize={32} fontWeight={600}>
              QUEM SOU EU
            </Text>
            <Text>
              Meu nome é Victoria Barbosa Fernandes, CEO da Criatvih. Trabalho com
              artes digitais e redes sociais; sempre realizando projetos de design
              com muito cuidado, profissionalismo e com estratégias, gerando e
              agregando mais valor às marcas e negócios.
            </Text>
            <Text>
              Meu objetivo é compreender sua empresa e criar produtos de alta
              qualidade que ajudem a consolidar o sucesso da mesma, além de sempre
              passar credibilidade e satisfação, buscando minha inspiração em
              padrões simples e elegantes, que transmitam uma mensagem clara,
              efetiva e ideias criativas e inovadoras, que gerem resultados
              tangíveis.
            </Text>
            <Text>
              Em todos os meus trabalhos, priorizo o que o usuário busca,
              incorporando as últimas novidades do mundo do design, assim, o ajudo
              crescer profissionalmente através de um bom design. Desde já muito
              obrigada pela visita e volte sempre. Você é muito bem-vindo(a) ao
              meu site.
            </Text>
          </Stack>
        </Flex>
        <Stack gap={10} padding={10}>
          <Flex justifyContent="center" gap={10}>
            <Stack width="35%" fontSize={22} fontWeight={500} gap={10}>
              <Flex alignItems="center" gap={2}>
                <Box backgroundColor="#CD90FE" padding={1.6} borderRadius={50}>
                  <Image src="./icons/mission.svg" width={16}/>
                </Box>
                <Text fontSize={32} fontWeight={600}>
                  MISSÃO
                </Text>
              </Flex>
              <li>
                Ajudar empresas criando artes digitais e identidade visual única e
                impactante, transmitindo sua personalidade e valores por meio de
                soluções criativas e estratégicas para se destacarem no mundo
                digital.
              </li>
              <Flex alignItems="center" gap={2}>
              <Box backgroundColor="#CD90FE" padding={1.6} borderRadius={50}>
                  <Image src="./icons/values.svg" width={16}/>
                </Box>
                <Text fontSize={32} fontWeight={600}>
                  VALORES
                </Text>
              </Flex>
              <li>
                Estes são os princípios que orientam o meu trabalho no Criatvih,
                me permitindo criar, inovar e inspirar através do poder do design
                gráfico e do marketing digital.
              </li>
            </Stack>
            <Stack width="35%" fontSize={22} fontWeight={500}>
              <Flex alignItems="center" gap={2}>
              <Box backgroundColor="#CD90FE" padding={1.6} borderRadius={50}>
                  <Image src="./icons/vision.svg" width={16}/>
                </Box>
                <Text fontSize={32} fontWeight={600}>
                  VISÃO
                </Text>
              </Flex>
              <li>
                Ser reconhecida como uma referência no mundo digital, fornecendo
                soluções criativas e estratégicas que seja impactantes para meus
                clientes. Buscando ser reconhecida como especialista em construir
                e fortalecer marcas, transmitindo visualmente sua personalidade e
                valores de maneira consistente e memorável. Pretendo inspirar e
                emocionar o público, estabelecendo parcerias de confiança e
                contribuindo para o sucesso de meus clientes no mercado.
              </li>
            </Stack>
          </Flex>
          <Box>
            <Text textAlign="center" fontSize={22} fontWeight={500}>
              Criatividade - Compromisso com Excelência - Qualidade - Integridade
              - Orientação para cliente - Inovação
            </Text>
          </Box>
        </Stack>
      </Box>
    );
  };
  