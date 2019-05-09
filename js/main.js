'use strict';

(function ($) {
    $(document).ready(function () {


        //toast window
        $('.info').click(function () {
            $('.toast').toast('show');
        });
        



        var text = $("textarea").val();
        var textArr = '';

        $('.edit').click(function () {
            $(".comment_text").empty();
            editFunc();

        });
        $('.save').click(function () {
            text = $("textarea").val();
            $("textarea").remove();
            $('.comment_text').append(text);
        });

        function editFunc() {
            var textArr = $("<textarea></textarea>").text(text);
            $('.comment_text').append(textArr);
            text = $("textarea").val();
            $("textarea").focus();
            $("textarea").select();
        };

        jQuery(document).keydown(function (event) {
            if ((event.ctrlKey || event.metaKey) && event.which == 83) {
                event.preventDefault();
                text = $("textarea").val();
                $("textarea").remove();
                $('.comment_text').append(text);
                return;
            }
            if ((event.ctrlKey || event.metaKey) && event.which == 69) {
                event.preventDefault();
                $(".comment_text").empty();
                editFunc();
                return;
            }
        });

    });
})(jQuery);
