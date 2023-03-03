import Link from "next/link";
import { useRouter } from "next/router";
import css from "styled-jsx/css";

const style = css`
  nav {
    background-color: tomato;
  }
  a {
    text-decoration: none;
  }
  .active {
    color: white;
  }
`;

export default function NavBar() {
  const router = useRouter();

  return (
    <nav>
      <Link href="/" legacyBehavior>
        <a className={router.pathname === "/" ? "active" : ""}>Home</a>
      </Link>
      <Link href="/about" legacyBehavior>
        <a className={router.pathname === "/about" ? "active" : ""}>About</a>
      </Link>
      <style jsx>{style}</style>
    </nav>
  );
}
