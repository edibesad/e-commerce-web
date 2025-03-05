"use client";

import PasswordInput from "@/components/inputs/PasswordInput";
import { TextInput } from "@/components/inputs/TextInput";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { redirect } from "next/navigation";

export default function RegisterComponents() {
  const { login, user } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage("");

    const username = e.target.username.value;
    const password = e.target.password.value;

    try {
      await login(username, password);
    } catch (error) {
      setErrorMessage(error.message);
      setIsLoading(false);
    }
  };

  if (user !== null) {
    console.log("user", user);
    redirect("/");
  }

  return (
    <div className="relative w-full h-32">
      <form onSubmit={handleLogin}>
        {errorMessage && (
          <div
            className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4"
            role="alert"
          >
            <strong className="font-bold">Hata</strong>
            <br />
            <span className="block sm:inline">{errorMessage}</span>
            <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
              <button
                className="fill-current h-6 w-6 text-red-500"
                onClick={() => setErrorMessage("")}
              >
                <title>Kapat</title>

                <FontAwesomeIcon icon={faXmark} />
              </button>
            </span>
          </div>
        )}
        <TextInput
          name="username"
          type="username"
          placeholder="Kullanıcı adı"
          onChange={() => {}}
          className="mb-4"
        />
        <PasswordInput
          name="password"
          placeholder="Şifre"
          onChange={() => {}}
          className="mb-4"
        />
        <button
          type="submit"
          className="w-full h-14 bg-[var(--primary)] text-white rounded-lg hover:bg-[#e35600] cursor-pointer flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={isLoading}
        >
          {isLoading ? (
            <FontAwesomeIcon icon={faSpinner} spin className="w-5 h-5" />
          ) : (
            "Giriş Yap"
          )}
        </button>
      </form>
    </div>
  );
}
