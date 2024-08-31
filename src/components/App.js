// Array.from => This is used to create a new array-like or iterable object and also allows us to apply a mapping function to each element during the creation of an array
// Array.from takes two argument => ({length}, (_, i)) i.e length of the array and the current value(_) and index(i)
// Controlled element are components like <input>, <textarea>, and <select> that maintain their own state internally, when using controlled components, their values are controlled by React state
// Lifting up state means  => to place some state in a component that is a parent of both component(a sibling component) that needs the piece of state in question(at a particular time)
// State is always lifted up to the closest common parent
// Inverse data flow (child-to-parent communication) => child updating parent state
// The localCompare() is used to compare string in Js based on linguistic rules(Alphabetical order)
// The localCompare() compares two strings and returns a number indicating their relative order.
// The result can be negative if the first string comes before the second one, positive if it comes after, and 0 if it they are equal

import { useState } from "react";

import Logo from "./Logo.js";
import Form from "./Form.js";
import PackingList from "./PackingList.js";
import Stats from "./Stats.js";

export default function App() {
  // State to hold the list of items => To render the newItem object to the UI by creating new state
  const [items, setItems] = useState([]);
 
  function handleAddItems(itemObj) {
    // To update and add the ItemsArray with the new itemObj
    setItems((itemsArr) => [...itemsArr, itemObj]);
  }

  function handleDeleteItem(id) {
    console.log(id);
    // Remove item by id
    setItems((itemsArr) =>
      itemsArr.filter(
        (itemObj) =>
          // when the id clicked is not == id filter and return itemObj inisde a new array but if id == id delete the itemObj clicked
          itemObj.id !== id
      )
    );
  }

  function handleToggleItem(id) {
    // Toggle the 'packed' state of the item by id
    setItems((itemsArr) =>
      itemsArr.map((itemObj) =>
        itemObj.id === id ? { ...itemObj, packed: !itemObj.packed } : itemObj
      )
    );
  }

  function handleClearList() {
    const confirmed = window.confirm(
      "Are you sure you want to delete all items?"
    );

    if (confirmed) setItems([]);
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItemsProps={handleAddItems} />
      {/* Lifting up state by parsing a props from a parent to a sibling for easy access and alson for re-usablity */}
      <PackingList
        itemsProps={items}
        onDeleteItemProps={handleDeleteItem}
        onToggleItem={handleToggleItem}
        onClearListProps={handleClearList}
      />
      <Stats itemProps={items} />
    </div>
  );
}
