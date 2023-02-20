
const loadData = async () => {
    try {
      const response = await fetch("https://dashboard.elering.ee/api/nps/price/EE/current");
      return response.json();
    } catch (error) {
      console.error(error);
      throw new Error("Не удалось загрузить данные");
    }
  };

  export default loadData;