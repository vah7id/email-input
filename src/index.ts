import createElement from './utils/createElement';
import emailInput from './components/email-input';

interface Props {
	App(): void
}

const App = () => {
  // root DOM element
  let root = document.createElement('div');

  // create and initialize the emailInput
  let emailInputEl: HTMLElement = new emailInput(['ds@sds.sds']).render();

  // write to DOM
  root.appendChild(createElement('div', {}, 'Hello world!'));
  root.appendChild(emailInputEl);
  return root;
}

document.body.innerHTML = "";
document.body.append(App());