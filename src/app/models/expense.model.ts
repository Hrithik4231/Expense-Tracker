export interface Expense {
  id: string; // Or number, depending on how you'll generate IDs
  title: string;
  amount: number;
  date: Date;
  category: string;
}
