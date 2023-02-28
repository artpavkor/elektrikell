const apiUrl = 'https://dashboard.elering.ee/api';

export async function getPriceData ({start, end}) {

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