import CreateAccountBanner from "./CreateAccountBanner";
import { Link } from "react-router-dom";
import React from "react";
import Overlay from "./Overlay";


export default function Home() {
  return (
    <div className='container-fluid bg-white'>
      <div className='container'>
        <Overlay />
        <CreateAccountBanner />
      </div>
    </div>
  );
}