import React, {useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';

import color from '../helper/color';
import {
  ContinentQueryQuery,
  useContinentQueryQuery,
  useQueryQuery,
} from '../generated';

interface Props {
  navigation: any;
}

const Home: React.FC<Props> = ({navigation}) => {
  const {data} = useQueryQuery();

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data?.countries}
        style={styles.wrapper}
        bounces={false}
        renderItem={({item}) => {
          return (
            <View style={styles.postsConStyle}>
              <TouchableOpacity
                style={styles.post}
                onPress={() => navigation.navigate('Post', item)}>
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
    backgroundColor: color.white,
    padding: 10,
  },
  postsConStyle: {
    margin: 10,
  },
  wrapper: {
    flex: 1,
    paddingVertical: 30,
  },
  item: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  header: {
    textAlign: 'center',
    textTransform: 'capitalize',
    fontWeight: 'bold',
    fontSize: 30,
    color: color.primary,
    paddingVertical: 10,
  },
  post: {
    backgroundColor: color.primary,
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
  },
  postTitle: {
    color: color.white,
    textTransform: 'capitalize',
  },
});

export default Home;
