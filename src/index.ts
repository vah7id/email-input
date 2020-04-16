import createElement from './utils/createElement';
import emailInput from './components/email-input';
import emailActions from './components/email-actions';

const App = () => {
  // root DOM element
  let el = createElement('div');

  // initialize the email input component
  const emailInputInstance: any = new emailInput(createElement('div', {class: 'emails'}), []);

  emailInputInstance.onChange((emails: string[]) => {
    console.log('sah');
  });

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