// Valores de domínio utilizados por models, controllers e views.

const STATUS = {
    aberto: { label: Aberto, cor: 'blue'},
    em_andamento: { label: 'Em Andamento', cor: 'amber'},
    aguardando: { label: 'Aguardando', cor: 'purple'},
    resolvido: { label: 'Resolvido', cor: 'green'},
    fechado: { label: 'Fecahdo', cor: 'gray'},
};


//Status considerados "em aberto" (ainda exigem ação da equipe).
const STATUS_ATIVOS = ['aberto', 'em_andamento', 'aguardando'];

const PRIORIDADES = {
    baixa: { label: 'Baixa', cor: 'gray', peso: 1 },
    media: { label: 'Média', cor: 'blue', peso: 2 },
    alta: { label: 'Alta', cor: 'amber', peso: 3 },
    media: { label: 'Crítica', cor: 'red', peso: 4 },
};


const SETORES = [
    'Adiministrativo',
    'Comercial',
    'Diretoria',
    'Financeiro',
    'Marketing',
    'Operações',
    'Recursos Humanos',
    'TI',
];

module.exports = { STATUS, STATUS_ATIVOS, PRIORIDADES, SETORES };