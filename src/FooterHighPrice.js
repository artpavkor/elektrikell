import Container from "react-bootstrap/Container";

function FooterHighPrice () {
    return (
        <Container className = "text-center">
            <div className="mt-4">
                <p className="fs-5">Järgmine tiputund on</p>
                <h1>18:00st 19:00ni</h1>
            </div> 
            <div>
                <span className="fs-5">
                Siis on kilovatt-tunni hind 
                <span className="text-danger fw-semibold"> 20.76 </span>
                senti, mis on 
                <span className="text-danger fw-semibold"> 35% </span>
                 kallim kui praegu
                </span>
            </div>
            <div className="mt-2 mb-4">
                <span className="fw-light">Soovitame tiptundide ajal vähendada elektri tarbimist, et aidata kaasa Euroopa 
                    ühisele eesmärgile alandada <br></br> tiputundidel -5% elektri tarbmist ja vähendada maagaasi nõudlust.
                    <a target="_blank" href="https://www.consilium.europa.eu/et/infographics/eu-measures-to-cut-down-energy-bills/">Loe lähemalt</a>
                </span>    
            </div> 
        </Container>
    );
}


export default FooterHighPrice;