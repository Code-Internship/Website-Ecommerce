<?php

namespace Database\Seeders;

use App\Models\tbl_product;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class TblProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        tbl_product::create([
            'subcatID' => 2,
            'prodName' => 'SamsungTV QLED QA55',
            'prodDesc' => 'Thiết kế mỏng nhẹ và thanh lịch',
            'prodPrice' => '14890000',
            'prodImage' => 'https://cdn.tgdd.vn/Products/Images/1942/303225/smart-tivi-qled-4k-55-inch-samsung-qa55q60c-1.jpg',
            'prodInventory' => 12,
            'prodStatus' => 'Còn Hàng'
        ]);
    }
}
