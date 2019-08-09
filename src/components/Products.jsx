import React, { Component } from "react";

export class Products extends Component {
  state = {
    products: []
  };

  componentDidMount() {
    fetch("https://api.mercadolibre.com/sites/MLU/search?q=phone")
      .then(res => res.json())
      .then(data => {
        this.setState({ products: data.results });
        console.log(data);
      })
      .catch(console.log);
  }

  render() {
    const { products } = this.state;

    return (
      <div className="container">
        <h1>Products</h1>
        <div className="ui nine column grid">
          { products.map(product => (
            <div className="column">
              <div className="ui fluid card">
                <div className="image">
                  <img src={product.thumbnail} />
                </div>
                <div className="content">
                  <div className="header">{product.title}</div>
                  <div class="description">
                  {product.installments.currency_id} {product.installments.amount}
                    <a href={product.permalink}> IR </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
