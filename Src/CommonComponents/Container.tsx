import {View, SafeAreaView} from 'react-native';
import React from 'react';

const Container = ({children, ...props}:any) => {
  return (
    <SafeAreaView style={{flex:1}}>
      <View {...props}>{children}</View>
    </SafeAreaView>
  );
};

export default Container;
