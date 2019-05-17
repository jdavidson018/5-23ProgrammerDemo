import React from "react";
import Header from "./components/Header";
import MainCard from "./components/MainCard";
import SideMenu from "./components/SideMenu";
function App() {
  const items = [
    { id: 1, name: "hello" },
    { id: 2, name: "there" },
    { id: 3, name: "mate" }
  ];

  const identity = {
    id: 1,
    name: "mowgli",
    imgUrl:
      "https://cdn1-www.dogtime.com/assets/uploads/gallery/great-dane-dogs-and-puppies/great-dane-dogs-puppies-5.jpg",
    description: "Damn I am cute"
  };
  return (
    <div className="ui container">
      <SideMenu />
      <Header items={items} />
      <img
        src="https://cdn1-www.dogtime.com/assets/uploads/gallery/great-dane-dogs-and-puppies/great-dane-dogs-puppies-5.jpg"
        alt="Should be a dane here"
      />
      <MainCard identity={identity} />
    </div>
  );
}

export default App;
