"use client";

import LogoImage from "@/components/images/LogoImage";
import { useState } from "react";
import LoginComponents from "./components/LoginComponents";
import RegisterComponents from "./components/RegisterComponents";
import SectionButton from "@/components/buttons/SectionButton";

export default function Page() {
  const [isLogin, setIsLogin] = useState(true);
  console.log("isLogin", isLogin);
  return (
    <>
      <div className="relative flex w-full h-32 justify-center items-center">
        <LogoImage className="h-7 w-40" />
      </div>
      <div className="flex h-[472px] w-full justify-center items-center">
        <div className="h-full md:w-[530px] w-full p-[72px]">
          <div className="flex flex-col justify-center items-center gap-4">
            <div className="flex w-full text-center text-sm">
              <SectionButton
                className="flex-grow"
                text={"Giriş Yap"}
                onClick={() => {
                  setIsLogin(true);
                  console.log("Giriş Yap");
                }}
                enabled={isLogin}
              />
              <SectionButton
                className="flex-grow"
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
