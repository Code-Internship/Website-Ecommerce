<?php

namespace Database\Seeders;

use App\Models\tbl_customer;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class TblCustomerSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        tbl_customer::create([
            'cusName' => 'Khach Hang A',
            'cusUser' => 'cus1',
            'cusPass' => 'cus1123',
            'cusEmail' => 'cus1@gmail.com',
            'cusPhone' => '0998811655',
            'cusAddress' => '155A Tran Phu HCM'
        ]);
        tbl_customer::create([
            'cusName' => 'Khach Hang B',
            'cusUser' => 'cus2',
            'cusPass' => 'cus2123',
            'cusEmail' => 'cus2@gmail.com',
            'cusPhone' => '0338811633',
            'cusAddress' => '14 Dien Bien Phu HCM'
        ]);
        tbl_customer::create([
            'cusName' => 'Khach Hang C',
            'cusUser' => 'cus3',
            'cusPass' => 'cus3123',
            'cusEmail' => 'cus3@gmail.com',
            'cusPhone' => '0992211611',
            'cusAddress' => '134C Le Hong Phong HCM'
        ]);
        tbl_customer::create([
            'cusName' => 'Khach Hang D',
            'cusUser' => 'cus4',
            'cusPass' => 'cus4123',
            'cusEmail' => 'cus4@gmail.com',
            'cusPhone' => '0998877622',
            'cusAddress' => '12B Vo Thi Sau HCM'
        ]);
        tbl_customer::create([
            'cusName' => 'Khach Hang E',
            'cusUser' => 'cus5',
            'cusPass' => 'cus5123',
            'cusEmail' => 'cus5@gmail.com',
            'cusPhone' => '0992311688',
            'cusAddress' => '10 Nguyen Trai HCM'
        ]);
    }
}
