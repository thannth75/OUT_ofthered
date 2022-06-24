import { Category } from '../types/Category';

export const categories: Category = {
    food: { title: 'Alimentação', color: 'blue', expense: true },
    rent: { title: 'Aluguel', color: 'brown', expense: true },
    salary: { title: 'Salário', color: 'green', expense: false },
    despesa: { title: 'Geral', color: 'red', expense: true},
    cart: {title: 'Cart credito', color: 'purple', expense: true},
    boleto: {title: 'boleto', color: 'yellow', expense: true},
}