  import React from 'react';
  import { StyleSheet, View, FlatList, Image, Text } from 'react-native';
  import ImageItem from './ImageItem';
  import {listeFav} from './AppContext'

  export default function Favoris({ route }) {
    const { favorites } = route.params;

    return (
      <View style={styles.container}>
        <FlatList
          data={favorites}
          renderItem={({ item }) => (
            <View style={styles.item_container}>
              <ImageItem image={item} />
              <Text style={styles.title_text}>{item.tags}</Text>
            </View>
          )}
        />
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: 5,
      marginLeft: 5,
      marginRight: 5,
    },
    item_container: {
      flexDirection: 'row',
      marginBottom: 10,
    },
    title_text: {
      marginLeft: 5,
    },
  });