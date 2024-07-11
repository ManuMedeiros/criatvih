"use client";
import { Box, Flex, Stack, Image, Text, Link } from "@chakra-ui/react";
import { FaInstagram } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { SiTiktok } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { useRouter } from "next/navigation";
import { FaReact } from "react-icons/fa";

const SocialIcons = ({ color }) => {
  return (
    <>
      <Box>
        <Link
          href="https://www.instagram.com/criatvih?igsh=dnVrZDY5YTZxOGwy"
          target="_blank"
        >
          <FaInstagram color={color} size={28} />
        </Link>
      </Box>
      <Box>
        <Link href="https://pin.it/3nCUG51Wf" target="_blank">
          <FaPinterest color={color} size={28} />
        </Link>
      </Box>
      <Box>
        <Link
          href="https://www.facebook.com/profile.php?id=100085334864646&mibextid=ZbWKwL"
          target="_blank"
        >
          <FaFacebook color={color} size={28} />
        </Link>
      </Box>
      <Box>
        <Link href="https://wa.me/5511942821279" target="_blank">
          <FaWhatsapp color={color} size={28} />
        </Link>
      </Box>
      <Box>
        <Link
          href="https://www.tiktok.com/@_viihbf?_t=8kvsAwdHXxG&_r=1"
          target="_blank"
        >
          <SiTiktok color={color} size={28} />
        </Link>
      </Box>
      <Box>
        <Link href="https://www.linkedin.com/company/criatvih/" target="_blank">
          <FaLinkedin color={color} size={28} />
        </Link>
      </Box>
    </>
  );
};

export const Footer = () => {
  const router = useRouter();

  const handleRouter = (href) => {
    router.push(href);
  };

  return (
    <>
      <Stack bg="transparent" padding="50px" alignItems="center">
        <Stack alignItems="center">
          <Flex margin="0 auto">
            <Text fontSize="22px" fontWeight={600}>
              Siga-nos em todas as Redes
            </Text>
          </Flex>
          <Flex gap={5} marginTop="5px">
            <SocialIcons color="#CD90FE" />
          </Flex>
        </Stack>
      </Stack>
      <Flex bg="#000" justifyContent="space-around" padding={6}>
        <Flex direction="column" gap={3}>
          <Box>
            <Image src="./logo.png" width={64} />
          </Box>
          <Box>
            <Text color="#fff">
              Criatvih-Studio de Design © 2021 Site seguro <br />
              Todos os direitos reservados.
              <br />
            </Text>
            <Text
              color="#fff"
              display="flex"
              alignItems="center"
              gap={2}
              mt={2}
            >
              Tecnologia <FaReact /> React
            </Text>
            <Text color="#fff" display="flex" alignItems="center" gap={2} mt={2}>
              Feito por{" "}
              <Link
                href="https://www.linkedin.com/company/criatvih/"
                target="_blank"
              >
                MMV Soluções Web
              </Link>
            </Text>
          </Box>
          <Flex gap={5}>
            <SocialIcons color="#fff" />
          </Flex>
        </Flex>
        <Flex color="#fff">
          <Stack>
            <Box>
              <Text fontSize={18} fontWeight={700}>
                Menu
              </Text>
            </Box>
            <Box marginLeft="-22px">
              <Flex alignItems="center" gap={1}>
                <IoIosArrowDroprightCircle color="#CD90FE" size={20} />
                <Text cursor="pointer" onClick={() => handleRouter("/")}>
                  Inicio
                </Text>
              </Flex>
              <Flex alignItems="center" gap={1}>
                <IoIosArrowDroprightCircle color="#CD90FE" size={20} />
                <Text cursor="pointer" onClick={() => handleRouter("./sobre")}>
                  Sobre
                </Text>
              </Flex>
              <Flex alignItems="center" gap={1}>
                <IoIosArrowDroprightCircle color="#CD90FE" size={20} />
                <Text
                  cursor="pointer"
                  onClick={() => handleRouter("./portifolio")}
                >
                  Portifolio
                </Text>
              </Flex>
              <Flex alignItems="center" gap={1}>
                <IoIosArrowDroprightCircle color="#CD90FE" size={20} />
                <Text
                  cursor="pointer"
                  onClick={() => handleRouter("./politicas-privacidade")}
                >
                  Politicas de Privicidade
                </Text>
              </Flex>
            </Box>
          </Stack>
        </Flex>
        <Flex color="#fff">
          <Stack>
            <Box>
              <Text fontSize={18} fontWeight={700}>
                Serviços
              </Text>
            </Box>
            <Box marginLeft="-22px">
              <Flex alignItems="center" gap={1}>
                <IoIosArrowDroprightCircle color="#CD90FE" size={20} />
                <Text
                  cursor="pointer"
                  onClick={() => handleRouter("./design-ux-ui")}
                >
                  UI/UX
                </Text>
              </Flex>
              <Flex alignItems="center" gap={1}>
                <IoIosArrowDroprightCircle color="#CD90FE" size={20} />
                <Text
                  cursor="pointer"
                  onClick={() => handleRouter("./identidade-visual")}
                >
                  Identidade Visual
                </Text>
              </Flex>
              <Flex alignItems="center" gap={1}>
                <IoIosArrowDroprightCircle color="#CD90FE" size={20} />
                <Text
                  cursor="pointer"
                  onClick={() => handleRouter("./artes-graficas")}
                >
                  Artes Gráficas
                </Text>
              </Flex>
              <Flex alignItems="center" gap={1}>
                <IoIosArrowDroprightCircle color="#CD90FE" size={20} />
                <Text
                  cursor="pointer"
                  onClick={() => handleRouter("./gestao-redes")}
                >
                  Gestão de Redes Sociais
                </Text>
              </Flex>
            </Box>
          </Stack>
        </Flex>
        <Flex color="#fff">
          <Stack>
            <Box>
              <Text fontSize={18} fontWeight={700}>
                Contato
              </Text>
            </Box>
            <Box>
              <Flex alignItems="center">
                <Text>(11) 94121-6687</Text>
              </Flex>
              <Flex alignItems="center">
                <Text>criatvih21@gmail.com</Text>
              </Flex>
              <Flex alignItems="center">
                <Text>São Paulo / Home office</Text>
              </Flex>
            </Box>
          </Stack>
        </Flex>
      </Flex>
    </>
  );
};
