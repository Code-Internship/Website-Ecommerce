<?php

namespace Database\Seeders;

use App\Models\tbl_admin;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class TblAdminSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        tbl_admin::create([
            'adminName' => 'PhuocNghia',
            'adminUser' => 'admin',
            'adminPass' => Hash::make('admin123@')
        ]);
        tbl_admin::create([
            'adminName' => 'MyNgoc',
            'adminUser' => 'admin',
            'adminPass' => Hash::make('admin123@')
        ]);
    }
}
