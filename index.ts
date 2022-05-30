// Import stylesheets
import './style.css';
import { Decorator } from './Decorator';

new Decorator();

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;
