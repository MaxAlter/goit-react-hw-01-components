import React from 'react';
import PropTypes from 'prop-types';
import style from './TransactionHistory.module.css';

const TransactionHistory = ({ items }) => (
  <div className={style.bgc}>
    <table className={style['transaction-history']}>
      <thead>
        <tr className={style.thead_tr}>
          <th className={style.type}>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody className={style.tbody}>
        {items.length > 0 &&
          items.map(el => (
            <tr key={el.id} className={style.tbody_tr}>
              <td className={style.type_td}>{el.type}</td>
              <td className={style.amount_td}>{el.amount}</td>
              <td className={style.currency_td}>{el.currency}</td>
            </tr>
          ))}
      </tbody>
    </table>
  </div>
);

TransactionHistory.defaultProps = {
  items: [],
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      type: PropTypes.string,
      amount: PropTypes.string,
      currency: PropTypes.string,
    }),
  ),
};

export default TransactionHistory;
