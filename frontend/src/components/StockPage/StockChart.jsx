import {
  LineChart,
  Line,
  XAxis,
  // YAxis,
  Tooltip,
  // Legend,
  ResponsiveContainer,
} from "recharts";

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const StockChart = ({ graphData }) => {
  graphData = graphData.map(({ price, date }) => {
    const dateTime = new Date(date);
    return {
      Price: price,
      Date: `${months[dateTime.getMonth()]} ${dateTime.getFullYear()}`,
    };
  });

  return (
    <ResponsiveContainer width="100%" aspect={2.4}>
      <LineChart data={graphData} dataKey={"date"}>
        <Tooltip isAnimationActive={false} />
        <XAxis dataKey="Date" hide={true} />
        <Line
          type="monotone"
          dataKey="Price"
          stroke="#00A7e1"
          strokeWidth={2}
          isAnimationActive={false}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default StockChart;
