import React from 'react';

function ListComponent({ items, renderItem }) {
  if (!items.length) return <p>No items to display.</p>;

  return (
    <ul style={styles.list}>
      {items.map((item, index) => (
        <li key={index} style={styles.item}>
          {renderItem(item)}
        </li>
      ))}
    </ul>
  );
}

const styles = {
  list: {
    listStyleType: 'none',
    padding: 0,
    marginTop: '1rem',
  },
  item: {
    padding: '10px',
    borderBottom: '1px solid #ccc',
  },
};

export default ListComponent;
