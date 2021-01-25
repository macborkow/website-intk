import init from './init.js';
import { intro, portfolio, contact } from './tabs.js';

const app = (() => {
    let dom = init();
    let currentContent = intro();
    dom.scrollContent.appendChild(currentContent);

    let tabChangeTemplate = (content) => {
        dom.scrollContent.removeChild(currentContent);
        currentContent = content;
        dom.scrollContent.appendChild(currentContent);
    }

    dom.intro.onclick = function(){tabChangeTemplate(intro())};
    dom.portfolio.onclick = function(){tabChangeTemplate(portfolio())};
    dom.contact.onclick = function(){tabChangeTemplate(contact())};
})();