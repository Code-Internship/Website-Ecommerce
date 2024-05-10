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
}
