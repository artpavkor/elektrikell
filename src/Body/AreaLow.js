import { useState, useEffect } from "react";
import { ReferenceArea } from "recharts";

function AreaLow({ hourRange, setLowPriceTimestamp, rangePrices, searchDate }) {
  const [x, setX] = useState(0);

  useEffect(() => {
    if (!rangePrices) return;

    setX(rangePrices[0].i);
    setLowPriceTimestamp(rangePrices[0].timestamp);
  }, [rangePrices, setLowPriceTimestamp]);

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
