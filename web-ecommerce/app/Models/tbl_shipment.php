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

    public function orders()
    {
        return $this->hasMany(tbl_order::class);
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }

}
