import { useState, useEffect } from "react";
import { ReferenceArea } from "recharts";


function AreaHign ({rangePrices}) {
   
    const [xHign, setXHign] = useState(null);

    useEffect (() => {
        if(!rangePrices) return;

        rangePrices.reverse();
        const half = rangePrices.slice(0, rangePrices.length / 2);
        let sum = 0;
        half.forEach(v => {
          sum += v.sum;
        });
        let avereage = sum/half.length;
        half.filter(v => v.sum > avereage)
        setXHign(half.filter(v => v.sum > avereage));
    }, [rangePrices]);

    return xHign?.length ? xHign.map(x => 
        <ReferenceArea key={x.i} x1={x.i + 10} x2={x.i + 10 + 1} stroke="red" fill="red" strokeOpacity={0.3} fillOpacity={0.3} />
        ) : <></>;
}

export default AreaHign;