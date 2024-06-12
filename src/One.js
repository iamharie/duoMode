import Item from "./Item";
const arr = [
  { id: 1, name: "bag" },
  { id: 2, name: "box" },
];

// counter
export default function One() {
  return (
    <div>
      {arr.map((mov) => (
        <Item name={mov} key={mov.id} />
      ))}
    </div>
  );
}
