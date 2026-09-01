import Image from "next/image";
import Link from "next/link";
import ListeningRoom from "@/components/sections/ListeningRoom";

export default function Navigation() {
  return (
    <header className="site-header">

      <div className="homepage-contact">
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=Shopmillicent.co@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          EMAIL
        </a>

        <a href="#">INSTA</a>
      </div>

      <nav>
        <Link href="/" className="nav-logo">
          <div className="nav-logo-frame">
            <Image
              src="/logos/millicent-logo.png"
              alt="Millicent"
              width={220}
              height={80}
            />
          </div>
        </Link>

        <div className="nav-links">
          <a href="/events">Events</a>
          <a href="/about-us">About</a>
          <a href="/past-products">Past Products</a>
          <a href="/custom-items">Custom Items</a>
        </div>
      </nav>

      <ListeningRoom />

    </header>
  );
}