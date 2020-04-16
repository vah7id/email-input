import createElement from '../utils/createElement';

class EmailInput {
    emails: string[];
    constructor(emails: string[]) {
    	this.emails = emails;
    }
    render(): HTMLElement {
        const el = createElement('div', {});
        const container = createElement('div', {});
        this.emails.map((email: string) => {
            const tagEl = createElement('span', {}, email);
            container.appendChild(tagEl);
        });
        const elInput = createElement('div', {}, container);
        el.appendChild(elInput);
        return el;
    }
}

export default EmailInput;