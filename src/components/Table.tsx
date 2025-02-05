import React from 'react';
import {FlatList, Pressable, StyleSheet, Text, View} from 'react-native';

import {BaseReport, BaseData, BaseRow} from '../interfaces';

import {amountFormatter} from '../utils';
interface Props {
  data: BaseReport;
  onClickHandler: (id: number) => void;
}
export const Table = ({data, onClickHandler}: Props) => {
  if (!data || !data.data || !data.data.length) {
    return <></>;
  }

  const renderAmount = (amount: number, id: number) => (
    <Pressable key={`${id}-${amount}`} onPress={() => onClickHandler(id)}>
      <Text>{amountFormatter(amount, data.currency)}</Text>
    </Pressable>
  );

  const renderAmounts = (item: BaseRow | BaseData) => {
    const id = 'id' in item ? item.id : item.title;

    return item.amount instanceof Array ? (
      <>
        {item.amount.map(val => (
          <>{renderAmount(val, id as number)}</>
        ))}
      </>
    ) : (
      <>{renderAmount(item.amount, id as number)}</>
    );
  };

  const renderRow = ({item}: {item: BaseRow}) => {
    return (
      <View style={styles.row}>
        <Text>{item.title}</Text>
        {renderAmounts(item)}
      </View>
    );
  };

  const renderItem = ({item}: {item: BaseData}) => (
    <>
      <View style={styles.header}>
        <Text style={styles.bold}>{item.title}</Text>
        {renderAmounts(item)}
      </View>
      <FlatList data={item.details} renderItem={renderRow} />
    </>
  );

  return (
    <View style={styles.table}>
      <View style={styles.headerReport}>
        <Text>{data.title}</Text>
        <Text>{data.currency}</Text>
        <Text>{`${data.rangeOfDate[0]} - ${data.rangeOfDate[1]}`}</Text>
      </View>
      <FlatList
        data={data.data}
        renderItem={renderItem}
        keyExtractor={item => `${item.title}-${Date.now}`}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  table: {
    flexDirection: 'column',
  },
  bold: {
    fontWeight: 'bold',
  },
  headerReport: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 5,
    borderBottomWidth: 1,
    fontWeight: 'bold',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 5,
    borderBottomWidth: 1,
  },
});
