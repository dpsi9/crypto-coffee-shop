"use client"
import { useState } from "react";

export function Cart() {
  const [items, setItems] = useState<String[]>([]);

  function addItem(item: String) {
    setItems([...items, item]);
  }

  return (
    <div>
      <h2>🛒 Your Cart</h2>
      {items.map((i: String, idx: number) => (
        <p key={idx}>{i}</p>
      ))}
      <button onClick={() => addItem("Coffee ☕")}> Add Coffee </button>
      <button onClick={() => addItem("Latte 🥛")}> Add Latte </button>
      <button onClick={() => addItem("Cappuccino 🍫")}> Add Cappuccino </button>
      <button>Checkout</button>
    </div>
  );
}
