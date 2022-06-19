const asyncHandler = require("express-async-handler");

const User = require("../models/userModel");
const Ticket = require("../models/ticketsModel");

// @desc    Get user tickets
// @route   GET /api/tickets
// @access  private
const getTickets = asyncHandler(async (req, res) => {
  // get user using the id in the JWT
  const user = await User.findById(req.user.id);
  if (!user) {
    res.status(401);
    throw new Error("user not found");
  }

  const tickets = await Ticket.find({ user: req.user.id });
  res.status(200).send(tickets);
});

// @desc    Create new ticket
// @route   POST /api/tickets
// @access  private
const createTicket = asyncHandler(async (req, res) => {
  const { product, description } = req.body;

  if (!product || !description) {
    res.status(400);
    throw new Error("Please add a product and description");
  }

  const user = await User.findById(req.user.id);
  if (!user) {
    res.status(401);
    throw new Error("user not found");
  }

  const ticket = await Ticket.create({
    product,
    description,
    user: req.user.id,
    status: "new",
  });

  res.status(201).json(ticket);
});

module.exports = {
  getTickets,
  createTicket,
};
