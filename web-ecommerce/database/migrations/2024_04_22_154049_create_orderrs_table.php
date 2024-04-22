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
        Schema::create('orderrs', function (Blueprint $table) {
            $table->id('orderID');
            $table->string('empID');
            $table->string('cusID');
            $table->string('shippingAddress');
            $table->string('paymentMethod');
            $table->string('totalAmount');
            $table->string('orderStatus');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('orderrs');
    }
};
