import React from "react";

const CoinData = ({ data }) => {
  const renderData = () => {
    if (data) {
      return (
        <div className="">
          <div className="">
            <div className="">
              <span>Market Cap</span>
              <span>{data.market_cap}</span>
            </div>
            <hr />
            <div className="">
              <span>Total supply</span>
              <span>{data.total_supply}</span>
            </div>
          </div>
          
          <div className="">
            <div className="">
              <span>Volume(24h)</span>
              <span>{data.total_volume}</span>
            </div>
            <hr />
            <div className="">
              <span>High 24h</span>
              <span>{data.high_24h}</span>
            </div>
          </div>

          <div className="">
            <div className="">
              <span>Circulating Supply</span>
              <span>{data.circulating_supply}</span>
            </div>
            <hr />
            <div className="">
              <span>Low 24h</span>
              <span>{data.low_24h}</span>
            </div>
          </div>
        </div>
      );
    }
  };

  return <div>{renderData()}</div>;
};

export default CoinData;
