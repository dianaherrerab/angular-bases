import { Product, taxCaltulation } from "./06-function-destrunturing";

const shoopingCart: Product[] = [
    {
        description: 'Nokia',
        price: 100
    },
    {
        description: 'iPad',
        price: 150
    }
];

// Tax = 0.15
const tax = 0.15;

const [ total, taxTotal ] = taxCaltulation({
    products: shoopingCart,
    tax
});

console.log('Total', total);
console.log('Tax', taxTotal);
