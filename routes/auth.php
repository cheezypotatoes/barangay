<?php

use App\Http\Controllers\RegisterController;
use App\Http\Controllers\LoginController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\DashboardController;
use App\Http\Middleware\HandleInertiaRequests;
use App\Http\Controllers\RegisterResidentController;
use App\Http\Controllers\EditProfileController;
use App\Http\Controllers\OrganizationManagerController;
use App\Http\Controllers\JoinOrganizationController;
use Inertia\Inertia;


Route::middleware('guest')->group(function () {
    Route::get('/', function () {
        return Inertia::render('Index');
    })->name('Index');

    Route::get('/login', function () {
        return Inertia::render('Login');
    })->name('login');

    Route::post('/login', [LoginController::class, 'login'])->name('login');

    Route::get('/register', function () {
        return Inertia::render('Register');
    })->name('register');
    
});

Route::middleware('auth')->group(function () {


    Route::get('/dashboard', [DashboardController::class, 'show']
    )->middleware(HandleInertiaRequests::class)->name('dashboard');
    
    Route::get('/registerAsResident', [RegisterResidentController::class, 'Show']
    )->name('registerAsResident');

    Route::post('/registerAsResident', [RegisterResidentController::class, 'RegisterResident']
    )->name('registerAsResident');

    Route::get('/editProfile', [EditProfileController::class, 'Show']
    )->name('editProfile');

    Route::post('/editProfile', [EditProfileController::class, 'Edit']
    )->name('editProfile');

    Route::get('/organizationManager', [OrganizationManagerController::class, 'Show']
    )->name('organizationManager');

    Route::post('/organizationManager', [OrganizationManagerController::class, 'applyChanges']
    )->name('organizationManager');

    Route::get('/JoinOrganization', [JoinOrganizationController::class, 'show']
    )->name('JoinOrganization');

    Route::post('/JoinOrganization', [JoinOrganizationController::class, 'join']
    )->name('JoinOrganization');

    Route::get('/logout', function () {
        Auth::logout();
        return redirect('/');
    });
    


});
