<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class tbl_wishlist extends Model
{
    use HasFactory;
    protected $fillable = [
        'cusID',
        'prodID',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function products()
    {
        return $this->belongsTo(tbl_product::class);
    }

}
