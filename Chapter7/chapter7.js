// Create <div> element
const div = document.createElement('div');

// Content
div.innerHTML = "<strong>Hi there!</strong> You've read an important message.";

// Insert it into th <body> element in HTML page
// append = push the item into the <body> element
document.body.append(div);


const div2 = document.createElement("div");
div2.innerHTML = "prepend";
document.body.prepend(div2);

const div3 = document.createElement("div");
div3.innerHTML = "wowowwowow";
document.body.before(div3);

const div4 = document.createElement("div");
div4.innerHTML = "hihihhi";
document.body.after(div4);

const div5 = document.createElement("div");
div5.innerHTML = "yaoayaoayadasudaosd";
document.body.prepend(div5);

div4.classList.add('border');
div4.classList.add('text');

div4.classList.remove('border');