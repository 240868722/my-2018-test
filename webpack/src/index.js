let str = require('./a.js');
console.log(str);
import './style.css';
import printMe from './print.js';
import Icon from './1.jpg';

  function component() {
    var element = document.createElement('div');
    var btn = document.createElement('button');
    btn.innerHTML = 'Click me and check the console!';
    btn.onclick = printMe;
    element.appendChild(btn);
    // lodash 是由当前 script 脚本 import 导入进来的
    // element.innerHTML = '6666';
    // element.classList.add("head");
    //   var myIcon = new Image();
    //   myIcon.src = Icon;   
    //   element.appendChild(myIcon);

    return element;
  }

  document.body.appendChild(component());