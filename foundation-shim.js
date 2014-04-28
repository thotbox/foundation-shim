/*
 * Foundation 5/3 Shim
 * Version 1.1
 * http://thotbox.ca
 *
 * Translates Foundation 5 markup for use with Foundation 3 JS and CSS in Internet Explorer 8
*/

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

});

