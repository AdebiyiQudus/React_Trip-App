import { useState } from "react";

export default function Form({ onAddItemsProps }) {
  // using the Controlled element technique
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();

    // Using guard clause => When there's no description(item value) return nothing else return the item object
    if (!description) return;

    // Using setter function => When we submit a form, we want the form should go back to the initial state
    const newItem = {
      description,
      quantity,
      packed: false,
      id: Date.now(),
    };

    onAddItemsProps(newItem);
    // Set description and quantity back to default state after adding new itemobj
    setDescription("");
    setQuantity(1);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your 😍 trip?</h3>
      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}
