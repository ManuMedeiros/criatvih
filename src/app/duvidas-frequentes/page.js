import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Flex,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { TitlePage } from "@/components/titlePage";

const styleAcordion = {
  border: "none",
  backgroundColor: "#CD90FE",
  borderRadius: 20,
};

export default function Questions() {
  return (
    <Box minHeight="100vh">
      <TitlePage title="Dúvidas Frequentes" />
      <Stack p="50px">
        <Flex gap={10}  flexDirection={{ base: "column", md: "row"}} justifyContent="center">
          <Box width={{ base:"100%", md: "30%"}} >
            <Accordion
              display="flex"
              flexDirection="column"
              gap={5}
              allowToggle
            >
              <AccordionItem style={styleAcordion}>
                <h2>
                  <AccordionButton width="100%">
                    <Box as="span" flex="1" textAlign="left">
                      Qual é o horário de funcionamento?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4} width="100%">
                  Atendimento: Seg. a Sex 09:00 - 20:00
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem style={styleAcordion}>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left">
                      Quais as formas de pagamento?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  Transferência Bancária (Bradesco / Nu Bank / Santander /
                  Itaú), Pix
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem style={styleAcordion}>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left">
                      Em qual momento é feito o pagamento?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  O pagamento é feito após o preenchimento e análise do
                  questionário, ele pode ser feito via Pix ou Transferência
                  Bancaria Pagamento 50% antes Do processo e 50% antes da
                  entrega. O projeto só será iniciado após o pagamento ser
                  efetuado. Caso não seja pago no tempo previsto em até 7 (sete)
                  dias, o pedido será cancelado.
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem style={styleAcordion}>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left">
                      Quais são os prazos?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <ul>
                    <li>
                      Prazo para entrega de Identidade Visual: O prazo é de 10
                      dias úteis após o briefing respondido e do pagamento
                      realizado.
                    </li>
                    <li>
                      Prazo para entrega das Artes Digitais: O prazo é de 5-15
                      dias úteis dependendo do serviço após envio das
                      informações e do pagamento realizado.
                    </li>
                    <li>
                      Prazo para entrega dos serviços de Marketing: O prazo é de
                      10 dias úteis dependendo do serviço após envio das
                      informações e do pagamento realizado.
                    </li>
                    <li>
                      Prazo para entrega dos serviços de UI / UX: O prazo é de
                      10 a 30 dias úteis dependendo do serviço o prazo pode
                      aumentar ou diminuir de acordo com as demandas do projeto
                      e o envio das informações (Textos e Imagens). Tudo após o
                      envio das informações e do pagamento realizado.
                    </li>
                    <li>
                      Prazo de alteração: Caso deseje modificações, poderá
                      solicitar até 5 alterações, desde que estejam alinhadas
                      com as informações fornecidas no briefing inicial. Taxas
                      adicionais serão aplicadas por novas versões ou alterações
                      conforme o serviço escolhido, com um prazo de 48 horas
                      úteis para a entrega.
                    </li>
                  </ul>
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem style={styleAcordion}>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left">
                      Como são enviados os arquivos?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  Os arquivos são enviados nos formatos: AI, EPS, Template
                  Canva, PDF e PNG (com fundo transparente). Varia de acordo com
                  cada produto.
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </Box>
          <Box width={{ base:"100%", md: "30%"}}>
            <Accordion
              display="flex"
              flexDirection="column"
              gap={5}
              allowToggle
            >
              <AccordionItem style={styleAcordion}>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left">
                      São artes prontas?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  Não, as artes são criadas de acordo com a sua necessidade. Ou
                  seja, você possui uma Clínica de Estética e deseja fazer uma
                  promoção de (Limpeza de Pele) você respondera o briefing com
                  todas as informações que precisa, junto com o texto e se
                  desejar imagens do procedimento e através dessas informações
                  irei criar uma ARTE PROMOCIONAL seguindo as cores e o layout
                  da sua marca.
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem style={styleAcordion}>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left">
                      Vocês fazem apenas o logotipo?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  Não, trabalho com a criação da Identidade Visual completa a
                  qual é composta pelo logotipo, mas também possui a tipografia,
                  Cores.
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem style={styleAcordion}>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left">
                      Vocês criam logos para todas as áreas?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  Não, trabalho com a criação da Identidade Visual completa a
                  qual é composta pelo logotipo, mas também possui a tipografia,
                  Cores. Vocês criam logos para todas as áreas? Para essa
                  resposta preciso que você responda o questionário (Briefing) e
                  após a análise verifico a viabilidade ou não do projeto. Posso
                  solicitar alterações na arte? Sim, até 5 alterações gratuitas,
                  a partir disso será cobrado 5% do valor do serviço ou produto.
                  Caso o cliente solicite alguma alteração no projeto o prazo é
                  de 48 horas úteis para a entrega. Preciso pedir todas as artes
                  de uma vez? Não. Você pode pedir o desenvolvimento das artes
                  de acordo com a sua necessidade! Pense no crédito do seu
                  celular, você não precisa usar tudo de uma vez mas precisa
                  utilizar dentro de um prazo limite. Meu prazo é de 30 dias
                  úteis.
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </Box>
        </Flex>
      </Stack>
    </Box>
  );
}
