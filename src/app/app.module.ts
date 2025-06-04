import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // Required for Angular Material animations
import { ReactiveFormsModule } from '@angular/forms'; // For reactive forms

// Routing Module
import { AppRoutingModule } from './app-routing.module'; // Will be created next

// Components
import { AppComponent } from './app.component'; // Assuming this will be created or already exists
import { ExpenseFormComponent } from './components/expense-form/expense-form.component';
import { ExpenseListComponent } from './components/expense-list/expense-list.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

// Angular Material Modules (add as needed)
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core'; // Required for MatDatepicker
import { MatSelectModule } from '@angular/material/select';
// Add more modules like MatTableModule, MatIconModule, MatDialogModule etc. as you build features

// ng2-charts
import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    AppComponent, // Assuming AppComponent will be the root component
    ExpenseFormComponent,
    ExpenseListComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    AppRoutingModule, // Add AppRoutingModule
    ChartsModule,

    // Angular Material
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule
  ],
  providers: [
    // Services will typically be providedIn: 'root' in their own files
  ],
  bootstrap: [AppComponent] // Assuming AppComponent is the bootstrap component
})
export class AppModule { }
