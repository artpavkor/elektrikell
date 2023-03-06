import { useState, useEffect } from "react";
import { ReferenceArea, ResponsiveContainer, LineChart } from "recharts";
import { rangePricesGenerate } from "../helpers/rangePrices";


function AreaHign ({ data, children }) {
   
    const [xHign, setXHign] = useState(null);
   
    useEffect (() => {
        if(!data) return;
        const rangePrices = rangePricesGenerate(data);
        rangePrices.reverse();
        const half = rangePrices.slice(0, rangePrices.length / 2);
        let sum = 0;
        half.forEach(v => {
          sum += v.sum;
        });
        let avereage = sum / half.length;
        half.filter(v => v.sum > avereage)
        setXHign(half.filter(v => v.sum > avereage));
        
    }, [data]);

    const currentIndex = data?.findIndex((el) => el.current);

    return (
      <ResponsiveContainer width="100%" height={400}>
      <LineChart data={data}>
        {children} 
        {xHign?.length ? xHign.map(x => 
        <ReferenceArea key={x.i} 
        x1={x.i + currentIndex} 
        x2={x.i + currentIndex + 1} 
        stroke="red" 
        fill="red" 
        strokeOpacity={0.3}
        fillOpacity={0.3} />
        ) : null}
       </LineChart>
   </ResponsiveContainer>
    )
}

export default AreaHign;