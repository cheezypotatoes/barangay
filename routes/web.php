<?php


use Illuminate\Support\Facades\Route;
use App\Http\Controllers\RegisterController;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\DashboardController;
use App\Http\Middleware\HandleInertiaRequests;
use App\Http\Controllers\RegisterResidentController;
use App\Http\Controllers\EditProfileController;
use App\Http\Controllers\OrganizationManagerController;
use App\Http\Controllers\JoinOrganizationController;
use App\Http\Controllers\FileCaseController;
use App\Http\Controllers\FileCaseRequestController;
use App\Http\Controllers\CheckComplaintsController;
use App\Http\Controllers\ViewComplaintController;
use App\Http\Controllers\ShowResidentsController;
use App\Http\Controllers\CedulaPaymentController;
use App\Http\Controllers\PayCedulaFormController;
use App\Http\Controllers\ConfirmCedulaPaymentController;

use Inertia\Inertia;




Route::get('/', function () {
    return Inertia::render('Index');
})->name('Index');


Route::post('/login', [LoginController::class, 'login']
)->name('login');


Route::get('/register', function () {
    return Inertia::render('Register');
})->name('register');


Route::post('/register', [RegisterController::class, 'register']
)->name('register');



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


Route::get('/FileCase', [FileCaseController::class, 'show']
)->name('FileCase');


Route::get('/FileCaseRequest', [FileCaseRequestController::class, 'show']
)->name('FileCaseRequest');

Route::post('/FileCaseRequest', [FileCaseRequestController::class, 'submit']
)->name('FileCaseRequest');

Route::get('/checkComplaints', [CheckComplaintsController::class, 'show']
)->name('checkComplaints');

Route::get('/checkComplaints', [CheckComplaintsController::class, 'show']
)->name('checkComplaints');


Route::get('/viewComplaint', [ViewComplaintController::class, 'show']
)->name('ViewComplaint');


Route::get('/viewResidents', [ShowResidentsController::class, 'show']
)->name('viewResidents');

Route::get('/CedulaPayment', [CedulaPaymentController::class, 'show']
)->name('CedulaPayment');

Route::get('/CedulaPaymentForm', [PayCedulaFormController::class, 'show']
)->name('CedulaPaymentForm');

Route::post('/CedulaPaymentForm', [PayCedulaFormController::class, 'pay']
)->name('CedulaPaymentForm');

 Route::get('/ConfirmCedulaPayment', [ConfirmCedulaPaymentController::class, 'show']
    )->name('ConfirmCedulaPayment');





Route::get('/logout', function () {
    Auth::logout();
    return redirect('/');
});



require __DIR__.'/auth.php';
