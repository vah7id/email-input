
# email-input
Email input component


## Install & Running

Install with `yarn`

Start with `yarn start` 

Production Build with `yarn build`

## EmailInput component instance

I created a class component for email input with the below props:

* `el: HTMLElement` parent DOM element of component
* `emails: string[]` default email list
* `options: {}` component options

In options section you can add your observer callback function then you can always the last changes on emails list.

`const emailInput = new emailInput(createElement('div', {class: 'emails'}), defaultState, {observer: emailObserver});`

## API

A method to get all entered emails. Both valid and invalid.
`emailInput.getEmails()`

A method to replace all entered emails with new ones.
`emailInput.replaceAll()`



