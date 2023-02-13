import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

function SelectPriceType({activePrice, setActivePrice}) {
  return (
    <ButtonGroup aria-label="Basic example">
      <Button active ={activePrice === 'low'} onClick = {() => setActivePrice('low')}  variant="secondary">Odavad Tiputunnid </Button>
      <Button active ={activePrice === 'high'} onClick = {() => setActivePrice('high')} variant="secondary">Tiputunnid</Button>
    </ButtonGroup>
  );
}

export default SelectPriceType;