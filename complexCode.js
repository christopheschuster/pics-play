/**
 * Filename: complexCode.js
 * 
 * Description: This code implements a complex data processing algorithm using modern JavaScript features and concepts.
 * It simulates a simplified e-commerce system with multiple components and functionality.
 */

class Product {
  constructor(id, name, price) {
    this.id = id;
    this.name = name;
    this.price = price;
  }
  
  getTotalPrice(quantity) {
    return this.price * quantity;
  }
}

class CartItem {
  constructor(product, quantity) {
    this.product = product;
    this.quantity = quantity;
  }
  
  getSubtotal() {
    return this.product.getTotalPrice(this.quantity);
  }
}

class ShoppingCart {
  constructor() {
    this.items = [];
  }
  
  addItem(item) {
    this.items.push(item);
  }
  
  removeItem(itemId) {
    this.items = this.items.filter(item => item.product.id !== itemId);
  }
  
  getTotalPrice() {
    return this.items.reduce((total, item) => total + item.getSubtotal(), 0);
  }
  
  getItemsCount() {
    return this.items.length;
  }
}

class User {
  constructor(id, name, email) {
    this.id = id;
    this.name = name;
    this.email = email;
  }
  
  displayProfile() {
    console.log(`User ID: ${this.id}`);
    console.log(`Name: ${this.name}`);
    console.log(`Email: ${this.email}`);
  }
}

class Order {
  constructor(user, cart, shippingAddress) {
    this.user = user;
    this.cart = cart;
    this.shippingAddress = shippingAddress;
    this.orderDate = new Date();
    this.status = "Pending";
  }
  
  calculateTotalPrice() {
    return this.cart.getTotalPrice();
  }
  
  placeOrder() {
    this.status = "Placed";
    console.log("Order placed successfully!");
  }
}

// Usage example
const product1 = new Product(1, "Laptop", 1500);
const product2 = new Product(2, "Phone", 1000);

const user = new User(1, "John Doe", "johndoe@example.com");

const cart = new ShoppingCart();
cart.addItem(new CartItem(product1, 2));
cart.addItem(new CartItem(product2, 1));

const shippingAddress = "123 Main St, City, Country";

const order = new Order(user, cart, shippingAddress);
order.placeOrder();

console.log(`Total Price: $${order.calculateTotalPrice()}`);
console.log(`Items Count: ${cart.getItemsCount()}`);
user.displayProfile();