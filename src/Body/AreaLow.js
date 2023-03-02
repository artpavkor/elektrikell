import { useState, useEffect } from "react";
import { ReferenceArea } from "recharts";
import { rangePricesGenerate } from "../helpers/rangePrices";

function AreaLow({data, hourRange, setLowPriceTimestamp, searchDate }) {
  const [x, setX] = useState(0);

  useEffect(() => {
    if (!data) return;
    const rangePrices = rangePricesGenerate(data, hourRange);
    setX(rangePrices[0].i);
    setLowPriceTimestamp(rangePrices[0].timestamp);
  }, [data, hourRange, setLowPriceTimestamp]);

  return (
    <ReferenceArea
      x1={x + searchDate.pastHours}
      x2={x + hourRange + searchDate.pastHours}
      stroke="green"
      fill="green"
      strokeOpacity={0.3}
      fillOpacity={0.3}
    />
  );
}

export default AreaLow;
