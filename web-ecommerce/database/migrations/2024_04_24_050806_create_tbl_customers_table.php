<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('tbl_customers', function (Blueprint $table) {
            $table->id('cusID');
            $table->string('cusName');
            $table->string('cusUser');
            $table->string('cusPass');
            $table->string('cusEmail');
            $table->string('cusPhone');
            $table->string('cusAddress');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('tbl_customers');
    }
};
