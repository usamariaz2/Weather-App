import React from "react";
import InputSearch from "../InputSearch";
import CardSection from "../CardDesign/CardSection";
export default function Home() {
  return (
    <>
      <div id="home"
        className="container flex flex-col gap-4 mx-auto p-4 rounded font-sans lg:gap-0"
        >
        <InputSearch />
        <CardSection />
      </div>
    </>
  );
}
