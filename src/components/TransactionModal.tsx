import {useForm, Controller} from 'react-hook-form';
import {Modal, View, Text, StyleSheet, Button} from 'react-native';
import {useSelector} from 'react-redux';
import React from 'react';

import {Transaction} from '../interfaces';
import {TransactionDto} from '../domain/dtos/transactions.dto';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export const TransactionModal = ({isOpen, onClose}: Props) => {
  const currentTransaction = useSelector(
    (state: any) => state.transactions.currentTransaction as Transaction,
  );
  const {control, handleSubmit} = useForm();

  const onSubmit = (data: TransactionDto) => {
    console.log(data); // Handle form submission
  };

  if (!currentTransaction) {
    return null;
  }

  return (
    <Modal
      visible={isOpen}
      animationType="slide"
      onRequestClose={onClose}
      transparent={true}
      presentationStyle="overFullScreen">
      <View style={styles.container}>
        <View style={styles.header}>
          <Text>Transaction</Text>

          <Button title="Close" onPress={onClose} />
        </View>

        <View style={styles.body}>
          <Text>{currentTransaction.type}</Text>
          <Text>{currentTransaction.description}</Text>
          <Text>{currentTransaction.amount}</Text>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0.4,
    width: '80%',
    borderRadius: 25,
    margin: 'auto',
    borderWidth: 1,
    borderColor: '#333333',
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 14,
    borderBottomWidth: 1,
  },
  body: {
    padding: 14,
  },
});
