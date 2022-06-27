import PropTypes from "prop-types";
import s from './transactionHistoryItem.module.css';

export const TransactionHistoryItem = ({items}) => {
    const {type, amount, currency} = items;
    return (

    <tr className={s.tableString}>
      <td className={s.tableStringName}>{type}</td>
      <td className={s.tableStringName}>{amount}</td>
      <td className={s.tableStringNameRight}>{currency}</td>
    </tr>
    )
};

TransactionHistoryItem.propTypes = {
  items: PropTypes.shape({type: PropTypes.string, amount: PropTypes.number, currency: PropTypes.string}),
};

