import express from "express";
import {
  deleteConnection,
  getConnection,
  updateConnection,
  createConnection,
  getAllConnections,
} from "../controllers/connections.js";

const router = express.Router();

router.post("/", createConnection);

//update connection
router.put("/:id", updateConnection);

//delete connection
router.delete("/:id", deleteConnection);

//get connection
router.get("/:id", getConnection);
router.get("/", getAllConnections);

export default router;
