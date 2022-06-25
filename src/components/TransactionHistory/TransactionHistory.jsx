import { TransactionHistoryItem } from '../TransactionHistoryItem/TransactionHistoryItem';
import s from './transactionHistory.module.css';

export const TransactionHistory = ({items}) => {
    return (
<>
<table className={s.transactionHistory}>
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>
  <tbody>
{items.map((el) => (
          <TransactionHistoryItem key={el.id} items={el} />
        ))}
         </tbody>
</table>
</>
)};

