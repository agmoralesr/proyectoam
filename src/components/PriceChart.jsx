import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

ChartJS.register();

export default function PriceChart({ prices }) {
  const data = {
    labels: prices.map((p) => new Date(p[0]).toLocaleDateString()),
    datasets: [
      {
        label: "Precio USD",
        data: prices.map((p) => p[1]),
        borderColor: "#4CAF50",
        tension: 0.3
      }
    ]
  };

  return <Line data={data} />;
}
