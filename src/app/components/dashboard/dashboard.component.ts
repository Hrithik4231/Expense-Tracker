import { Component, OnInit } from '@angular/core';
import { ExpenseService } from '../../services/expense.service';
// Import Chart.js types if needed, e.g., import { ChartOptions, ChartType } from 'chart.js';
// import { BaseChartDirective } from 'ng2-charts';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html', // Assuming you'll create this
  styleUrls: ['./dashboard.component.scss']  // Assuming you'll create this
})
export class DashboardComponent implements OnInit {
  // Placeholder for chart data and options
  // public pieChartOptions: ChartOptions = { responsive: true };
  // public pieChartLabels: string[] = [];
  // public pieChartData: number[] = [];
  // public pieChartType: ChartType = 'pie'; // or any other type

  // public barChartOptions: ChartOptions = { responsive: true };
  // public barChartLabels: string[] = [];
  // public barChartData: any[] = [{ data: [], label: 'Monthly Expenses' }];
  // public barChartType: ChartType = 'bar'; // or any other type

  constructor(private expenseService: ExpenseService) {}

  ngOnInit(): void {
    // Subscribe to expense changes to update charts
    // this.expenseService.expenses$.subscribe(expenses => {
    //   this.updatePieChart(expenses);
    //   this.updateBarChart(expenses);
    // });
  }

  // updatePieChart(expenses: Expense[]): void {
  //   // Logic to aggregate data for pie chart
  // }

  // updateBarChart(expenses: Expense[]): void {
  //   // Logic to aggregate data for bar chart
  // }
}
