import {
  LineChart,
  Line,
  // XAxis,
  // YAxis,
  // CartesianGrid,
  // Tooltip,
  // Legend,
  ResponsiveContainer,
} from "recharts";

const StockChart = ({ graphData }) => {
  console.log(graphData);
  return (
    <ResponsiveContainer width="100%" aspect={2}>
      <LineChart width={300} height={100} data={graphData}>
        <Line
          type="monotone"
          dataKey="value"
          stroke="#8884d8"
          strokeWidth={2}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default StockChart;
