"use client"
import "./Services.css";

import Link from "next/link";
import Image from "next/image";
import { FEATURES, SERVICES } from "@/constants";
const Services = () => {
  return (
    <section className="app__services section__padding" id="services">
      <div className="app__container">
        <div className="app__services_heading">
          <h3 className="gradient__text ">Our Services</h3>
          <h1 className="app__heading">We provide expert advice For <br /> Startup Consulting</h1>
        </div>
        <div className="app__services_cards">
          {SERVICES.map((services) => (
            <div className="app__services_card">
              <div className="app__services_card_img">
                <Image 
                src={services.icon}
                width={50}
                height={50}
                alt="Brain img"
                />
              </div>
               <div className="app__services_card_title">
                 <h2 className="app__card_title">Business Planning</h2>
               </div>
               <div className="app__services_card_text">
                 <p className="app__text">A collaborative space where creativity and innovation flow like a refreshing breeze. Ideal for forward-thinking minds.</p>
               </div>
               <div className="app__services_card_link">
                <Link href={"/"} className="flex" style={{ gap : "20px" }}>
                  <p>Learn More</p>
                  <Image src={"/assets/icons/arrow-link.svg"} width={25} height={25} alt="arrow link"/>
                </Link>
               </div>

            </div>
            
            ))}
            <div className="app__services_card_viewAll">
              <div className="app__services_card_viewAll_title">
                <h3 className="gradient__text app__title">View All Services</h3>
              </div>
              <Link href={"/"} className="app__services_card_viewAll_elipse">
                <Image 
                src={"/assets/icons/elipse.svg"}
                width={150}
                height={150}
                alt="elipse img"
                className="elipse-img"
                />
                <Image 
                src={"/assets/icons/arrow-down.svg"}
                width={80}
                height={80}
                alt="arrow down"
                className="arrow-down"
                />
              </Link>
            </div>
          
        </div>
      </div>
    </section>
  )
}

export default Services