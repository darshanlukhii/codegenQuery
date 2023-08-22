import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { hp, wp } from '../helper/primaryConstant';

interface FiledProps {
  text: string;
  details: string;
  weight: 'normal' | 'bold' | '700';
  isValue: boolean;
}

const Filed: React.FC<FiledProps> = ({ text, details, weight, isValue }) => {
  return (
    <View style={!isValue ? styles.container : styles.sContainer}>
      <Text style={{ width: wp(20), fontWeight: weight }}>{text}</Text>
      <Text style={styles.connectionStyle}>:</Text>
      <Text style={styles.detailTextStyle}>{details}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: hp(2),
  },
  sContainer: {
    flexDirection: 'row',
    marginTop: hp(0.1),
  },
  connectionStyle: {
    fontWeight: '700',
    marginLeft: wp(1),
  },
  detailTextStyle: {
    fontWeight: '400',
    marginLeft: wp(1.5),
  },
});

export default Filed;
