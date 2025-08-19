import { useState, useEffect } from "react";

function useCurrency() { 
const [Data, setData] = useState([]);
    useEffect(() => {
      fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        .then((response) => response.json())
        .then((response) => {
          setData(currency)
          console.log(data);
         })
    }, [currency])
  console.log(data);
  
return data;
  }
export default useCurrency;
