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
        Schema::create('products', function (Blueprint $table) {
            $table->id('prodID');
            $table->string('modelID');
            $table->longText('prodDesc');
            $table->integer('prodQuantity');
            $table->string('prodPrice');
            $table->string('prodImage');
            $table->integer('prodWarranty');
            $table->string('prodStatus');
            $table->string('prodUnit');
            $table->integer('prodInventory');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('products');
    }
};
