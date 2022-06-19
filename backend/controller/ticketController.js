const asyncHandler = require("express-async-handler");

const User = require("../models/userModel");
const Ticket = require("../models/ticketsModel");

// @desc    Get user tickets
// @route   GET /api/tickets
// @access  private
const getTickets = (req, res) => {
  res.status(200).json({ message: "get ticket" });
};

// @desc    Create new ticket
// @route   POST /api/tickets
// @access  private
const createTicket = (req, res) => {
  res.status(200).json({ message: "create ticket" });
};

module.exports = {
  getTickets,
  createTicket,
};
