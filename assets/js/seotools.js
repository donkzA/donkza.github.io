$(document).ready(function() {
    let titleValue, metaDescValue, textCounterValue;
    let titleLength, metaDescLength, textCounter = 0;
    $("#title-tag").keyup(function() {
        titleValue = $(this).val();
        titleLength = titleValue.length;
        if(titleLength <= 60) {
            $("#title-counter").css("color", "black")
        } else {
            $("#title-counter").css("color", "red")
            titleValue = jQuery.trim(titleValue).substring(0, 60).trim(this) + "...";
        }
        $("#title-counter").text(titleLength);
    });
    $("#title-button").click(function() {
        let analysis;
        if(titleLength < 30) {
            analysis = "Too Short!";
        } else if(titleLength <= 60) {
            analysis = "Great!";
        } else {
            analysis = "Too Long!";
        }
        $(".title-tag-result").text(titleValue);
        $("#title-tag-analysis").html('<div class="analysis-result"><p>Length: ' + titleLength + '</p><p>Analysis: ' + analysis + '</p></div>');
    });
    $("#meta-description-tag").keyup(function() {
        metaDescValue = $(this).val();
        metaDescLength = $(this).val().length;
        if(metaDescLength <= 160) {
            $("#meta-description-counter").css("color", "black")
        } else {
            $("#meta-description-counter").css("color", "red")
            metaDescValue = jQuery.trim(metaDescValue).substring(0, 160).trim(this) + "...";
        }
        $("#meta-description-counter").text(metaDescLength);
    });
    $("#meta-description-button").click(function() {
        let analysis;
        if(metaDescLength < 50) {
            analysis = "Too Short!";
        } else if(metaDescLength <= 160) {
            analysis = "Great!";
        } else {
            analysis = "Too Long!";
        }
        $(".meta-description-result").text(metaDescValue);
        $("#meta-description-analysis").html('<div class="analysis-result"><p>Length: ' + metaDescLength + '</p><p>Analysis: ' + analysis + '</p></div>');
    });
    $("#text-counter").keyup(function() {
        textCounter = $(this).val().length;
        $("#text-counter-button").text(textCounter);
    });
});