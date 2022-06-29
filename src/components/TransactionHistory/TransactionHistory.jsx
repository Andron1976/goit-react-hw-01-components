import { TransactionHistoryItem } from '../TransactionHistoryItem/TransactionHistoryItem';
import s from './transactionHistory.module.css';
import PropTypes from "prop-types";

export const TransactionHistory = ({items} = {items: []}) => {
    return (
<>
<table className={s.transactionHistory}>
  <thead>
    <tr className={s.tableHead}>
      <th className={s.tableHeadName}>Type</th>
      <th className={s.tableHeadName}>Amount</th>
      <th className={s.tableHeadNameRight}>Currency</th>
    </tr>
  </thead>
  <tbody className={s.tableBody}>
{items.map((el, index) => (
          <TransactionHistoryItem key={el.id} items={el} bgColor={index%2 === 1 ? 'silver' : 'white'} />
        ))}
         </tbody>
</table>
</>
)};

TransactionHistory.propTypes = {
  items: PropTypes.shape({type: PropTypes.string.isRequired, amount: PropTypes.number.isRequired, currency: PropTypes.string.isRequired}),
};
