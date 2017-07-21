$(document).ready(function() {

	var errors = false;

	$("#name").focusout(function() {
		var name = $("#name").val();
	   		if (name != "") {
	   			$("#name-error").html("");
	   			$(this).removeClass("error-input");
	   			errors = false;
	   		} else {
	   			$("#name-error").html("Your name is required");
	   			$(this).addClass("error-input");
	   			errors = true;
	   		}
		});

		$("#email").focusout(function() {
		var email = $("#email").val();
	   		if (/(..+)@(.+)\.[a-zA-Z0-9]{2,}$/.test(email)) {
	   			$("#email-error").html("");
	   			$(this).removeClass("error-input");
	   			errors = false;
	   		} else {
	   			$("#email-error").html("Please enter a valid email address");
	   			$(this).addClass("error-input");
	   			errors = true;
	   		}
		});

		$("#phone").focusout(function() {
		var phone = $("#phone").val();
		phone = phone.replace(/ +/g, "")
		var patterns = ["1234567890", "0987654321", "9876543210", "0123456789", 
						"0101010101", "1010101010"];
		var starts = ["111", "222", "333", "444", "555", "666", "777", 
					"888", "999", "000"];

		for (var i=0; i<patterns.length; i++) {
			if (phone.indexOf(patterns[i]) >= 0) {
				$("#phone-error").html("Please enter a valid phone number");
				$(this).addClass("error-input");
				errors = true;
				return false;
			} else {
				$("#phone-error").html("");
				$(this).removeClass("error-input");
				errors = false;
			}

		}

		for (var i=0; i<starts.length; i++) {
			if (phone.startsWith(starts[i])) {
				$("#phone-error").html("Please enter a valid phone number");
				$(this).addClass("error-input");
				errors = true;
				return false;
			} else {
				$("#phone-error").html("");
				$(this).removeClass("error-input");
				errors = false;
			}
		}

   		if (/^\d{10,15}$/.test(phone)) {
   			$("#phone-error").html("");
   			$(this).removeClass("error-input");
   			errors = false;
   		} else {
   			$("#phone-error").html("Please enter a valid phone number");
   			$(this).addClass("error-input");
   			errors = true;
   		}
	});

	$("#contact").submit(function(event) {
		if (errors) {
			event.preventDefault();
		}
	});

});

