//const { default: axios } = require("axios");

//const { default: axios } = require("axios");

//const axios = require('axios').default;

axios.get('db.json/clients').then(response=>{
    //console.log(response.data);
    return response.data;
}).then(  data => {
    console.log(data);
});

const formEm = document.querySelector('#clienEm'),
      formName = document.querySelector('#clienName'),
      formNum = document.querySelector('#clienNum'),
      btn = document.querySelector('.confirmBtn');

function prepareData(email, number, name){
  const obj = {
    name: name,
    email: email,
    number: number
  };
  return obj;
}
//console.log(prepareData('fsfs', '9090090', 'Ivan'));
btn.addEventListener('click', ()=>{
  if(formEm.value.length > 0 && formNum.value.length > 0 && formName.value.length > 0){
    axios.post('db.json/clients', prepareData(formEm.value, formNum.value, formName.value) ).then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }
});
 

