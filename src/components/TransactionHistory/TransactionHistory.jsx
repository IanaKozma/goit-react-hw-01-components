import PropTypes from 'prop-types';
import { TransactionHistoryCard, TableHead, TableRow } from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
    return (
        <TransactionHistoryCard>
            <TableHead>
                <TableRow>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </TableRow>
            </TableHead>

            <tbody>
                {items.map((item) => {
                    return (
                        <TableRow key={item.id}>
                            <td>{item.type}</td>
                            <td>{item.amount}</td>
                            <td>{item.currency}</td>
                        </TableRow>
                    )
                })}
            </tbody>
        </TransactionHistoryCard>
    );
}

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
        type: PropTypes.string,
        amount: PropTypes.string,
        currency: PropTypes.string,
        })
    ).isRequired,
};