/**
 * createElement, custom helper function
 * @param {string} type,          specify the type of element.
 * @param {object} attributes     list of (key, value) attributes
 * @param {HTMLElement} children  children DOM element
 */

const createElement = (type: string, attributes?: { [key: string]: string; }, ...children: any): any => {
  const el = document.createElement(type);

  for (let attr in attributes) {
    el.setAttribute(attr, attributes[attr]);
  }

  children.forEach((child: any) => {
    if (typeof child === 'string') {
      el.appendChild(document.createTextNode(child));
    } else {
      el.appendChild(child);
    }
  });

  return el
};

export default createElement;