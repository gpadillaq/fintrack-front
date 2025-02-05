import React, {useMemo, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';

import {Transaction, BaseRow} from '../interfaces';
import {Table, TransactionModal} from '../components';
import {setCurrentTransaction} from '../reducers/transactions.reducer';
import {StyleSheet, View} from 'react-native';

const TransactionsSumary = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const transactions = useSelector(
    (state: any) => state.transactions.transactions as Transaction[],
  );

  const dispatch = useDispatch();

  const onClickHandler = (id: number) => {
    if (isNaN(id)) {
      return;
    }
    console.log('id', id);
    console.log('transactions', transactions);
    setIsOpenModal(true);
    const transaction = transactions.find((t: Transaction) => t.id === id);

    dispatch(setCurrentTransaction(transaction));
    console.log(transaction);
  };

  const buildReport = useMemo(() => {
    const report = {
      title: 'Transactions Summary',
      currency: 'USD',
      rangeOfDate: ['2021-01-01', '2021-12-31'],
      data: [],
    };

    const data = transactions.reduce((acc, transaction) => {
      const key = transaction.type;
      const index = acc.findIndex((item: BaseRow) => item.title === key);

      if (index > -1) {
        acc[index].amount += transaction.amount;
        acc[index].details.push({
          id: transaction.id,
          title: transaction.description,
          amount: transaction.amount,
        });
      } else {
        acc.push({
          title: key,
          amount: transaction.amount,
          details: [
            {
              id: transaction.id,
              title: transaction.description,
              amount: transaction.amount,
            },
          ],
        });
      }

      return acc;
    }, [] as any);

    report.data = data;

    return report;
  }, [transactions]);

  if (!transactions || !transactions.length) {
    return <></>;
  }

  return (
    <View style={styles.container}>
      <Table data={buildReport} onClickHandler={onClickHandler} />

      {isOpenModal && (
        <TransactionModal
          isOpen={isOpenModal}
          onClose={() => setIsOpenModal(false)}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default TransactionsSumary;
