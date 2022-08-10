import Connections from "../models/connections.js";

export const createConnection = async (req, res, next) => {
  try {
    const newConnection = new Connections({
      ...req.body,
    });
    await newConnection.save();
    res.status(200).send("connection has been created");
  } catch (err) {
    next(err);
  }
};

export const updateConnection = async (req, res, next) => {
  try {
    let newConnection = await Connections.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );
    return res.status(200).json(newConnection);
  } catch (err) {
    return next(err);
  }
};

export const deleteConnection = async (req, res, next) => {
  try {
    await Connections.findByIdAndDelete(req.params.id);
    return res.status(200).json({
      success: true,
      message: "your connection has been deleted",
    });
  } catch (err) {
    return next(err);
  }
};

export const getConnection = async (req, res, next) => {
  console.log(req.params.id);
  try {
    const connection = await Connections.findById(req.params.id);
    return res.status(200).json(connection);
  } catch (err) {
    next(err);
  }
};

export const getAllConnections = async (req, res, next) => {
  try {
    const connection = await Connections.find({});
    return res.status(200).json(connection);
  } catch (err) {
    next(err);
  }
};
