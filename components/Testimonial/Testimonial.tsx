import "./Testimonial.css";

import Link from "next/link";
import Image from "next/image";
import { TESTIMONIAL } from "@/constants";
const Testimonial = () => {
  return (
    <section className="app__testimonial section__padding">
      <div className="app__container">
        <div className="app__testimonial_heading_content">
          <div className="app__testimonial_heading">
            <h3 className="app__section_title">TESTIMONIAL</h3>
            <h1 className="app__heading">What people have said about us</h1>
          </div>
          <div className="app__testimonial_heading_text">
            <p className="app__text">Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts </p>
          </div>
        </div>

        <div className="app__testimonial_cards grid">
          {TESTIMONIAL.map((testimonial) => (
            <div className="app__testimonial_card">
              <div className="app__testimonial_card_img">
                <Image 
                src={testimonial.urlImg}
                width={90}
                height={90}
                alt="people img"
                className="people-img"
                />
              </div>
              <div className="app__testimonial_card_personal_info">
                <div className="app__testimonial_card_name">
                  <h3>{testimonial.name}</h3>
                </div>
                <div className="app__testimonial_card_text">
                  <p className="app__text">{testimonial.text}</p>
                </div>
                <div className="app__testimonial_card_stars">
                  <Image 
                  src={testimonial.stars}
                  width={210}
                  height={34}
                  alt="stars"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonial