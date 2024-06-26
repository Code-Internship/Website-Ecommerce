<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class tbl_gallery extends Model
{
    use HasFactory;
    protected $fillable = [
        'prodID',
        'galName',
        'galImage',
    ];

    public function products()
    {
        return $this->belongsTo(tbl_product::class);
    }

}
