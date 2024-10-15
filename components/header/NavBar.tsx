import { navigation } from "@/constants";
import Link from "next/link";

const NavBar = () => {
  return (
    <ul className=" justify-between hidden lg:flex">
      {navigation.map((item) => (
        <li key={item.id} className="px-9 text-white hover:text-gray-300">
          <Link href={item.url}>{item.title}</Link>
        </li>
      ))}
    </ul>
  );
};

export default NavBar;
