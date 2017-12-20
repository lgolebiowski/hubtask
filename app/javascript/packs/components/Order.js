import React, { Component } from 'react';
import './Order.css';
import axios from 'axios';
import OrderItem from './OrderItem';


class Order extends Component {
  
  state = {
      orders: this.props.orders
    }

  render() {
   
    const orders = this.state.orders.map((order) => {
      return <OrderItem 
        key= {order.id}
        title = {order.title} 
        url = {order.url} 
        total = {order.thumbnailUrl} 
        />;
    });

    return (

      <div className="Order">
        <div className="Agency">
          <ul>
            {orders}
          </ul>
        </div>

      </div>

    );
  }
}

export default Order;