<?php

namespace Database\Seeders;

use App\Models\tbl_gallery;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class TblGallerySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        tbl_gallery::create([
            'prodID' => 1,
            'galName' => 'SamsungTV QLED QA55',
            'galImage' => 'https://cdn.tgdd.vn/Products/Images/1942/303225/smart-tivi-qled-4k-55-inch-samsung-qa55q60c-1.jpg'
        ]);
        tbl_gallery::create([
            'prodID' => 1,
            'galName' => 'SamsungTV QLED QA55',
            'galImage' => 'https://cdn.tgdd.vn/Products/Images/1942/303225/smart-tivi-qled-4k-55-inch-samsung-qa55q60c-2.jpg'
        ]);
        tbl_gallery::create([
            'prodID' => 1,
            'galName' => 'SamsungTV QLED QA55',
            'galImage' => 'https://cdn.tgdd.vn/Products/Images/1942/303225/smart-tivi-qled-4k-55-inch-samsung-qa55q60c-3.jpg'
        ]);
    }
}
