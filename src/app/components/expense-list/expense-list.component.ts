import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Expense } from '../../models/expense.model';
import { ExpenseService } from '../../services/expense.service';

@Component({
  selector: 'app-expense-list',
  templateUrl: './expense-list.component.html', // Assuming you'll create this
  styleUrls: ['./expense-list.component.scss']  // Assuming you'll create this
})
export class ExpenseListComponent implements OnInit {
  expenses$!: Observable<Expense[]>; // Definite assignment assertion

  constructor(private expenseService: ExpenseService) {}

  ngOnInit(): void {
    this.expenses$ = this.expenseService.expenses$;
  }

  editExpense(expense: Expense): void {
    // Logic to handle editing, possibly open a modal or navigate
  }

  deleteExpense(id: string): void {
    // this.expenseService.deleteExpense(id);
  }
}
