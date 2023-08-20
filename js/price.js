let total = 0;
function handleClickBtn(data){
    const price = data.childNodes[9].innerText.split(' ')[0];
    total = parseFloat(total) + parseFloat(price);
    let totalTwoDecimal = total.toFixed(2);

    //reset cart section
    document.getElementById('go-home').addEventListener('click',function(){
        // remove all prces
        total = 0;
        setInnerText('total-price','00 ');
        setInnerText('discount','00 ');
        setInnerText('total','00 ');

        // remove li
        const childs = document.getElementById('li-container').childNodes;
        document.getElementById('li-container').removeChild(childs[1]);
        
        // disable btn
        document.getElementById('cupon-code').value = '';
        purchaseBtn.setAttribute('disabled',true);
        applyBtn.setAttribute('disabled',true);
    })

    setInnerText('total-price',totalTwoDecimal);

    // enable cupon-code btn
    let applyBtn =  document.getElementById('apply-btn');
    if(totalTwoDecimal>=200){
        applyBtn.removeAttribute('disabled');
    }

    //match cupon-code
    document.getElementById('cupon-code').addEventListener('keyup',function(event){
        const text = event.target.value;
        document.getElementById('apply-btn').addEventListener('click',function(){
            if(text == 'SELL200'){
                 const discount = (totalTwoDecimal* 0.2).toFixed(2);
                 setInnerText('discount',discount);
                 const total =  (totalTwoDecimal - discount).toFixed(2);
                 setInnerText('total',total);
            }
        })
    })

    // enable purchaseBtn
    let purchaseBtn = document.getElementById('purchase-btn');
    if(totalTwoDecimal>0){
        purchaseBtn.removeAttribute('disabled');
    }

    // appendChild
    appendLi(data.childNodes[7].innerText);
}

function appendLi(name){
    const li = document.createElement('li');
    li.innerText = name;
    document.getElementById('li-container').appendChild(li);
}

function setInnerText(id,value){
    const totalPrice = document.getElementById(id);
    totalPrice.innerText = value;
}