function Cell({ item, onSelect }) {
  return (
    <button onClick={onSelect} className={item.highlight ? 'highlight' : ''}>
      {item.letter}
    </button>
  );
}

export default Cell;
