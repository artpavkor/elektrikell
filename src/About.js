import NavBar from './Header/NavBar';
import Picture from './125740.png';
import Accordion from 'react-bootstrap/Accordion';
import { useState, useEffect } from 'react';

function About() {

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <div>
            <NavBar />
            <div className="b-example-divider"></div>
            <div className="container my-5">
                <div className="about row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
                    <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
                        <div className={`fade-in-text ${isVisible ? 'is-visible' : ''}`}>
                            <h1 className="display-4 fw-bold lh-1 name">Artem Korniienko</h1>
                            <p><b>Address:</b> Tallinn, Estonia<br></br>
                                <b>Email:</b> artpavkor@gmail.com <br></br>
                                <b>Phone:</b> 123-456-789</p>
                            <p className="lead">Development experience with ReactJS, Redux, GraphQL and other modern technologies.
                                Knowledge of JavaScript, HTML, CSS.
                                Strong knowledge of Git, Webpack, Babel, Node.js and other tools.
                                Experience with various frameworks and libraries.
                                Experience in team work and project management.</p>
                        </div>
                        <div className=" justify-content-md-start mb-4 ">
                            <Accordion>
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>About the application</Accordion.Header>
                                    <Accordion.Body>
                                        The real-time electricity price tracking app provides users with up-to-date information on the current electricity price. It allows users to see current electricity rates in different regions and be notified of price changes.
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </div>
                    </div>
                    <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
                        <img className="rounded-lg-5" src={Picture} alt="" width="700" />
                    </div>
                </div>
            </div>
        </div>
    )

}
export default About;