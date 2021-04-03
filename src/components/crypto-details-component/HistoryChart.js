import React, { useEffect, useRef, useState } from "react";
import { Line, defaults } from "react-chartjs-2";
import Chartjs from "chart.js";
import { historyOptions } from "../../chartConfigs/chartConfigs";

const HistoryChart = ({ data }) => {
  const chartRef = useRef();
  const { day, week, year, detail } = data;
  const [timeFormat, setTimeFormat] = useState("24h");

  const determineTimeFormat = () => {
    switch (timeFormat) {
      case "24h":
        return day;
      case "7d":
        return week;
      case "1y":
        return year;
      default:
        return day;
    }
  };

  useEffect(() => {
    if (chartRef && chartRef.current && detail) {
      const chartInstance = new Chartjs(chartRef.current, {
        type: "line",
        data: {
          datasets: [
            {
              label: `${detail.name} price`,
              data: determineTimeFormat(),
              backgroundColor: "rgba(174, 305, 194, 0.5)",
              borderColor: "rgba(174, 305, 194, 0.4)",
              pointRadius: "0",
              borderWidth: 1,
            },
          ],
        },
        options: { ...historyOptions },
      });
    }
  });

  const renderPrice = () => {
    if (detail) {
      return (
        <>
          <p className="current-price">&#x20AC;{detail.current_price.toFixed(2)}</p>
          <p className={detail.price_change_24h < 0 ? "text-red" : "text-green"}>
            {detail.price_change_24h.toFixed(2)}%
          </p>
        </>
      );
    }
  };

  return (
    <div className="chart-container">
      <div>{renderPrice()}</div>
      <div>
        <canvas ref={chartRef} id="myChart"></canvas>
      </div>
      <div className="button-container">
        <button onClick={() => setTimeFormat("24h")} className="1d">
          24h
        </button>
        <button onClick={() => setTimeFormat("7d")} className="7d">
          7d
        </button>
        <button onClick={() => setTimeFormat("1y")} className="365d">
          1y
        </button>
      </div>
    </div>
  );
};

export default HistoryChart;
