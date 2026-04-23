"use client";
import { Flex, Stack, Image, Text, Link, Box } from "@chakra-ui/react";
import {
  FaBehance,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaReact,
  FaYoutube,
} from "react-icons/fa";

export const Footer = () => {
  return (
    <footer>
      <Flex
        bg="#000"
        color="#fff"
        justifyContent="space-around"
        flexDirection={{ base: "column", md: "row" }}
        gap={{ base: "20px", md: "0" }}
        h={{ base: "auto", md: 100 }}
        p={{ base: "40px", md: "0" }}
        pt={5}
      >
        <Box>
          <Text>viihbf_ © 2021 | Todos os direitos reservados</Text>
          <Flex alignItems="center" gap={2}>
            <Text>Desenvolvido por MMV Soluções Web </Text>
            <FaReact />
          </Flex>
        </Box>
        <Box display={{ base: "flex", md: "block" }} flexDirection="column" alignItems="flex-start">
          <Text>Nos siga nas nossas redes sociais</Text>
          <Flex gap={3} justifyContent="center">
            <Link
              href="https://linkedin.com/in/victória-barbosa-fernandes"
              target="_blank"
            >
              <FaLinkedin size={32} />
            </Link>
            <Link href="https://instagram.com/viihbranding/" target="_blank">
              <FaInstagram size={32} />
            </Link>
            <Link
              href="https://facebook.com/profile.php?id=61583234668580"
              target="_blank"
            >
              <FaFacebook size={32} />
            </Link>
            <Link href="https://behance.net/victoriabarbosaa" target="_blank">
              <FaBehance size={32} />
            </Link>
            <Link href="https://youtube.com/@victoriabarbosa.f" target="_blank">
              <FaYoutube size={32} />
            </Link>
          </Flex>
        </Box>
      </Flex>
    </footer>
  );
};
