
"use client";

import { Sidebar } from "flowbite-react";
import { HiArrowSmRight, HiChartPie, HiInbox, HiShoppingBag, HiTable, HiUser } from "react-icons/hi";
import Image from 'next/image'
import companyLogo from '../public/next.svg'
import Link from "next/link";

export default function MainSidebar({ list }) {
  return (

    <div class="bg-sidebar-bg h-full flex flex-col fixed top-0 left-0 z-30 gap-2 w-64 invisible md:visible" id="sidePanel">
      <Link href="/">
        <div class="min-h-20 flex bg-lime-300  flex-row items-center border-b border-lime-700 pr-10">

          <Image src={companyLogo} className="h-4 sm:h-4" alt="logo" />
          <div class="font-medium text-sm flex items-center text-left text-gray-700">
            Compaylogo
          </div>

        </div>
      </Link>
      <div>
        <Sidebar aria-label="Sidebar with multi-level dropdown example">
          <Sidebar.Items>
            <Sidebar.ItemGroup>

              {
                list.map((contents, index) => {
                  return (
                    contents.subtitle && contents.subtitle.length > 0 ?
                      <Sidebar.Collapse key={index} label={contents.title}>
                        {contents.subtitle.map((subtitle, indexSub) => {
                          return (<Sidebar.Item key={indexSub} href="#">{subtitle}</Sidebar.Item>)
                        })}
                      </Sidebar.Collapse>
                      : <Sidebar.Item key={index} href="#">{contents.title}</Sidebar.Item>
                  );
                })
              }

            </Sidebar.ItemGroup>
          </Sidebar.Items>
        </Sidebar>
      </div>

    </div>

  );
}
