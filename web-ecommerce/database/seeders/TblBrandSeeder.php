<?php

namespace Database\Seeders;

use App\Models\tbl_brand;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class TblBrandSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        tbl_brand::create([
            'subcatID' => 3,
            'brandName' => 'SamSung'
        ]);
        tbl_brand::create([
            'subcatID' => 2,
            'brandName' => 'Panasonic'
        ]);
        tbl_brand::create([
            'subcatID' => 3,
            'brandName' => 'LG'
        ]);
        tbl_brand::create([
            'subcatID' => 5,
            'brandName' => 'Sanaky'
        ]);
        tbl_brand::create([
            'subcatID' => 1,
            'brandName' => 'Sunhouse'
        ]);
    }
}
