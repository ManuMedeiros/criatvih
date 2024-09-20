import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";

export const Phases = ({ data, img, widthImg, mtImag, mrImg }) => {
  return (
    <Box display={{ base: "flex", md: "block" }} flexDirection="column" gap={10}>
     
      {data.map((text, index) => (
        <Flex
          key={index}
          width={{ base: "90%", md: "100%" }} 
          margin={{ base: "0 auto", md: "0" }}
          gap="50px"
          direction={index % 2 !== 0 ? "row-reverse" : "row"}
          justifyContent="center"
        >
          <Box
            fontSize={18}
            fontWeight={600}
            textAlign="center"
            backgroundColor="#fff"
            borderRadius={30}
            p={5}
            w="415px"
          >
            <Text color="#CD90FE" marginBottom={5}>
              {text.title}
            </Text>
            <Text>{text.description}</Text>
          </Box>
          <Text
            display={{ base: "none", md: "block" }}
            width="100px"
            height="100px"
            textAlign="center"
            mr={index % 2 !== 0 ? "0" : "28rem"}
            ml={index % 2 !== 0 ? "30rem" : "0"}
            backgroundColor="#CD90FE"
            padding={6}
            fontSize={38}
            borderRadius={50}
            color="#fff"
            position="relative"
            zIndex={2}
          >
            {index + 1}
          </Text>
        </Flex>
      ))}

      <Flex display={{ base: "none", md: "flex" }} justifyContent="flex-end" marginTop={mtImag ? mtImag : "-30rem"} marginRight={mrImg ? mrImg : "10rem"}>
        <Image src={img} w={widthImg ? widthImg : 620}/>
      </Flex>
    </Box>
  );
};
