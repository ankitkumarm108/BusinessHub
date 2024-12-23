import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {SelectCountry, Dropdown} from 'react-native-element-dropdown';

const DropdownWithImage = ({data = [], value = '', onChange = () => {}}) => {
  const [isFocus, setIsFocus] = useState(false);

  return (
    <SelectCountry
      style={styles.dropdown}
      selectedTextStyle={styles.selectedTextStyle}
      placeholderStyle={styles.placeholderStyle}
      imageStyle={styles.imageStyle}
      inputSearchStyle={styles.inputSearchStyle}
      iconStyle={[
        data?.length <= 1 ? styles.icon0 : styles.iconStyle,
        isFocus && {transform: [{rotate: '180deg'}]},
      ]}
      value={value}
      data={data}
      valueField="value"
      labelField="lable"
      imageField="image"
      placeholder="Select country"
      disable={data?.length <= 1}
      onChange={onChange}
      backgroundColor="rgba(0,0,0,0.3)"
      containerStyle={{
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 10,
        marginTop: 10,
      }}
      activeColor="#F5F6FA"
      onFocus={() => setIsFocus(true)}
      onBlur={() => setIsFocus(false)}
    />
  );
};

const CommonDropdown = ({data = [], value = '', onChange = () => {}}) => {
  const [isFocus, setIsFocus] = useState(false);

  return (
    <View>
      <Dropdown
      autoScroll={true}
        style={[styles.dropdown]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={[
          data?.length <= 1 ? styles.icon0 : styles.iconStyle,
          isFocus && {transform: [{rotate: '180deg'}]},
        ]}
        data={data}
        labelField="label"
        valueField="value"
        placeholder={'Select item'}
        searchPlaceholder="Search..."
        value={value}
        backgroundColor="rgba(0,0,0,0.3)"
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={onChange}
        containerStyle={{
          backgroundColor: 'white',
          padding: 10,
          borderRadius: 10,
          marginTop: 10,
        }}
        activeColor="#F5F6FA"
       autoScroll={true}
      />
    </View>
  );
};


const styles = StyleSheet.create({
  dropdown: {
    //   margin: 16,
    //   height: 50,
    borderColor: '#FFFFFF',
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  imageStyle: {
    width: 24,
    height: 24,
  },
  placeholderStyle: {
    fontSize: 16,
    paddingVertical: 10,
  },
  selectedTextStyle: {
    fontSize: 16,
    marginLeft: 8,
    paddingVertical: 10,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
  icon0: {
    height: 0,
    width: 0,
  },
});

export {CommonDropdown, DropdownWithImage};
