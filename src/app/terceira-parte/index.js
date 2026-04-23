import { Box, Flex, List, ListIcon, ListItem, Text } from "@chakra-ui/react";
import { CardExpansivel } from "@/components/cardExpansivo";
import { IoMdCheckboxOutline } from "react-icons/io";
import { ButtomStart } from "@/components/bottoms";

export const TerceiraParte = () => {
  return (
    <Box
      w="100%"
      bgImage="url('/images/bg3.png')"
      bgSize="cover"
      bgPosition="center"
      bgRepeat="no-repeat"
      display="flex"
      alignItems="center"
      justifyContent="space-around"
      px="10"
      position="relative"
    >
      {/* <Box
        position="absolute"
        top="0"
        left="0"
        w="100%"
        h="100px"
        bgGradient="linear(to-t, rgba(0,0,0,0), rgba(0,0,0,0.85), #000000)"
        pointerEvents="none"
        zIndex={2}
      /> */}
      <Flex direction="column" gap={6} margin="1rem 0 7rem 0">
        <Box>
          <Text color="#fff" fontSize={24} fontWeight={600}>
            Sem estratégia, sua marca continua sendo só mais uma.
            <br />
            Marcas fortes não crescem por acaso.
          </Text>
        </Box>
        <Box>
          <Text color="#fff" fontSize={17} fontWeight={400}>
            Elas são construídas com estratégia, estrutura e crescimento.
            <br />É assim que estruturamos marcas para ocupar espaço real no
            mercado.
          </Text>
        </Box>
        <Box>
          <Text color="#fff" fontSize={17} fontWeight={600}>
            Veja como estruturamos marcas para crescer.
          </Text>
        </Box>
        <Flex gap={6} justify="center" align="flex-start" wrap="wrap">
          <CardExpansivel
            titulo="ESTRATÉGIA"
            resumo="A base que direciona todas as decisões da marca."
          >
            <List styleType="disc" spacing={3}>
              <ListItem>
                <ListIcon as={IoMdCheckboxOutline} color="#ba0f22" />
                <strong>Branding Estratégico:</strong> Define quem sua marca é,
                o que ela representa e por que ela deve ser escolhida.
              </ListItem>
              <ListItem>
                <ListIcon as={IoMdCheckboxOutline} color="#ba0f22" />
                <strong>Posicionamento de Marca:</strong> Constrói clareza para
                que o mercado entenda o valor da sua marca.
              </ListItem>
              <ListItem>
                <ListIcon as={IoMdCheckboxOutline} color="#ba0f22" />
                <strong>Consultoria Estratégica:</strong> Direcionamento para
                decisões mais inteligentes e crescimento consistente.
              </ListItem>
            </List>
          </CardExpansivel>

          <CardExpansivel
            titulo="ESTRUTURA DE MARCA"
            resumo="Onde a estratégia ganha forma e consistência."
          >
            <List styleType="disc" spacing={3}>
              <ListItem>
                <ListIcon as={IoMdCheckboxOutline} color="#ba0f22" />
                <strong>Identidade Visual:</strong> Cria uma presença visual
                forte, profissional e memorável.
              </ListItem>
              <ListItem>
                <ListIcon as={IoMdCheckboxOutline} color="#ba0f22" />
                <strong>Estratégia de Conteúdo:</strong> Transforma sua
                comunicação em autoridade e conexão com o público.
              </ListItem>
            </List>
          </CardExpansivel>

          <CardExpansivel
            titulo="CRESCIMENTO"
            resumo="Estratégias para expandir presença e atrair os clientes certos."
          >
            <List styleType="disc">
              <ListItem>
                <ListIcon as={IoMdCheckboxOutline} color="#ba0f22" />
                <strong>Tráfego Pago:</strong> Amplia o alcance da sua marca com
                estratégia e inteligência.
              </ListItem>
              <ListItem>
                <ListIcon as={IoMdCheckboxOutline} color="#ba0f22" />
                <strong>Mentoria de Posicionamento:</strong> Acompanhamento
                estratégico para evolução contínua da marca.
              </ListItem>
            </List>
          </CardExpansivel>
        </Flex>
        <Box margin="15px auto">
          <ButtomStart text="Eu quero"/>
        </Box>
      </Flex>
      {/* <Box
        position="absolute"
        bottom="0"
        left="0"
        w="100%"
        h="50px"
        bgGradient="linear(to-b, rgba(0,0,0,0), rgba(0,0,0,0.85), #000000)"
        pointerEvents="none"
        zIndex={2}
      /> */}
    </Box>
  );
};
