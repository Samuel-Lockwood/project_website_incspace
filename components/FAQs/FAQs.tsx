import "./FAQs.css";

import Image from "next/image";
const FAQs = () => {
  return (
    <section className="app__FAQs section__padding">
      <div className="app__container">
        <div className="app__FAQs_business_content">
          {Array(5).fill(1).map((_, index) => (
            <div className="app__FAQs_business_content_text flex__between">
              <p>How can we help your business?</p>
              <Image 
              src={"/assets/icons/arrow.svg"}
              width={10}
              height={10}
              alt="arrow"
              style={{ cursor : "pointer" }}
              />
            </div>
          ))}
        </div>
        <div className="app__FAQs_main_content">
          <div className="app__FAQs_main_content_info">
            <h3 className="app__section_title">FAQs</h3>
            <h1 className="app__heading">Be Kind to Your Mind Question & Answer</h1>
            <p className="app__text ">All Your Qustions are in A document, in question and answer format, that introduces newcomers to a topic or answers common questions.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQs