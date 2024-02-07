import { query } from "express";
import connection from "../database/sql_connection.js";

export const login = (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: "Username and password are required" });
  }
  query = `SELECT * FROM usermaster WHERE username = ${username} `; 
  connection.query(
    query, (error, results) => {
    if (error) {
      console.error("Error executing query:", error);
      return res.status(500).json({ message: "Internal server error" });
    }

    if (results.length === 0) {
      return res.status(401).json({ message: "Invalid username or password" });
    }
    else{
        //retrieve password from results[0] and compare with password given by user if not matched then return 401 
    }
    return res.status(200).json({ message: "Login successful", user: results[0] });
  });
};
