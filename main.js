window.addEventListener("load", ()=>{
  console.log("window loaded");

  const output = document.querySelector(".output");

  const numBtns = document.querySelectorAll(".num-btn");
  const calcBtns = document.querySelectorAll(".calc-btn");

  const equal = document.querySelector(".equal")
  const reset = document.querySelector(".reset")
  const del = document.querySelector(".del")

  let calc = ""
  let num1 = ""
  let num2 = ""
  let lastEntry = ""

  numBtns.forEach((numBtn) => {
    numBtn.addEventListener("click", ()=>{
      if(calc ===""){
        num1 += numBtn.dataset.value
        lastEntry = "num1"
      }else{
        num2 += numBtn.dataset.value
        lastEntry = "num2"
      }
      output.innerHTML = num1 + calc + num2
    })
  });

  calcBtns.forEach((calcBtn) => {
    calcBtn.addEventListener("click", ()=>{
      if(num1 === ""){

      }else{
        calc = calcBtn.dataset.value
        lastEntry = "calc"
      }
      output.innerHTML = num1 + calc + num2
    })
  });

  del.addEventListener("click", ()=>{
    if(lastEntry == "num1"){
      num1 = num1.slice(0, -1)
    } else if(lastEntry == "num2"){
      num2 = num2 .slice(0, -1)
    } else if(lastEntry == "calc"){
      calc = calc.slice(0, -1)
    }
    output.innerHTML = num1 + calc + num2
  })

  reset.addEventListener("click", ()=>{
    calc = ""
    num1 = ""
    num2 = ""
    output.innerHTML = num1 + calc + num2
  })

  equal.addEventListener("click", ()=>{
    if(calc == "+"){
      num1 = String(Number(num1) + Number(num2))
    }else if(calc == "-"){
      num1 = String(Number(num1) - Number(num2))
    }else if(calc == "×"){
      num1 = String(Number(num1) * Number(num2))
    }else if(calc == "/"){
      num1 = String(Number(num1) / Number(num2))
    }
    calc = ""
    num2 = ""
    lastEntry = "num1"
    output.innerHTML = num1 + calc + num2
  })

})
