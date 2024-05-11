<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class tbl_orderDetail extends Model
{
    use HasFactory;
    protected $fillable = [
        'cusID',
        'paymentDate',
        'paymentMethod',
        'totalAmount',
    ];

    public function products()
    {
        return $this->belongsTo(tbl_product::class);
    }

    public function orders()
    {
        return $this->belongsTo(tbl_order::class);
    }

}
