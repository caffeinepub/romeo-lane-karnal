import Principal "mo:core/Principal";
import Map "mo:core/Map";
import Iter "mo:core/Iter";
import Array "mo:core/Array";
import Runtime "mo:core/Runtime";
import Order "mo:core/Order";

actor {
  type Reservation = {
    id : Nat;
    date : Text;
    time : Text;
    guests : Nat;
    name : Text;
    phone : Text;
    specialRequests : Text;
  };

  // Reservation comparison (default: by ID)
  module Reservation {
    public func compare(r1 : Reservation, r2 : Reservation) : Order.Order {
      Nat.compare(r1.id, r2.id);
    };
  };

  type ContactMessage = {
    id : Nat;
    name : Text;
    email : Text;
    message : Text;
  };

  // ContactMessage comparison (default: by ID)
  module ContactMessage {
    public func compare(m1 : ContactMessage, m2 : ContactMessage) : Order.Order {
      Nat.compare(m1.id, m2.id);
    };
  };

  let reservations = Map.empty<Nat, Reservation>();
  let messages = Map.empty<Nat, ContactMessage>();

  var nextReservationId = 1;
  var nextMessageId = 1;

  // Add new reservation (public)
  public shared ({ caller }) func addReservation(date : Text, time : Text, guests : Nat, name : Text, phone : Text, specialRequests : Text) : async Nat {
    let id = nextReservationId;
    let reservation : Reservation = {
      id;
      date;
      time;
      guests;
      name;
      phone;
      specialRequests;
    };
    reservations.add(id, reservation);
    nextReservationId += 1;
    id;
  };

  // Add new contact message (public)
  public shared ({ caller }) func addContactMessage(name : Text, email : Text, message : Text) : async Nat {
    let id = nextMessageId;
    let contactMessage : ContactMessage = {
      id;
      name;
      email;
      message;
    };
    messages.add(id, contactMessage);
    nextMessageId += 1;
    id;
  };

  // Admin: Fetch all reservations (sorted by ID)
  public query ({ caller }) func getAllReservations() : async [Reservation] {
    reservations.values().toArray().sort();
  };

  // Admin: Fetch all contact messages (sorted by ID)
  public query ({ caller }) func getAllContactMessages() : async [ContactMessage] {
    messages.values().toArray().sort();
  };
};
