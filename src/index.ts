import createElement from './utils/createElement';
import emailInput, {emailInputProps} from './components/email-input';
import emailActions from './components/email-actions';

const App = () => {
  // root DOM element
  let el = createElement('div', {id: 'root'});

  // watch on emails list change in emailInput component
  const emailObserver = (emails: string[]) => {
      console.log(emails)
  }

  // initialize the email input component
  const emailInputInstance: emailInputProps = new emailInput(createElement('div', {class: 'emails'}), [], {observer: emailObserver});

  // write header element to DOM
  el.appendChild(createElement('div', {}, 'Hello world!'));

  // create and initialize the emailInput
  el.appendChild(emailInputInstance.render());

  // create and initialize the action buttons
  el.appendChild(emailActions(emailInputInstance));

  // render the application layout
  return el;
};

document.body.innerHTML = "";
document.body.append(App());