import { Box, Button, Text } from "@chakra-ui/react";
import React from "react";
import Swal from "sweetalert2";
import image from "../image/coffee.png";

export default function CoffeeList({
  coffeeList,
  moneyCount,
  setMoneyCount,
  coffeeLoad,
  setCoffeeLoad,
}) {
  return (
    <Box
      maxW="sm"
      height="550px"
      border="4px"
      pt="20px"
      mt="20px"
      display="flex"
      alignItems="center"
      flexDirection="column"
    >
      {coffeeList.map((item) => {
        let cost = item.cost;
        return (
          <Box
            w="360px"
            h="45px"
            borderRadius="2xl"
            bg="whiteAlpha.800"
            textAlign="center"
            pt="1"
            ml="5px"
            mr="5px"
            mt="15px"
            display="flex"
            justifyContent="space-around"
            key={item.id}
          >
            <Text
              fontSize="25px"
              color="orange.600"
              fontWeight="bold"
              w="250px"
            >
              {item.name}: {item.cost}
            </Text>
            <Button
              colorScheme="yellow"
              h="35px"
              borderRadius="3xl"
              disabled={moneyCount < cost || coffeeLoad === true ? true : ""}
              onClick={() => {
                setMoneyCount(moneyCount - cost);
                setCoffeeLoad(true);
                Swal.fire({
                  position: "top-top",
                  icon: "success",
                  title: "Wait 5 seconds",
                  showConfirmButton: false,
                  timer: 1500,
                });
                setTimeout(() => {
                  Swal.fire({
                    position: "top-top",
                    icon: "success",
                    title: "Coffee is ready.Have a nice day.",
                    showConfirmButton: false,
                    timer: 2000,
                  });
                  setCoffeeLoad(false);
                }, 6000);
              }}
            />
          </Box>
        );
      })}
      <Box w="300px" h="200px" mt="10px" bg="gray.600">
        <Box w="150px" h="150px" m="0 auto">
          <img src={image} alt="coffee" />
        </Box>
      </Box>
      {coffeeLoad === true ? (
        <Box mt="-250px" zIndex="5">
          <img
            src="https://cdn.dribbble.com/users/2520294/screenshots/7209485/media/cf226d98a06282e9cabf5c2f8f6d547f.gif"
            alt="coffee"
          />
        </Box>
      ) : (
        ""
      )}
    </Box>
  );
}
