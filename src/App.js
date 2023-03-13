import  { Routes, Route }  from 'react-router-dom';
import About from './About';
import ElektriKell from "./ElektriKell";


function App () {
    return (
        <Routes>
            <Route path="/" element = {<ElektriKell />} />
            <Route path="/:activePrice" element = {<ElektriKell />} />
            <Route path = "/low/:durationParam" element = {<ElektriKell />} />
            <Route path="/about" element = {<About />} />
        </Routes>
    );
}

export default App;