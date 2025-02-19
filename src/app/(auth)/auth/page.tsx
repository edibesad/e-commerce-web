"use client";

import LogoImage from "@/components/images/LogoImage";
import PresentationButton from "./components/PresentationButton";
import { useState } from "react";
import LoginComponents from "./components/LoginComponents";
import RegisterComponents from "./components/LoginComponents";

export default function Page() {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <>
      <div className="relative flex w-full h-32 justify-center items-center">
        <LogoImage className="h-7 w-40" />
      </div>
      <div className="flex h-[472px] w-full justify-center items-center">
        <div className="h-full md:w-[530px] w-full p-[72px]">
          <div className="flex flex-col justify-center items-center">
            <div className="flex w-full text-center text-sm">
              <PresentationButton
                text={"Giriş Yap"}
                onClick={() => {
                  setIsLogin(true);
                  console.log("Giriş Yap");
                }}
                enabled={isLogin}
              />
              <PresentationButton
                text={"Kayıt Ol"}
                onClick={() => {
                  setIsLogin(false);
                }}
                enabled={!isLogin}
              />
            </div>
            {isLogin ? <LoginComponents /> : <RegisterComponents />}
          </div>
        </div>
      </div>
    </>
  );
}
