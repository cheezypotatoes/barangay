<?php

namespace Database\Seeders;

use App\Models\Women;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class WomenSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        Women::factory()->count(50)->create();
    }
}
