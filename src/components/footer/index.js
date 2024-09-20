"use client";
import { Box, Flex, Stack, Image, Text, Link } from "@chakra-ui/react";
import { FaInstagram, FaPinterest, FaFacebook, FaWhatsapp, FaLinkedin, FaReact } from "react-icons/fa";
import { SiTiktok } from "react-icons/si";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { useRouter } from "next/navigation";

const SocialIcons = ({ color }) => {
  return (
    <>
      <Box>
        <Link
          href="https://www.instagram.com/criatvih?igsh=dnVrZDY5YTZxOGwy"
          target="_blank"
        >
          <FaInstagram color={color} size={24} />
        </Link>
      </Box>
      <Box>
        <Link href="https://pin.it/3nCUG51Wf" target="_blank">
          <FaPinterest color={color} size={24} />
        </Link>
      </Box>
      <Box>
        <Link
          href="https://www.facebook.com/profile.php?id=100085334864646&mibextid=ZbWKwL"
          target="_blank"
        >
          <FaFacebook color={color} size={24} />
        </Link>
      </Box>
      <Box>
        <Link href="https://wa.me/5511942821279" target="_blank">
          <FaWhatsapp color={color} size={24} />
        </Link>
      </Box>
      <Box>
        <Link
          href="https://www.tiktok.com/@_viihbf?_t=8kvsAwdHXxG&_r=1"
          target="_blank"
        >
          <SiTiktok color={color} size={24} />
        </Link>
      </Box>
      <Box>
        <Link href="https://www.linkedin.com/company/criatvih/" target="_blank">
          <FaLinkedin color={color} size={24} />
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
      <Stack
        bg="transparent"
        padding={{ base: 6, md: 10 }}
        alignItems="center"
        textAlign="center"
      >
        <Text fontSize={{ base: "lg", md: "xl" }} fontWeight={600}>
          Siga-nos em todas as Redes
        </Text>
        <Flex gap={4} marginTop={3} justifyContent="center">
          <SocialIcons color="#CD90FE" />
        </Flex>
      </Stack>
      <Flex
        bg="#212123 "
        direction={{ base: "column", md: "row" }}
        justifyContent={{ base: "center", md: "space-around" }}
        alignItems={{ base: "center", md: "flex-start" }}
        padding={{ base: 4, md: 8 }}
        textAlign={{ base: "center", md: "left" }}
      >
        <Flex direction="column" alignItems={{ base: "center", md: "flex-start" }} gap={3} mb={{ base: 6, md: 0 }}>
          <Image src="./logo.png" width={48} mb={2} />
          <Text color="#fff">
            Criatvih-Studio de Design © 2021 Site seguro <br />
            Todos os direitos reservados.
          </Text>
          <Text
            color="#fff"
            display="flex"
            alignItems="center"
            gap={2}
            mt={2}
          >
            Tecnologia <FaReact />
          </Text>
          <Text color="#fff" display="flex" alignItems="center" gap={2} mt={2}>
            Feito por{" "}
            <Link
              href="https://www.linkedin.com/in/emanuel-medeiros/"
              target="_blank"
            >
              MMV Soluções Web
            </Link>
          </Text>
          <Flex gap={4} mt={4}>
            <SocialIcons color="#fff" />
          </Flex>
        </Flex>

        <Flex direction="column" alignItems={{ base: "center", md: "center" }} color="#fff" mb={{ base: 6, md: 0 }} marginLeft={12}>
          <Text fontSize={18} fontWeight={700} mb={3} marginRight={{ base: 10, md: 0}}>
            Menu
          </Text>
          <Stack spacing={2}>
            <Flex alignItems="center" gap={1} onClick={() => handleRouter("/")}>
              <IoIosArrowDroprightCircle color="#CD90FE" size={20} />
              <Text cursor="pointer">Inicio</Text>
            </Flex>
            <Flex alignItems="center" gap={1} onClick={() => handleRouter("./sobre")}>
              <IoIosArrowDroprightCircle color="#CD90FE" size={20} />
              <Text cursor="pointer">Sobre</Text>
            </Flex>
            <Flex alignItems="center" gap={1} onClick={() => handleRouter("./portifolio")}>
              <IoIosArrowDroprightCircle color="#CD90FE" size={20} />
              <Text cursor="pointer">Portifolio</Text>
            </Flex>
            <Flex alignItems="center" gap={1} onClick={() => handleRouter("./politicas-privacidade")}>
              <IoIosArrowDroprightCircle color="#CD90FE" size={20} />
              <Text cursor="pointer">Políticas de Privacidade</Text>
            </Flex>
          </Stack>
        </Flex>

        <Flex direction="column" alignItems={{ base: "center", md: "center" }} color="#fff">
          <Text fontSize={18} fontWeight={700} mb={3}>
            Serviços
          </Text>
          <Stack spacing={2}>
            <Flex alignItems="center" gap={1} onClick={() => handleRouter("./design-ux-ui")}>
              <IoIosArrowDroprightCircle color="#CD90FE" size={20} />
              <Text cursor="pointer">UI/UX</Text>
            </Flex>
            <Flex alignItems="center" gap={1} onClick={() => handleRouter("./identidade-visual")}>
              <IoIosArrowDroprightCircle color="#CD90FE" size={20} />
              <Text cursor="pointer">Identidade Visual</Text>
            </Flex>
            <Flex alignItems="center" gap={1} onClick={() => handleRouter("./artes-graficas")}>
              <IoIosArrowDroprightCircle color="#CD90FE" size={20} />
              <Text cursor="pointer">Artes Gráficas</Text>
            </Flex>
            <Flex alignItems="center" gap={1} onClick={() => handleRouter("./marketing")}>
              <IoIosArrowDroprightCircle color="#CD90FE" size={20} />
              <Text cursor="pointer">Marketing</Text>
            </Flex>
          </Stack>
        </Flex>

        <Flex direction="column" alignItems={{ base: "center", md: "center" }} color="#fff" mb={{ base: 6, md: 0 }} marginLeft={10}>
          <Text fontSize={18} fontWeight={700} mb={3} mt={{ base: 3, md: 0}} marginRight={5}>
            Contato
          </Text>
          <Stack spacing={2}>
            <Flex alignItems="center">
              <Text>(11) 94121-6687</Text>
            </Flex>
            <Flex alignItems="center">
              <Text>criatvih21@gmail.com</Text>
            </Flex>
            <Flex alignItems="center">
              <Text>São Paulo / Home office</Text>
            </Flex>
          </Stack>
        </Flex>
      </Flex>
    </>
  );
};
