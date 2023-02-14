/* Checkbox Confirmation */
function checkbox_check()
{
    const checkbox_array = [
        "seaviews", 
        "cityviews",
        "ruralviews",
        "landscapedgardens",
        "indoorfire",
        "outdoorfire",
        "alarm",
        "heatpump",
        "heatrecoverysys",
        "tenniscourt",
        "swimmingpool",
        "spapool",
        "sauna",
        "bbqarea"
    ];

    for (i = 0; i < 14; i++)
    {
        if (document.getElementById(checkbox_array[i]).checked == true)
        {
            document.getElementById(checkbox_array[i]).innerHTML = '1';
            document.getElementById(checkbox_array[i]).value = '1';
        }
    }
}

/* Form Submission */
function submit_data()
{
    checkbox_check();

    var form_element = document.getElementsByClassName('input');

    var form_data = new FormData();
    
    for(var count = 0; count < form_element.length; count++)
    {
        form_data.append(form_element[count].name, form_element[count].value);
    }

    document.getElementById('nextBtn').disabled = true;
    
    var ajax_request = new XMLHttpRequest();
    
    ajax_request.open('POST', 'insert.php');
    
    ajax_request.send(form_data);
    
    ajax_request.onreadystatechange = function()
    {
        if(ajax_request.readyState == 4 && ajax_request.status == 200)
        {
            document.getElementById('nextBtn').disabled = false;
    
            var response = JSON.parse(ajax_request.responseText);
        }
    }

    document.dataform.reset();

    document.getElementById("form-header").style.display = "none";

	var contactTransform2 = document.getElementById("result");
    document.getElementById("dataform-display").style.opacity = "0";
    document.getElementById("dataform-display").style.display = "none";
    document.getElementById("result").style.display = "block";
	setTimeout(() => {
        contactTransform2.style.opacity = "1";
		contactTransform2.style.transition = "opacity 2s";
	}, 5);
}

/* Form Animation */
function slideLeft()
{
    if (document.getElementById("nextBtn").innerHTML === "Next")
    {
        function step1()
    {
        document.getElementById("dataform-display").style.transform = "translate(-100%, 0px)";
        document.getElementById("dataform-display").style.opacity = "0";
        document.getElementById("dataform-display").style.transition = "all, 0.5s ease-in";
    }
    
    function step2()
    {
        document.getElementById("dataform-display").style.transform = "translate(100%, 0px)";
        document.getElementById("dataform-display").style.transition = "transform, 0.02s";
    }

    function step3()
    {
        document.getElementById("dataform-display").style.transform = "translate(0%, 0px)";
        document.getElementById("dataform-display").style.opacity = "1";
        document.getElementById("dataform-display").style.transition = "all, 0.5s ease-out";
    }

    step1();

    setTimeout(()=>
    {
        step2();
        setTimeout(()=>
        {
            step3();
        }, 20);
    }, 500);
    }
    else if (document.getElementById("nextBtn").innerHTML === "Submit")
    {
        document.getElementById("dataform-display").style.opacity = "0";
        document.getElementById("dataform-display").style.transition = "all, 0.5s ease-in";
    }
}

/* Form Animation */
function slideRight()
{
    function step1()
    {
        document.getElementById("dataform-display").style.transform = "translate(+100%, 0px)";
        document.getElementById("dataform-display").style.opacity = "0";
        document.getElementById("dataform-display").style.transition = "all, 0.5s ease-in";
    }
    
    function step2()
    {
        document.getElementById("dataform-display").style.transform = "translate(-100%, 0px)";
        document.getElementById("dataform-display").style.transition = "transform, 0.02s";
    }

    function step3()
    {
        document.getElementById("dataform-display").style.transform = "translate(0%, 0px)";
        document.getElementById("dataform-display").style.opacity = "1";
        document.getElementById("dataform-display").style.transition = "all, 0.5s ease-out";
    }

    step1();

    setTimeout(()=>
    {
        step2();
        setTimeout(()=>
        {
            step3();
        }, 20);
    }, 500);
}

/* Multi-step Form */
var currentTab = 0;
showTab(currentTab);

function showTab(n)
{
    var x = document.getElementsByClassName("tab");
    x[n].style.display = "block";

    if (n == 0)
    {
        document.getElementById("prevBtn").style.display = "none";
        
    }
    else
    {
        document.getElementById("prevBtn").style.display = "inline";
    }

    if (n == (x.length - 1))
    {
        document.getElementById("nextBtn").innerHTML = "Submit";
    }
    else
    {
        document.getElementById("nextBtn").innerHTML = "Next";
    }

    fixStepIndicator(n)
}

function nextPrev(n)
{
    if ((n === 1) && (validateForm() === true))
    {
        slideLeft();   
    }
    if ((n === -1) && (document.getElementById("prevBtn").style.display === "inline"))
    {
        slideRight();
    }

    setTimeout(()=>
    {
        visualValidation();

        var x = document.getElementsByClassName("tab");

        if (n == 1 && !validateForm())
        {
            return false;
        }

        x[currentTab].style.display = "none";
        currentTab = currentTab + n;

        if (currentTab >= x.length)
        {
            submit_data();
            return false;
        }

        showTab(currentTab);
        }, 600);
}

/* Visual Validation */
function visualValidation()
{
    const questions = ["code-confirm", "fname", "lname",
    "email", "mobile", "ship-address",
    "state", "locality", "postcode", "necessaryquestion10", "propertycondition",
    "bedrooms", "bathrooms", "seperatetoilets", "parking", "propertytype", "numberoflevels",
    "ageofproperty", "sizeofsection", "estimatedvalue", "selltimeframe"];

    for (i = 1; i < 22; i++)
    {
        var tab = 0;
        var tab_shown = false;

        if (i == 1)
        {
            tab = 1;
        }
        else if (i >= 2 && i <= 10)
        {
            tab = 2;
        }
        else if (i == 11)
        {
            tab = 3;
        }
        else
        {
            tab = 4;
        }

        if (document.getElementById("tab" + tab).style.display == "block")
        {
            tab_shown = true;
        }
        else
        {
            tab_shown = false;
        }

        var question = document.getElementById(questions[i - 1]);
        var element = document.getElementById("necessary" + i);

        if ((question.value == "") && (tab_shown == true))
        {
            element.classList.remove("hidden");
            element.classList.add("visible");
            question.classList.remove("show");
            question.classList.add("dontShow");
        }
        else
        {
            element.classList.remove("visible");
            element.classList.add("hidden");
            question.classList.remove("dontShow");
            question.classList.add("show");
        }
    }
}

/* Logical Validation */
function validateForm()
{
    var x = true;
    var y = true;
    var i = true;
    var valid = true;

    x = document.getElementsByClassName("tab");
    y = x[currentTab].getElementsByClassName("necessary");

    for (i = 0; i < y.length; i++)
    {
        if (y[i].value == "")
        {
            y[i].className += " invalid";
            y[i].remove
            valid = false;
        }
    }

    if (document.querySelector('input[name="show-code"]:checked') == null)
    {
        valid = false;
    }

    if (valid)
    {
        document.getElementsByClassName("step")[currentTab].className += " finish";
    }

    return valid;
}

function fixStepIndicator(n)
{
    var i = document.getElementsByClassName("step");
    var x = document.getElementsByClassName("step");

    for (i = 0; i < x.length; i++)
    {
        x[i].className = x[i].className.replace(" active", "");
    }

    x[n].className += " active";
}

document.getElementById("codeYes").style.opacity = "0";
    document.getElementById("codeYes").style.maxHeight = "0px";

function codeTransition1()
{
    setTimeout(()=>
    {
        document.getElementById("codeYes").style.maxHeight = "220px";
        document.getElementById("codeYes").style.transition = "max-height, 1s";
        
        setTimeout(()=>
        {
            document.getElementById("codeYes").style.opacity = "1";
            document.getElementById("codeYes").style.transition = "opacity, 1s";
        }, 250);
    }, 1);
}

function codeTransition2()
{
    setTimeout(()=>
    {
        document.getElementById("codeYes").style.opacity = "0";
        document.getElementById("codeYes").style.transition = "opacity, 1s";
        setTimeout(()=>
        {
            document.getElementById("codeYes").style.maxHeight = "0px";
        document.getElementById("codeYes").style.transition = "maxHeight, 1s";
        }, 250);
    }, 1);
}

/* Code Input */
$(document).ready(function()
{
    $('input[type="radio"]').click(function()
    {
    	var hascode = $(this).val(); 
        $("#code" + hascode).show();

        if (hascode == "Yes")
        {
            $("#code-confirm").addClass("necessary");
        }
        else
        {
            $("#code-confirm").removeClass("necessary");
        }
    });
});