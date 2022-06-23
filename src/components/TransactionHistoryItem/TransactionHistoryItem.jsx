import s from './transactionHistoryItem.module.css';
import PropTypes from "prop-types";

export const TransactionHistoryItem = ({items}) => {
    const {type, amount, currency} = items;
    return (
  <table className={s.transactionHistory}>
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
  </tbody>
</table>
    )
};

TransactionHistoryItem.propTypes = {
  items: PropTypes.shape({type: PropTypes.string, amount: PropTypes.number, currency: PropTypes.string}),
};

