
window.addEventListener("load", ()=>{

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

  /*function to render result in output div*/
  function  result() {
    if(calc == "+"){
      num1 = Number(num1) + Number(num2)
      num1 = Math.round(num1 * 100000)/100000
      num1 = String(num1)
    }else if(calc == "-"){
      num1 = Number(num1) - Number(num2)
      num1 = Math.round(num1 * 100000)/100000
      num1 = String(num1)
    }else if(calc == "×"){
      num1 = Number(num1) * Number(num2)
      num1 = Math.round(num1 * 100000)/100000
      num1 = String(num1)
    }else if(calc == "/"){
      num1 = Number(num1) / Number(num2)
      num1 = Math.round(num1 * 100000)/100000
      num1 = String(num1)
    }
    calc = ""
    num2 = ""
    lastEntry = "num1"
    output.innerHTML = num1 + calc + num2
  }

  /*Theme changing section*/
  const themeSwitches = document.querySelectorAll(".theme-switch")
  const toggleSwitch = document.querySelector(".toggle-switch")
  const toggle = document.querySelector(".toggle")

  const toggleSwitchClass =   toggleSwitch.classList

  const root = document.documentElement.style
  function first(){
    root.setProperty("--bg-main", "hsl(222, 26%, 31%)")
    root.setProperty("--bg-toggle", "hsl(223, 31%, 20%)")
    root.setProperty("--bg-screen", "hsl(224, 36%, 15%)")

    root.setProperty("--key-del-bg", "hsl(225, 21%, 49%)")
    root.setProperty("--key-del-shadow", "hsl(224, 28%, 35%)")

    root.setProperty("--key-equal-bg", "hsl(6, 63%, 50%)")
    root.setProperty("--key-equal-shadow", "hsl(6, 70%, 34%)")

    root.setProperty("--key-bg", "hsl(30, 25%, 89%)")
    root.setProperty("--key-shadow", "hsl(28, 16%, 65%)")

    root.setProperty("--text-pr", "hsl(221, 14%, 31%)")
    root.setProperty("--text-sec", "hsl(0, 0%, 100%)")
    root.setProperty("--text-white", "hsl(0, 0%, 100%)")

    root.setProperty("--text-ter", "hsl(0, 0%, 100%)")
    toggleSwitchClass.remove("toggle-half")
    toggleSwitchClass.remove("toggle-full")


  }

  function second(){
    root.setProperty("--bg-main", "hsl(0, 0%, 90%)")
    root.setProperty("--bg-toggle", "hsl(0, 5%, 81%)")
    root.setProperty("--bg-screen", "hsl(0, 0%, 93%)")

    root.setProperty("--key-del-bg", "hsl(185, 42%, 37%)")
    root.setProperty("--key-del-shadow", "hsl(185, 58%, 25%)")

    root.setProperty("--key-equal-bg", "hsl(25, 98%, 40%)")
    root.setProperty("--key-equal-shadow", "hsl(25, 99%, 27%)")

    root.setProperty("--key-bg", "hsl(45, 7%, 89%)")
    root.setProperty("--key-shadow", "hsl(35, 11%, 61%)")

    root.setProperty("--text-pr", "hsl(60, 10%, 19%)")
    root.setProperty("--text-sec", "hsl(0, 0%, 100%)")
    root.setProperty("--text-white", "hsl(0, 0%, 100%)")

    root.setProperty("--text-ter", "hsl(60, 10%, 19%)")

    toggleSwitchClass.add("toggle-half")
    toggleSwitchClass.remove("toggle-full")
  }

  function third(){
    root.setProperty("--bg-main", "hsl(268, 75%, 9%)")
    root.setProperty("--bg-toggle", "hsl(268, 71%, 12%)")
    root.setProperty("--bg-screen", "hsl(268, 71%, 12%)")

    root.setProperty("--key-del-bg", "hsl(281, 89%, 26%)")
    root.setProperty("--key-del-shadow", "hsl(285, 91%, 52%)")

    root.setProperty("--key-equal-bg", "hsl(176, 100%, 44%)")
    root.setProperty("--key-equal-shadow", "hsl(177, 92%, 70%)")

    root.setProperty("--key-bg", "hsl(268, 47%, 21%)")
    root.setProperty("--key-shadow", "hsl(290, 70%, 36%)")

    root.setProperty("--text-pr", "hsl(52, 100%, 62%)")
    root.setProperty("--text-sec", "hsl(198, 20%, 13%)")
    root.setProperty("--text-white", "hsl(0, 0%, 100%)")

    root.setProperty("--text-ter", "hsl(52, 100%, 62%)")

    toggleSwitchClass.remove("toggle-half")
    toggleSwitchClass.add("toggle-full")
  }


  themeSwitches.forEach((theme) => {
    theme.addEventListener("click", ()=>{
      if(theme.dataset.theme === "first"){
        first()
      }else if(theme.dataset.theme === "second"){
        second()
      } else if(theme.dataset.theme === "third"){
        third()
      }
    })
  })


  toggle.addEventListener("click", (e)=>{
    console.log(e.offsetX);
    if(toggleSwitchClass.contains("toggle-half")){
      third()
    } else if (toggleSwitchClass.contains("toggle-full")) {
      first()
    }else{
      second()
    }
  })

  function random(){

  }


  /* event listener section Calculation Logic */
  numBtns.forEach((numBtn) => {
    numBtn.addEventListener("click", ()=>{
      if(calc ===""){
        if(numBtn.dataset.value ==="."){
          if(/\./.test(num1)){

          }else{
            num1 += numBtn.dataset.value
            lastEntry = "num1"
          }
        }else{
          num1 += numBtn.dataset.value
          lastEntry = "num1"
        }
      }else{
        if(numBtn.dataset.value ==="."){
          if(/\./.test(num2)){

          }else{
            num2 += numBtn.dataset.value
            lastEntry = "num2"
          }
        }else{
          num2 += numBtn.dataset.value
          lastEntry = "num2"
        }
      }
      output.innerHTML = num1 + calc + num2
    })
  });

  /* event listener to handle operator buttons */
  calcBtns.forEach((calcBtn) => {
    calcBtn.addEventListener("click", ()=>{
      if (num2 === ""){
        if(num1 === ""){
          if (calcBtn.dataset.value === "-"){
            num1 += calcBtn.dataset.value
            lastEntry = "num1"
          }
        }else{
          if(num1=== "-"){

          }else{
            if((calc=== "×" || calc ==="/")&& calcBtn.dataset.value==="-"){
              num2 += calcBtn.dataset.value
              lastEntry = "num2"
            }else{
              calc = calcBtn.dataset.value
              lastEntry = "calc"
            }
          }
        }

      }else{
        if(num2 === "-"){

        }else{
          result()
          calc = calcBtn.dataset.value
          lastEntry = "calc"
        }
      }

      output.innerHTML = num1 + calc + num2
    })
  });

  /* event listener to handle delete button */
  del.addEventListener("click", ()=>{
    if(lastEntry == "num1"){
      num1 = num1.slice(0, -1)
    } else if(lastEntry == "calc"){
        calc = calc.slice(0, -1)
        if(calc === ""){
          lastEntry ="num1"
        }
      }else if(lastEntry == "num2"){
        num2 = num2 .slice(0, -1)
        if(num2 === ""){
          lastEntry ="calc"
        }
      }
    output.innerHTML = num1 + calc + num2
  })

  /* event listener to handle reset button */
  reset.addEventListener("click", ()=>{
    calc = ""
    num1 = ""
    num2 = ""
    output.innerHTML = num1 + calc + num2
  })

  /* event listener to handle equal button */
  equal.addEventListener("click", result)

  /*added loader*/
  const loader = document.querySelector(".loader")
  loader.classList.add("hidden")

  if ("serviceWorker" in navigator) {
    navigator.serviceWorker
      .register("sw.js")
      .then((registration) => console.log("yoo, Service worker registered"))
      .catch((error) => console.log("Service worker not registered", error));
  }


})
