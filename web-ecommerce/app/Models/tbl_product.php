<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class tbl_product extends Model
{
    use HasFactory;
    protected $fillable = [
        'subcatID',
        'prodName',
        'prodDesc',
        'prodPrice',
        'prodImage',
        'prodInventory',
        'prodStatus',
    ];

    public function carts()
    {
        return $this->hasMany(tbl_cart::class);
    }

    public function whshlists()
    {
        return $this->hasMany(tbl_wishlist::class);
    }

    public function galleries()
    {
        return $this->hasMany(tbl_gallery::class);
    }

    public function orderdeatils()
    {
        return $this->hasMany(tbl_orderDetail::class);
    }

    public function subcategories()
    {
        return $this->belongsTo(tbl_subCategory::class);
    }

}
