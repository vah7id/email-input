import createElement from '../utils/createElement';

/**
 * Email input class component
 *
 * @emails {Array} list of initial (default) emails
 * @el {HtmlElement} specify the parent DOM element
 */

class EmailInput {
    emails: string[];
    el: HTMLElement;
    constructor(el: HTMLElement, emails: string[]) {
        this.el = el;
    	this.emails = emails;
    }
    get getEmails() {
        return this.emails;
    }
    onDelete(email: string) {
        const idx = this.emails.indexOf(email);
        if(idx > -1) {
            this.emails.splice(idx, 1);
            this.render();
        }
    }
    onCreate(email: string) {
        if(this.emails.indexOf(email) < 0 && email.length > 0) {
            this.emails.push(email);
            this.render();
        }
    }
    onBlur(inputEl: HTMLInputElement, email: string) {
        // if multiple emails pasted split them first
        if(email.indexOf(',') > -1) {
            inputEl.value = '';
            email.split(',').forEach((item: string) => this.onCreate(item));
            return;
        }
        this.onCreate(email);
    }
    onKeyup(inputEl: HTMLInputElement, e: any) {
        e.preventDefault();
        if (e.keyCode === 13 || e.key === ',') {
            const value = e.currentTarget.value.trim();
            inputEl.value = '';
            this.onCreate(value.replace(/\,|-/g, ''));
        }
    }
    replaceAll() {
        this.emails = [];
    }
    render(): HTMLElement {
        // clean and reset the rendered HTML
        this.el.innerHTML = '';

        // create and attach the text input to the email list view
        const elTextInput = createElement('input', {
            name: 'email',
            type: 'text',
            placeholder: 'enter new email'
        });

        const emailsContainer = createElement('div');

        // map all the emails and create the email (item) element
        this.emails.forEach((email: string) => {
            const tagEl = createElement('span', {}, `${email} x`);

            // bind click event to delete email
            tagEl.addEventListener('click', () => this.onDelete(email));

            emailsContainer.appendChild(createElement('li', {}, tagEl));
        });

        // add event listener on blur event to add new email
        elTextInput.addEventListener('blur', () => this.onBlur(elTextInput, elTextInput.value.trim()));

        // add new email on type enter and cama char
        elTextInput.addEventListener('keyup', ((e: any) => this.onKeyup(elTextInput, e)));

        emailsContainer.appendChild(elTextInput);

        // append the emails list elements to the list container
        const elInput = createElement('ul', {class: 'list'} , emailsContainer);

        this.el.appendChild(elInput);
        this.el.appendChild(elTextInput);
        return this.el;
    }
}

export default EmailInput;