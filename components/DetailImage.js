// /components/DetailImage.js
import React, { useContext, useState, useEffect } from 'react';
import { StyleSheet, View, Text, Image, Button } from 'react-native';
import { listeFav } from './AppContext';

const DetailImage = ({ navigation, route }) => {
  const img = route.params.image.item || 'unknown';
  const { lesFavoris, setlesFavoris } = useContext(listeFav) || {
    lesFavoris: [],
    setlesFavoris: () => {},
  };

  const libbuttonfav = (id, lesFavoris) => {
    if (lesFavoris && lesFavoris.findIndex((idimg) => idimg === id) === -1) {
      return 'Ajouter aux favoris';
    } else {
      return 'Supprimer des favoris';
    }
  };
  const removeFromFavorites = (id) => {
    if (lesFavoris) {
      const updatedFavorites = lesFavoris.filter((idimg) => idimg !== id);
      setlesFavoris(updatedFavorites);
    }
  };

  const addToFavorites = (id) => {
    setlesFavoris((prevFavoris) => [...(prevFavoris || []), id]);
    console.log(lesFavoris); // Note: This log may not reflect the updated state immediately
  };

  const togglefav = (id) => {
    setlesFavoris((prevFavoris) => {
      if (
        prevFavoris &&
        prevFavoris.findIndex((idimg) => idimg === id) === -1
      ) {
        addToFavorites(id);
      } else {
        removeFromFavorites(id);
      }
      return prevFavoris; // Return the updated state
    });

    // Update txtbutton after setting the new state
    setTextbutton(libbuttonfav(id, lesFavoris));
  };

  const [txtbutton, setTextbutton] = useState(libbuttonfav(img.id, lesFavoris));

  useEffect(() => {
    setTextbutton(libbuttonfav(img.id, lesFavoris));
  }, [lesFavoris, img.id]);

  return (
    <View style={styles.container}>
      <Image
        style={{
          width: img.previewWidth,
          height: img.previewHeight,
          marginBottom: 10,
        }}
        source={{ uri: img.previewURL }}
      />
      <Button
        title={txtbutton}
        onPress={() => {
          console.log(lesFavoris);
          togglefav(img.id);
        }}
      />
      <Text style={styles.text}>id : {img.id}</Text>
      <Text style={styles.text}>type : {img.type}</Text>
      <Text style={styles.text}>tags : {img.tags}</Text>
      <Text style={styles.text}>downloads : {img.downloads}</Text>
      <Text style={styles.text}>favorites : {img.favorites}</Text>
      <Text style={styles.text}>likes : {img.likes}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 15,
  },
});

export default DetailImage;
