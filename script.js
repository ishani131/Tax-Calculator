$(document).ready(function() {
    $('[data-toggle="tooltip"]').tooltip();
  
    $('#submitBtn').click(function() {
      var grossIncome = parseFloat($('#grossIncome').val());
      var extraIncome = parseFloat($('#extraIncome').val());
      var deductions = parseFloat($('#deductions').val());
      var ageGroup = parseInt($('#ageGroup').val());
  
      var isValid = true;
  
      // Validate gross income
      if (isNaN(grossIncome)) {
        $('#grossIncome').next('.error-icon').show();
        isValid = false;
      } else {
        $('#grossIncome').next('.error-icon').hide();
      }
  
      // Validate extra income
      if (isNaN(extraIncome)) {
        $('#extraIncome').next('.error-icon').show();
        isValid = false;
      } else {
        $('#extraIncome').next('.error-icon').hide();
      }
  
      // Validate deductions
      if (isNaN(deductions)) {
        $('#deductions').next('.error-icon').show();
        isValid = false;
      } else {
        $('#deductions').next('.error-icon').hide();
      }
  
      // Validate age group
      if (ageGroup === '') {
        $('#ageGroup').next('.error-icon').show();
        isValid = false;
      } else {
        $('#ageGroup').next('.error-icon').hide();
      }
  
      if (isValid) {
        var totalIncome = grossIncome + extraIncome;
        var taxableIncome = totalIncome - deductions;
        var overallIncome;
  
        if (taxableIncome <= 800000) {
          overallIncome = taxableIncome.toFixed(2);
        } else {
          var taxRate;
          switch (ageGroup) {
            case 0:
              taxRate = 0.3;
              break;
            case 1:
              taxRate = 0.4;
              break;
            case 2:
              taxRate = 0.1;
              break;
          }
          var taxAmount = (taxableIncome - 800000) * taxRate;
          overallIncome = (taxableIncome - taxAmount).toFixed(2);
        }
  
        $('#overallIncome').text(overallIncome);
        $('#resultModal').modal('show');
      }
    });
  });