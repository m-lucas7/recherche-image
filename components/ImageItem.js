// Components/ImageItem.js
import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
export default function Imageitem(image) {
  const img = image.image;
  //console.log(img);
  return (
    <View style={styles.main_container}>
      <Image
        style={{ width: img.previewWidth, height: img.previewHeight }}
        source={{ uri: img.previewURL }}
      />
      <View style={{ flexDirection: 'column' }}>
        <Text style={styles.title_text}>Id : {img.id}</Text>
        <Text style={styles.title_text}>tags : {img.tags}</Text>
        <Text style={styles.title_text}>downloads : {img.downloads}</Text>
        <Text style={styles.title_text}>favorites : {img.favorites}</Text>
        <Text style={styles.title_text}>likes : {img.likes}</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  main_container: {
    height: 100,
    flex: 1,
    marginTop: 5,
    marginLeft: 5,
    marginRight: 5,
    flexDirection: 'row',
  },
  title_text: {
    marginLeft: 5,
  },
});
