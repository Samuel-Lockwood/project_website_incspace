import "./Header.css";

import Image from "next/image";
const Header = () => {
  return (
    <header className="app__header">
      <div className="app__container flex">
        <div className="app__header_heading">
          <h1>Take your brand to new heights with our digital <span>marketing expertise</span></h1>
        </div>

        <div className="app__header_info">
          <button className="app__header_btn_header">
            <p>Let's Talk</p>
              <Image 
              src={"/assets/icons/arrow-right.svg"}
              width={26}
              height={20}
              alt="arrow"
              />
          </button>
          <div className="app__header_text">
            <p className="app__text">From high-speed internet and comfortable workstations to meeting rooms and events that foster connections, we've thought of everything to make your work experience exceptional.</p>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header