import "./Introducing.css";
import checkmarkIcon from "../../assets/icons/icon-checkmark.svg";
import mobileImg from "./mobile.png";
import desktopImg from "./desktop.png";

export const Introducing = () => {
  const features = [
    "Helps you invest your super under the guidance of a licensed financial adviser",
    "Makes sure that your super stays correctly invested for the long term.",
    "Reviews the performance of your super and makes changes to investments when necessary.",
    "Gives you access to a licensed financial adviser by email.",
    "Makes sure you and your family are properly insured and protected against long term illness, injury and death. The last thing you need is big bills and loans you can't pay if you can't work",
    "Reviews your insurances to make sure you're not overpaying on premiums in the future",
    "Will always do your paperwork (something most super funds and insurers don't do for you)",
    "Sends you an easy-to-read monthly newsletter that keeps you updated on important financial topics",
  ];

  return (
    <section className="introducing section">
      <div className="container">
        <div className="introducing-grid">
          {/* Original Form Card - Commented Out
                    <div className="introducing-form-card">
                        <div className="form-header">
                            <div className="form-tabs">
                                <button className="form-tab active">Account</button>
                                <button className="form-tab">Portfolio</button>
                            </div>
                            <div className="form-actions">
                                <button className="icon-btn settings-btn">
                                    <Settings />
                                </button>
                                <button className="signout-btn">Signout</button>
                            </div>
                        </div>
                        <h2 className="form-card-title">Account</h2>
                        <div className="form-content">
                            <h3 className="form-section-title">User Details</h3>
                            <p className="form-section-subtitle">Enter Your Details</p>
                            
                            <form className="user-details-form">
                                <div className="form-group">
                                    <input 
                                        type="text" 
                                        placeholder="Title (Mr/Mrs/etc) *" 
                                        className="form-input"
                                    />
                                </div>
                                
                                <div className="form-group">
                                    <input 
                                        type="text" 
                                        placeholder="First Name *" 
                                        className="form-input"
                                    />
                                </div>
                                
                                <div className="form-group">
                                    <input 
                                        type="text" 
                                        placeholder="Middle Name(s)" 
                                        className="form-input"
                                    />
                                </div>
                                
                                <div className="form-group">
                                    <input 
                                        type="text" 
                                        placeholder="Surname *" 
                                        className="form-input"
                                    />
                                </div>
                                
                                <div className="form-group">
                                    <input 
                                        type="date" 
                                        placeholder="Date of Birth *" 
                                        className="form-input"
                                    />
                                </div>
                                
                                <div className="form-group">
                                    <select className="form-select">
                                        <option value="">Are you an Australian resident for tax purposes?</option>
                                        <option value="yes">Yes</option>
                                        <option value="no">No</option>
                                    </select>
                                </div>
                                
                                <button type="submit" className="form-submit-btn">
                                    Submit
                                </button>
                            </form>
                        </div>
                    </div>
                    */}

          {/* Responsive Images */}
            <div className="introducing-image-container">
              <img
                src={mobileImg}
                alt="Equee mobile app interface"
                className="introducing-img introducing-img-mobile"
              />
              <img
                src={desktopImg}
                alt="Equee desktop app interface"
                className="introducing-img introducing-img-desktop"
              />
            </div>

            <div className="introducing-text">
              <h2 className="section-title highlight">Introducing Equee</h2>

              <h3 className="section-subtitle">
                Your financial bestfriend that runs on any device
              </h3>

              <ul className="feature-list">
                {features.map((feature, index) => (
                  <li key={index} className="feature-list-item">
                    <img
                      src={checkmarkIcon}
                      alt=""
                      className="checkmark-icon"
                    />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

      </div>
    </section>
  );
};
