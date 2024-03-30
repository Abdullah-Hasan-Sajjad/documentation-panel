"use client";

import MainSidebar from "../mainSidebar";
import sidepanelData from "../../data/sidepanelData.json"
export default function Voice(){
  return (
    <>
    <MainSidebar list={sidepanelData.Voice}/>
    <div>Voice</div>
    </>
  )
}
