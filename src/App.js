import { Routes, Route } from 'react-router-dom';
import About from './About';
import ElektriKell from './ElektriKell';

// Компоненты это обычные JavaScript функции которые возвращают React елемент
// Название компонента должно начинатся с заглавной буквы для того что бы различать компоненты от html елементов в JSX  
// 
// JSX это новый синтаксис кода от React JS который позволяет писать HTML и JS вместе 
// Компоненты должны возвращать только один React елемент написаный благодаря JSX

function App() {
    // Каждый компонент Route отвечает за какую нибуть ссылку 
    // В Route мы  передаем property path которая определяет ссылки по которой он инициализирует коипонент
    // в елемент property мы передаем тот самый компонент

    // Также мы можем передать данные с ссылке в компонент 
    // ':' означает что мы возьмьем все что написано после / и передадим в переменную название которого мы определили 
    // после ':' это называют параметры ссылки 
    // в нашем случае http://localhost:3000/low/6 будет означать что мы хотим видеть компонент <Elektrikell />
    // с параметром durationParam = 6
    return (
        <Routes>
            <Route path="/" element={<ElektriKell />} />
            <Route path="/:activePrice" element={<ElektriKell />} />
            <Route path="/low/:durationParam" element={<ElektriKell />} />
            <Route path="/about" element={<About />} />
        </Routes>
    );
}

export default App;