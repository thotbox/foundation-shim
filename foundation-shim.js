/*
 * Foundation 5/3 Shim
 * Version 1.1
 * http://thotbox.ca
 *
 * Translates Foundation 5 markup for use with Foundation 3 JS and CSS in Internet Explorer 8
*/

// Change Element Function (used to restructure various markup)

(function($) {
    $.fn.changeElementType = function(newType) {
        var attrs = {};
        if (!(this[0] && this[0].attributes))
            return;

        $.each(this[0].attributes, function(idx, attr) {
            attrs[attr.nodeName] = attr.nodeValue;
        });
        this.replaceWith(function() {
            return $("<" + newType + "/>", attrs).append($(this).contents());
        });
    };
})(jQuery);

$(document).ready(function(){

    // Custom Row Fixes (add selectors to array)

    var row = [ "#div_id" ];
    $.each( row, function( i, val ) {
        $(val).addClass("row");
    });

    // Small Column Fixes (Don't Change)

    $(".small-1").removeClass("columns").addClass("one columns").removeClass("small-1");
    $(".small-2").removeClass("columns").addClass("two columns").removeClass("small-2");
    $(".small-3").removeClass("columns").addClass("three columns").removeClass("small-3");
    $(".small-4").removeClass("columns").addClass("four columns").removeClass("small-4");
    $(".small-5").removeClass("columns").addClass("five columns").removeClass("small-5");
    $(".small-6").removeClass("columns").addClass("six columns").removeClass("small-6");
    $(".small-7").removeClass("columns").addClass("seven columns").removeClass("small-7");
    $(".small-8").removeClass("columns").addClass("eight columns").removeClass("small-8");
    $(".small-9").removeClass("columns").addClass("nine columns").removeClass("small-9");
    $(".small-10").removeClass("columns").addClass("ten columns").removeClass("small-10");
    $(".small-11").removeClass("columns").addClass("eleven columns").removeClass("small-11");
    $(".small-12").removeClass("columns").addClass("twelve columns").removeClass("small-12");

    // Medium Column Fixes (Don't Change)

    $(".medium-1").removeClass("columns one two three four five six seven eight nine ten eleven twelve").addClass("one columns").removeClass("medium-1");
    $(".medium-2").removeClass("columns one two three four five six seven eight nine ten eleven twelve").addClass("two columns").removeClass("medium-2");
    $(".medium-3").removeClass("columns one two three four five six seven eight nine ten eleven twelve").addClass("three columns").removeClass("medium-3");
    $(".medium-4").removeClass("columns one two three four five six seven eight nine ten eleven twelve").addClass("four columns").removeClass("medium-4");
    $(".medium-5").removeClass("columns one two three four five six seven eight nine ten eleven twelve").addClass("five columns").removeClass("medium-5");
    $(".medium-6").removeClass("columns one two three four five six seven eight nine ten eleven twelve").addClass("six columns").removeClass("medium-6");
    $(".medium-7").removeClass("columns one two three four five six seven eight nine ten eleven twelve").addClass("seven columns").removeClass("medium-7");
    $(".medium-8").removeClass("columns one two three four five six seven eight nine ten eleven twelve").addClass("eight columns").removeClass("medium-8");
    $(".medium-9").removeClass("columns one two three four five six seven eight nine ten eleven twelve").addClass("nine columns").removeClass("medium-9");
    $(".medium-10").removeClass("columns one two three four five six seven eight nine ten eleven twelve").addClass("ten columns").removeClass("medium-10");
    $(".medium-11").removeClass("columns one two three four five six seven eight nine ten eleven twelve").addClass("eleven columns").removeClass("medium-11");
    $(".medium-12").removeClass("columns one two three four five six seven eight nine ten eleven twelve").addClass("twelve columns").removeClass("medium-12");

    // Large Column Fixes (Don't Change)

    $(".large-1").removeClass("columns one two three four five six seven eight nine ten eleven twelve").addClass("one columns").removeClass("large-1");
    $(".large-2").removeClass("columns one two three four five six seven eight nine ten eleven twelve").addClass("two columns").removeClass("large-2");
    $(".large-3").removeClass("columns one two three four five six seven eight nine ten eleven twelve").addClass("three columns").removeClass("large-3");
    $(".large-4").removeClass("columns one two three four five six seven eight nine ten eleven twelve").addClass("four columns").removeClass("large-4");
    $(".large-5").removeClass("columns one two three four five six seven eight nine ten eleven twelve").addClass("five columns").removeClass("large-5");
    $(".large-6").removeClass("columns one two three four five six seven eight nine ten eleven twelve").addClass("six columns").removeClass("large-6");
    $(".large-7").removeClass("columns one two three four five six seven eight nine ten eleven twelve").addClass("seven columns").removeClass("large-7");
    $(".large-8").removeClass("columns one two three four five six seven eight nine ten eleven twelve").addClass("eight columns").removeClass("large-8");
    $(".large-9").removeClass("columns one two three four five six seven eight nine ten eleven twelve").addClass("nine columns").removeClass("large-9");
    $(".large-10").removeClass("columns one two three four five six seven eight nine ten eleven twelve").addClass("ten columns").removeClass("large-10");
    $(".large-11").removeClass("columns one two three four five six seven eight nine ten eleven twelve").addClass("eleven columns").removeClass("large-11");
    $(".large-12").removeClass("columns one two three four five six seven eight nine ten eleven twelve").addClass("twelve columns").removeClass("large-12");

    // Custom Column Fixes (add selectors to array)

    var oneCol = [ "#div_id" ];
    $.each( oneCol, function( i, val ) {
        $(val).addClass("one columns");
    });

    var twoCol = [ "#div_id" ];
    $.each( twoCol, function( i, val ) {
        $(val).addClass("two columns");
    });

    var threeCol = [ "#div_id" ];
    $.each( threeCol, function( i, val ) {
        $(val).addClass("three columns");
    });

    var fourCol = [ "#div_id" ];
    $.each( fourCol, function( i, val ) {
        $(val).addClass("four columns");
    });

    var fiveCol = [ "#div_id" ];
    $.each( fiveCol, function( i, val ) {
        $(val).addClass("five columns");
    });

    var sixCol = [ "#div_id" ];
    $.each( sixCol, function( i, val ) {
        $(val).addClass("six columns");
    });

    var sevenCol = [ "#div_id" ];
    $.each( sevenCol, function( i, val ) {
        $(val).addClass("seven columns");
    });

    var eightCol = [ "#div_id" ];
    $.each( eightCol, function( i, val ) {
        $(val).addClass("eight columns");
    });

    var nineCol = [ "#div_id" ];
    $.each( nineCol, function( i, val ) {
        $(val).addClass("nine columns");
    });

    var tenCol = [ "#div_id" ];
    $.each( tenCol, function( i, val ) {
        $(val).addClass("ten columns");
    });

    var elevenCol = [ "#div_id" ];
    $.each( elevenCol, function( i, val ) {
        $(val).addClass("eleven columns");
    });

    var twelveCol = [ "#div_id" ];
    $.each( twelveCol, function( i, val ) {
        $(val).addClass("twelve columns");
    });

    // Centered Column Fixes (Don't Change)

    $(".large-centered").removeClass("large-centered medium-centered small-centered").addClass("centered");
    $(".medium-centered").removeClass("medium-centered small-centered").addClass("centered");
    $(".small-centered").removeClass("small-centered").addClass("centered");

    // Custom Centered Column Fixes (add selectors to array)

    var centeredCol = [ "#div_id" ];
    $.each( centeredCol, function( i, val ) {
        $(val).addClass("centered");
    });

    // Source Ordering Fixes (Don't Change)

    $(".large-push-1").removeClass("large-push-1 medium-push-1 medium-push-2 medium-push-3 medium-push-4 medium-push-5 medium-push-6 medium-push-7 medium-push-8 medium-push-9 medium-push-10 medium-push-11 medium-push-12 small-push-1 small-push-2 small-push-3 small-push-4 small-push-5 small-push-6 small-push-7 small-push-8 small-push-9 small-push-10 small-push-11 small-push-12").addClass("push-one");
    $(".large-push-2").removeClass("large-push-2 medium-push-1 medium-push-2 medium-push-3 medium-push-4 medium-push-5 medium-push-6 medium-push-7 medium-push-8 medium-push-9 medium-push-10 medium-push-11 medium-push-12 small-push-1 small-push-2 small-push-3 small-push-4 small-push-5 small-push-6 small-push-7 small-push-8 small-push-9 small-push-10 small-push-11 small-push-12").addClass("push-two");
    $(".large-push-3").removeClass("large-push-3 medium-push-1 medium-push-2 medium-push-3 medium-push-4 medium-push-5 medium-push-6 medium-push-7 medium-push-8 medium-push-9 medium-push-10 medium-push-11 medium-push-12 small-push-1 small-push-2 small-push-3 small-push-4 small-push-5 small-push-6 small-push-7 small-push-8 small-push-9 small-push-10 small-push-11 small-push-12").addClass("push-three");
    $(".large-push-4").removeClass("large-push-4 medium-push-1 medium-push-2 medium-push-3 medium-push-4 medium-push-5 medium-push-6 medium-push-7 medium-push-8 medium-push-9 medium-push-10 medium-push-11 medium-push-12 small-push-1 small-push-2 small-push-3 small-push-4 small-push-5 small-push-6 small-push-7 small-push-8 small-push-9 small-push-10 small-push-11 small-push-12").addClass("push-four");
    $(".large-push-5").removeClass("large-push-5 medium-push-1 medium-push-2 medium-push-3 medium-push-4 medium-push-5 medium-push-6 medium-push-7 medium-push-8 medium-push-9 medium-push-10 medium-push-11 medium-push-12 small-push-1 small-push-2 small-push-3 small-push-4 small-push-5 small-push-6 small-push-7 small-push-8 small-push-9 small-push-10 small-push-11 small-push-12").addClass("push-five");
    $(".large-push-6").removeClass("large-push-6 medium-push-1 medium-push-2 medium-push-3 medium-push-4 medium-push-5 medium-push-6 medium-push-7 medium-push-8 medium-push-9 medium-push-10 medium-push-11 medium-push-12 small-push-1 small-push-2 small-push-3 small-push-4 small-push-5 small-push-6 small-push-7 small-push-8 small-push-9 small-push-10 small-push-11 small-push-12").addClass("push-six");
    $(".large-push-7").removeClass("large-push-7 medium-push-1 medium-push-2 medium-push-3 medium-push-4 medium-push-5 medium-push-6 medium-push-7 medium-push-8 medium-push-9 medium-push-10 medium-push-11 medium-push-12 small-push-1 small-push-2 small-push-3 small-push-4 small-push-5 small-push-6 small-push-7 small-push-8 small-push-9 small-push-10 small-push-11 small-push-12").addClass("push-seven");
    $(".large-push-8").removeClass("large-push-8 medium-push-1 medium-push-2 medium-push-3 medium-push-4 medium-push-5 medium-push-6 medium-push-7 medium-push-8 medium-push-9 medium-push-10 medium-push-11 medium-push-12 small-push-1 small-push-2 small-push-3 small-push-4 small-push-5 small-push-6 small-push-7 small-push-8 small-push-9 small-push-10 small-push-11 small-push-12").addClass("push-eight");
    $(".large-push-9").removeClass("large-push-9 medium-push-1 medium-push-2 medium-push-3 medium-push-4 medium-push-5 medium-push-6 medium-push-7 medium-push-8 medium-push-9 medium-push-10 medium-push-11 medium-push-12 small-push-1 small-push-2 small-push-3 small-push-4 small-push-5 small-push-6 small-push-7 small-push-8 small-push-9 small-push-10 small-push-11 small-push-12").addClass("push-nine");
    $(".large-push-10").removeClass("large-push-10 medium-push-1 medium-push-2 medium-push-3 medium-push-4 medium-push-5 medium-push-6 medium-push-7 medium-push-8 medium-push-9 medium-push-10 medium-push-11 medium-push-12 small-push-1 small-push-2 small-push-3 small-push-4 small-push-5 small-push-6 small-push-7 small-push-8 small-push-9 small-push-10 small-push-11 small-push-12").addClass("push-ten");
    $(".large-push-11").removeClass("large-push-11 medium-push-1 medium-push-2 medium-push-3 medium-push-4 medium-push-5 medium-push-6 medium-push-7 medium-push-8 medium-push-9 medium-push-10 medium-push-11 medium-push-12 small-push-1 small-push-2 small-push-3 small-push-4 small-push-5 small-push-6 small-push-7 small-push-8 small-push-9 small-push-10 small-push-11 small-push-12").addClass("push-eleven");
    $(".large-push-12").removeClass("large-push-12 medium-push-1 medium-push-2 medium-push-3 medium-push-4 medium-push-5 medium-push-6 medium-push-7 medium-push-8 medium-push-9 medium-push-10 medium-push-11 medium-push-12 small-push-1 small-push-2 small-push-3 small-push-4 small-push-5 small-push-6 small-push-7 small-push-8 small-push-9 small-push-10 small-push-11 small-push-12").addClass("push-twelve");

    $(".medium-push-1").removeClass("medium-push-1 small-push-1 small-push-2 small-push-3 small-push-4 small-push-5 small-push-6 small-push-7 small-push-8 small-push-9 small-push-10 small-push-11 small-push-12").addClass("push-one");
    $(".medium-push-2").removeClass("medium-push-2 small-push-1 small-push-2 small-push-3 small-push-4 small-push-5 small-push-6 small-push-7 small-push-8 small-push-9 small-push-10 small-push-11 small-push-12").addClass("push-two");
    $(".medium-push-3").removeClass("medium-push-3 small-push-1 small-push-2 small-push-3 small-push-4 small-push-5 small-push-6 small-push-7 small-push-8 small-push-9 small-push-10 small-push-11 small-push-12").addClass("push-three");
    $(".medium-push-4").removeClass("medium-push-4 small-push-1 small-push-2 small-push-3 small-push-4 small-push-5 small-push-6 small-push-7 small-push-8 small-push-9 small-push-10 small-push-11 small-push-12").addClass("push-four");
    $(".medium-push-5").removeClass("medium-push-5 small-push-1 small-push-2 small-push-3 small-push-4 small-push-5 small-push-6 small-push-7 small-push-8 small-push-9 small-push-10 small-push-11 small-push-12").addClass("push-five");
    $(".medium-push-6").removeClass("medium-push-6 small-push-1 small-push-2 small-push-3 small-push-4 small-push-5 small-push-6 small-push-7 small-push-8 small-push-9 small-push-10 small-push-11 small-push-12").addClass("push-six");
    $(".medium-push-7").removeClass("medium-push-7 small-push-1 small-push-2 small-push-3 small-push-4 small-push-5 small-push-6 small-push-7 small-push-8 small-push-9 small-push-10 small-push-11 small-push-12").addClass("push-seven");
    $(".medium-push-8").removeClass("medium-push-8 small-push-1 small-push-2 small-push-3 small-push-4 small-push-5 small-push-6 small-push-7 small-push-8 small-push-9 small-push-10 small-push-11 small-push-12").addClass("push-eight");
    $(".medium-push-9").removeClass("medium-push-9 small-push-1 small-push-2 small-push-3 small-push-4 small-push-5 small-push-6 small-push-7 small-push-8 small-push-9 small-push-10 small-push-11 small-push-12").addClass("push-nine");
    $(".medium-push-10").removeClass("medium-push-10 small-push-1 small-push-2 small-push-3 small-push-4 small-push-5 small-push-6 small-push-7 small-push-8 small-push-9 small-push-10 small-push-11 small-push-12").addClass("push-ten");
    $(".medium-push-11").removeClass("medium-push-11 small-push-1 small-push-2 small-push-3 small-push-4 small-push-5 small-push-6 small-push-7 small-push-8 small-push-9 small-push-10 small-push-11 small-push-12").addClass("push-eleven");
    $(".medium-push-12").removeClass("medium-push-12 small-push-1 small-push-2 small-push-3 small-push-4 small-push-5 small-push-6 small-push-7 small-push-8 small-push-9 small-push-10 small-push-11 small-push-12").addClass("push-twelve");

    $(".small-push-1").removeClass("small-push-1").addClass("push-one");
    $(".small-push-2").removeClass("small-push-2").addClass("push-two");
    $(".small-push-3").removeClass("small-push-3").addClass("push-three");
    $(".small-push-4").removeClass("small-push-4").addClass("push-four");
    $(".small-push-5").removeClass("small-push-5").addClass("push-five");
    $(".small-push-6").removeClass("small-push-6").addClass("push-six");
    $(".small-push-7").removeClass("small-push-7").addClass("push-seven");
    $(".small-push-8").removeClass("small-push-8").addClass("push-eight");
    $(".small-push-9").removeClass("small-push-9").addClass("push-nine");
    $(".small-push-10").removeClass("small-push-10").addClass("push-ten");
    $(".small-push-11").removeClass("small-push-11").addClass("push-eleven");
    $(".small-push-12").removeClass("small-push-12").addClass("push-twelve");

    $(".large-pull-1").removeClass("large-pull-1 medium-pull-1 medium-pull-2 medium-pull-3 medium-pull-4 medium-pull-5 medium-pull-6 medium-pull-7 medium-pull-8 medium-pull-9 medium-pull-10 medium-pull-11 medium-pull-12 small-pull-1 small-pull-2 small-pull-3 small-pull-4 small-pull-5 small-pull-6 small-pull-7 small-pull-8 small-pull-9 small-pull-10 small-pull-11 small-pull-12").addClass("pull-one");
    $(".large-pull-2").removeClass("large-pull-2 medium-pull-1 medium-pull-2 medium-pull-3 medium-pull-4 medium-pull-5 medium-pull-6 medium-pull-7 medium-pull-8 medium-pull-9 medium-pull-10 medium-pull-11 medium-pull-12 small-pull-1 small-pull-2 small-pull-3 small-pull-4 small-pull-5 small-pull-6 small-pull-7 small-pull-8 small-pull-9 small-pull-10 small-pull-11 small-pull-12").addClass("pull-two");
    $(".large-pull-3").removeClass("large-pull-3 medium-pull-1 medium-pull-2 medium-pull-3 medium-pull-4 medium-pull-5 medium-pull-6 medium-pull-7 medium-pull-8 medium-pull-9 medium-pull-10 medium-pull-11 medium-pull-12 small-pull-1 small-pull-2 small-pull-3 small-pull-4 small-pull-5 small-pull-6 small-pull-7 small-pull-8 small-pull-9 small-pull-10 small-pull-11 small-pull-12").addClass("pull-three");
    $(".large-pull-4").removeClass("large-pull-4 medium-pull-1 medium-pull-2 medium-pull-3 medium-pull-4 medium-pull-5 medium-pull-6 medium-pull-7 medium-pull-8 medium-pull-9 medium-pull-10 medium-pull-11 medium-pull-12 small-pull-1 small-pull-2 small-pull-3 small-pull-4 small-pull-5 small-pull-6 small-pull-7 small-pull-8 small-pull-9 small-pull-10 small-pull-11 small-pull-12").addClass("pull-four");
    $(".large-pull-5").removeClass("large-pull-5 medium-pull-1 medium-pull-2 medium-pull-3 medium-pull-4 medium-pull-5 medium-pull-6 medium-pull-7 medium-pull-8 medium-pull-9 medium-pull-10 medium-pull-11 medium-pull-12 small-pull-1 small-pull-2 small-pull-3 small-pull-4 small-pull-5 small-pull-6 small-pull-7 small-pull-8 small-pull-9 small-pull-10 small-pull-11 small-pull-12").addClass("pull-five");
    $(".large-pull-6").removeClass("large-pull-6 medium-pull-1 medium-pull-2 medium-pull-3 medium-pull-4 medium-pull-5 medium-pull-6 medium-pull-7 medium-pull-8 medium-pull-9 medium-pull-10 medium-pull-11 medium-pull-12 small-pull-1 small-pull-2 small-pull-3 small-pull-4 small-pull-5 small-pull-6 small-pull-7 small-pull-8 small-pull-9 small-pull-10 small-pull-11 small-pull-12").addClass("pull-six");
    $(".large-pull-7").removeClass("large-pull-7 medium-pull-1 medium-pull-2 medium-pull-3 medium-pull-4 medium-pull-5 medium-pull-6 medium-pull-7 medium-pull-8 medium-pull-9 medium-pull-10 medium-pull-11 medium-pull-12 small-pull-1 small-pull-2 small-pull-3 small-pull-4 small-pull-5 small-pull-6 small-pull-7 small-pull-8 small-pull-9 small-pull-10 small-pull-11 small-pull-12").addClass("pull-seven");
    $(".large-pull-8").removeClass("large-pull-8 medium-pull-1 medium-pull-2 medium-pull-3 medium-pull-4 medium-pull-5 medium-pull-6 medium-pull-7 medium-pull-8 medium-pull-9 medium-pull-10 medium-pull-11 medium-pull-12 small-pull-1 small-pull-2 small-pull-3 small-pull-4 small-pull-5 small-pull-6 small-pull-7 small-pull-8 small-pull-9 small-pull-10 small-pull-11 small-pull-12").addClass("pull-eight");
    $(".large-pull-9").removeClass("large-pull-9 medium-pull-1 medium-pull-2 medium-pull-3 medium-pull-4 medium-pull-5 medium-pull-6 medium-pull-7 medium-pull-8 medium-pull-9 medium-pull-10 medium-pull-11 medium-pull-12 small-pull-1 small-pull-2 small-pull-3 small-pull-4 small-pull-5 small-pull-6 small-pull-7 small-pull-8 small-pull-9 small-pull-10 small-pull-11 small-pull-12").addClass("pull-nine");
    $(".large-pull-10").removeClass("large-pull-10 medium-pull-1 medium-pull-2 medium-pull-3 medium-pull-4 medium-pull-5 medium-pull-6 medium-pull-7 medium-pull-8 medium-pull-9 medium-pull-10 medium-pull-11 medium-pull-12 small-pull-1 small-pull-2 small-pull-3 small-pull-4 small-pull-5 small-pull-6 small-pull-7 small-pull-8 small-pull-9 small-pull-10 small-pull-11 small-pull-12").addClass("pull-ten");
    $(".large-pull-11").removeClass("large-pull-11 medium-pull-1 medium-pull-2 medium-pull-3 medium-pull-4 medium-pull-5 medium-pull-6 medium-pull-7 medium-pull-8 medium-pull-9 medium-pull-10 medium-pull-11 medium-pull-12 small-pull-1 small-pull-2 small-pull-3 small-pull-4 small-pull-5 small-pull-6 small-pull-7 small-pull-8 small-pull-9 small-pull-10 small-pull-11 small-pull-12").addClass("pull-eleven");
    $(".large-pull-12").removeClass("large-pull-12 medium-pull-1 medium-pull-2 medium-pull-3 medium-pull-4 medium-pull-5 medium-pull-6 medium-pull-7 medium-pull-8 medium-pull-9 medium-pull-10 medium-pull-11 medium-pull-12 small-pull-1 small-pull-2 small-pull-3 small-pull-4 small-pull-5 small-pull-6 small-pull-7 small-pull-8 small-pull-9 small-pull-10 small-pull-11 small-pull-12").addClass("pull-twelve");

    $(".medium-pull-1").removeClass("medium-pull-1 small-pull-1 small-pull-2 small-pull-3 small-pull-4 small-pull-5 small-pull-6 small-pull-7 small-pull-8 small-pull-9 small-pull-10 small-pull-11 small-pull-12").addClass("pull-one");
    $(".medium-pull-2").removeClass("medium-pull-2 small-pull-1 small-pull-2 small-pull-3 small-pull-4 small-pull-5 small-pull-6 small-pull-7 small-pull-8 small-pull-9 small-pull-10 small-pull-11 small-pull-12").addClass("pull-two");
    $(".medium-pull-3").removeClass("medium-pull-3 small-pull-1 small-pull-2 small-pull-3 small-pull-4 small-pull-5 small-pull-6 small-pull-7 small-pull-8 small-pull-9 small-pull-10 small-pull-11 small-pull-12").addClass("pull-three");
    $(".medium-pull-4").removeClass("medium-pull-4 small-pull-1 small-pull-2 small-pull-3 small-pull-4 small-pull-5 small-pull-6 small-pull-7 small-pull-8 small-pull-9 small-pull-10 small-pull-11 small-pull-12").addClass("pull-four");
    $(".medium-pull-5").removeClass("medium-pull-5 small-pull-1 small-pull-2 small-pull-3 small-pull-4 small-pull-5 small-pull-6 small-pull-7 small-pull-8 small-pull-9 small-pull-10 small-pull-11 small-pull-12").addClass("pull-five");
    $(".medium-pull-6").removeClass("medium-pull-6 small-pull-1 small-pull-2 small-pull-3 small-pull-4 small-pull-5 small-pull-6 small-pull-7 small-pull-8 small-pull-9 small-pull-10 small-pull-11 small-pull-12").addClass("pull-six");
    $(".medium-pull-7").removeClass("medium-pull-7 small-pull-1 small-pull-2 small-pull-3 small-pull-4 small-pull-5 small-pull-6 small-pull-7 small-pull-8 small-pull-9 small-pull-10 small-pull-11 small-pull-12").addClass("pull-seven");
    $(".medium-pull-8").removeClass("medium-pull-8 small-pull-1 small-pull-2 small-pull-3 small-pull-4 small-pull-5 small-pull-6 small-pull-7 small-pull-8 small-pull-9 small-pull-10 small-pull-11 small-pull-12").addClass("pull-eight");
    $(".medium-pull-9").removeClass("medium-pull-9 small-pull-1 small-pull-2 small-pull-3 small-pull-4 small-pull-5 small-pull-6 small-pull-7 small-pull-8 small-pull-9 small-pull-10 small-pull-11 small-pull-12").addClass("pull-nine");
    $(".medium-pull-10").removeClass("medium-pull-10 small-pull-1 small-pull-2 small-pull-3 small-pull-4 small-pull-5 small-pull-6 small-pull-7 small-pull-8 small-pull-9 small-pull-10 small-pull-11 small-pull-12").addClass("pull-ten");
    $(".medium-pull-11").removeClass("medium-pull-11 small-pull-1 small-pull-2 small-pull-3 small-pull-4 small-pull-5 small-pull-6 small-pull-7 small-pull-8 small-pull-9 small-pull-10 small-pull-11 small-pull-12").addClass("pull-eleven");
    $(".medium-pull-12").removeClass("medium-pull-12 small-pull-1 small-pull-2 small-pull-3 small-pull-4 small-pull-5 small-pull-6 small-pull-7 small-pull-8 small-pull-9 small-pull-10 small-pull-11 small-pull-12").addClass("pull-twelve");

    $(".small-pull-1").removeClass("small-pull-1").addClass("pull-one");
    $(".small-pull-2").removeClass("small-pull-2").addClass("pull-two");
    $(".small-pull-3").removeClass("small-pull-3").addClass("pull-three");
    $(".small-pull-4").removeClass("small-pull-4").addClass("pull-four");
    $(".small-pull-5").removeClass("small-pull-5").addClass("pull-five");
    $(".small-pull-6").removeClass("small-pull-6").addClass("pull-six");
    $(".small-pull-7").removeClass("small-pull-7").addClass("pull-seven");
    $(".small-pull-8").removeClass("small-pull-8").addClass("pull-eight");
    $(".small-pull-9").removeClass("small-pull-9").addClass("pull-nine");
    $(".small-pull-10").removeClass("small-pull-10").addClass("pull-ten");
    $(".small-pull-11").removeClass("small-pull-11").addClass("pull-eleven");
    $(".small-pull-12").removeClass("small-pull-12").addClass("pull-twelve");

    // Custom Source Ordering Fixes (add selectors to array)

    var onePush = [ "#div_id" ];
    $.each( onePush, function( i, val ) {
        $(val).addClass("push-one");
    });

    var twoPush = [ "#div_id" ];
    $.each( twoPush, function( i, val ) {
        $(val).addClass("push-two");
    });

    var threePush = [ "#div_id" ];
    $.each( threePush, function( i, val ) {
        $(val).addClass("push-three");
    });

    var fourPush = [ "#div_id" ];
    $.each( fourPush, function( i, val ) {
        $(val).addClass("push-four");
    });

    var fivePush = [ "#div_id" ];
    $.each( fivePush, function( i, val ) {
        $(val).addClass("push-five");
    });

    var sixPush = [ "#div_id" ];
    $.each( sixPush, function( i, val ) {
        $(val).addClass("push-six");
    });

    var sevenPush = [ "#div_id" ];
    $.each( sevenPush, function( i, val ) {
        $(val).addClass("push-seven");
    });

    var eightPush = [ "#div_id" ];
    $.each( eightPush, function( i, val ) {
        $(val).addClass("push-eight");
    });

    var ninePush = [ "#div_id" ];
    $.each( ninePush, function( i, val ) {
        $(val).addClass("push-nine");
    });

    var tenPush = [ "#div_id" ];
    $.each( tenPush, function( i, val ) {
        $(val).addClass("push-ten");
    });

    var elevenPush = [ "#div_id" ];
    $.each( elevenPush, function( i, val ) {
        $(val).addClass("push-eleven");
    });

    var twelvePush = [ "#div_id" ];
    $.each( twelvePush, function( i, val ) {
        $(val).addClass("push-twelve");
    });

    var onePull = [ "#div_id" ];
    $.each( onePull, function( i, val ) {
        $(val).addClass("pull-one");
    });

    var twoPull = [ "#div_id" ];
    $.each( twoPull, function( i, val ) {
        $(val).addClass("pull-two");
    });

    var threePull = [ "#div_id" ];
    $.each( threePull, function( i, val ) {
        $(val).addClass("pull-three");
    });

    var fourPull = [ "#div_id" ];
    $.each( fourPull, function( i, val ) {
        $(val).addClass("pull-four");
    });

    var fivePull = [ "#div_id" ];
    $.each( fivePull, function( i, val ) {
        $(val).addClass("pull-five");
    });

    var sixPull = [ "#div_id" ];
    $.each( sixPull, function( i, val ) {
        $(val).addClass("pull-six");
    });

    var sevenPull = [ "#div_id" ];
    $.each( sevenPull, function( i, val ) {
        $(val).addClass("pull-seven");
    });

    var eightPull = [ "#div_id" ];
    $.each( eightPull, function( i, val ) {
        $(val).addClass("pull-eight");
    });

    var ninePull = [ "#div_id" ];
    $.each( ninePull, function( i, val ) {
        $(val).addClass("pull-nine");
    });

    var tenPull = [ "#div_id" ];
    $.each( tenPull, function( i, val ) {
        $(val).addClass("pull-ten");
    });

    var elevenPull = [ "#div_id" ];
    $.each( elevenPull, function( i, val ) {
        $(val).addClass("pull-eleven");
    });

    var twelvePull = [ "#div_id" ];
    $.each( twelvePull, function( i, val ) {
        $(val).addClass("pull-twelve");
    });

    // Offset Fixes (Don't Change)

    $(".large-offset-1").removeClass("large-offset-1 medium-offset-1 medium-offset-2 medium-offset-3 medium-offset-4 medium-offset-5 medium-offset-6 medium-offset-7 medium-offset-8 medium-offset-9 medium-offset-10 medium-offset-11 medium-offset-12 small-offset-1 small-offset-2 small-offset-3 small-offset-4 small-offset-5 small-offset-6 small-offset-7 small-offset-8 small-offset-9 small-offset-10 small-offset-11 small-offset-12").addClass("offset-by-one");
    $(".large-offset-2").removeClass("large-offset-2 medium-offset-1 medium-offset-2 medium-offset-3 medium-offset-4 medium-offset-5 medium-offset-6 medium-offset-7 medium-offset-8 medium-offset-9 medium-offset-10 medium-offset-11 medium-offset-12 small-offset-1 small-offset-2 small-offset-3 small-offset-4 small-offset-5 small-offset-6 small-offset-7 small-offset-8 small-offset-9 small-offset-10 small-offset-11 small-offset-12").addClass("offset-by-two");
    $(".large-offset-3").removeClass("large-offset-3 medium-offset-1 medium-offset-2 medium-offset-3 medium-offset-4 medium-offset-5 medium-offset-6 medium-offset-7 medium-offset-8 medium-offset-9 medium-offset-10 medium-offset-11 medium-offset-12 small-offset-1 small-offset-2 small-offset-3 small-offset-4 small-offset-5 small-offset-6 small-offset-7 small-offset-8 small-offset-9 small-offset-10 small-offset-11 small-offset-12").addClass("offset-by-three");
    $(".large-offset-4").removeClass("large-offset-4 medium-offset-1 medium-offset-2 medium-offset-3 medium-offset-4 medium-offset-5 medium-offset-6 medium-offset-7 medium-offset-8 medium-offset-9 medium-offset-10 medium-offset-11 medium-offset-12 small-offset-1 small-offset-2 small-offset-3 small-offset-4 small-offset-5 small-offset-6 small-offset-7 small-offset-8 small-offset-9 small-offset-10 small-offset-11 small-offset-12").addClass("offset-by-four");
    $(".large-offset-5").removeClass("large-offset-5 medium-offset-1 medium-offset-2 medium-offset-3 medium-offset-4 medium-offset-5 medium-offset-6 medium-offset-7 medium-offset-8 medium-offset-9 medium-offset-10 medium-offset-11 medium-offset-12 small-offset-1 small-offset-2 small-offset-3 small-offset-4 small-offset-5 small-offset-6 small-offset-7 small-offset-8 small-offset-9 small-offset-10 small-offset-11 small-offset-12").addClass("offset-by-five");
    $(".large-offset-6").removeClass("large-offset-6 medium-offset-1 medium-offset-2 medium-offset-3 medium-offset-4 medium-offset-5 medium-offset-6 medium-offset-7 medium-offset-8 medium-offset-9 medium-offset-10 medium-offset-11 medium-offset-12 small-offset-1 small-offset-2 small-offset-3 small-offset-4 small-offset-5 small-offset-6 small-offset-7 small-offset-8 small-offset-9 small-offset-10 small-offset-11 small-offset-12").addClass("offset-by-six");
    $(".large-offset-7").removeClass("large-offset-7 medium-offset-1 medium-offset-2 medium-offset-3 medium-offset-4 medium-offset-5 medium-offset-6 medium-offset-7 medium-offset-8 medium-offset-9 medium-offset-10 medium-offset-11 medium-offset-12 small-offset-1 small-offset-2 small-offset-3 small-offset-4 small-offset-5 small-offset-6 small-offset-7 small-offset-8 small-offset-9 small-offset-10 small-offset-11 small-offset-12").addClass("offset-by-seven");
    $(".large-offset-8").removeClass("large-offset-8 medium-offset-1 medium-offset-2 medium-offset-3 medium-offset-4 medium-offset-5 medium-offset-6 medium-offset-7 medium-offset-8 medium-offset-9 medium-offset-10 medium-offset-11 medium-offset-12 small-offset-1 small-offset-2 small-offset-3 small-offset-4 small-offset-5 small-offset-6 small-offset-7 small-offset-8 small-offset-9 small-offset-10 small-offset-11 small-offset-12").addClass("offset-by-eight");
    $(".large-offset-9").removeClass("large-offset-9 medium-offset-1 medium-offset-2 medium-offset-3 medium-offset-4 medium-offset-5 medium-offset-6 medium-offset-7 medium-offset-8 medium-offset-9 medium-offset-10 medium-offset-11 medium-offset-12 small-offset-1 small-offset-2 small-offset-3 small-offset-4 small-offset-5 small-offset-6 small-offset-7 small-offset-8 small-offset-9 small-offset-10 small-offset-11 small-offset-12").addClass("offset-by-nine");
    $(".large-offset-10").removeClass("large-offset-10 medium-offset-1 medium-offset-2 medium-offset-3 medium-offset-4 medium-offset-5 medium-offset-6 medium-offset-7 medium-offset-8 medium-offset-9 medium-offset-10 medium-offset-11 medium-offset-12 small-offset-1 small-offset-2 small-offset-3 small-offset-4 small-offset-5 small-offset-6 small-offset-7 small-offset-8 small-offset-9 small-offset-10 small-offset-11 small-offset-12").addClass("offset-by-ten");
    $(".large-offset-11").removeClass("large-offset-11 medium-offset-1 medium-offset-2 medium-offset-3 medium-offset-4 medium-offset-5 medium-offset-6 medium-offset-7 medium-offset-8 medium-offset-9 medium-offset-10 medium-offset-11 medium-offset-12 small-offset-1 small-offset-2 small-offset-3 small-offset-4 small-offset-5 small-offset-6 small-offset-7 small-offset-8 small-offset-9 small-offset-10 small-offset-11 small-offset-12").addClass("offset-by-eleven");
    $(".large-offset-12").removeClass("large-offset-12 medium-offset-1 medium-offset-2 medium-offset-3 medium-offset-4 medium-offset-5 medium-offset-6 medium-offset-7 medium-offset-8 medium-offset-9 medium-offset-10 medium-offset-11 medium-offset-12 small-offset-1 small-offset-2 small-offset-3 small-offset-4 small-offset-5 small-offset-6 small-offset-7 small-offset-8 small-offset-9 small-offset-10 small-offset-11 small-offset-12").addClass("offset-by-twelve");

    $(".medium-offset-1").removeClass("medium-offset-1 small-offset-1 small-offset-2 small-offset-3 small-offset-4 small-offset-5 small-offset-6 small-offset-7 small-offset-8 small-offset-9 small-offset-10 small-offset-11 small-offset-12").addClass("offset-by-one");
    $(".medium-offset-2").removeClass("medium-offset-2 small-offset-1 small-offset-2 small-offset-3 small-offset-4 small-offset-5 small-offset-6 small-offset-7 small-offset-8 small-offset-9 small-offset-10 small-offset-11 small-offset-12").addClass("offset-by-two");
    $(".medium-offset-3").removeClass("medium-offset-3 small-offset-1 small-offset-2 small-offset-3 small-offset-4 small-offset-5 small-offset-6 small-offset-7 small-offset-8 small-offset-9 small-offset-10 small-offset-11 small-offset-12").addClass("offset-by-three");
    $(".medium-offset-4").removeClass("medium-offset-4 small-offset-1 small-offset-2 small-offset-3 small-offset-4 small-offset-5 small-offset-6 small-offset-7 small-offset-8 small-offset-9 small-offset-10 small-offset-11 small-offset-12").addClass("offset-by-four");
    $(".medium-offset-5").removeClass("medium-offset-5 small-offset-1 small-offset-2 small-offset-3 small-offset-4 small-offset-5 small-offset-6 small-offset-7 small-offset-8 small-offset-9 small-offset-10 small-offset-11 small-offset-12").addClass("offset-by-five");
    $(".medium-offset-6").removeClass("medium-offset-6 small-offset-1 small-offset-2 small-offset-3 small-offset-4 small-offset-5 small-offset-6 small-offset-7 small-offset-8 small-offset-9 small-offset-10 small-offset-11 small-offset-12").addClass("offset-by-six");
    $(".medium-offset-7").removeClass("medium-offset-7 small-offset-1 small-offset-2 small-offset-3 small-offset-4 small-offset-5 small-offset-6 small-offset-7 small-offset-8 small-offset-9 small-offset-10 small-offset-11 small-offset-12").addClass("offset-by-seven");
    $(".medium-offset-8").removeClass("medium-offset-8 small-offset-1 small-offset-2 small-offset-3 small-offset-4 small-offset-5 small-offset-6 small-offset-7 small-offset-8 small-offset-9 small-offset-10 small-offset-11 small-offset-12").addClass("offset-by-eight");
    $(".medium-offset-9").removeClass("medium-offset-9 small-offset-1 small-offset-2 small-offset-3 small-offset-4 small-offset-5 small-offset-6 small-offset-7 small-offset-8 small-offset-9 small-offset-10 small-offset-11 small-offset-12").addClass("offset-by-nine");
    $(".medium-offset-10").removeClass("medium-offset-10 small-offset-1 small-offset-2 small-offset-3 small-offset-4 small-offset-5 small-offset-6 small-offset-7 small-offset-8 small-offset-9 small-offset-10 small-offset-11 small-offset-12").addClass("offset-by-ten");
    $(".medium-offset-11").removeClass("medium-offset-11 small-offset-1 small-offset-2 small-offset-3 small-offset-4 small-offset-5 small-offset-6 small-offset-7 small-offset-8 small-offset-9 small-offset-10 small-offset-11 small-offset-12").addClass("offset-by-eleven");
    $(".medium-offset-12").removeClass("medium-offset-12 small-offset-1 small-offset-2 small-offset-3 small-offset-4 small-offset-5 small-offset-6 small-offset-7 small-offset-8 small-offset-9 small-offset-10 small-offset-11 small-offset-12").addClass("offset-by-twelve");

    $(".small-offset-1").removeClass("small-offset-1").addClass("offset-by-one");
    $(".small-offset-2").removeClass("small-offset-2").addClass("offset-by-two");
    $(".small-offset-3").removeClass("small-offset-3").addClass("offset-by-three");
    $(".small-offset-4").removeClass("small-offset-4").addClass("offset-by-four");
    $(".small-offset-5").removeClass("small-offset-5").addClass("offset-by-five");
    $(".small-offset-6").removeClass("small-offset-6").addClass("offset-by-six");
    $(".small-offset-7").removeClass("small-offset-7").addClass("offset-by-seven");
    $(".small-offset-8").removeClass("small-offset-8").addClass("offset-by-eight");
    $(".small-offset-9").removeClass("small-offset-9").addClass("offset-by-nine");
    $(".small-offset-10").removeClass("small-offset-10").addClass("offset-by-ten");
    $(".small-offset-11").removeClass("small-offset-11").addClass("offset-by-eleven");
    $(".small-offset-12").removeClass("small-offset-12").addClass("offset-by-twelve");

    // Custom Offset Fixes (add selectors to array)

    var oneOffset = [ "#div_id" ];
    $.each( oneOffset, function( i, val ) {
        $(val).addClass("offset-by-one");
    });

    var twoOffset = [ "#div_id" ];
    $.each( twoOffset, function( i, val ) {
        $(val).addClass("offset-by-two");
    });

    var threeOffset = [ "#div_id" ];
    $.each( threeOffset, function( i, val ) {
        $(val).addClass("offset-by-three");
    });

    var fourOffset = [ "#div_id" ];
    $.each( fourOffset, function( i, val ) {
        $(val).addClass("offset-by-four");
    });

    var fiveOffset = [ "#div_id" ];
    $.each( fiveOffset, function( i, val ) {
        $(val).addClass("offset-by-five");
    });

    var sixOffset = [ "#div_id" ];
    $.each( sixOffset, function( i, val ) {
        $(val).addClass("offset-by-six");
    });

    var sevenOffset = [ "#div_id" ];
    $.each( sevenOffset, function( i, val ) {
        $(val).addClass("offset-by-seven");
    });

    var eightOffset = [ "#div_id" ];
    $.each( eightOffset, function( i, val ) {
        $(val).addClass("offset-by-eight");
    });

    var nineOffset = [ "#div_id" ];
    $.each( nineOffset, function( i, val ) {
        $(val).addClass("offset-by-nine");
    });

    var tenOffset = [ "#div_id" ];
    $.each( tenOffset, function( i, val ) {
        $(val).addClass("offset-by-ten");
    });

    var elevenOffset = [ "#div_id" ];
    $.each( elevenOffset, function( i, val ) {
        $(val).addClass("offset-by-eleven");
    });

    var twelveOffset = [ "#div_id" ];
    $.each( twelveOffset, function( i, val ) {
        $(val).addClass("offset-by-twelve");
    });

    // Small Block-Grid Fixes (Don't Change)

    $(".small-block-grid-1").addClass("block-grid one-up").removeClass("small-block-grid-1");
    $(".small-block-grid-2").addClass("block-grid two-up").removeClass("small-block-grid-2");
    $(".small-block-grid-3").addClass("block-grid three-up").removeClass("small-block-grid-3");
    $(".small-block-grid-4").addClass("block-grid four-up").removeClass("small-block-grid-4");
    $(".small-block-grid-5").addClass("block-grid five-up").removeClass("small-block-grid-5");
    $(".small-block-grid-6").addClass("block-grid six-up").removeClass("small-block-grid-6");
    $(".small-block-grid-7").addClass("block-grid seven-up").removeClass("small-block-grid-7");
    $(".small-block-grid-8").addClass("block-grid eight-up").removeClass("small-block-grid-8");
    $(".small-block-grid-9").addClass("block-grid nine-up").removeClass("small-block-grid-9");
    $(".small-block-grid-10").addClass("block-grid ten-up").removeClass("small-block-grid-10");
    $(".small-block-grid-11").addClass("block-grid eleven-up").removeClass("small-block-grid-11");
    $(".small-block-grid-12").addClass("block-grid twelve-up").removeClass("small-block-grid-12");

    // Medium Block-Grid Fixes (Don't Change)

    $(".medium-block-grid-1").removeClass("block-grid one-up two-up three-up four-up five-up six-up seven-up eight-up nine-up ten-up eleven-up twelve-up").addClass("block-grid one-up").removeClass("medium-block-grid-1");
    $(".medium-block-grid-2").removeClass("block-grid one-up two-up three-up four-up five-up six-up seven-up eight-up nine-up ten-up eleven-up twelve-up").addClass("block-grid two-up").removeClass("medium-block-grid-2");
    $(".medium-block-grid-3").removeClass("block-grid one-up two-up three-up four-up five-up six-up seven-up eight-up nine-up ten-up eleven-up twelve-up").addClass("block-grid three-up").removeClass("medium-block-grid-3");
    $(".medium-block-grid-4").removeClass("block-grid one-up two-up three-up four-up five-up six-up seven-up eight-up nine-up ten-up eleven-up twelve-up").addClass("block-grid four-up").removeClass("medium-block-grid-4");
    $(".medium-block-grid-5").removeClass("block-grid one-up two-up three-up four-up five-up six-up seven-up eight-up nine-up ten-up eleven-up twelve-up").addClass("block-grid five-up").removeClass("medium-block-grid-5");
    $(".medium-block-grid-6").removeClass("block-grid one-up two-up three-up four-up five-up six-up seven-up eight-up nine-up ten-up eleven-up twelve-up").addClass("block-grid six-up").removeClass("medium-block-grid-6");
    $(".medium-block-grid-7").removeClass("block-grid one-up two-up three-up four-up five-up six-up seven-up eight-up nine-up ten-up eleven-up twelve-up").addClass("block-grid seven-up").removeClass("medium-block-grid-7");
    $(".medium-block-grid-8").removeClass("block-grid one-up two-up three-up four-up five-up six-up seven-up eight-up nine-up ten-up eleven-up twelve-up").addClass("block-grid eight-up").removeClass("medium-block-grid-8");
    $(".medium-block-grid-9").removeClass("block-grid one-up two-up three-up four-up five-up six-up seven-up eight-up nine-up ten-up eleven-up twelve-up").addClass("block-grid nine-up").removeClass("medium-block-grid-9");
    $(".medium-block-grid-10").removeClass("block-grid one-up two-up three-up four-up five-up six-up seven-up eight-up nine-up ten-up eleven-up twelve-up").addClass("block-grid ten-up").removeClass("medium-block-grid-10");
    $(".medium-block-grid-11").removeClass("block-grid one-up two-up three-up four-up five-up six-up seven-up eight-up nine-up ten-up eleven-up twelve-up").addClass("block-grid eleven-up").removeClass("medium-block-grid-11");
    $(".medium-block-grid-12").removeClass("block-grid one-up two-up three-up four-up five-up six-up seven-up eight-up nine-up ten-up eleven-up twelve-up").addClass("block-grid twelve-up").removeClass("medium-block-grid-12");

    // Large Block-Grid Fixes (Don't Change)

    $(".large-block-grid-1").removeClass("block-grid one-up two-up three-up four-up five-up six-up seven-up eight-up nine-up ten-up eleven-up twelve-up").addClass("block-grid one-up").removeClass("large-block-grid-1");
    $(".large-block-grid-2").removeClass("block-grid one-up two-up three-up four-up five-up six-up seven-up eight-up nine-up ten-up eleven-up twelve-up").addClass("block-grid two-up").removeClass("large-block-grid-2");
    $(".large-block-grid-3").removeClass("block-grid one-up two-up three-up four-up five-up six-up seven-up eight-up nine-up ten-up eleven-up twelve-up").addClass("block-grid three-up").removeClass("large-block-grid-3");
    $(".large-block-grid-4").removeClass("block-grid one-up two-up three-up four-up five-up six-up seven-up eight-up nine-up ten-up eleven-up twelve-up").addClass("block-grid four-up").removeClass("large-block-grid-4");
    $(".large-block-grid-5").removeClass("block-grid one-up two-up three-up four-up five-up six-up seven-up eight-up nine-up ten-up eleven-up twelve-up").addClass("block-grid five-up").removeClass("large-block-grid-5");
    $(".large-block-grid-6").removeClass("block-grid one-up two-up three-up four-up five-up six-up seven-up eight-up nine-up ten-up eleven-up twelve-up").addClass("block-grid six-up").removeClass("large-block-grid-6");
    $(".large-block-grid-7").removeClass("block-grid one-up two-up three-up four-up five-up six-up seven-up eight-up nine-up ten-up eleven-up twelve-up").addClass("block-grid seven-up").removeClass("large-block-grid-7");
    $(".large-block-grid-8").removeClass("block-grid one-up two-up three-up four-up five-up six-up seven-up eight-up nine-up ten-up eleven-up twelve-up").addClass("block-grid eight-up").removeClass("large-block-grid-8");
    $(".large-block-grid-9").removeClass("block-grid one-up two-up three-up four-up five-up six-up seven-up eight-up nine-up ten-up eleven-up twelve-up").addClass("block-grid nine-up").removeClass("large-block-grid-9");
    $(".large-block-grid-10").removeClass("block-grid one-up two-up three-up four-up five-up six-up seven-up eight-up nine-up ten-up eleven-up twelve-up").addClass("block-grid ten-up").removeClass("large-block-grid-10");
    $(".large-block-grid-11").removeClass("block-grid one-up two-up three-up four-up five-up six-up seven-up eight-up nine-up ten-up eleven-up twelve-up").addClass("block-grid eleven-up").removeClass("large-block-grid-11");
    $(".large-block-grid-12").removeClass("block-grid one-up two-up three-up four-up five-up six-up seven-up eight-up nine-up ten-up eleven-up twelve-up").addClass("block-grid twelve-up").removeClass("large-block-grid-12");

    // Custom Block-Grid Fixes (add selectors to array)

    var oneUp = [ "#list_id" ];
    $.each( oneUp, function( i, val ) {
        $(val).addClass("block-grid").addClass("one-up");
    });

    var twoUp = [ "#list_id" ];
    $.each( twoUp, function( i, val ) {
        $(val).addClass("block-grid").addClass("two-up");
    });

    var threeUp = [ "#list_id" ];
    $.each( threeUp, function( i, val ) {
        $(val).addClass("block-grid").addClass("three-up");
    });

    var fourUp = [ "#list_id" ];
    $.each( fourUp, function( i, val ) {
        $(val).addClass("block-grid").addClass("four-up");
    });

    var fiveUp = [ "#list_id" ];
    $.each( fiveUp, function( i, val ) {
        $(val).addClass("block-grid").addClass("five-up");
    });

    var sixUp = [ "#list_id" ];
    $.each( sixUp, function( i, val ) {
        $(val).addClass("block-grid").addClass("six-up");
    });

    // Tab Fixes

    $(".vertical").removeClass("vertical");

    $('.tabs-content').changeElementType('ul');

    $('.tabs-content div.content').each(function(){
        $(this).changeElementType('li');
    });

    $('.tabs-content li').each(function(){
        if(this.id){
            this.id = this.id+"Tab";
        }
    });

    // Accordion Fixes

    $('.accordion').changeElementType('ul');

    $('.accordion dd').each(function(){
        $(this).changeElementType('li');
    });

    $('.accordion li a').each(function(){
        $(this).addClass("title").changeElementType('div');
    });

    $('.accordion li:first').each(function(){
        $(this).addClass("active");
    });

    $('.accordion li .title').each(function(){
        $(this).removeAttr("href");
    });

    // Interchange Fallback

    $('img[fallback]').each(function() {
        var $t = $(this);
        $t.attr({src : $t.attr('fallback')}).removeAttr('fallback');
    });

    $('[fallback]').each(function() {
        var $t = $(this);
        var bg = $(this).attr('fallback');
        $t.css({'background-image': 'url(' + bg + ')',}).removeAttr('fallback');
    });

});

