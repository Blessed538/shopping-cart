import React, { Component } from 'react';
import ShopData from './ShopData';
import PreviewCollection from './../component/PreviewCollection/PreviewCollection';
import Header from './../component/Header/Header';

class Shop extends Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: ShopData,
    };
  }

  render() {
    const { collections } = this.state;
    return (
      <div>
        <div>
          <Header />
        </div>
        <div className="shop-page">
          {collections.map(({ id, ...otherCollectionProps }) => (
            <PreviewCollection key={id} {...otherCollectionProps} />
          ))}
        </div>
      </div>
    );
  }
}

export default Shop;
