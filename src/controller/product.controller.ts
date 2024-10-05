
import { Request, Response } from "express";
//import { Product } from "../model/product";
//import { promisePool } from ".../config/db";
//import { QueryError, PoolConnection } from "mysql2";
//import { RowDataPacket } from "mysql2"; // Import type for rows returned from queries
import product from "../db/product";

// Handler to insert a new product
const insertProduct = async (req: Request, res: Response) => {
  const { id, name, price } = req.body;

  // Basic validation
  if (
    typeof id !== "number" ||
    typeof name !== "string" ||
    typeof price !== "number"
  ) {
    return res.status(400).send({
      message: "Invalid input data",
    });
  }

  try {
    await product.insertProduct(id, name, price);
    res.status(201).send({
      message: "Product created successfully",
    });
  } catch (err) {
    console.error("Error inserting product:", err); // Log the full error
    res.status(500).send({
      message: "DATABASE ERROR",
      error: (err as Error).message || "Unknown error", // Ensure error.message is used safely
    });
  }
};
export default { getAll,deleteById };