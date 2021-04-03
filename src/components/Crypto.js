import React from "react";
// import axios from "axios";
// import { Line, defaults } from "react-chartjs-2";

// defaults.global.legend.display = false;

const Crypto = ({ name, price, symbol, marketcap, volume, image, priceChange, rank }) => {
  // const [chart, setChart] = useState([]);
  // console.log({ name });
  // const nameLowercase = name.toLowerCase();
  // console.log(nameLowercase);
  // useEffect(() => {
  //   axios
  //     .get(
  //       `https://api.coingecko.com/api/v3/coins/${nameLowercase}/market_chart?vs_currency=eur&days=1`
  //     )
  //     .then((res) => {
  //       setChart(res.data.prices);
  //     })
  //     .catch((err) => console.log(err.id));
  // }, [nameLowercase]);


  // const data = {
  //   labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
  //   datasets: [{ data: [chart[1]], backgroundColor: "transparent", borderColor: "lightblue" }],
  // };

  return (
    <div className="crypto-container">
      <div className="row">
        <div className="row__crypto">
          <h3>{rank}.</h3>
          <img src={image} alt="crypto" className="row__crypto__img" />
          <div className="row__crypto__name-container">
            <h1 className="row__crypto__name">{name}</h1>
            <p className="row__crypto__abbreviation">({symbol})</p>
          </div>
        </div>
        {/* <div className="row__graph-container">
          <Line className="graph" data={data} />
        </div> */}
        <div className="row__data">
          <p className="row__data__price">&#x20AC;{price}</p>
          {/* <p className="crypto-volume">&#x20AC;{volume.toLocaleString()}</p> */}

          {priceChange < 0 ? (
            <p className="row__data__percent text-red">{priceChange.toFixed(2)}%</p>
          ) : (
            <p className="row__data__percent text-green">{priceChange.toFixed(2)}%</p>
          )}

          {/* <p className="crypto-marketcap">Cap: &#x20AC;{marketcap.toLocaleString()}</p> */}
        </div>
      </div>
    </div>
  );
};

export default Crypto;
