import { useState, useEffect } from "react";
import { ReferenceArea, ResponsiveContainer, LineChart } from "recharts";
import { rangePricesGenerate } from "../helpers/rangePrices";

function AreaLow({data, hourRange, setLowPriceTimestamp, searchDate, children }) {
  const [x, setX] = useState(0);

  useEffect(() => {
    if (!data) return;
    const rangePrices = rangePricesGenerate(data, hourRange);
    setX(rangePrices[0].i);
    setLowPriceTimestamp(rangePrices[0].timestamp);
  }, [data, hourRange, setLowPriceTimestamp]);

  return (
    <ResponsiveContainer width="100%" height={400}>
       <LineChart data={data}>
        {children}
       <ReferenceArea
        x1={x + searchDate.pastHours}
        x2={x + hourRange + searchDate.pastHours}
        stroke="green"
        fill="green"
        strokeOpacity={0.3}
        fillOpacity={0.3}/>
        </LineChart>
    </ResponsiveContainer>
  );
}

export default AreaLow;
