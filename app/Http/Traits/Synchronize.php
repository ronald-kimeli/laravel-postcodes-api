<?php

namespace App\Http\Traits;

use Illuminate\Support\Facades\DB;

trait Synchronize {
    function synchronizeDatabases($api_key,$id) {

        DB::connection('mysql1')->table('users')
                    ->where('id', '=', $id)
                    ->update([
                        'api_key' => $api_key
                        ]);
        DB::connection('mysql2')->table('users')
                    ->where('id', '=', $id)
                    ->update([
                        'api_key' => $api_key
                        ]);
    }
}
