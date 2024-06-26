<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class tbl_category extends Model
{
    use HasFactory;
    protected $fillable = [
        'catName',
    ];

    public function subcategories()
    {
        return $this->hasMany(tbl_subCategory::class);
    }

}
