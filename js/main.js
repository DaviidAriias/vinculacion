//Document Ready
window.onload = readyDoc;
function readyDoc(){
    console.log('JS Loaded - Ok!');

    //Tracking
    document.getElementById('in-form').classList.add('animated','slideInRight','delay-.8s');
    setTimeout(function(){
        document.getElementById('in-form').classList.add('opacity-full');
    }, 650);

    //Title efect up
    document.getElementById('titleUp').classList.add('animated','slideInUp');

}

//Toggle personal info
function PersonalInfo() {
    console.log('display');

    function toggle(){
        document.getElementById('info-first').style.display = 'none';
        document.getElementById('cont-box-height').classList.add('height');
        document.getElementById('info-second').style.display = 'block';
    }

    document.getElementById('info-first').classList.add('animated','fadeOut','delay-.2s');
    document.getElementById('info-first').addEventListener('animationend', function() { 
        document.getElementById('info-second').classList.add('animated','fadeIn','delay-.2s');
        toggle();
    });
    
}

//Toggle Resultados
var container = document.getElementById('result-hidden');
var button    = document.getElementById('btn-action-showmore');
var buttonheader    = document.getElementById('header-confirm');

buttonheader.addEventListener('click', () => {
    if(!container.classList.contains('active')) {
    container.classList.add('active')
        container.style.height = "auto"

    var height = container.clientHeight + "px"

        container.style.height = "0px"

        setTimeout(() => {
            container.style.height = height
        }, 0) 
        document.getElementById('show-more').src="../images/icon-dv-showless.svg";
    } else {
    container.style.height = "0px"

    container.addEventListener('transitionend', () => {
        container.classList.remove('active')
        }, {once: true})
        document.getElementById('show-more').src = "../images/icon-dv-showmore.svg";
    }
})


