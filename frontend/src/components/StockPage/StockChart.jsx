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
import s from "./StockPage.module.css";

const StockChart = ({ graphData }) => {
  console.log(graphData);
  return (
    <div className={s.graph_container}>
      <ResponsiveContainer width="100%" aspect={2}>
        <LineChart data={graphData}>
          <Line
            type="monotone"
            dataKey="value"
            stroke="#8884d8"
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default StockChart;
