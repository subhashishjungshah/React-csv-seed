import { CSVLink } from "react-csv";
import "./App.css";
import { useState } from "react";

const csvData = [
  ["firstname", "lastname", "email"],
  ["Ahmed", "Tomi", "ah@smthing.co.com"],
  ["Raed", "Labes", "rl@smthing.co.com"],
  ["Yezzi", "Min l3b", "ymin@cocococo.com"],
];
const data = [
  { something: "Ahmed", lastname: "Tomi", email: "ah@smthing.co.com" },
  { something: "Raed", lastname: "Labes", email: "rl@smthing.co.com" },
  { something: "Yezzi", lastname: "Min l3b", email: "ymin@cocococo.com" },
];

const response = [
  {
    "MEF OIT": "Yes",
    "LSO APIs": "Product Catalog",
    "LSO Cert": "Yes",
    "LSO Releases": "Fergie",
    selected_buy_sell: "Sell",
    "LSO Product Payload": [
      "Operator Ethernet",
      "Subscriber Ethernet",
      "Internet Access",
      "Dark Fiber",
      "Wavelength",
      "5G FWA",
      "Satellite",
    ],
    "UCs Product Catalog": [
      "Item 2",
      "Item 3",
      "Item 4",
      "Item 5",
      "Item 6",
      "Item 7",
      "Item 10",
      "Item 8",
      "Item 9",
    ],
    "LSO Marketplace APIs": "Sell Product Catalog",
    "Implementation status": "Development",
  },
];

function App() {
  const [disabled, setDisabled] = useState(false);

  const handleClick = () => {
    setDisabled(true);
    setTimeout(() => {
      setDisabled(false);
    }, 5000);
  };

  return (
    <>
      <CSVLink data={response} filename="my_file.csv" onClick={handleClick}>
        <button disabled={disabled}>Download me</button>
      </CSVLink>
    </>
  );
}

export default App;
