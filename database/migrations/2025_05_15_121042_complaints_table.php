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
        //
        Schema::create('complaints', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('category_id');
            $table->unsignedBigInteger('resident_id');
            $table->string('message');
            $table->date('schedule_date')->nullable();
            $table->string('status')->default('pending');
            $table->timestamps();

            $table->foreign('category_id')
                ->references('id')
                ->on('complaint_categories');

            $table->foreign('resident_id')
                ->references('id')
                ->on('residents')
                ->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        //
    }
};
