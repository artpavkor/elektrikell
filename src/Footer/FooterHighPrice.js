import Container from 'react-bootstrap/Container';
import Countdown from 'react-countdown';
import { useSelector } from 'react-redux';

function FooterHighPrice() {
    const xHign = useSelector((state) => state.xHign);
    const hignPriceTimestamp = xHign ? xHign[0].timestamp : '';
    // const rushHour = xHign ? moment.unix(xHign[0]?.timestamp).format("HH:hh") : '';
    return (
        <Container className="text-center">
            <div className="mt-4">
                <p className="fs-5">Järgmine tiputund on</p>
                <h1 style={{ fontSize: '62px' }}>{hignPriceTimestamp && <Countdown date={hignPriceTimestamp * 1000} />}</h1>
            </div>
            <div className="mt-4 mb-4">
                <span className="fw-light" style={{ fontSize: '20px' }}>Soovitame tiptundide ajal vähendada elektri tarbimist, et aidata kaasa Euroopa
                    ühisele eesmärgile alandada <br></br> tiputundidel -5% elektri tarbmist ja vähendada maagaasi nõudlust.
                    <a target="blank" href="https://www.consilium.europa.eu/et/infographics/eu-measures-to-cut-down-energy-bills/">Loe lähemalt</a>
                </span>
            </div>
            <p className='mt-3' >Artem Korniienko
                <br></br>
                <span style={{ fontSize: '12px' }}>
                    artpavkor@gmail.com
                </span>
                <br></br>
                <span style={{ fontSize: '12px' }}>
                    ©Copyright 2023
                </span>
            </p>
        </Container>
    );
}


export default FooterHighPrice;