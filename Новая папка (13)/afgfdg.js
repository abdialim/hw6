    const form = document.querySelector('form');
    const nameInput = document.querySelector('#name');
    const ageInput = document.querySelector('#age');
    const result = document.querySelector('#result');

    const data = [];

    form.addEventListener('submit', (event) => {
      event.preventDefault();

      const name = nameInput.value;
      const age = ageInput.value;

      data.push({ name, age });

      nameInput.value = '';
      ageInput.value = '';

      renderData();
    });

    function renderData() {
      result.innerHTML = '';

      const listItems = data.map((item) => {
        return `<li>${item.name} - ${item.age}</li>`;
      });
      result.innerHTML = `<ul>${listItems.join('')}</ul>`;
    }