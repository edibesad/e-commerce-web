export function TextInput(props: {
  type: string;
  placeholder: string;
  name: string;
  onChange: (e: unknown) => void;
  className?: string;
}) {
  return (
    <input
      type={props.type}
      className={`w-full h-14 p-3 bg-[#eeeeee] rounded-lg focus:outline-2 outline-[var(--primary)] hover:bg-[#f5f5f5] ${props.className}`}
      placeholder={props.placeholder}
      name={props.name}
      onChange={props.onChange}
    />
  );
}
