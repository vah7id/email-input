import createElement from './utils/createElement';
import emailInput, {emailInputProps} from './components/email-input';
import emailActions from './components/email-actions';
import './assets/styles/index.scss';

const App = () => {
  // root DOM element
  let el = createElement('div', {id: 'root'});
  let cardEl = createElement('div', {class: 'Card'});

  // watch on emails list change in emailInput component
  const emailObserver = (emails: string[]) => {
      console.log(emails)
  };

  const defaultState = ['default@domain.com'];

  // initialize the email input component
  const emailInputInstance: emailInputProps = new emailInput(createElement('div', {class: 'emails'}), defaultState, {observer: emailObserver});

  // write header element to DOM
  cardEl.innerHTML = `<h2>Share <b>Board name</b> with others</h2>`;

  // create and initialize the emailInput
  cardEl.appendChild(emailInputInstance.render());

  // create and initialize the action buttons
  cardEl.appendChild(emailActions(emailInputInstance));

  // render the application layout
  el.appendChild(cardEl);
  return el;
};

document.body.innerHTML = "";
document.body.append(App());