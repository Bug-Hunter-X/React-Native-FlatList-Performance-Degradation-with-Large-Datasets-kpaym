```javascript
import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

const data = Array.from({ length: 1000 }, (_, i) => ({ id: i, text: `Item ${i}` }));

const Item = ({ item }) => (
  <View style={styles.item}>
    <Text>{item.text}</Text>
  </View>
);

const FlatListSolution = () => {
  const renderItem = ({ item }) => <Item item={item} />;

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      ItemSeparatorComponent={() => <View style={styles.separator} />}
      getItemLayout={(data, index) => ({
        length: 50,
        offset: 50 * index,
        index,
      })}
      //Consider windowSize for further optimization if performance still lags.
    />
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 10,
    fontSize: 18,
  },
  separator: {
    height: 1,
    backgroundColor: '#ddd',
  },
});

export default FlatListSolution;
```