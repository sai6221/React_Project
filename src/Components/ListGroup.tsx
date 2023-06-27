function ListGroup() {
  let items = ["New York", "San Francisco", "Paris"];
  items = [];

  return (
    <>
      <h1>List</h1>
      {items.length === 0 ? <p>No results found.</p> : null}
      {/* {items.length && <p>No results found.</p>} Alternte way of writing the above without null */}
      <ul className="list-group">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
