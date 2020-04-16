import createElement from './utils/createElement';
import emailInput from './components/email-input';

interface Props {
	App(): void
}

const App = () => {
  // root DOM element
  let root = createElement('div');
  let emailInputEl: HTMLElement = createElement('div', {class: 'emails'});

  // write header element to DOM
  root.appendChild(createElement('div', {}, 'Hello world!'));

  // create and initialize the emailInput
  root.appendChild(new emailInput(emailInputEl, ['ds@sds.sds']).render());

  // create and initialize the action buttons


  return root;
};

document.body.innerHTML = "";
document.body.append(App());