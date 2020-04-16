import createElement from '../utils/createElement';

class EmailInput {
    emails: string[];
    el: HTMLElement;
    constructor(el: HTMLElement, emails: string[]) {
        this.el = el;
    	this.emails = emails;
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
    render(): HTMLElement {
        this.el.innerHTML = '';

        const emailsContainer = createElement('div');

        // map all the emails and create the email (item) element
        this.emails.map((email: string) => {
            const tagEl = createElement('span', {}, `${email} x`);

            // bind click event to delete email
            tagEl.addEventListener('click', () => this.onDelete(email));

            emailsContainer.appendChild(createElement('li', {}, tagEl));
        });

        // create and attach the text input to the email list view
        const elTextInput = createElement('input', {
            name: 'email',
            type: 'text',
            placeholder: 'enter new email'
        });

        // add new email on blue event
        elTextInput.addEventListener('blur', () => {
            const value = elTextInput.value.trim();
            // if multiple emails pasted
            if(value.indexOf(',') > -1) {
                this.onCreate(value.split(','))
            }
            this.onCreate(value);
        });

        // add new email on type enter and cama char
        elTextInput.addEventListener('keyup', ((e: any) => {
            e.preventDefault();
            if (e.keyCode === 13 || e.key === ',') {
                const value = e.currentTarget.value.trim();
                this.onCreate(value);
            }
        }));

        emailsContainer.appendChild(elTextInput);

        // append the emails list elements to the list container
        const elInput = createElement('ul', {class: 'list'} , emailsContainer);

        this.el.appendChild(elInput);
        this.el.appendChild(elTextInput);
        return this.el;
    }
}

export default EmailInput;