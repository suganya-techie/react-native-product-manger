import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, Alert } from "react-native";

import { Ionicons } from '@expo/vector-icons';

const ProductListItem = ({ image, title, key }) => (
    <TouchableOpacity activeOpacity={.5} onPress={()=> Alert.alert("Hello", title)} >
  <View style={styles.container} key={key}>
    <Image source={{uri:image}} style={styles.image} />
    <View style={styles.itemDesc}>
        <Text style={styles.itemName}>{title}</Text> 
        <Ionicons name="ios-heart" size={32} style={styles.favIcon}/>
    </View>
  </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginRight:10,
    flexDirection: 'row',
    marginLeft:10,
    padding: 10,
    flexWrap: 'wrap',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
 image: {
    width: 120, height: 120, resizeMode: 'contain' 
 },
 itemDesc: {
    flex: 1,
    flexDirection: 'row'
 },
  itemName: {
    marginLeft:10, 
    flexWrap: 'wrap',
    flexShrink: 1
  },
  favIcon: {
      color: '#d2d5db',
  }

});

export default ProductListItem;