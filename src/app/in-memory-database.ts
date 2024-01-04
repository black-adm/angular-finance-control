import { InMemoryDbService, RequestInfo } from "angular-in-memory-web-api"
import { Category } from "./pages/shared/category.model"

export class InMemoryDatabaseService implements InMemoryDbService {
    createDb() {
        const categories: Category[] = [
            {
                id: 1, 
                name: 'Moradia',
                description: 'Pagamentos do imóvel, aluguel e despesas.'
            },
            {
                id: 4, 
                name: 'Sáude',
                description: 'Convênio, remédios e equipamentos.'
            },
            {
                id: 3, 
                name: 'Lazer',
                description: 'Cinema, parques, praia e etc ...'
            },
            {
                id: 4, 
                name: 'Salário',
                description: 'Recebimentos e extratos.'
            },
            {
                id: 5, 
                name: 'Renda extra',
                description: 'Trabalhos como freelancer.'
            },
            {
                id: 6, 
                name: 'Alimentação',
                description: 'Restaurantes, mercados e custos de alimentos.'
            },
            {
                id: 7, 
                name: 'Animais',
                description: 'Petshop, ração e vacinas.'
            },
        ]

    return { categories }
    } 
}