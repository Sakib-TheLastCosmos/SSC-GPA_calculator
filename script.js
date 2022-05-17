document.querySelector('.calculate__btn').addEventListener('click', e => {
   const isInputValueGiven = () => {
      const inputArr = Array.from(document.querySelectorAll('input'))
      for (let i in inputArr) {
         if (!inputArr[i].value) {
            return false
         }
      }

      for (let i in inputArr) {
         if (inputArr[i].value > 5) {
            return false
         }
      }

      return true
   }

   console.log(isInputValueGiven())

   e.preventDefault()

   if (isInputValueGiven()) {
      let totalGPA = 0
      // console.log(totalGPA)
   
      // let bangla = parseFloat(document.querySelector('.bangla-1').value) + parseFloat(document.querySelector('.bangla-2').value)
      // bangla = bangla / 2
   
      // let english = parseFloat(document.querySelector('.english-1').value) + parseFloat(document.querySelector('.english-2').value)
      // english = english / 2
   
      // totalGPA += bangla
      // totalGPA += english
      // console.log(totalGPA)
   
      Array.from(document.querySelectorAll('.main-subject')).forEach(cur => {
         totalGPA += parseFloat(cur.value)
      })
   
      if (document.querySelector('.fourth-subject').value > 2) {
         totalGPA += (parseFloat(document.querySelector('.fourth-subject').value) - 2)
      }
   
      console.log(totalGPA)
      let GPA = totalGPA / 9
      GPA = GPA.toFixed(2)
   
      if (GPA > 5) {
         document.querySelector('.gpa').textContent = `GPA 5.00!`
      } else {
         document.querySelector('.gpa').textContent = `GPA ${GPA}!`
      }
   } else {
      alert('Please enter all the grade points properly to proceed!')
   }
})

// document.querySelector('.calculate__btn').addEventListener('click', e => {
//    e.preventDefault()
// })
