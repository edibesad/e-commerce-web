export default function RegisterComponents() {
  return (
    <div className="relative flex w-full h-32 justify-center items-center">
      <form method="post">
        <input
          type="email"
          className="w-full h-14 p-3 bg-[#eeeeee] text-[#9b9b9b] rounded-lg focus:outline-2 outline-[var(--primary)]"
          placeholder="E-posta adresi"
          name="password"
        />
      </form>
    </div>
  );
}
