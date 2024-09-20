"use client";
import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  HStack,
  Heading,
  Input,
  Radio,
  RadioGroup,
  Stack,
  Text,
  Textarea,
} from "@chakra-ui/react";
import { useState } from "react";

export const FormaContact = () => {
  const [formulario, setFormulario] = useState({
    nome: "",
    email: "",
    numero: "",
    segmento: "",
    instagram: "",
    assunto: "",
    mensagem: "",
  });

  const [contato, setContato] = useState("1");

  const redirectToEmail = () => {
    const encodedSubject = encodeURIComponent(formulario.assunto);
    const encodedBody = encodeURIComponent(formulario.mensagem);

    window.location.href = `mailto:criatvi21@gmail.com?subject=${encodedSubject}&body=${encodedBody}`;
  };

  const enviarMensagemWhatsApp = () => {
    const mensagemFormatada = `
    *Nome*: ${formulario.nome}
    *E-mail*: ${formulario.email}
    *Contato*: ${formulario.numero}
    *Segmento*: ${formulario.segmento}
    *Instagram*: ${formulario.instagram}
    *Assunto*: ${formulario.assunto}
    *Mensagem*: ${formulario.mensagem}
    `;

    const url = `whatsapp://send?phone=5511941216687&text=${encodeURIComponent(
      mensagemFormatada
    )}`;

    window.open(url);
  };

  return (
    <Flex
      borderTop="5px solid #CD90FE"
      backgroundColor="#212123"
      color="#fff"
      justifyContent="center"
      alignItems="center"
      padding={{ base: 4, md: 5 }}
      gap={{ base: 4, md: 8 }}
      flexDirection={{ base: "column", md: "row" }}
    >
      <Stack
        width={{ base: "100%", md: "20%" }}
        gap={{ base: 4, md: 8 }}
        textAlign={{ base: "center", md: "left" }}
      >
        <Heading as="h2" fontSize={{ base: 28, md: 42 }}>
          Aguardo sua mensagem
        </Heading>
        <Text fontSize={{ base: 16, md: 18 }} fontWeight={600}>
          Entre em contato comigo e tire suas dúvidas ou solicite orçamento.
        </Text>
      </Stack>

      <Stack width={{ base: "100%", md: "30%" }} gap={4}>
        <FormControl>
          <Flex direction="column" gap={4}>
            <Flex direction="column">
              <FormLabel>Nome</FormLabel>
              <Input
                backgroundColor="#CD90FE"
                padding={2}
                borderRadius={10}
                border="none"
                value={formulario.nome}
                onChange={(e) =>
                  setFormulario({ ...formulario, nome: e.target.value })
                }
              />
            </Flex>

            <Flex direction="column">
              <FormLabel>E-mail</FormLabel>
              <Input
                backgroundColor="#CD90FE"
                padding={2}
                borderRadius={10}
                border="none"
                value={formulario.email}
                onChange={(e) =>
                  setFormulario({ ...formulario, email: e.target.value })
                }
              />
            </Flex>

            <Flex direction="column">
              <FormLabel>Número Whatsapp</FormLabel>
              <Input
                backgroundColor="#CD90FE"
                padding={2}
                borderRadius={10}
                border="none"
                value={formulario.numero}
                onChange={(e) =>
                  setFormulario({ ...formulario, numero: e.target.value })
                }
              />
            </Flex>

            <Flex direction="column">
              <FormLabel>Qual o segmento do seu negócio?</FormLabel>
              <Input
                backgroundColor="#CD90FE"
                padding={2}
                borderRadius={10}
                border="none"
                value={formulario.segmento}
                onChange={(e) =>
                  setFormulario({ ...formulario, segmento: e.target.value })
                }
              />
            </Flex>

            <Flex direction="column">
              <FormLabel>Qual instagram da sua marca?</FormLabel>
              <Input
                backgroundColor="#CD90FE"
                padding={2}
                borderRadius={10}
                border="none"
                value={formulario.instagram}
                onChange={(e) =>
                  setFormulario({ ...formulario, instagram: e.target.value })
                }
              />
            </Flex>

            <Flex direction="column">
              <RadioGroup value={contato}>
                <FormLabel>Como você deseja ser contatado?</FormLabel>
                <HStack spacing="24px">
                  <Radio value="1" onChange={(e) => setContato(e.target.value)}>
                    Whatsapp
                  </Radio>
                  <Radio value="2" onChange={(e) => setContato(e.target.value)}>
                    E-mail
                  </Radio>
                </HStack>
              </RadioGroup>
            </Flex>

            <Flex direction="column">
              <FormLabel>Assunto</FormLabel>
              <Input
                backgroundColor="#CD90FE"
                padding={2}
                borderRadius={10}
                border="none"
                value={formulario.assunto}
                onChange={(e) =>
                  setFormulario({ ...formulario, assunto: e.target.value })
                }
              />
            </Flex>

            <Flex direction="column">
              <FormLabel>Mensagem</FormLabel>
              <Textarea
                backgroundColor="#CD90FE"
                padding={2}
                borderRadius={10}
                border="none"
                value={formulario.mensagem}
                onChange={(e) =>
                  setFormulario({ ...formulario, mensagem: e.target.value })
                }
              />
            </Flex>

            <Flex marginTop={5} justifyContent="center">
              <Button
                backgroundColor="#CD90FE"
                height="auto"
                padding="13px 20px"
                borderRadius={20}
                onClick={() => {
                  if (contato === "1") {
                    enviarMensagemWhatsApp();
                  } else {
                    redirectToEmail();
                  }
                }}
              >
                Enviar
              </Button>
            </Flex>
          </Flex>
        </FormControl>
      </Stack>
    </Flex>
  );
};
