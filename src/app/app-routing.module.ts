import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Import components
import { ExpenseListComponent } from './components/expense-list/expense-list.component';
import { ExpenseFormComponent } from './components/expense-form/expense-form.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'expenses', component: ExpenseListComponent },
  { path: 'expenses/new', component: ExpenseFormComponent }, // For adding a new expense
  { path: 'expenses/edit/:id', component: ExpenseFormComponent }, // For editing an existing expense
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }, // Default route
  // Consider adding a wildcard route for 404 pages later:
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
