import { useState, useEffect, useMemo } from 'react';
import {
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Line,
  ReferenceLine,
} from 'recharts';
import moment from 'moment';
import DateForm from './DateForm';
import AreaHign from './AreaHigh';
import AreaLow from './AreaLow';
import { getPriceData } from '../services/apiService';
import { setErrorMessage } from '../services/stateService';
import { useDispatch } from 'react-redux';

function Body({ activePrice }) {
  const [data, setData] = useState(null);

  const pastHours = 15;
  const start = moment().subtract(pastHours, 'hours').format();
  const end = moment().add(30, 'hours').format();
  const [searchDate, setSearchDate] = useState({ start, end, pastHours });
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      getPriceData(searchDate)
        .then(({ success, data, message }) => {
          if (!success) {
            throw message[0];
          }

          const newData = data.ee.map((d) => {
            return {
              ...d,
              price: +((d.price / 10) * 1.2).toFixed(2),
              hour: moment.unix(d.timestamp).hour(),
              current: moment().isSame(moment.unix(d.timestamp), 'hour'),
            };
          });
          // const slicedData = newData.slice(0, 20);
          setData(newData);
        })
        .catch((error) => dispatch(setErrorMessage(error.toString)));
    }, 1000);
  }, [searchDate, dispatch]);

  const graphTime = useMemo(() => data?.findIndex((el) => el.current), [data]);

  const chartsChildren = (
    <>
      <CartesianGrid strokeDasharray="1 2" fill="#EFF5FF" fillOpacity={0.2} />
      <XAxis dataKey="hour" />
      <YAxis />
      <Tooltip />
      <Line type="monotone" dataKey="price" stroke="#8884d8" />
      <ReferenceLine x={graphTime} stroke="red" />
    </>
  );

  return (
    <>
      {activePrice === 'high' ? (
        <AreaHign data={data}>{chartsChildren}</AreaHign>
      ) : (
        <AreaLow data={data} searchDate={searchDate}>
          {chartsChildren}
        </AreaLow>
      )}
      <DateForm setSearchDate={setSearchDate} />
    </>
  );
}

export default Body;
