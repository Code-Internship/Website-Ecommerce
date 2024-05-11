<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class tbl_subCategory extends Model
{
    use HasFactory;
    protected $fillable = [
        'catID',
        'subcatName',
    ];

    public function brands()
    {
        return $this->hasMany(tbl_brand::class);
    }

    public function products()
    {
        return $this->hasMany(tbl_product::class);
    }

    public function categories()
    {
        return $this->belongsTo(tbl_category::class);
    }

}
