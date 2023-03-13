import React from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  ScrollView,
  StyleSheet,
} from 'react-native';

interface Product {
  id: number;
  title: string;
  image: string;
  price: number;
}

const products: Product[] = [
  {
    id: 1,
    title: 'Product 1',
    image: 'https://via.placeholder.com/150',
    price: 10.99,
  },
  {
    id: 2,
    title: 'Product 2',
    image: 'https://via.placeholder.com/150',
    price: 19.99,
  },
  // add more products here
];

interface ProductItemProps {
  title: string;
  image: string;
  price: number;
}

const ProductItem = ({title, image, price}: ProductItemProps) => {
  return (
    <View style={styles.productItemContainer}>
      <Image source={{uri: image}} style={styles.productItemImage} />
      <Text style={styles.productItemTitle}>{title}</Text>
      <Text style={styles.productItemPrice}>${price.toFixed(2)}</Text>
    </View>
  );
};

const MarketplaceScreen = () => {
  return (
    <ScrollView>
      <View style={styles.productListContainer}>
        <FlatList
          data={products}
          renderItem={({item}) => (
            <ProductItem
              title={item.title}
              image={item.image}
              price={item.price}
            />
          )}
          keyExtractor={item => item.id.toString()}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  productListContainer: {
    padding: 10,
    backgroundColor: '#fff',
  },
  productItemContainer: {
    backgroundColor: '#f5f5f5',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  productItemImage: {
    width: 80,
    height: 80,
    marginRight: 10,
  },
  productItemTitle: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  productItemPrice: {
    fontWeight: 'bold',
    fontSize: 16,
    marginLeft: 'auto',
  },
});

export default MarketplaceScreen;
