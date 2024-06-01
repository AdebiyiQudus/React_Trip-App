export default function Item({ itemProps, 
  onDeleteItemProps, onToggleItem }) {
  return (
    <li>
      <input
        type="checkbox"
        value={itemProps.packed}
        onChange={() => onToggleItem(itemProps.id)}
      />

      <span style={itemProps.packed ? { textDecoration: "line-through" } : {}}>
        {itemProps.quantity} {itemProps.description}
      </span>
      {/* creating a new function and parsing the current item id */}
      <button onClick={() => onDeleteItemProps(itemProps.id)}>❌</button>
    </li>
  );
}
