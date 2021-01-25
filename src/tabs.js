const addParagraph = (text) => {
    let temp = document.createElement('p');
    temp.innerHTML = text;
    return temp;
}

const portfolio = () => {
    let content = document.createElement('div');
    content.appendChild(addParagraph('<a href=\'github.com/macborkow\'>github</a>'));
    content.appendChild(document.createElement('br'));
    content.appendChild(addParagraph('Few examples of my projects:'));
    content.appendChild(document.createElement('br'));
    content.appendChild(addParagraph('<a href=\'https://github.com/macborkow/website-intk\'>This very page</a>'));
    content.appendChild(document.createElement('br'));
    content.appendChild(addParagraph('<a href=\'https://github.com/macborkow/calculator\'>Calculator</a>'));
    content.appendChild(document.createElement('br'));
    content.appendChild(addParagraph('<a href=\'https://github.com/macborkow/etch-a-sketch\'>Etch-a-sketch</a>'));
    content.appendChild(document.createElement('br'));
    content.appendChild(addParagraph('<a href=\'https://github.com/macborkow/unnamed-game\'>C++ platformer game</a>'));
    
    
    return content;
}

const contact = () => {
    let content = document.createElement('div');
    content.appendChild(addParagraph('<a href=\'mailto:macborkow@gmail.com\'>Email</a>'));
    content.appendChild(document.createElement('br'));
    content.appendChild(addParagraph('<a href=\'https://www.linkedin.com/in/macborkow/\'>Linkedin</a>'));
    return content;
}

const intro = () => {
    let content = document.createElement('div');
    content.appendChild(addParagraph('Hello there!'));
    content.appendChild(addParagraph('My name is Maciej, I\'m a recent engineering graduate seeking to launch his IT career.'));
    content.appendChild(addParagraph('My main area of interests currently is full-stack web development, although I\'ve also been busy making various programs in C++ and Python and also games using Unity engine.'));
    return content;
}

export {
    portfolio,
    contact,
    intro
}