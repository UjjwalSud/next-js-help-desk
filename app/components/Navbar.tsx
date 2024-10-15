import Link from "next/link";
import Image from "next/image";
import Logo from "../../public/dojo-logo.png";
import LogoutButton from "./LogoutButton";

export default function Navbar({ data }: { data: any  }) {
  return (
    <nav>
      <Image
        src={Logo}
        alt="Helpdesk logo"
        width={70}
        placeholder="blur"
        quality={100}
      />
      <h1>Helpdesk</h1>
      <Link href="/">Dashboard</Link>
      <Link href="/tickets" className="mr-auto">Tickets</Link>
      {data && <span>hello, {data.email}</span>}
      <LogoutButton />
    </nav>
  );
}
