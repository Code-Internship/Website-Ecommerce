<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class tbl_brand extends Model
{
    use HasFactory;

    protected $fillable = [
        'subcatID',
        'brandName',
    ];

    public function subcategories()
    {
        return $this->belongsTo(tbl_subCategory::class);
    }

}
