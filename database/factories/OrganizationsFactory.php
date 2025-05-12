<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Organizations>
 */
class OrganizationsFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'user_id' => \App\Models\User::inRandomOrder()->first()?->id ?? \App\Models\User::factory()->create()->id, 
            'organization_name' => $this->faker->randomElement(array: ["women's", 'pwd', 'senior citizen']),
            'status' => $this->faker->randomElement(['accepted', 'rejected', 'pending']),
            'created_at' => now(),
            'updated_at' => now(),
        ];
    }
}
