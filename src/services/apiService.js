import moment from 'moment';
const apiUrl = 'https://dashboard.elering.ee/api';

export async function getPriceData () {
    const start = moment().subtract(10, 'hours').format();
    const end = moment().add(30, 'hours').format();
    const params = new URLSearchParams({
        start, 
        end,
    });

    const response = await fetch(`${apiUrl}/nps/price?${params}`);
    return response.json();
}


const getCurrentPrice = async () => {
    try {
      const response = await fetch("https://dashboard.elering.ee/api/nps/price/EE/current");
      return response.json();
    } catch (error) {
      console.error(error);
      throw new Error("Не удалось загрузить данные");
    }
  };

  export default getCurrentPrice;