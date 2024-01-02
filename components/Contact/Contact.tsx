import "./Contact.css";

import Link from "next/link";
const Contact = () => {
  return (
    <section className="app__contact section__padding">
      <div className="app__contact_text">
        <h1><span>👋</span>Keep in touch with Us <br /> Say Hi!</h1>
      </div>
      <div className="app__contact_email">
        <Link href={"/"}>
          <p>info@asraworks.com</p>
        </Link>
      </div>
    </section>
  )
}

export default Contact