console.log("Running js on client side ");

let form = document.querySelector('#form')
let texthelper=document.querySelector('#texthelper')
console.log(form);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    fetch(`http://localhost:3000/weather?address=${e.target.loc.value}`).then((res) => {
        res.json().then((res) => {
            if (res.error) {
                return res.error
            }
            texthelper.append(res.country_name)
            texthelper.after(res.forcast[0])
            console.log(res.country_name);
            console.log(res.forcast[0]);

        })
    
    
})
fetch('https://puzzle.mead.io/puzzle').then((res, error)=> {
    res.json().then((data) => {
        console.log(data);
        
    })
})


    
  

})