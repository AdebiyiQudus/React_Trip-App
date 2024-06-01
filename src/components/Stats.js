export default function Stats({ itemProps }) {
  // If the items length is empty or does not exist return
  if (!itemProps.length)
    return (
      <p className="stats">
        <em>Start adding some items to your packing list🚀</em>
      </p>
    );

  // Calculating Stats as a derived state => Derived state is computed from an existing piece of state or from props
  const numItems = itemProps.length;
  const numPacked = itemProps.filter((itemObj) => itemObj.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);

  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You got everything! Ready to go ✈"
          : `💼 You have ${numItems} items on your list,
         and you already packed ${numPacked} 
         (${percentage}%)`}
      </em>
    </footer>
  );
}
