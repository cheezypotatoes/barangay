<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    #TODO: TEMP
    public function up(): void
    {
        Schema::create('residents', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('user_id'); 
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
            $table->string("last_name");
            $table->string("first_name");
            $table->string("middle_name")->nullable();
            $table->string("name_extension")->nullable();
            $table->enum("gender", ["Male", "Female", "Other"]);
            $table->date("birth_date");
            $table->string("civil_status");
            $table->string("religion")->nullable();
            $table->string("ethnicity")->nullable();
            $table->string("blood_type")->nullable();
            $table->integer("year_started_staying")->nullable();
            $table->string("status_of_employment")->nullable();
            $table->integer("monthly_gross_income")->nullable();
            $table->decimal("pension", 10, 2)->default(0);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('residents');
    }
};
