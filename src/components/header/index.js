"use client"
import { Box, Flex, Link, Button, Stack, Image, Menu, MenuButton, MenuList, MenuItem, Text } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';
import { IoMdArrowDropdown } from "react-icons/io";

export const Header = () => {
  const router = useRouter();
  return (
    <>
      <Stack
        bg="#000"
        padding="15px 20px"
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Box>
          <Image src="./logo.png" width={24} />
        </Box>
        <Flex color="#fff" fontWeight={700} gap={5} alignItems="center">
          <Link href='/'>Inicio</Link>
          <Link href='./sobre'>Sobre</Link>
          <Link href='./portifolio'>Portifolio</Link>
          <Menu>
            <MenuButton as={Button} rightIcon={<IoMdArrowDropdown />} background="transparent" padding={0} color="#fff" _hover={false}>
              Serviços
            </MenuButton>
            <MenuList color="#000">
              <MenuItem onClick={() => router.push('/identidade-visual')}>Identidade Visual</MenuItem>
              <MenuItem onClick={() => router.push('/artes-graficas')}>Artes graficas</MenuItem>
              <MenuItem onClick={() => router.push('/marketing')}>Gestão de Redes Sociais</MenuItem>
              <MenuItem onClick={() => router.push('/design-ux-ui')}>Ux-Ui</MenuItem>
            </MenuList>
          </Menu>
        </Flex>
        <Flex gap={4}>
          <Button
            backgroundColor="#CD90FE"
            height={0}
            padding="13px"
            borderRadius={20}
            onClick={() => router.push('/contato')}
          >
            Contato
          </Button>
          <Button
            backgroundColor="#CD90FE"
            height={0}
            padding="13px"
            borderRadius={20}
            onClick={() => router.push('/duvidas-frequentes')}
          >
            Duvidas
          </Button>
        </Flex>
      </Stack>
    </>
  );
};
