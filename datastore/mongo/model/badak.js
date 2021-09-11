const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    user_id: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    pic_profile: {
      type: String,
    },
    user_phone: {
      type: String,
    },
    user_address: {
      type: String,
    },
    user_type: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const organizationSchema = new mongoose.Schema({
  organization_id: {
    type: String,
    required: true,
  },
  organization_name: {
    type: String,
    required: true,
  },
  logo: {
    type: String,
    required: true,
  },
  organization_address: {
    type: String,
    required: true,
  },
  organization_phone: {
    type: String,
    required: true,
  },
  pic_ktp: {
    type: String,
    required: true,
  },
  num_ktp: {
    type: String,
    required: true,
  },
  address_ktp: {
    type: String,
    required: true,
  },
  pic_npwp: {
    type: String,
  },
});

const eventSchema = new mongoose.Schema({
  event_id: {
    type: String,
    required: true,
  },
  event_name: {
    type: String,
    required: true,
  },
  event_desc: {
    type: String,
    required: true,
  },
  event_start: {
    type: Date,
    required: true,
  },
  event_end: {
    type: Date,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  event_status: {
    type: String,
  },
});

const ticketSchema = new mongoose.Schema({
  event_id: {
    type: Object,
  },
  ticket_id: {
    type: String,
    required: true,
  },
  ticket_name: {
    type: String,
    required: true,
  },
  ticket_desc: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
});

module.exports = {
  userModel: mongoose.model("User", userSchema, "user"),
  organizationModel: mongoose.model(
    "Organization",
    organizationSchema,
    "organization"
  ),
  eventModel: mongoose.model("Event", eventSchema, "event"),
  ticketModel: mongoose.model("Ticket", ticketSchema, "ticket"),
};
