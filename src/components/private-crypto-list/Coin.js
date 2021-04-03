import React from "react";
import { Link } from "react-router-dom";

const Coin = ({ coin, deleteCoin }) => {
  return (
    <Link className="private-coin-link" to={`/coins/${coin.id}`}>
      <li className="private-coin">
        <img className="private-coin__icon" src={coin.image} alt="crypto-sign" />
        <div className="private-coin__container2">
          <div className="private-coin__container1">
            <span className="private-coin__name">{coin.id}</span>
            <span className="private-coin__abbreviation">({coin.symbol})</span>
          </div>
          <div className="private-coin__container3">
            <span className="private-coin__current-price">&#x20AC;{coin.current_price}</span>
            <span
              className={
                coin.price_change_percentage_24h < 0
                  ? "private-coin__price-change-24 text-red"
                  : "private-coin__price-change-24 text-green"
              }
            >
              {coin.price_change_percentage_24h.toFixed(2)}%
            </span>
          </div>
        </div>
        <span
          className="private-coin__delete-icon"
          onClick={(e) => {
            e.preventDefault();
            deleteCoin(coin.id);
          }}
        >
          <img
            className="private-coin__delete-icon__img"
            src="https://i.postimg.cc/GmJw75fZ/x-106506.png"
            alt=""
          />
        </span>
      </li>
    </Link>
  );
};

export default Coin;
