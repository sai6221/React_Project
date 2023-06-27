import { MouseEvent } from "react";

function ListGroup() {
  let items = ["New York", "San Francisco", "Paris"];

  //Event Handler
  const handleClick = (event: MouseEvent) => console.log(event);

  return (
    <>
      <h1>List</h1>
      {items.length === 0 ? <p>No results found.</p> : null}
      {/* {items.length && <p>No results found.</p>} Alternte way of writing the above without null */}
      <ul className="list-group">
        {items.map((item) => (
          <li className="list-group-item" key={item} onClick={handleClick}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
