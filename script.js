const selectEl = document.getElementById('select');
const registrationImage = document.getElementById('course-img');

selectEl.addEventListener('change', function() {

    switch(selectEl.value) {
        case 'web' : 
            changeImage("./Assets/WebCourse.png",'rgba(255,236,233,0.4)');
        break;
        case 'devops' :  
            changeImage("./Assets/DevOpsCourse.png", 'rgba(255,236,233,0.4)');
        break;
        default: 
            changeImage("./Assets/female developer.jpg", '#ffffff');
        break;
    }

});

const changeImage = (imageSrc, bgColor, pdLeft = '0px', pdRight = '0px') => {
    registrationImage.src = imageSrc;
    document.body.style.backgroundColor = bgColor;
    registrationImage.style.paddingLeft = pdLeft;
    registrationImage.style.paddingRight = pdRight;
};


