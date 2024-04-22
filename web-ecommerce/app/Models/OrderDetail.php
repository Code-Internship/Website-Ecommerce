<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class OrderDetail extends Model
{
    use HasFactory;

    protected $fillable = [
        'orderID',
        'prodID',
        'quantity', // số lượng sp được đặt
        'unitPrice', //  giá bán mỗi sản phẩm
        'subTotal', // quantity * unitPrice
    ];
}
