$(document).click((event) => {

    if ($(event.target).hasClass("tip-btn")) {
        event.preventDefault();
        let buttonID = $(event.target).attr("id");
        calculateTip(buttonID);
        resetButton();
        $(event.target).addClass("selected");
        $(".custom-input").val("");

    }
});

$(".custom-input").keyup((event) => {
    const customInput = parseFloat($(event.target).val());
    calculateTip(customInput);
    resetButton();
});

$("#tip-form").on("reset", () => {
    resetButton();
    $(".bill-error").text("");
    $(".people-error").text("");
    $(".tim-amount-person").text("0");
    $(".total-per-person").text("0");

});

function resetButton() {
    $(".tip-btn").each(function() {
        $(this).removeClass("selected");
    });

}

function calculateTip(tipPercentage) {
    //Variables
    const billForm = $(".bill-input").val();
    const noOfPeople = $(".people-input").val();
    const customInput = $(".custom-input").val();

    // validation
    if (billForm === "") {
        $(".bill-error").text("Enter a Valid Number");
    } else {
        $(".bill-error").text("");
    }

    if (noOfPeople === "") {
        $(".people-error").text("Enter a Valid Number");
    } else if (parseFloat(noOfPeople) === 0) {
        $(".people-error").text("Can't be zero");
    } else {
        $(".people-error").text("");
    }


    // calculating the percentage
    const totalTip = parseFloat((tipPercentage / 100) * billForm);
    const totalBill = parseFloat(billForm + totalTip);
    const totalPerPerson = parseFloat(totalBill / noOfPeople).toFixed(2);
    const tipPerPerson = parseFloat(totalTip / noOfPeople).toFixed(2);

    console.log(totalBill);




    // display result
    $(".tim-amount-person").text(tipPerPerson);
    $(".total-per-person").text(totalPerPerson);
}