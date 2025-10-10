let isVisible = false;
let tips = document.getElementById('tipsPerPeople');



let changeVisibility = function () {
    console.log(tips)
    if (isVisible) {
        tips.className.remove('.visibility')
        isVisible = false
    } else {
        tips.className.add('.visibility')
        isVisible = true

    }
}