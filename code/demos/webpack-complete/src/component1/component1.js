import './component1.css';
import * as template from './component1.html';

const component1 = {
  render: function(element){
    element.innerHTML = template;
  }
}
export {component1};