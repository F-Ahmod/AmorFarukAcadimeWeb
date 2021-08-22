




// memory section
document.getElementById('memory8gb').addEventListener('click',function(){
    const extraMemorycost=document.getElementById('Extra-Memory-Cost');
    const exta=extraMemorycost.innerText=0;
    calculateTotal()
});
document.getElementById('memory16gb').addEventListener('click',function(){
    const extraMemorycost=document.getElementById('Extra-Memory-Cost');
    const extacostText=extraMemorycost.innerText=180;
    calculateTotal()
});

// storage section
document.getElementById('freeStorage').addEventListener('click',function(){
    const extraMemorycost=document.getElementById('Extra-Storage-Cost');
    const exta=extraMemorycost.innerText=0;
    calculateTotal()
});
document.getElementById('storage512').addEventListener('click',function(){
    const extraMemorycost=document.getElementById('Extra-Storage-Cost');
    const exta=extraMemorycost.innerText=100;
    calculateTotal()
});
document.getElementById('storageItb').addEventListener('click',function(){
    const extraMemorycost=document.getElementById('Extra-Storage-Cost');
    const exta=extraMemorycost.innerText=180;
    calculateTotal()
});

// delivery section


document.getElementById('freeDelivery').addEventListener('click',function(){
    const extraMemorycost=document.getElementById('Delivery-Charge')
    const exta=extraMemorycost.innerText=0;
    calculateTotal()
});
document.getElementById('deliveryWithCharge').addEventListener('click',function(){
    const extraMemorycost=document.getElementById('Delivery-Charge')
    const exta=extraMemorycost.innerText=20;
    calculateTotal()
   
});




function calculateTotal() {
    
   const extraMemoryCost= document.getElementById('Extra-Memory-Cost').innerText;

   const extraMemoryCostPrice=parseInt(extraMemoryCost);
   
   const extraStorescost=document.getElementById('Extra-Storage-Cost').innerText;
   const extraStoragePrice=parseInt(extraStorescost);

   const extraDeliverycost=document.getElementById('Delivery-Charge').innerText;
   const extraDeliveryPrice=parseInt(extraDeliverycost);

   const totalPrice = document.getElementById('total-Price');
//    const allTotalprice=document.getElementById('allTotal-price');
//    const allpriceWithdiccount= totalPrice.innerText=1299+extraMemoryCostPrice+extraStoragePrice+extraDeliveryPrice;
//    allTotalprice.innerText=allpriceWithdiccount;
const total=totalPrice.innerText=1299+extraMemoryCostPrice+extraStoragePrice+extraDeliveryPrice;
  
};



// promoCode batton
const btn =document.getElementsByClassName('promobtn');
for(const item of btn){
    item.addEventListener('click',function(){
        document.getElementById('promoCode').
        remove(promoCode)
    });
};
