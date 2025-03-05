import { ChangeEventHandler } from "react";

export function TextInput(props: {
  type: string;
  placeholder: string;
  name: string;
  onChange: ChangeEventHandler<HTMLInputElement> | undefined;
  className?: string;
  value?: string | undefined;
}) {
  return (
    <input
      type={props.type}
      className={`w-full h-14 p-3 bg-[#eeeeee] rounded-lg focus:outline-2 outline-[var(--primary)] hover:bg-[#f5f5f5] ${props.className}`}
      placeholder={props.placeholder}
      value={props.value}
      name={props.name}
      onChange={props.onChange}
    />
  );
}
