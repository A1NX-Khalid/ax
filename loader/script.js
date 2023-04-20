$(document).ready(function() {
    setTimeout(function() {
        $('#bars-common').addClass('loaded');
        // Once the container has finished, the scroll appears
        if ($('#bars-common').hasClass('loaded')) {
            // It is so that once the container is gone, the entire preloader section is deleted
            $('#preloader').delay(1000).queue(function() {
                $(this).remove();
            });
        }
    }, 1000);
});