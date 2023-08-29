import { value } from './module1.js';

console.log(value);

import { component1 } from './component1/component1.js';

document.addEventListener('DOMContentLoaded', function(event) {
    component1.render(document.body.querySelector('.container'));
});