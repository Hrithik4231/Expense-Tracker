import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ExpenseService } from '../../services/expense.service';
import { Expense } from '../../models/expense.model';

@Component({
  selector: 'app-expense-form',
  templateUrl: './expense-form.component.html', // Assuming you'll create this
  styleUrls: ['./expense-form.component.scss']  // Assuming you'll create this
})
export class ExpenseFormComponent implements OnInit {
  expenseForm!: FormGroup; // Definite assignment assertion

  constructor(
    private fb: FormBuilder,
    private expenseService: ExpenseService
  ) {}

  ngOnInit(): void {
    this.expenseForm = this.fb.group({
      title: ['', Validators.required],
      amount: ['', [Validators.required, Validators.min(0.01)]],
      date: ['', Validators.required],
      category: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.expenseForm.valid) {
      // Logic to add or update expense
      // const newExpense: Expense = { id: new Date().toISOString(), ...this.expenseForm.value };
      // this.expenseService.addExpense(newExpense);
      // this.expenseForm.reset();
    }
  }
}
