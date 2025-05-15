<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use App\Models\Residents;
use Illuminate\Http\Request;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        //
        Schema::create('cedula_payments', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('resident_id');
            $table->decimal('payment', 10, 2);
            $table->string('gcash_referral_code')->nullable();
            $table->enum('status', ['pending', 'completed', 'failed'])->default('pending');
            $table->timestamps();

            $table->foreign('resident_id')->references('id')->on('residents')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
      
    }
};
