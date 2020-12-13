
//Slide animation

let toSlide = document.querySelectorAll("main .book,footer");


window.addEventListener("scroll", function () {
    for (let v of toSlide) {
        if (window.scrollY + window.innerHeight > (v.offsetTop)) {
            v.classList.add("animation");
            v.classList.remove("none");
        } else if (v.classList.contains("animation") || window.scrollY > (v.offsetTop)) {
            v.classList.add("none");
            v.classList.remove("animation");
        }
    }
});

//Window pop-up

let login_button = document.getElementById("login-button");
let signup_button = document.getElementById("signup-button");
let login = document.getElementById("login");
let signup = document.getElementById("signup");

login_button.addEventListener("click",
    function () {
        if (login.classList.contains("none")) {
            login.classList.remove("none");
            login.classList.add("authorithation");


            signup.classList.remove("authorithation");
            signup.classList.add("none");
        } else {
            login.classList.add("none");
            login.classList.remove("authorithation");
        }
    });


signup_button.addEventListener("click",
    function () {
        if (signup.classList.contains("none")) {
            signup.classList.remove("none");
            signup.classList.add("authorithation");


            login.classList.remove("authorithation");
            login.classList.add("none");
        } else {
            signup.classList.add("none");
            signup.classList.remove("authorithation");
        }
    }
);




//Validation
function validateRegistration() {
    let password = document.registration.password.value;

    var passw = new RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{4,8}$/); // 6 symbols at least 1 lowercase, 1 uppercase and 1 digit

    if (passw.test(password)) {
        return true;
    } else {
        alert("Password should contain 6 symbols at least 1 lowercase, 1 uppercase and 1 digit");
        return false;
    }


}

//JQUERY

$("#contact-button").click(function () {
    if ($("#contact").hasClass("none")) {
        $("#contact").removeClass("none");
        $("#contact").addClass("visible_flex");
    } else {
        $("#contact").removeClass("visible_flex");
        $("#contact").addClass("none");
    }
});


$("#type").change(function () {
    if ($("#type").val() == "") {
        if ($("#default").length)
            $("#default").remove();
        else
        if ($("#version").length)
            $("#version").remove();
        $("#submit_contact").prop('disabled', true);

    } else
    if ($("#type").val() == "Bug Report") {
        $("#default").remove();
        $("<div id=\"version\"><label for=\"version\">Version of browser(name and version):</label><input type=\"text\" name=\"version\"required><label for=\"text\">Text of message:</label><input  id=\"message_text\" type=\"text\" name=\"Message\"required></div>").insertAfter("#type");
        $("#submit_contact").prop("disabled", false);
    } else {
        $("#version").remove();
        if (!$("#default").length)
            $("<div id=\"default\"><label for=\"text\">Text of message:</label><input id=\"message_text\" type=\"text\" name=\"Message\"required></div>").insertAfter("#type");
        $("#submit_contact").prop("disabled", false);
    }
});

$("#close_contact").click(function () {

    $("#contact").removeClass("visible_flex");
    $("#contact").addClass("none");
});

$("#login_close").click(function () {

    $("#login").removeClass("authorithation");
    $("#login").addClass("none");
});
$("#signup_close").click(function () {

    $("#signup").removeClass("authorithation");
    $("#signup").addClass("none");
});

(function($) {
    
    var allPanels = $('.book > dd').hide();
      
    $('.book > dt *').click(function() {
      allPanels.slideUp();
      if(!$(this).parent().next().is(':visible'))
      $(this).parent().next().slideDown();
      return false;
    });
  
  })(jQuery);

  $(document).ready(function()
{
    $("#next").click(function()
    {
        var active_slide=$(".book.active");
        var next_slide= active_slide.next();
        if(next_slide.length)
        {
            active_slide.removeClass('active');
            next_slide.addClass('active');
        }
    });
    $("#prev").click(function()
    {
        var active_slide=$(".book.active");
        var prev_slide= active_slide.prev();
        if(prev_slide.length)
        {
            active_slide.removeClass('active');
            prev_slide.addClass('active');
        }
    });
    $("ul#sortable").sortable();

    var tab = $('#tabs .tabs-items > div'); 
	tab.hide().filter(':first').show(); 
	
	// Клики по вкладкам.
	$('#tabs .tabs-nav a').click(function(){
		tab.hide(); 
		tab.filter(this.hash).show(); 
		$('#tabs .tabs-nav a').removeClass('active');
		$(this).addClass('active');
		return false;
	}).filter(':first').click();
 
	// Клики по якорным ссылкам.
	$('.tabs-target').click(function(){
		$('#tabs .tabs-nav a[href=' + $(this).data('id')+ ']').click();
	});
});

