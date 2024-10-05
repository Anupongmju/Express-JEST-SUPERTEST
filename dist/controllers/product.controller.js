"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const productList = [
    {
        id: 1,
        name: 'Bombril',
        price: 8
    },
    {
        id: 1,
        name: 'Sausage',
        price: 3
    }
];
const getAll = (req, res) => {
    res.status(200).send(productList);
};
exports.default = { getAll };
