import { useAuth } from "@/context/AuthContext";
import { AccountMenuElement } from "./AccountMenuElement";
import Link from "next/link";

export function AuthButtons() {
  const { user, logout } = useAuth();

  const handleLogout = async () => {
    window.location.reload();
    logout();
  };

  console.log("user", user);

  return (
    <div>
      {user !== null ? (
        <>
          <AccountMenuElement>{user.username}</AccountMenuElement>
          <AccountMenuElement>
            <button onClick={handleLogout}>Çıkış Yap</button>
          </AccountMenuElement>
        </>
      ) : (
        <>
          <AccountMenuElement>
            <Link href="/auth">Giriş Yap</Link>
          </AccountMenuElement>

          <AccountMenuElement>
            <Link href={"/auth?register=true"}></Link>
          </AccountMenuElement>
        </>
      )}
    </div>
  );
}
