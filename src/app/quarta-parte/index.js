import { IoMdCheckboxOutline } from "react-icons/io";
import { MdOutlineCreditScore } from "react-icons/md";
import { Box, Flex, Text } from "@chakra-ui/react";

export const QuartaParte = () => {
  return (
    <Flex width="100%" bgColor="#ebdcc4" color="#370605">
      <Flex
        gap={3}
        alignItems="center"
        borderRight="1px solid"
        p={8}
        width="50%"
      >
        <Box display={{ base: "none", md: "block" }}>
          <MdOutlineCreditScore size={52} />
        </Box>

        <Box>
          <Text as="h3" fontWeight="bold" fontSize={19}>
            Pagamento seguro
          </Text>
          <Text fontSize={16}>
            Ambiente seguro. Seus dados estão protegidos e sua compra é 100%
            segura.
          </Text>
        </Box>
      </Flex>
      <Flex gap={3} alignItems="center" p={8} width="50%">
        <Box display={{ base: "none", md: "block" }}>
          <IoMdCheckboxOutline size={52} />
        </Box>

        <Box>
          <Text as="h3" fontWeight="bold" fontSize={19}>
            Serviços personalizados
          </Text>
          <Text fontSize={16}>
            Cada estratégia é aplicada de forma personalizada, de acordo com a
            necessidade e os objetivos da sua marca.
          </Text>
        </Box>
      </Flex>
    </Flex>
  );
};
