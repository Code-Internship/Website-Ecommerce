<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class tbl_admin extends Authenticatable
{
    use HasFactory, HasApiTokens, Notifiable;

    protected $fillable = [
        'adminName',
        'adminUser',
        'adminPass',
    ];

    protected $hidden = [
        'adminPass',
    ];
}
