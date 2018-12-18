import React, {Component} from 'react';
import * as RNIap from 'react-native-iap';

const itemSkus = Platform.select({
  ios: [
    'com.example.coins100'
  ],
  android: [
    'com.example.coins100'
  ]
});

export default class BillingScreen extends Component {
  constructor() {
    this.state = {

    }
  }

  async componentDidMount() {
  try {
    const products = await RNIap.getProducts(itemSkus);
    this.setState({ products });
  } catch(err) {
    console.warn(err); // call err.code and err.message
  }
}
}
