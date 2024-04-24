<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call(TblAdminSeeder::class);
        $this->call(TblBrandSeeder::class);
        $this->call(TblCartSeeder::class);
        $this->call(TblCategorySeeder::class);
        $this->call(TblCustomerSeeder::class);
        $this->call(TblGallerySeeder::class);
        $this->call(TblOrderDetailSeeder::class);
        $this->call(TblOrderSeeder::class);
        $this->call(TblPaymentSeeder::class);
        $this->call(TblProductSeeder::class);
        $this->call(TblShipmentSeeder::class);
        $this->call(TblSubCategorySeeder::class);
        $this->call(TblWishlistSeeder::class);
    }
}
