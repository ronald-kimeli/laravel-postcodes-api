import 'jquery/dist/jquery.min.js';
import $ from 'jquery';
import jQuery from 'jquery';
import ClipboardJS from 'clipboard';
import { Toast } from 'bootstrap';

jQuery(function () {

    const id = '1';

    const toastLiveExample = document.getElementById('liveToast')
    const toast = Toast.getOrCreateInstance(toastLiveExample);

    getAPI(id);
    function getAPI(id) {
        const url = 'api/v1/apikeys/' + id;
        $.ajax({
            type: "GET",
            url: `${url}`,
            dataType: "json",
            success: function (response) {
                // console.log(response.api_key);
                $.map(response.api_key, function (api_key, index) {
                    const key = api_key.api_key;

                    $('#api_data').val(stateKey(key));
                    function stateKey(key) {
                        if (key == null) {
                            const key = 'No API_KEY! Generate New!';
                            return key
                        } else {
                            return key;
                        }
                    }
                });

            },
            error: function (jqXHR, status, error) {
                if (error) {
                    const key = 'No API_KEY! Account Suspended';
                    $('#api_data').val(key);
                }
            }
        });
    }

    $('#copy').on('click', function (e) {
        e.preventDefault();

        var clipboard = new ClipboardJS('.btn');
        clipboard.on('success', function (e) {

            toast.show();

            $('#status').html('');
            $('#status').append('success');

            $('#toast_body').html('');
            $('#toast_body').append('Success! copied 📥\nNow try pasting!');

            e.clearSelection();
        });
    });

    $('#generate').on('click', function (e) {
        e.preventDefault();
        const url = 'api/v1/apikeys/' + id;
        generateAPI()
        function generateAPI() {
            $.ajax({
                type: "PUT",
                url: `${url}`,
                dataType: "json",
                success: function (response) {
                    // console.log(response);
                    getAPI(id);
                },
                error: function (jqXHR, status, error) {
                    // console.log(jqXHR);
                }
            });
        }
    });

    $('#revoke').on('click', function (e) {
        e.preventDefault();
        const url = 'api/v1/apikeys/' + id;
        revokeAPI()
        function revokeAPI() {
            $.ajax({
                type: "DELETE",
                url: `${url}`,
                dataType: "json",
                success: function (response) {
                    // console.log(response);
                    getAPI(id);
                },
                error: function (jqXHR, status, error) {
                    // console.log(jqXHR);
                }
            });
        }

    });
})
