import { Box, Button } from "@chakra-ui/react";
import React from "react";

export default function Money({
  money,
  moneyCount,
  setMoneyCount,
  coffeeLoad,
}) {
  return (
    <Box w="400px" height="120px" display="flex" alignItems="center">
      {money.map((item) => {
        let count = item.count;
        return (
          <Button
            key={item.id}
            w="80px"
            h="60px"
            border="none"
            borderRadius="3xl"
            ml="10px"
            colorScheme="orange"
            fontSize="25px"
            disabled={coffeeLoad === true ? true : ""}
            onClick={() => setMoneyCount(moneyCount + count)}
          >
            {count}
          </Button>
        );
      })}
    </Box>
  );
}
