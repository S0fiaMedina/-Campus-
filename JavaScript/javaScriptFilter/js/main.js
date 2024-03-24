import {postData} from "./api.js";

let sectionCount = 1;
let totalValue = 0;


/*logica de cambio de seccion*/
document.querySelector('#presentation__start')
    .addEventListener('click', (e) =>{
        document.querySelector('.presentation').classList.add('none');
        document.querySelector('#selection-1').classList.remove('none');
    })

if (sectionCount > 0 && sectionCount < 6){
   

    document.querySelectorAll('.requirement__option')
        .forEach( button =>{
            button.addEventListener('click', (e) =>{
                console.log(totalValue)
                
                
                const sum = totalValue + parseFloat((e.currentTarget.dataset.price))
                
               console.log(totalValue, sum)
                totalValue += sum;

                document.querySelector('#selection-' + sectionCount).classList.add('none');
                
                sectionCount++;
                document.querySelector('#selection-' + sectionCount).classList.remove('none');
                if (sectionCount == 6){
                    document.querySelector('#total-price').textContent = totalValue;

                }
            })
        })
    
}
document.querySelector('#finish')
    .addEventListener('click', (e)=>{
        e.preventDefault();
        console.log(e.target.form);
        const dataUser = Object.fromEntries(new FormData(e.target.form).entries());
        
        dataUser.totalPrice = "$"+ totalValue;
        console.log(dataUser);
        postData('users', dataUser);
    })



