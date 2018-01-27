/* global CONVARGO*/
'use strict';

(() => {
    const render = (actors) => {
        const fragment = document.createDocumentFragment();
        const div = document.createElement('div');
        const template = actors.map(actor => {
            return `
        <div class="actor col">
          <p><h1>${actor.who}</h1></p>
          <p><h2>${actor.type}</h2></p>
          <p><h3>${actor.amount} \u20AC</h3></p>
        </div>
      `;
        }).join('');

        div.innerHTML = template;
        fragment.appendChild(div);
        document.querySelector('#actors').innerHTML = '';
        document.querySelector('#actors').appendChild(fragment);
    };

    const button = document.querySelector('#compute');

    button.addEventListener('click', function onClick() {
        const trucker = CONVARGO.getTrucker();
        const distance = document.querySelector('.distance').value;
        const volume = document.querySelector('.volume').value;
        const option = document.querySelector('.option').checked;
        const actors = CONVARGO.payActors(trucker, distance, volume, option);

        render(actors);

        return;
    });
})();
