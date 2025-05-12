<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class ResidentsFactory extends Factory
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
           'last_name' => $this->faker->lastName(),
            'first_name' => $this->faker->firstName(),
            'middle_name' => $this->faker->optional()->lastName(),
            'name_extension' => $this->faker->optional()->suffix(),
            'gender' => $this->faker->randomElement(['Male', 'Female', 'Other']),
            'birth_date' => $this->faker->date(),
            'civil_status' => $this->faker->randomElement(['Single', 'Married', 'Divorced', 'Widowed']),
            'religion' => $this->faker->optional()->word(),
            'ethnicity' => $this->faker->optional()->word(),
            'blood_type' => $this->faker->optional()->randomElement(['A', 'B', 'AB', 'O']),
            'year_started_staying' => $this->faker->numberBetween(1950, date('Y')),
            'status_of_employment' => $this->faker->randomElement(['Employed', 'Unemployed', 'Retired', 'Self-Employed']),
            'pension' => $this->faker->randomFloat(2, 0, 5000), // Random pension up to 5000
            'created_at' => now(),
            'updated_at' => now(),
        ];
    }
}
