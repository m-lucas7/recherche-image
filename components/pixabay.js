// components/pixabay.js
import React from 'react';
const api_key = '40826020-4254275d9734381887026a464';
export default function GetPictures(keyword) {
  //console.log(keyword);
  const url =
    'https://pixabay.com/api/?key=' +
    api_key +
    '&q=' +
    keyword +
    '&image_type=photo&pretty=true';
  return fetch(url)
    .then((response) => response.json())
    .catch((error) => console.error(error));
}
