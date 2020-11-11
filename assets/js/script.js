// CLOSE AND OPEN MENU BAR

const menu = document.getElementById('div3')

function close4()
{
    menu.style.opacity = 0;
    menu.style.zIndex = '-1';
}

function show()
{
    menu.style.opacity = 1;
    menu.style.zIndex = '1';
}



// VIDEO POPUP

const popup = document.getElementById('popup');

function Open()
{
    popup.style.display = 'flex';
}

function Close()
{
    popup.style.display = 'none';
}



// ORDER 1 POPUP

const popup2 = document.querySelector('.order1');
const div1 = document.getElementById('div1');

function Open2()
{
    // popup2.style.display = 'flex';
    popup2.style.opacity = 1;
    popup2.style.zIndex = '1';
    div1.style.opacity = 1;
}

function Close2()
{
    // popup2.style.display = 'none';
    popup2.style.opacity = 0;
    popup2.style.zIndex = '0';
    div1.style.opacity = 0;
}



// ORDER 2 POPUP

const popup3 = document.querySelector('.order2');

function close3()
{
    popup3.style.display = 'none';
}



// CLICK TO PLUS AND MINUS QUANTITY

let quantity = document.getElementById('p2');

function add()
{
    temp_quantity = parseInt(quantity.innerHTML)+1;
    quantity.innerHTML = temp_quantity;
    console.log(temp_quantity);
}

function minus()
{
    if (quantity.innerHTML > 1)
    {
        temp_quantity = parseInt(quantity.innerHTML)-1;
        quantity.innerHTML = temp_quantity;
        console.log(temp_quantity);
    }
}



// ADD TO CART 

let title1 = document.getElementById('title1');
let title2 = document.getElementById('title2');
let amount1 = document.getElementById('amount1');
let amount2 = document.getElementById('amount2');

function addToCart()
{
    popup2.style.display = 'none';
    title2.innerHTML = title1.innerHTML;

    amount2.innerHTML = amount1.innerHTML;

    popup3.style.display = 'flex';
}



// STEP PLUGIN

$( document ).ready(function() {
    var form = $("#example-form");
    console.log($("#example-form").length);
    form.validate({
        errorPlacement: function errorPlacement(error, element) { element.before(error); },
        rules: {
            confirm: {
                equalTo: "#password"
            }
        }
    });
    form.children("div").steps({
        headerTag: "h3",
        bodyTag: "section",
        transitionEffect: "slideLeft",
        onStepChanging: function (event, currentIndex, newIndex)
        {
            form.validate().settings.ignore = ":disabled,:hidden";
            return form.valid();
        },
        onFinishing: function (event, currentIndex)
        {
            form.validate().settings.ignore = ":disabled";
            return form.valid();
        },
        onFinished: function (event, currentIndex)
        {
            window.location.href='thankYou.html#thank';
        }
    });
});

