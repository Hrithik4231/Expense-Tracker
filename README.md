Project Name: Responsive Expense Tracker App (Angular)

Overview:
A web-based Angular application that allows users to track their daily expenses. Users can add, edit, delete, and categorize expenses. The app features a responsive UI, real-time data updates, chart visualizations, and localStorage support. Built following Propel Apps' Angular development practices.

Objectives:
- Track daily expenses by category and amount.
- Provide monthly and category-wise insights.
- Build a mobile-first responsive UI.
- Use reactive forms with validation.
- Implement effective component-service communication.

Tech Stack:
- Angular 17+
- Angular Material
- SCSS, Flex Layout
- Component State + Services
- localStorage (can be extended to Firebase/Supabase)
- ng2-charts (Chart.js)

Key Features:
- Add, edit, delete expenses with validation
- Filter and sort by date/category/amount
- Dashboard with total, monthly, and pie chart summary
- Charts update dynamically using Observables
- LocalStorage data persistence
- Fully responsive layout

Component Communication:
- Uses @Input(), @Output()
- Shared service for state management

Form Validation:
- Reactive Forms with required, min, and pattern validators
- Inline error display

Folder Structure:
```
/src/app
|-- components
|   |-- expense-form
|   |-- expense-list
|   |-- dashboard
|-- services
|   |-- expense.service.ts
|-- models
|   |-- expense.model.ts
|-- app-routing.module.ts
|-- app.module.ts
```

Timeline:
Week 1 - Setup project and UI
Week 2 - Add/Edit/Delete features
Week 3 - Integrate charts, polish UI
Week 4 - Testing, error handling, documentation

Future Enhancements:
- Firebase backend
- User auth
- Export to CSV/PDF
- Budget/savings goals

Acknowledgements:
This project was created as part of the Propel Apps onboarding process to align with Angular development practices.
