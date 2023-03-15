import React, {useState, useEffect} from 'react';
import {View, Text, Image, FlatList, StyleSheet} from 'react-native';

interface Product {
  id: number;
  title: string;
  image: string;
  price: number;
}

interface ProductItemProps {
  title: string;
  image: string;
  price: number;
}

const ProductItem = ({title, image, price}: ProductItemProps) => {
  return (
    <View style={styles.productItemContainer}>
      <Image source={{uri: image}} style={styles.productItemImage} />
      <View style={styles.productItemInfo}>
        <Text style={styles.productItemTitle}>{title}</Text>
        <Text style={styles.productItemPrice}>${price.toFixed(2)}</Text>
      </View>
    </View>
  );
};

const MarketplaceScreen = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/photos?_limit=10')
      .then(response => response.json())
      .then(data =>
        setProducts(
          data.map((item: any) => ({
            id: item.id,
            title: item.title,
            image: item.url,
            price: Math.floor(Math.random() * 100) + 1,
          })),
        ),
      );
  }, []);

  return (
    <View style={styles.container}>
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
        contentContainerStyle={styles.productListContainer}
        style={styles.productList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FB',
  },
  productListContainer: {
    paddingVertical: 20,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  productList: {
    flex: 1,
    paddingBottom: 20,
  },
  productItemContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  productItemImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginRight: 10,
  },
  productItemInfo: {
    flex: 1,
  },
  productItemTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 5,
    color: '#333',
  },
  productItemPrice: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#B12704',
  },
});

export default MarketplaceScreen;
