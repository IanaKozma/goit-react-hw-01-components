import styled from '@emotion/styled';

export const TransactionHistoryCard = styled.table`
    width: 100%;
`;

export const TableHead = styled.thead`
    background-color: #2a99f3;
    color: #fff;
`;

export const TableRow = styled.tr`
    text-align: center;
    height: 45px;

    &:nth-child(2n) {
        background-color: #f1f1f1;
    }
`;