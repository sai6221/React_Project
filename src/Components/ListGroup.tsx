import { MouseEvent } from "react";

function ListGroup() {
  let items = ["New York", "San Francisco", "Paris"];
  let selectedIndex = 0;

  //Event Handler
  const handleClick = (event: MouseEvent) => console.log(event);

  return (
    <>
      <h1>List</h1>
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
            onClick={handleClick}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
