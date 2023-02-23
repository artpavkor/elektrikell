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

function Body({ hourRange }) {
  const [data, setData] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);
  const [x1, setX1] = useState(0);

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
    console.log("Request");
  }, []);

  useEffect(() => {
    if (data.length > 0) {
      const timestampNow = moment().unix();
      const futureData = data.filter((el) => el.timestamp > timestampNow);
      const rangePrices = [];

      futureData.forEach((v, i, arr) => {
        const range = arr.slice(i, i + hourRange + 1);
        if (range.length === hourRange + 1) {
          let sum = 0;
          range.forEach((v) => (sum += v.price));
          rangePrices.push({ sum, i });
        }
      });
      rangePrices.sort((a, b) => a.sum - b.sum);
      setX1(rangePrices[0].i);
      console.log("Сalculation");
    }
  }, [hourRange, data]);

  return (
    <>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart
          data={data}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="hour" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="price" stroke="#8884d8" />
          <ReferenceLine x={data.findIndex((el) => el.current)} stroke="red" />
          <ReferenceArea
            x1={x1 + 10}
            x2={x1 + hourRange + 10}
            stroke="green"
            fill="green"
            strokeOpacity={0.3}
            fillOpacity={0.3}
          />
        </LineChart>
      </ResponsiveContainer>
      <ErrorModal
        errorMessage={errorMessage}
        handleClose={() => setErrorMessage(null)}
      />
    </>
  );
}

export default Body;
