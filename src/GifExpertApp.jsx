import React, { useState } from "react";
import AddCategory from "./components/AddCategory";
import GifGrid from "./components/GifGrid";

export default function GifExpertApp() {
  const [categories, setCategories] = useState(["One Punch Man"]);

  return (
    <>
      <h2>Gif Expert App</h2>
      <AddCategory setCategories={setCategories}></AddCategory>
      <hr />

      <ol>
        {categories.map((category) => (
          <GifGrid key={category} category={category} />
        ))}
      </ol>
    </>
  );
}
