// Sorting Arrays 
// Ascending Order => if a > b switch order, if b > a keep the order
 

import { useState } from "react";
import Item from "./Item.js";

export default function PackingList({
  itemsProps,
  onDeleteItemProps,
  onToggleItem,
  onClearListProps,
}) {
  const [sortBy, setSortBy] = useState("input");

  let sortedItems;

  if (sortBy === "input") sortedItems = itemsProps;

  if (sortBy === "description")
    // The itemsprop(itemsArr) will be sorted in an alphabetical order based on the description property of the element
    sortedItems = itemsProps
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));

  if (sortBy === "packed")
    // Converting packed status from boolean to a number and sorting in ascending order
    sortedItems = itemsProps
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));

  return (
    <div className="list">
      <ul>
        {sortedItems.map((itemObj) => (
          // Parsing the onDeleteItemProps through the parent (PackingList) into the child(Item component) so the child can have easy access to the onDeleteItem
          <Item
            itemProps={itemObj}
            onDeleteItemProps={onDeleteItemProps}
            onToggleItem={onToggleItem}
            key={itemObj.id}
          />
        ))}
      </ul>

      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input"> Sort by input order</option>
          <option value="description"> Sort by description</option>
          <option value="packed"> Sort by packed status</option>
        </select>

        <button onClick={onClearListProps}>Clear list</button>
      </div>
    </div>
  );
}
