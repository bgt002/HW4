export function alertDialog(){
    const alertBtn = document.getElementById('alertBtn');
    const alertDialog = document.getElementById('alertDialog');
    alertBtn.addEventListener('click', () => {
        alertDialog.showModal();
    });
}

export function confirmDialog(){
    const confirmBtn = document.getElementById('confirmBtn');
    const confirmDialog = document.getElementById('confirmDialog');
    const confirmMsg = document.getElementById('confirm');
    const denyMsg = document.getElementById('deny');
    const outputBox = document.querySelector('output');
    confirmBtn.addEventListener('click', () => {
        confirmDialog.showModal();
    });
    confirmMsg.addEventListener('click', () => {
         outputBox.value = `Confirm Result: true`;
    });
    denyMsg.addEventListener('click', () => {
        outputBox.value = `Confirm Result: deny`;
   });
}

export function promptDialog(){
    const promptBtn = document.getElementById('promptBtn');
    const promptDialog = document.getElementById('promptDialog');
    const cancelBtn = document.getElementById('cancel')
    const submitBtn = document.getElementById('submit');
    const outputBox = document.querySelector('output');
    promptBtn.addEventListener('click', () => {
        promptDialog.showModal();
    });
    submitBtn.addEventListener('click', () => {
        let firstName = document.getElementById('firstName').value;
        if(firstName == null || firstName == ""){
            outputBox.value = `User didn't input anything`;
            console.log("in the if" + firstName);
        }
        else{
            console.log("entered else");
            let purified = DOMPurify.sanitize(firstName);
            outputBox.value = `Prompt Result: ${purified}`;
        }
    })
    cancelBtn.addEventListener('click', () => {
        console.log("entered cancel")
        outputBox.value = `User didn't input anything`;
    })
}