import { Box, Container } from "@chakra-ui/react";
import React from "react";
import CoffeeList from "./CoffeeList";
import Money from "./Money";
import Payment from "./Payment";

export default function Coffee() {
  const [moneyCount, setMoneyCount] = React.useState(0);
  const [moneyChange, setMoneyChange] = React.useState(0);
  const [coffeeLoad, setCoffeeLoad] = React.useState(false);

  const money = [
    { id: 1, count: 50 },
    { id: 2, count: 100 },
    { id: 3, count: 200 },
    { id: 4, count: 500 },
  ];
  const coffeeList = [
    { id: 1, name: "Americano", cost: 200 },
    { id: 2, name: "Cappuchino", cost: 300 },
    { id: 3, name: "Espresso", cost: 500 },
    { id: 4, name: "MacCoffee", cost: 150 },
    { id: 5, name: " Dark Coffee", cost: 250 },
  ];
  return (
    <Container maxW="xl" height="700px" bg="blackAlpha.400">
      <Money
        money={money}
        moneyCount={moneyCount}
        setMoneyCount={setMoneyCount}
        coffeeLoad={coffeeLoad}
        setCoffeeLoad={setCoffeeLoad}
      />
      <Box display="flex" justifyContent="space-between">
        <CoffeeList
          coffeeList={coffeeList}
          moneyCount={moneyCount}
          setMoneyCount={setMoneyCount}
          setMoneyChange={setMoneyChange}
          coffeeLoad={coffeeLoad}
          setCoffeeLoad={setCoffeeLoad}
        />
        <Payment
          money={money}
          coffeeList={coffeeList}
          moneyCount={moneyCount}
          setMoneyCount={setMoneyCount}
          moneyChange={moneyChange}
        />
      </Box>
    </Container>
  );
}
