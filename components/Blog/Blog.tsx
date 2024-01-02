import "./Blog.css";

import Image from "next/image";
import { BLOG } from "@/constants";
const Blog = () => {
  return (
    <section className="app__blog section__padding">
      <div className="app__container">
        <div className="app__blog_heading">
          <h3 className="app__section_title">BLOG</h3>
          <h2>Stay updated with our latest news </h2>
        </div>

        <div className="app__blog_cards grid">
          {BLOG.map((blog) => (
            <div className="app__blog_card">
              <div className="app__blog_card_img">
                <Image 
                src={blog.urlImg}
                width={800}
                height={600}
                alt=""
                className="social_img"
                />
                <div className="app__blog_card_date">
                  <p>23</p>
                  <span>Jan</span>
                </div>
              </div>
              <div className="app__blog_card_title">
                <h3>{blog.title}</h3>
              </div>
              <div className="app__blog_card_text">
                <p className="app__text">{blog.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Blog