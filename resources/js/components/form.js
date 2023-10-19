import 'jquery/dist/jquery.min.js';
import $ from 'jquery';
import jQuery from 'jquery';
import { Toast } from 'bootstrap';

jQuery(function () {

    // $('#api_key').on('input', function () {
    //     var inputValue = $(this).val();
    //     var maskedValue = '*'.repeat(inputValue.length); // Replace each character with an asterisk
    //     $(this).val(maskedValue);
    //     return inputValue;
    // });

    $('#submitButton').on('click', function (e) {
        e.preventDefault();

        const toastLiveExample = document.getElementById('liveToast')
        const test = Toast.getOrCreateInstance(toastLiveExample);

        const postcode = $('#postcode').val();
        const api_key = $('#api_key').val();

        const url = 'api/v1/postcodes/' + postcode;
        const data = {
            api_key: api_key
        };
        const param = 'api_key=' + data.api_key;

        const fullUrl = url + '?' + param;

        if (api_key === '' && postcode === '') {

            test.show();

            $('#table_head').html('');
            $('#table_body').html('');

            $('#status').html('');
            $('#status').append(`<i class="bi bi-exclamation-circle red"></i><span class="ms-1">error`);

            $('#toast_body').html('');
            $('#toast_body').append('all fields are required');

        } else if (api_key != '' && postcode === '') {

            test.show();

            $('#table_head').html('');
            $('#table_body').html('');

            $('#status').html('');
            $('#status').append(`<i class="bi bi-exclamation-circle red"></i><span class="ms-1">error`);

            $('#toast_body').html('');
            $('#toast_body').append('postcode field is required');

        } else if (api_key === '' && postcode != '') {

            test.show();

            $('#table_head').html('');
            $('#table_body').html('');

            $('#status').html('');
            $('#status').append(`<i class="bi bi-exclamation-circle red"></i><span class="ms-1">error`);

            $('#toast_body').html('');
            $('#toast_body').append('api_key field is required');

        } else {
            fetchPostcodes();
        }

        function fetchPostcodes() {
            $.ajax({
                type: "GET",
                "url": `${fullUrl}`,
                dataType: "json",
                "headers": {
                    "Accept": "application/vnd.api+json",
                    "Accept": "application/x-www-form-urlencoded"
                },
                success: function (response) {
                    test.show();

                    $('#toast_body').html('');
                    $('#toast_body').append(response.message);

                    $('#status').html('');
                    $('#status').append(`<i class="bi bi-check2-circle green"></i><span class="ms-1">${response.status}`);

                    $('#table_head').html('');
                    $('#table_head').append('<tr class="bg-light">\
                    <th scope="col" >ID</th>\
                    <th scope="col" >Lat</th>\
                    <th scope="col" >Long</th>\
                    <th scope="col" >Street_Address</th>\
                </tr>');

                    $('#table_body').html('');
                    $.map(response.locations, function ({ Lat, Long, Street_Address }, index) {
                        $('#table_body').append('<tr key=`${index}`>\
                                <td scope="row">'+ `${index + 1}` + '</td>\
                                <td>'+ Lat + '</td>\
                                <td>'+ Long + '</span></td>\
                                <td><i class="bi bi-check2-circle green"></i><span class="ms-1">'+ Street_Address + '</td>\
                            </tr>'
                        );
                    });

                    $('#postcode').val('');
                    $('#api_key').val('');
                },
                error: function (jqXHR, status, error) {

                    test.show();
                    const errors = jqXHR.responseJSON.message;

                    $('#table_head').html('');
                    $('#table_body').html('');

                    $('#status').html('');
                    $('#status').append(`<i class="bi bi-exclamation-circle red"></i><span class="ms-1">${status}`);

                    $('#toast_body').html('');
                    $('#toast_body').append(errors);

                    //  $('#postcode').val('');
                    //  $('#api_key').val('');
                }
            });
        }

    });
});
