import PropTypes from "prop-types";
import s from './transactionHistoryItem.module.css';

export const TransactionHistoryItem = (
   {items, bgColor} = {items: {type: '', amount: 0, currency: ''}, bgColor: 'white'}
  ) => {
    const {type, amount, currency} = items;
    return (

    <tr className={s.tableString} style={{backgroundColor: bgColor}}>
      <td className={s.tableStringName}>{type}</td>
      <td className={s.tableStringName}>{amount}</td>
      <td className={s.tableStringNameRight}>{currency}</td>
    </tr>
    )
};

TransactionHistoryItem.propTypes = {
  items: PropTypes.shape({type: PropTypes.string.isRequired, amount: PropTypes.number.isRequired, currency: PropTypes.string.isRequired}),
  bgColor: PropTypes.string.isRequired,
};

