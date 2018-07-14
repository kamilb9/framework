(function formInputs(){
        let formInputs = document.querySelectorAll('.form-input');
        
        for (let formInput of formInputs){
            let inputs = formInput.querySelectorAll('input');
        
        for(let input of inputs){
            input.addEventListener('change', function(){
                if (input.value!==''){
                    formInput.classList.add('not-empty-input')
                }else{
                    formInput.classList.remove('not-empty-input')       }                   
                });
            }
        }
})();