window.addEventListener("load", ()=>{
  console.log("window loaded");

  const output = document.querySelector(".output");
  console.log(one.dataset.value);
  const numBtns = document.querySelectorAll(".num-btn");

  let calc = ""

  numBtns.forEach((numBtn) => {
    numBtn.addEventListener("click", ()=>{
      console.log(numBtn.dataset.value);
      output.innerHTML += numBtn.dataset.value
    })
  });


})
