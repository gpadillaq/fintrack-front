import {createSlice} from '@reduxjs/toolkit';
import {Transaction} from '../interfaces';

const initialState = {
  transactions: [] as Transaction[],
  currentTransaction: {} as Transaction,
};

const transactionsSlice = createSlice({
  name: 'transactions',
  initialState,
  reducers: {
    setTransactions(state, action) {
      state.transactions = action.payload;
    },
    cleanTransactions(state, _) {
      state.transactions = initialState.transactions;
    },
    addTransaction(state, action) {
      state.transactions.push(action.payload);
    },
    removeTransaction(state, action) {
      state.transactions = state.transactions.filter(
        transaction => transaction.id !== action.payload,
      );
    },
    setCurrentTransaction(state, action) {
      state.currentTransaction = action.payload;
    },
  },
});

export const {
  setTransactions,
  cleanTransactions,
  addTransaction,
  removeTransaction,
  setCurrentTransaction,
} = transactionsSlice.actions;

export default transactionsSlice.reducer;
