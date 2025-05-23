function validatePhoneNumberForBooking(
    intlTelInput,
    phoneField,
    errorMessageElement
) {
  var isValid = intlTelInput.isValidNumber();
  var errorMsg = "";

  if (!isValid && phoneField.value != "") {
    var errorCode = intlTelInput.getValidationError();
    errorMsg = "Invalid phone number";
  } else if (phoneField.value == "") {
    errorMsg = "Required";
  }

  if (errorMsg !== "" && errorMsg !== undefined) {
    errorMessageElement.textContent = errorMsg;
  } else {
    errorMessageElement.textContent = "";
  }
  updateSubmitButtonEnableState();
}

const handlePhoneLeadingZero = (elementId, intlTelInput)=> {
  // Get Country Code
  const countryData = intlTelInput.getSelectedCountryData();
  const countryCode = `+${countryData.dialCode}`;

  // Get the full number in the standard E.164 format without the extra leading zero.
  const fullNumber1 = intlTelInput.getNumber(intlTelInputUtils.numberFormat.E164);

  // Extract the local number by removing the country code and set the local number in the input field
  document.getElementById(elementId).value = fullNumber1.replace(countryCode, "").trim();
}

function validatePhoneNumber(intlTelInput, phoneField,errorMessageElement) {
  var isValid = intlTelInput.isValidNumber();
  var errorMsg = '';
  if (!isValid && phoneField.value != "") {
    var errorCode = intlTelInput.getValidationError();
    errorMsg = "Invalid phone number";
  }

  if (errorMsg !== '' && errorMsg !== undefined) {
    errorMessageElement.textContent = errorMsg;
  }
  else {
    errorMessageElement.textContent = '';
  }
  updateSubmitButtonEnableState();
  updateEnableButtonState(isValid, phoneField.value === "");
}
function updateSubmitButtonEnableState() {
  var errorMessages = document.querySelectorAll('.error-message');
  var submitButtons = document.querySelectorAll('.submited-buttons');
  var hasError = Array.from(errorMessages).some(msgElement => msgElement.textContent.trim() !== "");

  submitButtons.forEach(button => {
    button.disabled = hasError;
    button.addEventListener('click', function(event) {
      var hasError = Array.from(errorMessages).some(msgElement => msgElement.textContent.trim() !== "");
      if (hasError) {
        event.preventDefault();
      }
    });
  });
}

function updateEnableButtonState(isValid, isEmpty) {
  var enableButtons = document.querySelectorAll(".enable-button");

  enableButtons.forEach((button) => {
    button.disabled = !(isValid || isEmpty);
  });
}

function removeAlphaSymbolCharacter(phoneNumber) {
  const cleanedNumber = phoneNumber.replace(/\D/g, "");

  // If the cleaned number is empty or contains only non-numeric characters
  if (!cleanedNumber || /^\D+$/.test(cleanedNumber)) {
    return ""; // Return an empty string
  }

  return cleanedNumber;
}

function updateValidationMessage(targetId, message) {
  $("#" + targetId).text(message);
}

// Add phone number validation to dynamically created input fields
$(document).on("keypress", ".phone-number-validation", function (event) {
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

$(document).on("change", ".phone-number", function () {
  var inputField = $(this);
  var currentValue = inputField.val();
  var targetId = inputField.data("target");

  // Filter out any character that is not a digit
  var filteredValue = currentValue.replace(/\D/g, "");

  // Update the input field with the filtered value
  inputField.val(filteredValue);

  // Update validation message
  if (filteredValue) {
    updateValidationMessage(targetId, "");
  } else {
    updateValidationMessage(
      targetId,
      "Please enter a valid numeric phone number"
    );
  }
});
$(document).on("paste", ".phone-number-validation", function (e) {
  var inputField = $(this);
  var targetId = inputField.data("target");

  // Prevent the default paste behavior
  e.preventDefault();

  // Get text from clipboard
  var pastedText = (e.originalEvent || e).clipboardData.getData("text/plain");

  // Filter out any character that is not a digit
  var filteredText = pastedText.replace(/\D/g, "");

  // Update the input field with filtered text
  inputField.val(filteredText);

  // Clear or update validation message
  if (filteredText) {
    updateValidationMessage(targetId, "");
  } else {
    // This message can be adjusted as needed, e.g., if the paste contained no digits at all
    updateValidationMessage(targetId, "Please enter numeric value only");
  }
});
