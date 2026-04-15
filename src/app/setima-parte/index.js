import { useInView } from "@/hook/observar.insercao";
import { enviarMensagemWhatsApp } from "@/util/mensagem.whats";
import { Box, Grid, Text, Stack, Divider, Button } from "@chakra-ui/react";
export const SetimaParte = () => {
  return (
    <Box
      w="100%"
      bgImage="url('/images/bg8.png')"
      bgSize="cover"
      bgPosition="center"
      bgRepeat="no-repeat"
      display="flex"
      alignItems="center"
      justifyContent="space-around"
      px="10"
      position="relative"
    >
      <Box
        position="absolute"
        top="0"
        left="0"
        w="100%"
        h="50px"
        bgGradient="linear(to-t, rgba(0,0,0,0), rgba(0,0,0,0.85), #000000)"
        pointerEvents="none"
        zIndex={2}
      />
      <FAQ />
      <Box
        position="absolute"
        bottom="0"
        left="0"
        w="100%"
        h="50px"
        bgGradient="linear(to-b, rgba(0,0,0,0), rgba(0,0,0,0.85), #000000)"
        pointerEvents="none"
        zIndex={2}
      />
    </Box>
  );
};

const Item = ({ pergunta, resposta }) => (
  <Box>
    <Box
      h="2px"
      w="100%"
      mb={4}
      bgGradient="linear(to-r, rgba(0,0,0,1), rgba(235,220,196,0.6), #ebdcc4)"
    />
    <Text fontWeight="bold" mb={2} color="#ebdcc4">
      • {pergunta}
    </Text>
    <Text fontSize="sm" color="#fff">
      {resposta}
    </Text>
  </Box>
);

const FAQ = () => {
  const [ref, isVisible] = useInView();
  return (
    <Box
      margin="50px auto"
      maxW="60%"
      ref={ref}
      opacity={isVisible ? 1 : 0}
      transform={isVisible ? "translateY(0)" : "translateY(40px)"}
      transition="all 0.8s ease"
    >
      {/* 🟡 Título */}
      <Text
        textAlign="center"
        fontSize="2xl"
        fontWeight="bold"
        color="yellow.400"
        mb={10}
      >
        Perguntas Frequentes
      </Text>

      {/* 📦 Grid */}
      <Grid
        templateColumns={{ base: "1fr", md: "1fr 1fr" }}
        gap={10}
        color="#fff"
      >
        {/* COLUNA ESQUERDA */}
        <Stack spacing={6}>
          <Item
            pergunta="Como funciona o processo de trabalho?"
            resposta="Cada projeto começa com uma análise estratégica da marca e do momento do negócio.
A partir disso, definimos a melhor solução para estruturar posicionamento, comunicação e crescimento da empresa."
          />

          <Item
            pergunta="Os serviços são personalizados?"
            resposta="Sim. Cada empresa possui desafios e objetivos diferentes, por isso todas as estratégias são desenvolvidas de forma personalizada."
          />

          <Item
            pergunta="Você atende empresas de qualquer nicho?"
            resposta="Sim. Já trabalhei com empresas de diferentes nichos e segmentos, sempre focando em estratégia, posicionamento e crescimento da marca."
          />

          <Item
            pergunta="Como saber qual serviço é ideal para minha empresa?"
            resposta="No primeiro contato analisamos o momento da sua marca e identificamos qual serviço ou estratégia faz mais sentido para o seu negócio."
          />

          <Item
            pergunta="O atendimento é presencial ou online?"
            resposta="O atendimento é realizado principalmente de forma online, o que permite atender empresas de diferentes cidades e regiões. Em alguns casos, também pode ser realizado presencialmente, dependendo da localização e alinhamento prévio."
          />
        </Stack>

        {/* COLUNA DIREITA */}
        <Stack spacing={6}>
          <Item
            pergunta="Preciso contratar todos os serviços?"
            resposta="Não. Cada empresa possui necessidades diferentes. Durante a análise inicial identificamos qual estratégia ou serviço faz mais sentido para o momento da sua marca."
          />

          <Item
            pergunta="Você acompanha os resultados depois da entrega?"
            resposta="Sim. Dependendo do serviço contratado, o acompanhamento pode fazer parte do processo. Em alguns casos também é possível continuar a evolução da marca através de consultorias ou mentorias estratégicas."
          />

          <Item
            pergunta="Quais são as formas de pagamento?"
            resposta="O pagamento pode ser realizado via Pix ou cartão de crédito. Também é possível parcelar no cartão ou dividir o investimento em 50% no início e 50% na etapa final, dependendo do serviço contratado."
          />

          <Item
            pergunta="Como posso começar?"
            resposta="Basta clicar no botão da página e entrar em contato para iniciarmos a conversa e entender o momento da sua marca."
          />

          <Box
            h="2px"
            w="100%"
            mb={4}
            bgGradient="linear(to-r, rgba(0,0,0,1), rgba(235,220,196,0.6), #ebdcc4)"
          />

          <Box pt={4} margin="0 auto">
            <Button
              py={8}
              borderRadius="md"
              color="white"
              fontWeight="bold"
              bgGradient="linear(to-r, #3b2a00, #f5b700)"
              _hover={{
                bgGradient: "linear(to-r, #2a1e00, #e0a800)",
              }}
              onClick={enviarMensagemWhatsApp}
            >
              QUERO ESTRUTURAR <br />
              MINHA MARCA
            </Button>
          </Box>
        </Stack>
      </Grid>
    </Box>
  );
};
