function Cell({ item, onSelect }) {
    // TODO: remove later

    return (
        <button
            onClick={onSelect}
            className={item.highlight ? 'highlight' : ''}
            id={item.highlight ? '1' : ''}>
            {item.letter}
        </button>
    );
}

export default Cell;
