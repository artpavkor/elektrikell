import moment from "moment";

export const rangePricesGenerate = (data, hourRange = 1) => {

  const timestampNow = moment().unix();
  const futureData = data.filter((el) => el.timestamp > timestampNow);
  const hourRangeLocal = hourRange + 1;

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

  return rangePrices;
};