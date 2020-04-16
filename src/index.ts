interface Props {
	App(): void
}

const App = () => {
  let text = document.createTextNode("Hello World! ");
  let el = document.createElement('div');
  el.appendChild(text);
  return el;
}

document.body.innerHTML = "";
document.body.append(App());