<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\ComplaintCategory;

class ComplaintCategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        $categories = [
            'Public disturbance',
            'Loud noise / karaoke complaints',
            'Drunken behavior in public',
            'Gang-related issues',
            'Loitering / curfew violations',
            'Vandalism or graffiti',
            'Threats or physical harm (minor)',
            'Marital disputes',
            'Child custody disagreements',
            'Child neglect',
            'Domestic violence (initial report)',
            'Support/maintenance issues (family-related)',
            'Boundary conflicts',
            'Illegal structures',
            'Trespassing',
            'Damage to property',
            'Encroachment of pathways or communal land',
            'Illegal fencing or wall construction',
            'Pet-related complaints (e.g. dogs barking)',
            'Garbage disposal issues',
            'Obstruction of sidewalks or streets',
            'Water usage disputes',
            'Offensive behavior of neighbors',
            'Spreading rumors or false accusations',
            'Noise or smell from a business',
            'Illegal vending',
            'Non-payment of debts (loan or utang)',
            'Overpricing or unfair trade practices',
            'Operating without permits',
            'Bullying',
            'Truancy (skipping school)',
            'Gang recruitment',
            'Early pregnancy issues',
            'Parental neglect',
            'Clogged canals or drainage',
            'Illegal burning of waste',
            'Poor sanitation or foul smell',
            'Stagnant water (mosquito breeding)',
            'Illegal dumping of garbage',
            'Curfew violations',
            'Improper attire in public places',
            'Unauthorized gatherings or parties',
            'Failure to attend barangay assemblies',
            'Breach of barangay permits',
        ];

        foreach ($categories as $name) {
            ComplaintCategory::create(['complaint_category_name' => $name]);
        }
    }
}
