import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';
import { Card, Button } from 'react-native-elements';
import Deck from './components/Deck';

const DATA = [
  { id: 1, text: 'Card #1', uri: 'https://storage.googleapis.com/trainingiwheal/images/unsplash-01.jpg' },
  { id: 2, text: 'Card #2', uri: 'https://storage.googleapis.com/trainingiwheal/images/unsplash-04.jpg' },
  { id: 3, text: 'Card #3', uri: 'https://storage.googleapis.com/trainingiwheal/images/unsplash-09.jpg' },
  { id: 4, text: 'Card #4', uri: 'https://storage.googleapis.com/trainingiwheal/images/Unsplash.jpg' },
  { id: 5, text: 'Card #5', uri: 'https://storage.googleapis.com/trainingiwheal/images/unsplash-01.jpg' },
  { id: 6, text: 'Card #6', uri: 'https://storage.googleapis.com/trainingiwheal/images/unsplash-04.jpg' },
  { id: 7, text: 'Card #7', uri: 'https://storage.googleapis.com/trainingiwheal/images/unsplash-09.jpg' },
  { id: 8, text: 'Card #8', uri: 'https://storage.googleapis.com/trainingiwheal/images/Unsplash.jpg' }
];


export default class App extends Component {

  renderCard(item) {
    return (
      <Card
        key={item.id}
        image={{ uri: item.uri }}
        title={item.text}
      >
        <Text style={{ marginBottom: 10 }}>
          I can customise the card further
        </Text>
        <Button
          //icon={{ name: 'code' }}
          backgroundColor="#03A9F4"
          title="View Now!"
        />
      </Card>
      // <Text>{item.text}</Text>
    );
  }

  render() {
    return (
      <View style={styles.container}>
          <Deck
            data={DATA}
            renderCard={this.renderCard}
          />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
