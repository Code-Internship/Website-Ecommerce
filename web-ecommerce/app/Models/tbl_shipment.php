<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class tbl_shipment extends Model
{
    use HasFactory;
    protected $fillable = [
        'cusID',
        'shipmentDate',
        'shipmentAddress',
        'shipmentCity',
        'shipmentState',
        'zipcode',
    ];
}
