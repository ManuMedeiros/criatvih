import { Box, Flex, List, ListItem, Text } from "@chakra-ui/react";
import {
  IoIosCheckmarkCircleOutline,
  IoIosCloseCircleOutline,
} from "react-icons/io";

export const SegundaParte = () => {
  return (
    <Box
      w="100%"
      bgImage="url('/images/bg2.png')"
      bgSize="cover"
      bgPosition="center"
      bgRepeat="no-repeat"
      display="flex"
      alignItems="center"
      justifyContent="space-around"
      position="relative"
      px="10"
    >
      <Box
        position="absolute"
        top="0"
        left="0"
        w="100%"
        h="80px"
        bgGradient="linear(to-t, rgba(0,0,0,0), rgba(0,0,0,0.85), #000000)"
        pointerEvents="none"
        zIndex={2}
      />
      <Box marginTop="90px">
        <Flex gap={10} justifyContent="center" paddingBottom="140px">
          <Box
            border="1px solid #ebdcc4"
            borderRadius={24}
            p={10}
            width="30%"
            paddingTop="40px"
            position="relative"
          >
            <Box position="absolute" top="-34px" left="150px">
              <IoIosCheckmarkCircleOutline color="#b61716" size={68} />
            </Box>
            <Text fontSize={23} color="#ebdcc4" fontWeight="bold" mb={4}>
              Se você não aguenta mais…
            </Text>
            <List styleType="disc" color="#fff" spacing={3} fontSize={17}>
              <ListItem>Gastar com marketing e não ver resultado;</ListItem>
              <ListItem>Ter uma marca que ninguém lembra;</ListItem>
              <ListItem>
                Ver concorrentes sendo escolhidos no seu lugar;
              </ListItem>
              <ListItem>
                Sentir que sua empresa poderia crescer mais, mas falta direção;
              </ListItem>
              <ListItem>
                Ter uma equipe trabalhando sem um posicionamento claro.
              </ListItem>
            </List>
          </Box>
          <Box
            border="1px solid #ebdcc4"
            borderRadius={24}
            p={10}
            width="30%"
            paddingTop="40px"
            position="relative"
          >
            <Box position="absolute" top="-34px" left="150px">
              <IoIosCloseCircleOutline color="#b61716" size={68} />
            </Box>

            <Text fontSize={23} color="#ebdcc4" fontWeight="bold" mb={4}>
              Se você não aguenta mais…
            </Text>
            <List styleType="disc" color="#fff" spacing={3}>
              <ListItem>Gastar com marketing e não ver resultado;</ListItem>
              <ListItem>Ter uma marca que ninguém lembra;</ListItem>
              <ListItem>
                Ver concorrentes sendo escolhidos no seu lugar;
              </ListItem>
              <ListItem>
                Sentir que sua empresa poderia crescer mais, mas falta direção;
              </ListItem>
              <ListItem>
                Ter uma equipe trabalhando sem um posicionamento claro.
              </ListItem>
            </List>
          </Box>
        </Flex>
      </Box>
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
