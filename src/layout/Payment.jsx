import { Box, Button, Text } from "@chakra-ui/react";
import React from "react";

export default function Payment({ moneyCount, setMoneyCount, moneyChange }) {
  return (
    <Box w="200px" border="4px" ml="10px" height="550px" pt="20px" mt="20px">
      <Box
        w="140px"
        h="40px"
        m="0 auto"
        textAlign="center"
        pt="10px"
        bg="blue.100"
        borderRadius="2xl"
      >
        Total: {moneyCount}
      </Box>
      <Box pt="30px">
        <Text textAlign="center" mt="5px" fontSize="18px" fontWeight="bolder">
          Toss a Coin
        </Text>
        <Box
          w="15px"
          h="45px"
          border="4px"
          margin="0 auto"
          mt="10px"
          bg="whiteAlpha.900"
        />
      </Box>
      <Box>
        <Button
          textAlign="center"
          fontSize="18px"
          fontWeight="bolder"
          mt="60px"
          onClick={() => setMoneyCount(0)}
        >
          Take Change
        </Button>
        <Box
          w="65px"
          h="25px"
          border="4px"
          margin="0 auto"
          mt="10px"
          bg="whiteAlpha.900"
        />
        <Box
          w="100px"
          h="40px"
          m="0 auto"
          mt="20px"
          textAlign="center"
          bg="blue.400"
          borderRadius="2xl"
          color="white"
          pt="10px"
        >
          {moneyCount}
        </Box>
      </Box>
    </Box>
  );
}
