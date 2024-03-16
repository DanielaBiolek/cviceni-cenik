const selectPlan = (planNumber) => {

    const plan = document.querySelector(`#plan${planNumber}`)
    const plan1 = document.querySelector(`#plan1`)
    const plan2 = document.querySelector(`#plan2`)
    const plan3 = document.querySelector(`#plan3`)

    if (planNumber === 1) {

    plan.classList.add('plan--selected')
    plan2.classList.remove('plan--selected')
    plan3.classList.remove('plan--selected')

    } else if (planNumber === 2) {

        plan.classList.add('plan--selected')
        plan1.classList.remove('plan--selected')
        plan3.classList.remove('plan--selected')
    
    } else if  (planNumber === 3) {

        plan.classList.add('plan--selected')
        plan1.classList.remove('plan--selected')
        plan2.classList.remove('plan--selected')
    
    }

}

selectPlan(1)
selectPlan(2)
selectPlan(3)



