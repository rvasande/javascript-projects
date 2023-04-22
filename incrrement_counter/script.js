const counters = document.querySelectorAll(".counter");

counters.forEach((counter) => {
    counter.innerText = "0";
    
    const updateCounter = () => {
    const target = +counter.getAttribute("data-target");
    const c = +counter.innerText

    if(c < target ){}
        counter.innerText=`${c + 100 }`
        if(c === target){
            counter.innerText = target
        }
        setTimeout(updateCounter,10)
        

  }
  updateCounter();
});
