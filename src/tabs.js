const addParagraph = (text) => {
    let temp = document.createElement('p');
    temp.innerHTML = text;
    return temp;
}

const portfolio = () => {
    let content = document.createElement('div');
    content.setAttribute('class', 'fade-in');
    let gitParagraph = addParagraph('<a href=\'github.com/macborkow\'>github</a>';
    gitParagraph.style.textAlign = 'center';
    gitParagraph.style.position = 'relative';
    gitParagraph.style.right = '2vw';
    content.appendChild(gitParagraph);
    content.appendChild(document.createElement('br'));
    content.appendChild(addParagraph(`Few examples of my projects: <ul>
    <li><a href=\'https://github.com/macborkow/website-intk\'>This very page</a></li>
    <li><a href=\'https://github.com/macborkow/calculator\'>Calculator</a></li>
    <li><a href=\'https://github.com/macborkow/etch-a-sketch\'>Etch-a-sketch</a></li>
    <li><a href=\'https://github.com/macborkow/unnamed-game\'>C++ platformer game</a></li>
    <li><a href=\'https://github.com/macborkow/spaceJump\'>Android unity hypercasual game</a></li>
    <li><a href=\'https://github.com/macborkow/chat-app'>Chat app with PHP backend</a></li>
    <li><a href=\'https://github.com/macborkow/google-homepage'>Visual clone of Google mainpage</a></li>
    `));
    
    
    return content;
}

const contact = () => {
    let content = document.createElement('div');
    content.setAttribute('class', 'fade-in');
    content.style.textAlign = 'center';
    content.style.position = 'relative';
    content.style.right = '2vw';
    content.appendChild(addParagraph('<a href=\'mailto:macborkow@gmail.com\'>Email</a>'));
    content.appendChild(document.createElement('br'));
    content.appendChild(addParagraph('<a href=\'https://www.linkedin.com/in/macborkow/\'>Linkedin</a>'));
    return content;
}

const intro = () => {
    let content = document.createElement('div');
    content.setAttribute('class', 'fade-in');
    content.appendChild(addParagraph('Hello there!'));
    content.appendChild(addParagraph('My name is Maciej, I\'m a recent engineering graduate seeking to launch his IT career.'));
    content.appendChild(addParagraph('My main area of interests currently is full-stack web development, although I\'ve also been busy making various programs in C++ and Python and also games using Unity engine.'));
    content.appendChild(addParagraph(`Skills that I\'m trying to incorporate fully into my stack: <ul> 
    <li>React</li>
    <li>Node</li>
    <li>MangoDB</li>
    <li>Docker</li>
    `));
    content.appendChild(addParagraph('When I\'m not busy coding you could probably find me playing guitar, chess or cooking.'));
    return content;
}

export {
    portfolio,
    contact,
    intro
}