$(document).ready(function(){

    $(function() {
         // What we do box toggle effect
        $('#desbox').click(function() {
           $('.design-para').toggle();
           $('#desbox').addClass('active');
           $('.desbox').toggleClass('active');
           $('#design').toggle();
           $('#desbox').removeClass('active');
        });


        $('#devbox').on('click', function () {
            $('.dev-para').toggle();
            $('#devbox').addClass('active');
            $('.devbox').toggleClass('active');
            $('#dev').toggle();
            $('#devbox').removeClass('active');
        });

        $('#prodbox').on('click', function () {
            $('.product-para').toggle();
            $('#prodbox').addClass('active');
            $('.prodbox').toggleClass('active');
            $('#product').toggle();
            $('#prodbox').removeClass('active');
        });

        // Portfolio hover effect
        const portfolioItems = document.querySelectorAll('.portfolio-item-wrapper');

        portfolioItems.forEach(portfolioItem => {
            portfolioItem.addEventListener('mouseover', () => {
                portfolioItem.childNodes[1].classList.add('img-lighter');
            });

            portfolioItem.addEventListener('mouseout', () => {
                portfolioItem.childNodes[1].classList.remove('img-lighter');
            });
        });

        $("#cname_error_message").hide();
        $("#email_error_message").hide();
        $("#msg_error_message").hide();

        var error_cname = false;
        var error_email = false;
        var error_message = false;
       
        $("#txtname").focusout(function(){
           check_cname();
        });
      
        $("#txtemail").focusout(function() {
           check_email();
        });
        $("#txtmessage").focusout(function() {
           check_length();
        });
       
    
        function check_cname() {
           var pattern = /^[a-zA-Z]*$/;
           var cname = $("#txtname").val();
           if (pattern.test(cname) && cname !== '') {
              $("#cname_error_message").hide();
              $("#txtname").css("border","2px solid #34F458");
           } else {
              $("#cname_error_message").html("Should contain only Characters");
              $("#cname_error_message").show();
              $("#txtname").css("border","2px solid #F90A0A");
              error_cname = true;
           }
        }
    
        function check_length() {
            var message_length = $("#txtmessage").val().length;
            if (message_length < 1) {
                $("#msg_error_message").html("Please type a message.");
                $("#msg_error_message").show();
                $("txtmessage").css("border","2px solid #F90A0A");
                error_message = true;
            } else {
                $("#msg_error_message").hide();
                $("#txtmessage").css("border","2px solid #34F458");
            }

        }
    
        function check_email() {
           var pattern = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
           var email = $("#txtemail").val();
           if (pattern.test(email) && email !== '') {
              $("#email_error_message").hide();
              $("#txtemail").css("border","2px solid #34F458");
           } else {
              $("#email_error_message").html("Invalid Email");
              $("#email_error_message").show();
              $("#txtemail").css("border","2px solid #F90A0A");
              error_email = true;
           }
        }
    
        $("#contact_form").submit(function() {
           error_cname = false;
           error_email = false;
           error_message = false;
           cusName = $('#txtname').val();
    
           check_cname();
           check_email();
           check_length();

           if (error_cname === false && error_email === false && error_message === false) {
              alert("Dear " + cusName + ", \nWe have received your message.\nThank you for reaching out!");
              return true;
           } else {
              alert("Please Fill the form Correctly");
              return false;
           }
    
        });
     });

});