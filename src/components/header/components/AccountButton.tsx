"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Link from "next/link";
import type { UrlObject } from "url";
type Url = string | UrlObject;

export default function AccountButton() {
  const [isMenuShown, setIsMenuShown] = useState(false);

  return (
    <div className="relative">
      <div
        className="fixed top-0 right-0 bottom-0 left-0 bg-[#3b3b3b] opacity-50 z-40"
        style={{
          display: isMenuShown ? "block" : "none",
        }}
      />
      <div
        onMouseEnter={() => setIsMenuShown(true)}
        onMouseLeave={() => setIsMenuShown(false)}
      >
        <button className="relative bg-white border-2 border-solid border-[#919191] text-[#484848] rounded-md w-40 h-12 z-50">
          <div className="flex gap-1 items-center justify-center">
            <FontAwesomeIcon
              icon={faUser}
              width={15}
              height={15}
              color="#919191"
            />
            <div className="flex gap-4 items-center justify-center">
              <div className="flex flex-col gap-0 leading-none pl-2 text-[11px]">
                <span className="font-bold text-left text-[15px]">
                  Giriş Yap
                </span>
                <span className="text-left">veya üye ol</span>
              </div>
              <FontAwesomeIcon
                icon={faArrowDown}
                width={20}
                height={20}
                color="#919191"
              />
            </div>
          </div>
        </button>
        <div
          className="absolute w-40 z-50"
          style={{
            display: isMenuShown ? "block" : "none",
          }}
        >
          <div className="absolute left-16 w-5 h-5 bg-white rotate-45 z-10 p" />

          <div className="h-2" />

          <div className="flex flex-col gap-2 w-60 bg-white rounded-md z-50 relative py-3">
            <div className="flex flex-col gap-3 border-b border-solid border-[#e5e5e5] pb-3 px-8">
              <MenuElement href={"/"} text="Giriş Yap" />
              <MenuElement href={"/"} text="Kaydol" />
            </div>
            <div className="flex flex-col gap-1 px-8">
              <MenuElement href={"/"} text="Beğendiklerim" />
              <MenuElement href={"/"} text="...." />
              <MenuElement href={"/"} text="...." />
              <MenuElement href={"/"} text="...." />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
function MenuElement({ text, href }: { text: string; href: Url }) {
  return (
    <div className="flex items-center justify-start pl-2 gap-1 hover:text-[#919191] text-[#484848] text-sm font-bold">
      <Link href={href}>{text}</Link>
    </div>
  );
}
