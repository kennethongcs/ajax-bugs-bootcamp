const createABug = () => {
  const div = document.createElement('div');
  const container = document.querySelector('.container');
  div.innerHTML = `
  <br>
  <div>
  <div>
  <label for="problem">Problem: </label> 
  <input id="problem" type="text" placeholder="problem" name="problem" id="problem">
  </div>
   <div>
  <label for="errorText">errorText: </label> 
  <input id="errorText" type="text" placeholder="errorText" name="errorText" id="errorText">
  </div>
   <div>
  <label for="commit">Commit: </label> 
  <input id="commit" type="text" placeholder="commit" name="commit" id="commit">
  </div>
  <input type="submit" value="Submit" class="submitBug">
  </div>
  `;
  container.appendChild(div);
  document.querySelector('.submitBug').addEventListener('click', () => {
    const dataSubmit = {};
    dataSubmit.problem = document.querySelector('#problem').value;
    dataSubmit.error_text = document.querySelector('#errorText').value;
    dataSubmit.commit = document.querySelector('#commit').value;
    axios.post('/create', dataSubmit);
  });
};
