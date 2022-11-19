import React, { useState } from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const DAMMY_EXPENSES = [
  {
    id: 'el1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 2, 13),
  },

  {
    id: 'el2',
    title: 'New TV',
    amount: 799.43,
    date: new Date(2021, 3, 5),
  },

  {
    id: 'el3',
    title: 'Car Insurance',
    amount: 294.76,
    date: new Date(2021, 4, 10),
  },

  {
    id: 'el4',
    title: 'New Desk (Wooden)',
    amount: 450.01,
    date: new Date(2023, 5, 20),
  },
];

const App = () => {
  const [expenses, setExpeses] = useState(DAMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpeses((prevExpenses) => [
      expense, ...prevExpenses,
    ]);
  };

  return (
    <div className="app">
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
      ;
    </div>
  );
};

export default App;
