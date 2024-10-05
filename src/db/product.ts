import { QueryError, PoolConnection } from "mysql2";
import { connection } from "../config/db";
import { Product } from "../model/product";
import { RowDataPacket } from "mysql2"; // Import type for rows returned from queries
import { promisePool } from "../config/db";
import { Request, Response } from "express"; // Import Request and Response from express

// Function to delete a product by ID
const deleteProductById = async (id: number): Promise<void> => {
  try {
    console.log(`Attempting to delete product with ID: ${id}`);
    const [result] = await promisePool.query<ResultSetHeader>(
      "DELETE FROM product WHERE id = ?",
      [id]
    );
    console.log("Delete result:", result);
    // Optionally, you can check if the affectedRows property is 0 to handle the case where no rows were deleted
    if ((result as ResultSetHeader).affectedRows === 0) {
      console.warn(`No product found with ID: ${id}`);
    }
  } catch (err) {
    console.error("Database deletion error:", err);
    throw err; // It's good practice to throw the error after logging it
  }
};

// Function to insert a new product
const insertProduct = async (
  id: number,
  name: string,
  price: number
): Promise<void> => {
  try {
    const [result] = await promisePool.query<ResultSetHeader>(
      "INSERT INTO product (id, name, price) VALUES (?, ?, ?)",
      [id, name, price]
    );
    console.log("Insert result:", result);
    if ((result as ResultSetHeader).affectedRows === 0) {
      console.warn("Insert operation did not affect any rows");
    }
  } catch (err) {
    console.error("Database insertion error:", err);
    throw err;
  }
};

export default { selectAll };
