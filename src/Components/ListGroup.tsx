import { useState } from "react";

interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
  //Hook
  const [selectedIndex, setSelectedIndex] = useState(-1);
  //   arr[0] //is variable selectedIndex
  //   arr[1] //is updater function

  //Event Handler

  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 ? <p>No results found.</p> : null}
      {/* {items.length && <p>No results found.</p>} Alternte way of writing the above without null */}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
