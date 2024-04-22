<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Adminn extends Model
{
    use HasFactory;

    protected $fillable = [
        'adminName',
        'adminUser',
        'adminPass'
    ];
}
