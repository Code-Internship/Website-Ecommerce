<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class tbl_payment extends Model
{
    use HasFactory;
    protected $fillable = [
        'orderID',
        'prodID',
        'quantity',
        'unitPrice',
        'subTotal',
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
