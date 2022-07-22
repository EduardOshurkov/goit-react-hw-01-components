import { Transaction } from "./Transaction";
import styles from './TransactionHistory.module.css';
import PropTypes from 'prop-types';


export const TransactionHistory = ({ transactions }) => {
    return (
        <div>
            <table className={styles.transactionHistory}>
                 <thead className={styles.theadTableTransaction}>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>
            <tbody className={styles.tbodyTableTransaction}>
            {transactions.map(({ id, type, amount, currency }) => <Transaction key={id} type={type} amount={amount} currency={currency} />)}
                </tbody>
            </table>
            </div>
    )
}

TransactionHistory.propTypes = {
    id: PropTypes.string,
    type: PropTypes.string,
    amount: PropTypes.string,
    currency: PropTypes.string,
}