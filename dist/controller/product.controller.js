"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//import { Product } from "../model/product";
//import { promisePool } from ".../config/db";
//import { QueryError, PoolConnection } from "mysql2";
//import { RowDataPacket } from "mysql2"; // Import type for rows returned from queries
const product_1 = __importDefault(require("../db/product"));
const getAll = (req, res) => {
    product_1.default
        .selectAll() //--db/product.ts
        .then((products) => {
        // .then for async call
        res.status(200).send({
            message: "OK",
            result: products,
        });
    })
        .catch((err) => {
        res.status(500).send({
            message: "DATABASE ERROR",
            error: err.code,
        });
    });
};
exports.default = { getAll };
