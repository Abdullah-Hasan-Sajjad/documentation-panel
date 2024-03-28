
"use client";

import Link from "next/link";
import { Navbar } from "flowbite-react";

export default function MainNavbar() {
  return (
    <div className="md:ml-64 min-h-20 bg-lime-300 flex items-center border-b border-sideNavborder">
    <Navbar fluid rounded className="bg-lime-300 w-full">
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link href="/voice">Voice</Navbar.Link>
        <Navbar.Link href="/message">Message</Navbar.Link> 
        <Navbar.Link href="#">Serverless</Navbar.Link>
        <Navbar.Link href="#">Flex</Navbar.Link>
        <Navbar.Link href="#">Studio</Navbar.Link>
        <Navbar.Link href="#">All docs...</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
    </div>
  );
}
