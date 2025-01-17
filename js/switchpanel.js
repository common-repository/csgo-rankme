'use strict';

(function() {
    let div = document.getElementById('rankme_search');
    let panel = document.getElementById('rankme_search_panel');
    let lastElem = div.children[1];
    lastElem.hidden = false;

    if (div.children.length > 2) {
        for (let i = 1; i < div.children.length; i++) {
            let button = document.createElement('button');
            button.textContent = div.children[i].dataset.name;
            button.dataset.id = div.children[i].id;
            panel.append(button);
        }
    }

    panel.addEventListener('click', function(e) {
        if (e.target.tagName !== 'BUTTON') return;
        if (e.target === lastElem) return;

        lastElem.hidden = true;
        let currentElement = document.getElementById(e.target.dataset.id);
        currentElement.hidden = false;
        lastElem = currentElement;
    });
})();