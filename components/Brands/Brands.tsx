"use client"
import Image from "next/image";
import "./Brands.css";
import { BRANDS } from "@/constants";
const Brands = () => {
  return (
    <section className="app__brands">
      <div className="app__container">
        <div className="app__brand">

          {BRANDS.map((brands, index) => (
            <Image 
            src={brands.src}
            width={brands.width}
            height={brands.height}
            alt={brands.alt}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Brands