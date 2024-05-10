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

    public function orderdeatils()
    {
        return $this->hasMany(tbl_orderDetail::class);
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function shipments()
    {
        return $this->belongsTo(tbl_shipment::class);
    }

    public function payments()
    {
        return $this->belongsTo(tbl_payment::class);
    }
}
