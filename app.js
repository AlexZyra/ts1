"use strict";
// let firstWord: string = "Hello World on TS"
// console.log(firstWord);
class Subject {
    constructor() {
        this.observers = [];
    }
    subscribe(observer) {
        this.observers.push(observer);
    }
    unsubscribe(observer) {
        this.observers = this.observers.filter(obs => obs !== observer);
    }
    notify(data) {
        this.observers.forEach(observer => observer.update(data));
    }
}
class StockObserver {
    constructor() {
        this.stockPrice = 0;
    }
    update(data) {
        console.log(`Stock price updated: ${data}`);
        this.stockPrice = data;
    }
    getStockPrice() {
        return this.stockPrice;
    }
}
const subject = new Subject();
const observer1 = new StockObserver();
const observer2 = new StockObserver();
subject.subscribe(observer1);
subject.subscribe(observer2);
subject.notify(200);
console.log(`Observer 1 stock price: ${observer1.getStockPrice()}`);
console.log(`Observer 2 stock price: ${observer2.getStockPrice()}`);
subject.notify(180);
console.log(`Observer 1 stock price: ${observer1.getStockPrice()}`);
console.log(`Observer 2 stock price: ${observer2.getStockPrice()}`);
class CreditCardPaymentStrategy {
    pay(amount) {
        console.log(`Paid $${amount} with Credit Card`);
    }
}
class PaypalPaymentStrategy {
    pay(amount) {
        console.log(`Paid $${amount} with Paypal`);
    }
}
class BitcoinPaymentStrategy {
    pay(amount) {
        console.log(`Paid $${amount} with Bitcoin`);
    }
}
class PaymentContext {
    constructor(paymentStrategy) {
        this.paymentStrategy = paymentStrategy;
    }
    executePayment(amount) {
        this.paymentStrategy.pay(amount);
    }
}
const creditCardStrategy = new CreditCardPaymentStrategy();
const paypalStrategy = new PaypalPaymentStrategy();
const bitcoinStrategy = new BitcoinPaymentStrategy();
const paymentContext = new PaymentContext(creditCardStrategy);
paymentContext.executePayment(100);
paymentContext.paymentStrategy = paypalStrategy;
paymentContext.executePayment(50);
paymentContext.paymentStrategy = bitcoinStrategy;
paymentContext.executePayment(200);
