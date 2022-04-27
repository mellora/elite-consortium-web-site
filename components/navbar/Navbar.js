import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top mb-5">
        <Link href={"/"}>
          <a className="navbar-brand">
            <Image
              src="/elite_consortium_services_icon.png"
              width="96"
              height="58"
              layout="fixed"
              alt="icon"
              loading="lazy"
            />
          </a>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link href={"/"}>
                <a className="nav-link">Home</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/who-needs-a-consortium">
                <a className="nav-link">Who Needs a Consortium</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href={"/what-can-elite-do-for-you"}>
                <a className="nav-link">What can Elite do For You?</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href={"/pricing"}>
                <a className="nav-link">Pricing</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href={"/did-you-know-dot-requires"}>
                <a className="nav-link">Did you know DOT requires...</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href={"/contact-us"}>
                <a className="nav-link">Contact Us</a>
              </Link>
            </li>
          </ul>
          {/* <ul className="navbar-nav ml-auto">
            {% if user.is_authenticated %}
            <li className="nav-item">
                <a className="nav-link" href="{% url 'RandomPuller:index' %}">Pull Randoms</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="{% url 'MainSite:logout' %}">Logout</a>
            </li>
            {% else %}
            <li className="nav-item">
                <a className="nav-link" href="{% url 'MainSite:login' %}">Login</a>
            </li>
            {% endif %}
          </ul> */}
        </div>
      </nav>
      <br></br>
    </>
  );
};

export default Navbar;
