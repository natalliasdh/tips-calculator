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
            if (!totalSum) {
                $(".error").text("Order Total is empty!");
                return false;
            }
            if (!tipPercent) {
                $(".error").empty();
                $(".errorper").text("Choose the percent!");
                return false;
            }
            if (partNum) {
                calculatePart();
                $(".errorper").empty();
                $(".error").empty();
            }
            else {
                calculateForOne();
                $(".errorper").empty();
                $(".error").empty();
            }
        };

        function calculatePart() {
            tipEquals = (totalSum * tipPercent / (partNum * 100)).toFixed(2);
            visualResult(tipEquals);
            console.log(tipEquals);
        };
        function calculateForOne() {
            tipEquals = (totalSum * tipPercent / 100).toFixed(2);
            visualResult(tipEquals);
            console.log(tipEquals);
        };

        function visualResult(tip) {
           
            $(".total").text("Tips: "+tip+" USD");
            $(".image").html("<img src='chuck.jpg'>");
        };
        getValues();
    });

});