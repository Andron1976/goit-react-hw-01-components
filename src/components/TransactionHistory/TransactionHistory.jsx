import { TransactionHistoryItem } from '../TransactionHistoryItem/TransactionHistoryItem';
import s from './transactionHistory.module.css';

export const TransactionHistory = ({items}) => {
    return (
<td className={s.transHist}>
{items.map((el) => (
          <TransactionHistoryItem key={el.id} items={el} />
        ))}
</td>
)};
