$(document).ready(function() {

    /********************** RSVP **********************/
    $('#rsvp-form').on('submit', function(e) {
        e.preventDefault();
        var data = $(this).serialize();

        $('#alert-wrapper').html(alert_markup('info', '<strong>Häng kvar!</strong> Vi sparar din anmälan.'));

        $.post('https://script.google.com/macros/s/AKfycbygFXdiDQ60lX0v2pKUJAfBeb5qlV79zbjZrODzVckwGzd8FNuRm10H3H_N7uUpRZM/exec', data)
            .done(function(data) {
                console.log(data);
                if (data.result === "error") {
                    $('#alert-wrapper').html(alert_markup('danger', data.message));
                } else {
                    $('#alert-wrapper').html('');
                    $('#rsvp-modal').modal('show');
                }
            })
            .fail(function(data) {
                console.log(data);
                $('#alert-wrapper').html(alert_markup('danger', '<strong>Ajdå!</strong> Det ser ut som att det blivit fel i servern...'));
            });
    });

    // alert_markup
    function alert_markup(alert_type, msg) {
        return '<div class="alert alert-' + alert_type + '" role="alert">' + msg + '<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span>&times;</span></button></div>';
    }

});
