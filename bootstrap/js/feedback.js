var FeedbackData = [];
function btnsend() {
    var email_input = document.getElementById("form_email").value
    var password_input = document.getElementById("form_password").value
    var feedback_input = document.getElementById("form_feedback").value
    var title_input = document.getElementById("form_title").value
    var email_input_format = /^[A-z._]{3,}[0-9]{0,}@[A-z]{4,8}.[A-z]{2,4}$/;
    var check_email_format = email_input_format.test(email_input);


    if (email_input == "") {
        document.getElementById("validation1").style.display = 'block'
    }
    else if (check_email_format == false) {
        document.getElementById("email_expression_id").style.display = 'block'
        document.getElementById("validation1").style.display = 'none'

    }
    // else if (check_email_format == true) {
    //     document.getElementById("email_expression_id").style.display = 'none'
    // }
    else if (password_input == "") {

        document.getElementById("validation2").style.display = 'block'
        document.getElementById("validation1").style.display = 'none'
        document.getElementById("email_expression_id").style.display = 'none'
    }
    else if (title_input == "") {
        document.getElementById("validation4").style.display = 'block'
        document.getElementById("validation3").style.display = 'none'
        document.getElementById("validation2").style.display = 'none'
    }
    else if (feedback_input == "") {
        document.getElementById("validation3").style.display = 'block'
        document.getElementById("validation2").style.display = 'none'
        document.getElementById("validation4").style.display = 'none'
    }

    else {
        document.getElementById("email_expression_id").style.display = 'none'
        document.getElementById("validation1").style.display = 'none'
        document.getElementById("validation2").style.display = 'none'
        document.getElementById("validation3").style.display = 'none'
        alert("sent successfully")

        var obj = {
            email: email_input,
            password: password_input,
            title: title_input,
            feedback: feedback_input
        }
        FeedbackData.push(obj);
        localStorage.setItem("feedback", JSON.stringify(FeedbackData));

    }
}
function btnclose() {
    var email_input = document.getElementById("form_email").value
    var password_input = document.getElementById("form_password").value
    var feedback_input = document.getElementById("form_feedback").value

    document.getElementById("validation1").style.display = 'none'
    document.getElementById("validation2").style.display = 'none'
    document.getElementById("validation3").style.display = 'none'
    document.getElementById("validation4").style.display = 'none'
    document.getElementById("email_expression_id").style.display = 'none'
    document.getElementById("form_email").value = ""
    document.getElementById("form_password").value = ""
    document.getElementById("form_feedback").value = ""
    document.getElementById("form_title").value = ""


}
GetFeedback();
function GetFeedback() {
    var GetFeedbackData = JSON.parse(localStorage.getItem("feedback"));
    for (var i = 0; i < GetFeedbackData.length; i++) {
        var element = GetFeedbackData[i].email;
        var pass = GetFeedbackData[i].password;
        var title = GetFeedbackData[i].title;
        var feedback = GetFeedbackData[i].feedback;
        //    document.getElementById("feedback-div").innerHTML += feedback


    }
}


function externalFunction() {
   

var date = new Date();

// Get year, month, and day part from the date
var year = date.toLocaleString("default", { year: "numeric" });
var month = date.toLocaleString("default", { month: "2-digit" });
var day = date.toLocaleString("default", { day: "2-digit" });

// Generate yyyy-mm-dd date string
var formattedDate = day + "-" + month + "-" + year;
// console.log(formattedDate);  // Prints: 2022-05-04
// document.write(formattedDate)
document.getElementById("id_english_date").innerHTML = formattedDate
var islamicdate = new Date();
var islamicyear = islamicdate.toLocaleString("ar-SA", { year: "numeric" })
var islamicday = islamicdate.toLocaleString("ar-SA", { day: "numeric" })
var islamicmonth = islamicdate.toLocaleString("ar-SA", { month: "long" })
// var islamicyear = islamicdate.toLocaleString("ar-SA",{year: "numeric"})
var islamicdateformat = islamicday + "-" + islamicmonth + "-" + islamicyear;
// document.write(islamicdateformat)
document.getElementById("id_islamic_date").innerHTML = islamicdateformat
  }