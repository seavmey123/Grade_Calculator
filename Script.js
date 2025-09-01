$(document).ready(function () {
  // When any number input changes
  $("#gradeTable").on("input", "input[type='number']", function () {
    let row = $(this).closest("tr");

    // Get values (default to 0 if empty)
    let attendance = parseFloat(row.find("td:eq(5) input").val()) || 0;
    let activity = parseFloat(row.find("td:eq(6) input").val()) || 0;
    let project = parseFloat(row.find("td:eq(7) input").val()) || 0;
    let midterm = parseFloat(row.find("td:eq(8) input").val()) || 0;
    let finalExam = parseFloat(row.find("td:eq(9) input").val()) || 0;

    // Calculate total
    let total = attendance + activity + project + midterm + finalExam;
    row.find(".total").text(total);

    // Determine grade
    let grade = "-";
    if (total >= 90) grade = "A";
    else if (total >= 80) grade = "B";
    else if (total >= 70) grade = "C";
    else if (total >= 60) grade = "D";
    else grade = "F";

    row.find(".grade").text(grade);
  });
});
