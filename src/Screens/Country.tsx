import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import {useContinentQueryQuery} from '../generated';
import color from '../helper/color';

interface Props {
  route: any;
}

const Country: React.FC<Props> = () => {
  const {data} = useContinentQueryQuery();
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data?.continents}
        showsVerticalScrollIndicator={false}
        bounces={false}
        renderItem={({item}) => {
          return (
            <View style={styles.postsConStyle}>
              <TouchableOpacity style={styles.post}>
                <View style={styles.item}>
                  <Text style={styles.postTitle}>{item.name}</Text>
                </View>
              </TouchableOpacity>
            </View>
          );
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  postsConStyle: {
    margin: 10,
    alignItems:'center',
    justifyContent:'center'
  },
  post: {
    backgroundColor: color.primary,
    padding: 15,
    width: 250,
    borderRadius: 10,
    marginBottom: 20,
  },
  item: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  postTitle: {
    color: color.white,
    textTransform: 'capitalize',
  },
});

export default Country;
