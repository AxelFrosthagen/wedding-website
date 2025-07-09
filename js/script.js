$(document).ready(function() {

    /********************** RSVP **********************/
    $('#rsvp-form').on('submit', function(e) {
        e.preventDefault();
        var data = $(this).serialize();

        $('#alert-wrapper').html(alert_markup('info', '<strong>Häng kvar!</strong> Vi sparar din anmälan.'));

        $.post('https://script.google.com/macros/s/AKfycbw_L1smu3LsQ7FUhxExSPwnib741-71WO3l8V1vsNMdCU0K1ornCYiO-rE5WIFdbdqd/exec', data)
            .done(function(data) {
                console.log(data);
                if (data.result === "error") {
                    $('#alert-wrapper').html(alert_markup('danger', data.message));
                } else {
                    $('#alert-wrapper').html('');
                    $('#rsvp-modal').css('display', 'block');
                }
            })
            .fail(function(data) {
                console.log(data);
                $('#alert-wrapper').html(alert_markup('danger', '<strong>Ajdå!</strong> Det ser ut som att det blivit fel i servern...'));
            });
    });

    // alert_markup
    function alert_markup(alert_type, msg) {
        return '<div class="alert alert-' + alert_type + '" role="alert" style="margin-bottom: 25px;">' + msg + '</div>';
    }

});
