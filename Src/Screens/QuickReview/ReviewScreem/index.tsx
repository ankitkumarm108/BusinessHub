import {Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import Container from '../../../CommonComponents/Container';
import { CommonDropdown, DropdownWithImage } from './component/commonDropdown';
import { Images } from '../../../Utils/Variables';

const local_data = [
    {
      value: '1',
      lable: 'Country 1',
      image: {
        uri: 'https://www.vigcenter.com/public/all/images/default-image.jpg',
      },
    },
    {
      value: '2',
      lable: 'Country 2',
      image: {
        uri: 'https://www.vigcenter.com/public/all/images/default-image.jpg',
      },
    },
    {
      value: '3',
      lable: 'Country 3',
      image: {
        uri: 'https://www.vigcenter.com/public/all/images/default-image.jpg',
      },
    },
    {
      value: '4',
      lable: 'Country 4',
      image: {
        uri: 'https://www.vigcenter.com/public/all/images/default-image.jpg',
      },
    },
    {
      value: '5',
      lable: 'Country 5',
      image: {
        uri: 'https://www.vigcenter.com/public/all/images/default-image.jpg',
      },
    },
  ];
  const data = [
    { label: 'Item 1', value: '1' },
    { label: 'Item 2', value: '2' },
    { label: 'Item 3', value: '3' },
    { label: 'Item 4', value: '4' },
    { label: 'Item 5', value: '5' },
    { label: 'Item 6', value: '6' },
    { label: 'Item 7', value: '7' },
    { label: 'Item 8', value: '8' },
    { label: 'Item 9', value: '9' },
    { label: 'Item 10', value: '10' },
    { label: 'Item 11', value: '11' },
    { label: 'Item 12', value: '12' },
    { label: 'Item 13', value: '13' },
    { label: 'Item 14', value: '14' },
    { label: 'Item 15', value: '15' },
    { label: 'Item 16', value: '16' },
  ];
const ReviewScreen = () => {
    const [loader, setLoader] = useState(false)
    const [platform, setPlatforn] = useState(null)
    const [product, setProduct] = useState(null)
    console.log("this is product",product)
    const onChangeProduct=(item)=>{
        setProduct(item)
        console.log("this is item",item)
        
    }

    const onChangePlatform=(item)=>{
        // setLoader(true)
        // setPlatforn(item)
        // console.log("this is item",item)
        // setLoader(false)

    }


  return (
   <Container style={styles.container}>
    <View style={{paddingTop:16,paddingHorizontal:16}}>
    <DropdownWithImage value={platform?.value} data={local_data} onChange={onChangePlatform} />
    </View>
    {
        !loader && (   <View style={{flexDirection:"row",paddingTop:16,paddingHorizontal:16}}>
            <View style={{flex:1,flexGrow:1,paddingRight:6}}>
        <CommonDropdown data={data} value={product?.value} onChange={onChangeProduct} value={platform?.value} />
        </View>
        <TouchableOpacity style={{backgroundColor:"white",alignItems:"center",justifyContent:"center",paddingHorizontal:6,borderRadius:5}}>
        <Image source={Images.setting} style={{height:24,width:24}} />
    
        </TouchableOpacity>
        </View>)
    }
 
    <View>
        
    </View>
   </Container>
  );
};

export default ReviewScreen;

const styles = StyleSheet.create({
    container:{flex:1,backgroundColor:'#F5F6FA'}
});
