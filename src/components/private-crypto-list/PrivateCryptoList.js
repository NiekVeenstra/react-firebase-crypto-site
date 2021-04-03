import React from "react";
import AddCoin from "./AddCoin";
import CoinList from "./CoinList";

const PrivateCryptoList = () => {
  return (
    <div className="private-crypto-list">
      <div className="private-crypto-list__inner-container">
        <AddCoin />
        <CoinList />
      </div>
    </div>
  );
};

export default PrivateCryptoList;
