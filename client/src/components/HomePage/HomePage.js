import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVideo, faKeyboard } from "@fortawesome/free-solid-svg-icons";
import shortid from "shortid";
import "./HomePage.scss";
import Header from "../UI/Header/Header";


const HomePage = () => {
    const history = useHistory();
  
    const startCall = () => {
      const uid = shortid.generate();
      history.push(`/${uid}#init`);
    };
    return ( 
        <div className="home-page">
            <Header />
            <div className="body">
                <div className="left-side">
                    <div className="content">
                        <h1>Premium video meetings. Now free for everyone.</h1>
                        <p>
                            We re-engineered the service that we built for secure business meetings, Google Meet, to make it free and available for all.
                        </p>
                        <div className="action-btn">
                            <button className='btn blue' onClick={startCall}>
                                <FontAwesomeIcon className='icon-block' icon={faVideo}></FontAwesomeIcon>
                                New Meeting
                            </button>
                            <div className="input-block">
                                <div className="input-section">
                                    <FontAwesomeIcon className='icon-block' icon={faKeyboard}></FontAwesomeIcon>
                                    <input type="text" placeholder='Enter a code or link' />
                                </div>
                                <button className='btn no-bg'>Join</button>
                            </div>
                        </div>
                    </div> 
                    <div className='help-text'>
                        <a href="https://support.google.com/meet/?hl=en-GB#topic=7306097" target="_blank" rel='noreferrer'>Learn more</a> about Google Meet
                    </div>
                </div>
                <div className="right-side">
                    <div className="content">
                        <img src="https://www.gstatic.com/meet/user_edu_get_a_link_light_90698cd7b4ca04d3005c962a3756c42d.svg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default HomePage;