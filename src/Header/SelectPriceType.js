import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

function SelectPriceType({ activePrice, setActivePrice }) {

  return (
    <ButtonGroup aria-label="Basic example">
      <div className='btn_group'>
        <Button active={activePrice === 'low'} onClick={() => setActivePrice('low')} className="btn btn-light btn-sm">Odavad Tiputunnid </Button>
        <Button active={activePrice === 'high'} onClick={() => setActivePrice('high')} className="btn btn-light btn-sm">Tiputunnid</Button>
      </div>
    </ButtonGroup>
  );
}

export default SelectPriceType;