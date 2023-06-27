const apiUrl = 'https://dashboard.elering.ee/api';

export async function getPriceData({ start, end }) {

    const params = new URLSearchParams({
        start,
        end,
    });

    const response = await fetch(`${apiUrl}/nps/price?${params}`);
    return response.json();
}

const getCurrentPrice = async () => {

    const response = await fetch("https://dashboard.elering.ee/api/nps/price/EE/current");
    return response.json();

};
export default getCurrentPrice;
