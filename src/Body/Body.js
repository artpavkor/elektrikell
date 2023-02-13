import { ResponsiveContainer, LineChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Line } from "recharts";

function Body () {
    const data = [
        {
            name: 'Page A',
            pv: 2400,
            uv: 4000,
        },
        {
            name: 'Page B',
            pv: 1400,
            uv: 3000,
        },
        {
            name: 'Page C',
            pv: 9800,
            uv: 2000,
        },
        {
            name: 'Page D',
            pv: 3900,
            uv: 2800,
        }
    ]
    return (
        <ResponsiveContainer width='100%' height={400}>
         <LineChart data={data}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="pv" stroke="#8884d8" />
        <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
    </LineChart>
    </ResponsiveContainer>
    )
}

export default Body;