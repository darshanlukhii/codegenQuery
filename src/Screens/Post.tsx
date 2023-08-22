import React from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import color from '../helper/color';
import usePosts from '../hooks/usePosts';
import Filed from '../Component/filed';

interface Props {
  route: any;
}

interface Comment {
  id: number;
  body: string;
  email: string;
}

interface PostData {
  id: number;
  title: string;
  body: string;
}

const Post: React.FC<Props> = ({route}) => {
  const data = route && route.params;

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>{data.name} </Text>
      <View style={styles.post}>
        <Filed text={'Capital'} details={data.capital ? data.capital : "Nothing..."} weight='700' isValue={false}/>
        <Filed text={'Code'} details={data.code ? data.code : "Nothing..."} weight='700' isValue={false}/>
        <Filed text={'Currency'} details={data.currency ? data.currency : "Nothing..."} weight='700' isValue={false}/>
        <Filed text={'Flag'} details={data.emoji ? data.emoji : "Nothing..."} weight='700' isValue={false}/>
        <Filed text={'Languages'} details={data.languages?.[0]?.name ? data.languages?.[0]?.name : " Nothing..."} weight='700' isValue={false}/>
        <Filed text={'Phone'} details={data.phone ? data.phone :  "Nothing..."} weight='700' isValue={false}/>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.white,
    padding: 30,
  },
  header: {
    textAlign: 'center',
    textTransform: 'capitalize',
    fontWeight: 'bold',
    fontSize: 40,
    color: color.primary,
    paddingVertical: 10,
  },
  commentHeader: {
    textAlign: 'center',
    textTransform: 'capitalize',
    fontWeight: 'bold',
    fontSize: 30,
    color: color.primary,
    paddingVertical: 30,
  },
  post: {
    flex: 1,
    paddingVertical: 10,
    alignSelf: 'center',
  },
});

export default Post;
