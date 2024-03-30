"use client";

import MainSidebar from "../mainSidebar";
import sidepanelData from "../../data/sidepanelData.json"

export default function () {
    return (
        <>
            <MainSidebar list={sidepanelData.Message} />
            <div>Message</div>
        </>
    );
}