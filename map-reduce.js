/**
 * Created by faguo on 17-4-8.
 */
"use strict";
function map(a, f) {
    const b = [];
    for (let i = 0; i < a.length; i++) {
        b.push(f(a[i]));

    }
    return b;
}


function reduce(a, f, m) {
    let s = m;
    for (let i = 0; i < a.length; i++) {
        s = f(s, a[i]);
    }
    return s;

}
function findby(arr, match) {
    for (let i = 0; i < arr.length; i++) {
        if (match(arr[i])) {
            return arr[i];
        }
    }
    return undefined;
}

const barcodes = ['001', '001', '002', '005', '004', '002'];
const products = [
    {barcode: '001', name: 'A', price: 12},
    {barcode: '002', name: 'B', price: 13},
    {barcode: '003', name: 'C', price: 14},
    {barcode: '004', name: 'D', price: 15},
    {barcode: '005', name: 'E', price: 16}
];
// const product = findby(products, (product) => product.barcode === '002');
// console.log(product);

const carts = map(barcodes, function (barcode) {
    return findby(products, function (product) {
        return product.barcode === barcode;
    });
});
console.log(carts);

