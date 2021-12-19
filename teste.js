// function TestaCPF(strCPF) {
//     var Soma;
//     var Resto;
//     Soma = 0;
//   if (strCPF == "00000000000") return false;

//   for (i=1; i<=9; i++) Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (11 - i);
//   Resto = (Soma * 10) % 11;

//     if ((Resto == 10) || (Resto == 11))  Resto = 0;
//     if (Resto != parseInt(strCPF.substring(9, 10)) ) return false;

//   Soma = 0;
//     for (i = 1; i <= 10; i++) Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (12 - i);
//     Resto = (Soma * 10) % 11;

//     if ((Resto == 10) || (Resto == 11))  Resto = 0;
//     if (Resto != parseInt(strCPF.substring(10, 11) ) ) return false;
//     return true;
// }
// var strCPF = "42291783874";
//  console.log(TestaCPF(strCPF));
 


 
   const names = document.querySelector('#input-name')
   const email = document.querySelector('#input-email')
   const id = document.querySelector('#input-id')
   const birth = document.querySelector('#input-birth')
   const zip= document.querySelector('#input-zip')

   const state = document.querySelector('#input-state')
   const city= document.querySelector('#input-city')
   const district= document.querySelector('#input-district')
   const street= document.querySelector('#input-street')


   const btn = document.querySelector('#btnSave')
   const tbody = document.getElementById('tbody')



       
   const url = 'https://viacep.com.br/ws/01001000/json/'
    let datas;

    async function getApi() {
     await fetch(`https://viacep.com.br/ws/${zip.value}/json/`)
       .then((response) => response.json())
       .then((data) => {
         datas = data
       }).catch((err) => {
         if(zip.value.length == 8){
          alert('Zip Code was not found!');
          zip.value = ''
         } else{
           return false
         }
         
         
      })}
      

      btn.addEventListener('click', (e) => {
        e.preventDefault()
        getApi()
       
        state.value = datas.uf
        district.value = datas.bairro
        city.value = datas.localidade
        street.value = datas.logradouro
        
      })

      zip.addEventListener("focusout", (e) =>{
        getApi()
       
        state.value = datas.uf
        district.value = datas.bairro
        city.value = datas.localidade
        street.value = datas.logradouro
      })


   

  