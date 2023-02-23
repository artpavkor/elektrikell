import { useState, useEffect } from "react";
import {
  ResponsiveContainer,
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Line,
  ReferenceLine,
  ReferenceArea,
} from "recharts";
import { getPriceData } from "../services/apiService";
import ErrorModal from "../ErrorModal";
import moment from "moment";

function Body({ hourRange, activePrice, setLowPriceTimestamp }) {
  const [data, setData] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);
  const [x1, setX1] = useState(0);
  const [xHign, setXHign] = useState([]);

  useEffect(() => {
    getPriceData()
      .then(({ success, data, message }) => {
        if (!success) {
          throw message[0];
        }
        const newData = data.ee.map((d) => {
          return {
            ...d,
            price: +((d.price / 10) * 1.2).toFixed(2),
            hour: moment.unix(d.timestamp).hour(),
            current: moment().isSame(moment.unix(d.timestamp), "hour"),
          };
        });
        setData(newData);
      })
      .catch((error) => setErrorMessage(error.toString));
  }, []);

  useEffect(() => {
    if (data.length > 0) {
      const timestampNow = moment().unix();
      const futureData = data.filter((el) => el.timestamp > timestampNow);
      const hourRangeLocal = activePrice ==='low' ? hourRange : 1;

      const rangePrices = [];

      futureData.forEach((v, i, arr) => {
        const range = arr.slice(i, i + hourRangeLocal);
        if (range.length === hourRangeLocal) {
          let sum = 0;
          range.forEach((v) => (sum += v.price));
          rangePrices.push({ sum, i, timestamp: v.timestamp });
        }
      });
      rangePrices.sort((a, b) => a.sum - b.sum);

      if (activePrice === 'low') {
        setX1(rangePrices[0].i);
        setLowPriceTimestamp(rangePrices[0].timestamp)
        setXHign([]);
      } else {
        rangePrices.reverse();
        const half = rangePrices.slice(0, rangePrices.length / 2);
        let sum = 0;
        half.forEach(v => {
          sum += v.sum;
        });
        let avereage = sum/half.length;
        half.filter(v => v.sum > avereage)
        setXHign(half.filter(v => v.sum > avereage));
      }
    }
  }, [hourRange, data, activePrice, setLowPriceTimestamp]);


  return (
    <>
      <ResponsiveContainer width='100%' height={400}>
                <LineChart data={data}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="hour" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="price" stroke="#8884d8" />
                    <ReferenceLine x= {data.findIndex((el) => el.current)} stroke="red" />
                    {xHign.length ? xHign.map(x => ( 
                    <ReferenceArea key={x.i} x1={x.i + 10} x2={x.i + 10 + 1} stroke="red" fill="red" strokeOpacity={0.3} fillOpacity={0.3} />
                    )):(
                      <ReferenceArea x1={x1 + 10} x2={x1 + hourRange + 10} stroke="green" fill="green" strokeOpacity={0.3} fillOpacity={0.3} />
                    )}
                </LineChart>
            </ResponsiveContainer>
            <ErrorModal errorMessage={errorMessage} handleClose={() => setErrorMessage(null)}/>
    </>
  );
}

export default Body;
