const init = () => {
    let content = document.getElementById('content');

    let h1 = document.createElement('h1');
    h1.setAttribute('class', 'glow');
    h1.innerHTML = 'Maciej Borkowski';

    let tabWrapper = document.createElement('div');
    tabWrapper.setAttribute('id', 'tab-wrapper');

    let scroll = document.createElement('div');
    scroll.setAttribute('class', 'scroll');

    content.appendChild(h1);
    content.appendChild(tabWrapper);
    content.appendChild(scroll);
    
    let tabs = [];

    for(let i = 0; i < 3; ++i) {
        tabs.push(document.createElement('div'));
        tabs[i].setAttribute('class', 'tab');
        tabWrapper.appendChild(tabs[i]);
    }
    tabs[0].innerHTML = "Intro";
    tabs[1].innerHTML = "Portfolio";
    tabs[2].innerHTML = "Contact";

    return {
        intro: tabs[0],
        portfolio: tabs[1],
        contact: tabs[2],
        scrollContent: scroll
    }
}

export default init