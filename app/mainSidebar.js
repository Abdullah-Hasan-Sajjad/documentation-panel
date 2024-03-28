
"use client";

import { Sidebar } from "flowbite-react";
import { HiArrowSmRight, HiChartPie, HiInbox, HiShoppingBag, HiTable, HiUser } from "react-icons/hi";
import Image from 'next/image'
import companyLogo from '../public/next.svg'

export default function MainSidebar({list}) {
  return (

    <div class="bg-sidebar-bg h-full flex flex-col fixed top-0 left-0 z-30 gap-2 w-64 invisible md:visible" id="sidePanel">

      <div class="min-h-20 flex bg-lime-300  flex-row items-center border-b border-lime-700 pr-10">
        <Image src={companyLogo} className="h-4 sm:h-4" alt="logo" />
        <div class="font-medium text-sm flex items-center text-left text-gray-700">
          Compaylogo
        </div>
      </div>

      <div>
        <Sidebar aria-label="Sidebar with multi-level dropdown example">
          <Sidebar.Items>
            <Sidebar.ItemGroup>
              <Sidebar.Item href="#">
                Dashboard
              </Sidebar.Item>
              <Sidebar.Collapse label="E-commerce">
                <Sidebar.Item href="#">Products</Sidebar.Item>
                <Sidebar.Item href="#">Sales</Sidebar.Item>
                <Sidebar.Item href="#">Refunds</Sidebar.Item>
                <Sidebar.Item href="#">Shipping</Sidebar.Item>
              </Sidebar.Collapse>
              <Sidebar.Item href="#">
                Inbox
              </Sidebar.Item>
              <Sidebar.Item href="#">
                Users
              </Sidebar.Item>
              <Sidebar.Item href="#">
                Products
              </Sidebar.Item>
              <Sidebar.Item href="#">
                Sign In
              </Sidebar.Item>
              <Sidebar.Item href="#">
                Sign Up
              </Sidebar.Item>
            </Sidebar.ItemGroup>
          </Sidebar.Items>
        </Sidebar>
      </div>

    </div>

  );
}
