<?php

namespace Database\Seeders;

use App\Models\tbl_category;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class TblCategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        tbl_category::create([
            'catName' => 'Dien Gia Dung'
        ]);
        tbl_category::create([
            'catName' => 'Dien Tu'
        ]);
        tbl_category::create([
            'catName' => 'Dien Lanh'
        ]);
    }
}
