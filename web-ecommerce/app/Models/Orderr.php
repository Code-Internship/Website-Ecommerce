<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Orderr extends Model
{
    use HasFactory;

    protected $fillable = [
        'empID',
        'cusID',
        'shippingAddress', // địa chỉ giao hàng
        'paymentMethod', // phương thức thanh toán
        'totalAmount', // tổng số tiền đơn hàng
        'orderStatus', // trạng thái đơn hàng (đã xác nhận, đang vận chuyển, đã hoàn thành, hủy bỏ,...)
    ];
}
