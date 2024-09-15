import './cell.css';

function Cell({ letter, onSelect }) {
  return <button onClick={onSelect}>{letter}</button>;
}

export default Cell;
