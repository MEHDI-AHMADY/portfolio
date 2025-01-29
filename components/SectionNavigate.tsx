import Link from "next/link";
import { MdOutlineCircle } from "react-icons/md";

const links = [
  { href: "#about" },
  { href: "#resume" },
  { href: "#projects" },
  { href: "#contact" },
];

const SectionNavigate = () => {
  return (
    <nav dir="rtl">
      <ul>
        {links.map((link, index) => (
          <li key={index}>
            <Link href={link.href}>
              <MdOutlineCircle />
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default SectionNavigate;
