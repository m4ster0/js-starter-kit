import './style.css';
import numeral from 'numeral';

const value = numeral(1400).format('$0,0.00');
debugger;  //eslint-disable-line
console.log(`Formated value: ${value}`);
