import createElement from '../utils/createElement';

const emailActions = (emailInput: any): HTMLElement => {
    const generateEmailBtn: HTMLButtonElement = createElement('button', {name: 'generate-email'}, 'Add email');
    const getEmailsCountBtn: HTMLButtonElement = createElement('button', {name: 'get-emails'}, 'Get emails count');

    generateEmailBtn.addEventListener('click', () => {
        emailInput.onCreate(Math.random().toString(36).substring(2,11) + '@domain.com');
    });

    getEmailsCountBtn.addEventListener('click', () => {
        alert(emailInput.emails.length);
    });

    const el = createElement('div', {class: 'email-actions'});
    el.appendChild(generateEmailBtn);
    el.appendChild(getEmailsCountBtn);
    return el;
};

export default emailActions;