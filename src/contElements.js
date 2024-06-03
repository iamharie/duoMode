import { useState } from "react";

export default function Control() {
  const [description, setDescription] = useState("");
  function onChange(e) {
    setDescription(e.target.value);
  }

  return (
    <div>
      <input
        type="text"
        placeholder="items"
        value={description}
        onChange={onChange}
      ></input>
      <p>{description}</p>
    </div>
  );
}
