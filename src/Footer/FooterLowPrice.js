import Container from 'react-bootstrap/Container';
import Countdown from 'react-countdown';
import Durations from './Durations';
import { useSelector } from 'react-redux';


function FooterLowPrice() {

    const lowPriceTimestamp = useSelector((state) => state.lowPriceTimestamp)
    return (
        <Container className="text-center">
            <p className='mt-3' style={{ fontSize: '22px' }}>Tahan tarbida</p>
            <div>
                <Durations />
            </div>
            <p className='mt-4' style={{ fontSize: '22px' }}>Parim aeg</p>
            <h1 style={{ fontSize: '62px' }}>{lowPriceTimestamp && <Countdown date={lowPriceTimestamp * 1000} />}</h1>
            {lowPriceTimestamp && <p className='mt-3' >Artem Korniienko
                <br></br>
                <span style={{ fontSize: '12px' }}>
                    artpavkor@gmail.com
                </span>
                <br></br>
                <span style={{ fontSize: '12px' }}>
                    ©Copyright 2023
                </span>
            </p>}
        </Container>
    );
}

export default FooterLowPrice;