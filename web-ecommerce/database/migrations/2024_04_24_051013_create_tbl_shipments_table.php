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
        Schema::create('tbl_shipments', function (Blueprint $table) {
            $table->id('shipmentID');
            $table->integer('cusID');
            $table->string('shipmentDate');
            $table->string('shipmentAddress');
            $table->string('shipmentCity');
            $table->string('shipmentState');
            $table->string('zipcode');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('tbl_shipments');
    }
};
