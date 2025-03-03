import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

export default function PasswordInput(props: {
  placeholder: string;
  name: string;
  onChange: (e: unknown) => void;
  className?: string;
}) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="relative w-full">
      <input
        type={showPassword ? "text" : "password"}
        className={`w-full h-14 p-3 pr-10 bg-[#eeeeee] rounded-lg focus:outline-2 outline-[var(--primary)] hover:bg-[#f5f5f5] ${props.className}`}
        placeholder={props.placeholder}
        name={props.name}
        onChange={props.onChange}
      />
      <button
        type="button"
        className="absolute right-3 top-1/4 transform text-[#9b9b9b] hover:text-gray-700"
        onClick={() => setShowPassword(!showPassword)}
      >
        <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
      </button>
    </div>
  );
}
