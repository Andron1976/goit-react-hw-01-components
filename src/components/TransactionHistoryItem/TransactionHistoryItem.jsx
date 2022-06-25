import PropTypes from "prop-types";

export const TransactionHistoryItem = ({items}) => {
    const {type, amount, currency} = items;
    return (

    <tr>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>

    )
};

TransactionHistoryItem.propTypes = {
  items: PropTypes.shape({type: PropTypes.string, amount: PropTypes.number, currency: PropTypes.string}),
};

