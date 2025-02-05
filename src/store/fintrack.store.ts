import {configureStore} from '@reduxjs/toolkit';

import transactionsSlice from '../reducers/transactions.reducer';

const store = configureStore({
  reducer: {
    transactions: transactionsSlice,
  },
});

export default store;
