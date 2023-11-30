import "./header.css";

const Header = () => {
  return (
    <div className="headerContainer">
      <div className="headerWrapper">
        <div className="barContainer">
          <div className="barWrapper">
            <div className="logo">
              <img src="/logo.png" alt="Img not available" />
            </div>
            <div className="tabListContainer">
              <button className="headerBtn">Home</button>
              <button className="headerBtn">Attorneys</button>
              <button className="headerBtn">Practice areas</button>
              <button className="headerBtn">About us</button>
            </div>
            <button className="contact">Contact Now</button>
          </div>
        </div>
        <div className="headerContentContainer">
          <div className="headerContentWrapper">
            <div className="title">
              You dont have to{" "}
              <span style={{ fontWeight: "800" }}>fight them alone</span>
            </div>
            <div className="subtitle">
              Lorem ipsum dolor sit amet consectetur adipiscing elit blandit,
              curabitur sodales conubia ut inceptos faucibus himenaeos tortor
              eget, hac massa gravida arcu interdum proin curae.
            </div>
            <div className="emailContainer">
              <div className="emailWrapper">
                <div className="emailImg">
                  <img src="./message_icon.png" alt="img not available" />
                </div>
                <input
                  className="emailAlign"
                  placeholder="Enter your email address"
                ></input>
                <button className="sendEmail">Let's Talk</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
