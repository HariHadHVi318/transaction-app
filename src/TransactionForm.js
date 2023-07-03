import React, { useState } from 'react';
import { TextField, Button, RadioGroup, FormControlLabel, Radio, Select, MenuItem, InputLabel, FormControl } from '@material-ui/core';
import CustomerModel from './CustomerModel';

const TransactionForm = () => {
    const [customer, setCustomer] = useState(new CustomerModel('', '', '', ''));
    const [transactionType, setTransactionType] = useState('new');
    const [customerNumber, setCustomerNumber] = useState('');
    const [customerName, setCustomerName] = useState('');
    const [customerAddress, setCustomerAddress] = useState('');
    const [customerPhone, setCustomerPhone] = useState('');
    const [transferAmount, setTransferAmount] = useState('');
    const [transferCurrency, setTransferCurrency] = useState('');
    const [beneficiaryBank, setBeneficiaryBank] = useState('');
    const [beneficiaryAccountNumber, setBeneficiaryAccountNumber] = useState('');
    const [paymentDetails, setPaymentDetails] = useState('');
    const [cardDetails, setCardDetails] = useState('');
    const [region, setRegion] = useState('');
    const phonePattern = /^[0-9]+$/;
    const amountPattern = /^[0-9]+$/;
    const bankPattern = /^[A-Za-z\s]+$/;
    const paymentPattern = /^[A-Za-z\s]+$/;
    const generateReference = () => {
        const currentDate = new Date();
        const year = currentDate.getFullYear();
        const month = String(currentDate.getMonth() + 1).padStart(2, '0');
        const day = String(currentDate.getDate()).padStart(2, '0');
        const sequenceNumber = '001'; // Example sequence number
        return `CUS${year}${month}${day}${sequenceNumber}`;
    };
    const [transaction, setTransaction] = useState({
        // other fields...
        reference: generateReference(),
    });


    const handleCustomerNumberChange = (event) => {
        const inputCustomerNumber = event.target.value;
        setCustomerNumber(inputCustomerNumber);

        const customerData = {
            "customerNumber": "123",
            "customerName": "John Doe",
            "customerAddress": "123 Main St",
            "customerPhone": "555-1234"
        };

        if (inputCustomerNumber === customerData.customerNumber) {
            setCustomerName(customerData.customerName);
            setCustomerAddress(customerData.customerAddress);
            setCustomerPhone(customerData.customerPhone);
        } else {
            setCustomerName('');
            setCustomerAddress('');
            setCustomerPhone('');
        }
    };

    const handleTransactionTypeChange = (event) => {
        setTransactionType(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        setTransactionType('new');
        setCustomerNumber('');
        setCustomerName('');
        setCustomerAddress('');
        setCustomerPhone('');
        setTransferAmount('');
        setTransferCurrency('');
        setBeneficiaryBank('');
        setBeneficiaryAccountNumber('');
        setPaymentDetails('');
        setCardDetails('');
        setRegion('');
    };
    const handleChange = (event) => {
        const { name, value } = event.target;

        // Perform validation based on the field name
        if (name === 'beneficiaryBank' && !bankPattern.test(value)) {
            // Invalid bank format
            return;
        }
        if (name === 'paymentDetails' && !paymentPattern.test(value)) {
            // Invalid payment details format
            return;
        }

        setTransactionType((prevTransaction) => ({
            ...prevTransaction,
            [name]: value,
        }));
    };



    return (
        <>
            <form onSubmit={handleSubmit}>
                <h3>New Bank Transaction</h3>
                <RadioGroup name="transactionType" value={transactionType} onChange={handleTransactionTypeChange}>
                    <FormControlLabel value="new" control={<Radio />} label="New" />
                    <FormControlLabel value="existing" control={<Radio />} label="Existing" />
                </RadioGroup>
                <input
                    type="text"
                    name="customerNumber"
                    value={customer.customerNumber}
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    name="customerName"
                    value={customer.customerName}
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    name="customerAddress"
                    value={customer.customerAddress}
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    name="customerPhoneNumber"
                    value={customer.customerPhoneNumber}
                    onChange={handleChange}
                    required
                />
                <TextField
                    label="Reference"
                    name="reference"
                    value={transaction.reference}
                    onChange={handleChange}
                    disabled
                    fullWidth
                />

                <TextField
                    required
                    label="Reference"
                    fullWidth
                />
                <TextField
                    required
                    label="Customer Number"
                    value={customerNumber}
                    onChange={handleCustomerNumberChange}
                    fullWidth
                />
                <TextField
                    required
                    label="Customer Name"
                    value={customerName}
                    disabled={transactionType === 'existing'}
                    fullWidth
                />
                <TextField
                    required
                    label="Customer Address"
                    value={customerAddress}
                    disabled={transactionType === 'existing'}
                    fullWidth
                />
                <TextField
                    required
                    label="Customer Phone Number"
                    value={customerPhone}
                    disabled={transactionType === 'existing'}
                    fullWidth
                />
                <TextField
                    required
                    label="Transfer Amount"
                    fullWidth
                />
                <TextField
                    required
                    label="Transfer Currency"
                    fullWidth
                />
                <TextField
                    required
                    label="Beneficiary Bank"
                    fullWidth
                />
                <TextField
                    required
                    label="Beneficiary Account Number"
                    fullWidth
                />
                <TextField
                    required
                    label="Payment Details"
                    fullWidth
                />
                <TextField
                    required
                    label="Credit/Debit Card Details"
                    fullWidth
                />
                <FormControl fullWidth>
                    <InputLabel id="region-label">Region</InputLabel>
                    <Select
                        labelId="region-label"
                        value={region}
                        onChange={(event) => setRegion(event.target.value)}
                    >
                        <MenuItem value="Port Louis">Port Louis</MenuItem>
                        <MenuItem value="Curepipe">Curepipe</MenuItem>
                        <MenuItem value="Vacoas">Vacoas</MenuItem>
                        <MenuItem value="Port Mathurin">Port Mathurin</MenuItem>
                    </Select>
                </FormControl>
                <Button type="submit" variant="contained" color="primary">Submit</Button>
            </form>
            <FormControl>
                <InputLabel htmlFor="currency">Currency</InputLabel>
                <Select
                    native
                    value={transaction.currency}
                    onChange={handleChange}
                    inputProps={{
                        name: 'currency',
                        id: 'currency',
                    }}
                >
                    <option value="AED">AED</option>
                    <option value="EUR">EUR</option>
                    <option value="CHF">CHF</option>
                    <option value="MUR">MUR</option>
                    <option value="USD">USD</option>
                </Select>
            </FormControl></>

    );
};

export default TransactionForm;
