import { TransactionHistoryItem } from '../TransactionHistoryItem/TransactionHistoryItem';
import s from './transactionHistory.module.css';

export const TransactionHistory = ({items}) => {
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
{items.map((el) => (
          <TransactionHistoryItem key={el.id} items={el} />
        ))}
         </tbody>
</table>
</>
)};

