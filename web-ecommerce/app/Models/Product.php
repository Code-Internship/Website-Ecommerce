<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;

    protected $fillable = [
        'modelID',
        'prodDesc', //mô tả sản phẩm
        'prodQuantity', //số lượng sp hiện tại
        'prodPrice',
        'prodImage',
        'prodWarranty', // thời gian bảo hành
        'prodStatus', //trạng thái (còn hàng > 10, sắp hết < 10, hết hàng = 0)
        'prodUnit', //đơn vị tính (cái,...)
        'prodInventory', //số lượng sp tồn kho
    ];
}
