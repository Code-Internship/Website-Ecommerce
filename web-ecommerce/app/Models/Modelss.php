<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Modelss extends Model
{
    use HasFactory;

    protected $fillable = [
        'catID',
        'modelName'
    ];
}
