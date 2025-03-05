import { TextInput } from "@/components/inputs/TextInput";

export default function RegisterComponents() {
  return (
    <div className="relative w-full h-full justify-center items-center">
      <TextInput
        name="email"
        type="email"
        placeholder="E-posta adresi"
        onChange={() => {}}
        className="mb-4"
      />
      <TextInput
        name="password"
        type="password"
        placeholder="Şifre"
        onChange={() => {}}
        className="mb-4"
      />
      <TextInput
        name="password"
        type="password"
        placeholder="Şifre Tekrar"
        onChange={() => {}}
        className="mb-4"
      />
      <button
        value="Kayıt ol"
        className="w-full h-14 bg-[var(--primary)] text-white rounded-lg hover:bg-[#e35600] cursor-pointer"
      />
    </div>
  );
}
