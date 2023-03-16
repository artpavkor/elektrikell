import { useState, useEffect } from 'react';
import { ReferenceArea, ResponsiveContainer, LineChart } from 'recharts';
import { rangePricesGenerate } from '../helpers/rangePrices';

// useState это React хук который позволяет работать с состоянием компонента
// Состояние это переменная которая держит в себе держит любой тип данных который касается только етого компонента
// useState принимает как аргумент изначальное состояние
// При первой отрисовке компонента назначиться  переменная с этим изначальным значением 
// useState при инициализации возвращает массив из двух елементов
// [0] = изначальное состояние
// [1] = функция которая меняет значение состояния. В начало название ставим 'set'
// При инициализации изменения состояния запускаеться новая отрисовка компонента.
// Все хуки React называються со слава 'use'

function AreaHign({ data, children }) {

  const [xHign, setXHign] = useState(null);

  useEffect(() => {
    if (!data) return;
    const rangePrices = rangePricesGenerate(data);
    rangePrices.reverse();
    const maxRangePrices = rangePrices.slice(0, rangePrices.length / 2);
    let sum = 0;
    maxRangePrices.forEach(v => {
      sum += v.sum;
    });
    let avereagePrice = sum / maxRangePrices.length;
    maxRangePrices.filter(v => v.sum > avereagePrice)
    setXHign(maxRangePrices.filter(v => v.sum > avereagePrice));

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