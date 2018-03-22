import { file, parse } from './globals.js';
// let {parse} = require("exports-loader?file,parse=helpers.parse!./globals.js");

function component() {
    var element = document.createElement('div');

    // element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.innerHTML = join(['Hello', 'webpack'], ' ');

    // Assume we are in the context of `window`
    this.alert('Hmmm, this probably isn\'t a great idea...');

    parse();

    return element;
}

document.body.appendChild(component());