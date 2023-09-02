document.getElementById('case-up').addEventListener('click', function(){
    casequantity(true);
})

document.getElementById('case-down').addEventListener('click', function(){
    casequantity(false);
})

function casequantity(isincress){
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
    const casetotal = caseNew*60;
    document.getElementById('caseAmount').innerHTML = "$" + casetotal;
    calculate();
}


// Mobile cart part

document.getElementById('mobile-up').addEventListener('click', function(){
    mobilequantity(true);
    mobilecount.value = 0;
})

document.getElementById('mobile-down').addEventListener('click',  function(){
    mobilequantity(false);
    
})
function mobilequantity(isincress){
    const mobilenumber = document.getElementById('mobilevalue');
    const mobilecount = parseInt(mobilenumber.value);
    let mobileNew = mobilecount;

    if(isincress == true){
        mobileNew = mobilecount + 1;
    }
    if(isincress == false && mobilecount > 0){
        mobileNew = mobilecount - 1;
    
    }
    mobilenumber.value = mobileNew;
    const mobiletotal = mobileNew * 1200;
    document.getElementById('mobileAmount').innerText = "$"+mobiletotal;
    calculate();

    
    
}


// Calculate fuction 

function calculate(){
    const phoneinput = document.getElementById('mobilevalue').value;
    const phonecount = parseInt(phoneinput);

    const caseinput = document.getElementById('casevalue').value;
    const casecount = parseInt(caseinput);

    const total = phonecount*1200 + casecount*60;
    document.getElementById('total').innerText = '$'+total;

    const tax = total*0.1;
    document.getElementById('tax').innerText = '$'+tax;

    const grandtotal = total+tax;
    document.getElementById('grandtotal').innerText = '$'+grandtotal;
}