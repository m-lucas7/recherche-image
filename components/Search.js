import React, { useState, useContext } from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  Button,
  FlatList,
  Text,
  TouchableOpacity,
} from 'react-native';
import ImageItem from './ImageItem';
import GetPictures from './pixabay';
import {listeFav} from './AppContext'

export default function Search({ navigation }) {
  const [motrecherche, setMotrecherche] = useState();
  const [data_img, setData_img] = useState([]);
  const [favorites, setFavorites] = useContext(listeFav);

  const addToFavorites = (image) => {
    setFavorites([...favorites, image]);
  };

  return (
    <View style={styles.container}>
      <TextInput
        onChangeText={(text) => setMotrecherche(text)}
        value={motrecherche}
        style={styles.textinput}
        placeholder="Mots Clefs"
      />
      <Button
        style={styles.button}
        title="Rechercher"
        onPress={() => {
          GetPictures(motrecherche).then((rep) => {
            setData_img(rep.hits);
          });
        }}
      />
      <FlatList
        data={data_img}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View>
            <TouchableOpacity
              onPress={() => navigation.navigate('Détail', { image: {item} })}>
              <ImageItem image={item} />
            </TouchableOpacity>
            <Button
              title="Ajouter aux favoris"
              onPress={() => addToFavorites(item)}
            />
          </View>
        )}
      />
      <Button
        title="Voir les favoris"
        onPress={() => navigation.navigate('Favoris', { favorites })}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  textinput: {
    borderWidth: 1,
    marginLeft: 5,
    marginRight: 5,
    marginBottom: 5,
  },
});