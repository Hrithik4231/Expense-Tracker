import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Expense } from '../models/expense.model';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {
  private expensesSubject = new BehaviorSubject<Expense[]>([]);
  expenses$ = this.expensesSubject.asObservable();

  constructor() {
    // Load initial data from localStorage if any
  }

  // Placeholder for CRUD methods
  addExpense(expense: Expense) {
    // Logic to add expense
  }

  updateExpense(expense: Expense) {
    // Logic to update expense
  }

  deleteExpense(id: string) {
    // Logic to delete expense
  }

  private loadExpenses() {
    // Logic to load expenses from localStorage
  }

  private saveExpenses() {
    // Logic to save expenses to localStorage
  }
}
