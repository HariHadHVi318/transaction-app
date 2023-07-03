import React, { useEffect, useState } from 'react';
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TableContainer,
  Paper,
  Typography,
} from '@material-ui/core';
import CustomerModel from './CustomerModel';

const TransactionList = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const staticData = [
        {
          customer: new CustomerModel('123', 'John Doe', '123 Main St', '555-1234'),
          transferAmount: 1000,
          transferCurrency: 'USD',
          reference: 'CUS202307031',
        },
        {
          customer: new CustomerModel('456', 'Jane Smith', '456 Elm St', '555-5678'),
          transferAmount: 500,
          transferCurrency: 'EUR',
          reference: 'CUS202307032',
        },
      ];
      

    setTransactions(staticData);
  }, []);

  return (
    <div>
      <Typography variant="h3">Submitted Transactions</Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Customer Name</TableCell>
              <TableCell>Transfer Amount</TableCell>
              <TableCell>Transfer Currency</TableCell>
              <TableCell>Reference</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {transactions.map((transaction, index) => (
              <TableRow key={index}>
                <TableCell>{transaction.customerName}</TableCell>
                <TableCell>{transaction.transferAmount}</TableCell>
                <TableCell>{transaction.transferCurrency}</TableCell>
                <TableCell>{transaction.reference}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default TransactionList;
