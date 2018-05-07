
import React from "react";
import ProductListItem from "./ProductListItem";
import { View, ScrollView, ActivityIndicator } from "react-native";

const baseURL = "http://172.16.108.41:4000";

class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { products: [], isLoading: false };
  }

  componentDidMount() {
      this.setState({isLoading: true})
    fetch(`${baseURL}/products`)
      .then(response => response.json())
      .then(data => {
        this.setState({ products: data, isLoading: false });
      });
  }

  renderResult() {
    return this.state.products.map((c,index) => (
      <ProductListItem
      title={`${c.title}`}
      image={`${baseURL}/images/${c.image}`}
        key = {c.id}
      />
    ));
  }

  render() {
    return <ScrollView>
        { this.state.isLoading ? (
          <ActivityIndicator size="large" color="purple" />
        ) : (
          this.renderResult()
        )}
    
    </ScrollView>;
  }
}

export default ProductList;

