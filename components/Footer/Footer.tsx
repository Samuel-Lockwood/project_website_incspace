import "./Footer.css";

import Link from "next/link";
import Image from "next/image";
import { FOOTER_CONTACT, FOOTER_LINKS, SOCIAL } from "@/constants";
const Footer = () => {
  return (
    <footer className="app__footer">
      <div className="app__container">
        <div className="app__footer_logo">
          <Link href={"/"}>
            <h1 className="gradient__text">incspace</h1>
          </Link>
          <p className="app__text">Lorem ipsum dolor sit amet consectetur. Porttitor diam mauris</p>
        </div>

        <div className="app__footer_links_content">
          {FOOTER_LINKS.map((columns) => (
            <FooterColumn title={columns.title}>
              <ul className="app__footer_links">
                {columns.links.map((link) => (
                  <Link href={"/"} key={link}>
                    {link}
                  </Link>
                ))}
              </ul>
            </FooterColumn>
          ))}
        </div>

        <div className="app__footer_contact_content">
          <FooterColumn title={FOOTER_CONTACT.title}>
            {FOOTER_CONTACT.links.map((link) => (
              <div className="app__footer_contact-links" key={link.label}>
                <Image 
                src={link.icon}
                width={24}
                height={24}
                alt="icon"
                />
                <p>{link.label}</p>
              </div>
            ))}
          </FooterColumn>
        </div>

        <div className="app__footer_social_media_content">
          <FooterColumn title={SOCIAL.title}>
            <div className="app__footer_social_links">
              {SOCIAL.links.map((link) => (
                <Link href={"/"} style={{ display : "flex", alignItems: "center", gap: "12px" }}>
                  <Image 
                  src={link.icon}
                  width={24}
                  height={24}
                  alt="icon"
                  />
                  <p>{link.label}</p>
                </Link>
              ))}
            </div>
          </FooterColumn>
        </div>

        <div className="app__footer_others_links">
          <FooterColumn title="Other Links">
            <Link href={"/"}>
              <p>Terms of use</p>
            </Link>
            <Link href={"/"}>
              <p>Privacy policy</p>
            </Link>
          </FooterColumn>
        </div>
      </div>
      <div className="app__footer_copyright">
        <p>Copyright 2023 @incspace All Right Reserved Design by Asra</p>
      </div>
    </footer>
  )
}

type FooterColumnPros = {
  title: string;
  children: React.ReactNode;
}

const FooterColumn = ({ title, children } : FooterColumnPros) => {
  return(
    <div className="app__footerColumn">
      <h4>{title}</h4>
      {children}
    </div>
  )
}

export default Footer