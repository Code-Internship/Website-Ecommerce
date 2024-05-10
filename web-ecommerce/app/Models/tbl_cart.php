<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class tbl_cart extends Model
{
    use HasFactory;
    protected $fillable = [
        'cusID',
        'prodID',
        'quantity',
        'price',
    ];
}
