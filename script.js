document.getElementById('case-up').addEventListener('click', function(){
    quantitychange(true);
})

document.getElementById('case-down').addEventListener('click', function(){
    quantitychange(false);
})

function quantitychange(isincress){
    const caseNumber = document.getElementById('casevalue');
    const caseCount = parseInt(caseNumber.value);
    let caseNew = caseCount;
    if(isincress == true){
        caseNew = caseCount+1;
    }
    if(isincress == false && caseCount>0){
         caseNew = caseCount-1;
    }

    caseNumber.value = caseNew;
    const casetotal = caseNew*59;
    document.getElementById('caseAmount').innerHTML = "$" + casetotal;
}