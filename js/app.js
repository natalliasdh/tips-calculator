$(document).ready(function () {
    let totalSum;
    let tipPercent;
    let partNum;
    let tipEquals;


    $("#numbers").on("click", ".btn", function () {
        $("#tipPercent").val($(this).attr("data-value"));

    });


    $("#calcTip").on("click", function (event) {
        event.preventDefault();
        function getValues() {
            totalSum = $("#totalSum").val().trim();
            tipPercent = $("#tipPercent").val().trim();
            partNum = $("#partNum").val().trim();
            if (partNum) {
                calculatePart();
            }
            else {
                calculateForOne();
            }
        };

        function calculatePart() {
            tipEquals = totalSum * tipPercent / (partNum * 100);
            visualResult(tipEquals);
            console.log(tipEquals);
        };
        function calculateForOne() {
            tipEquals = totalSum * tipPercent / 100;
            visualResult(tipEquals);
            console.log(tipEquals);
        };

        function visualResult(tip) {

            $(".total").text(tip);
            $(".image").html("<img src='chuck.jpg'>");
        };
        getValues();
    });

});