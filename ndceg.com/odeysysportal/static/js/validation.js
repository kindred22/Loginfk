///// validation phone number ////
function updateValidationMessage(targetId, message) {
    $("#" + targetId).text(message);
}

// Add phone number validation to dynamically created input fields
$(document).on('keypress', '.phone-number-validation', function (event) {
    var inputField = $(this);
    var currentValue = inputField.val();
    var targetId = inputField.data("target");

    // Allow only digits
    if (!/\d/.test(event.key)) {
        event.preventDefault();
        updateValidationMessage(targetId, "Please enter numeric value only");
        return false;
    }

    // Clear validation message when a valid key is pressed
    updateValidationMessage(targetId, "");
});