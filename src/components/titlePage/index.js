import { Box, Heading } from '@chakra-ui/react';
import React from 'react';

export const TitlePage = ({ title }) => {
  return (
    <Box backgroundColor="#CD90FE" padding={1}>
      <Heading marginLeft={8} fontWeight={600}>{title}</Heading>
    </Box>
  );
};
