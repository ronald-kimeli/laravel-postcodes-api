@extends('welcome')

@section('content')
    <div class="modal fade col-auto" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">API KEY
                    </h1> <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="input-group mb-3">
                        <input type="text" class="form-control" aria-label="Text input with dropdown button"
                            value="" readonly id="api_data" />
                        <div class="btn-group dropup">
                            <button type="button" class="btn btn-outline-success dropdown-toggle" data-bs-toggle="dropdown"
                                aria-expanded="false">
                                Options
                            </button>
                            <ul class="dropdown-menu">
                                <!-- Dropdown menu links -->
                                <li><button class="btn dropdown-item" id="copy"
                                        data-clipboard-target="#api_data">Copy</button></li>
                                <li><button class="dropdown-item" id="generate">Generate New</button></li>
                                <li><button class="dropdown-item" id="revoke">Revoke</button></li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>

{{-- Toast message template --}}
    <div class="toast-container position-fixed top-0 end-0 p-3">
        <div id="liveToast" class="toast" role="alert" aria-live="assertive" aria-atomic="true">
            <div class="toast-header">
                <strong class="me-auto" id="status">
                    {{-- Status will appear here --}}
                </strong>
                <small>just now</small>
                <button type="button" class="btn-close" data-bs-dismiss="toast"
                    aria-label="Close"></button>
            </div>
            <div class="toast-body" id="toast_body">
                {{-- Hello, world! This is a toast message. --}}
                {{-- Message contents will be here --}}
            </div>
        </div>
    </div>

    <!-- Header-->
    <header class="py-4">
        <div class="container px-lg-3">
            <div class="p-4 p-lg-5 bg-light rounded-3 text-center">
                <div class="m-4 m-lg-5">
                    <h1 class="display-5 fw-bold">Postcodes API</h1>
                    <p class="fs-4">Laravel, MySQL, jQuery and bootstrap. You need to have a valid api_key and postcode to
                        get
                        Street Address, Latitude and Longitude.</p>
                    <a class="btn btn-lg btn-outline-danger" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        API_KEY
                    </a>

                        <form class="row mt-2" id="postCode">
                            <div class="col-auto">
                                <label for="inputPassword2" class="visually-hidden">PostCode</label>
                                <input type="text" class="form-control" name='postcode' id='postcode'
                                    placeholder="PostCode" />
                            </div>
                            <div class="col-auto">
                                <label for="inputPassword2" class="visually-hidden">API KEY</label>
                                <input type="text" class="form-control" name='api_key' id='api_key'
                                    placeholder="API_KEY" />
                            </div>

                            <div class="col-auto">
                                <button type="submit" class="btn btn-primary mb-3 text-white"
                                    id="submitButton">Search</button>
                            </div>
                        </form>

                    <div class="table-responsive">
                        <table class="table table-responsive table-bordered">
                            <thead id="table_head">
                                {{-- Table head contents will be here --}}
                            </thead>
                            <tbody id="table_body">
                                {{-- Table body contents will be populated here --}}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </header>
@endsection('content')
