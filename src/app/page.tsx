import React from "react";
import "../styles/StartPage.css";
import StartButton from "../components/StartButton";

const page = () => {
  return (
    <div className="startPage">
      <div className="startContainer">
        <main className="main">
          <h1 className="title">1人暮らしシュミレーション</h1>
          <div className="tb_bettwen">
            <StartButton />
          </div>
        </main>
      </div>
    </div>
  );
};

export default page;
