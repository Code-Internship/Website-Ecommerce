<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class tbl_order extends Model
{
    use HasFactory;
    protected $fillable = [
        'shipmentID',
        'paymentID',
        'cusID',
        'orderDate',
    ];
}
