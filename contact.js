function submit_data()
{
	var form_element = document.getElementsByClassName('input');

	var form_data = new FormData();

	for(var count = 0; count < form_element.length; count++)
	{
		form_data.append(form_element[count].name, form_element[count].value);
	}

	document.getElementById('Submit').disabled = true;

	var ajax_request = new XMLHttpRequest();

	ajax_request.open('POST', 'contact.php');

	ajax_request.send(form_data);

	ajax_request.onreadystatechange = function()
	{
		if(ajax_request.readyState == 4 && ajax_request.status == 200)
		{
			document.getElementById('Submit').disabled = false;

			var response = JSON.parse(ajax_request.responseText);
		}
	}
    document.contactForm.reset();
	
	var contactTransform1 = document.getElementById("contact-box");
	var contactTransform2 = document.getElementById("result");
	contactTransform1.style.opacity = "0";
	contactTransform1.style.transition = "opacity 1.5s";

	setTimeout(() => {
		contactTransform1.style.display = "none";
		document.getElementById("result").style.display = "block";
	}, 1500);

	setTimeout(() => {
		contactTransform2.style.opacity = "1";
		contactTransform2.style.transition = "opacity 1.5s";
	}, 1500);
}