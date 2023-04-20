const products = [
  {
    id: 1,
    name: "Camisa Polo",
    price: 50.00,
    category: "Roupas",
    description: "Camisa de manga curta com colarinho e botões na frente. Ideal para um visual casual elegante.",
  },
  {
    id: 2,
    name: "Calça Jeans",
    price: 80.00,
    category: "Roupas",
    description: "Calça de tecido jeans com cinco bolsos e fechamento com botão e zíper. Combina com diversos looks.",
  },
  {
    id: 3,
    name: "Tênis Nike Air Max",
    price: 300.00,
    category: "Calçados",
    description: "Tênis esportivo da marca Nike com amortecimento Air Max. Ideal para atividades físicas e práticas esportivas em geral.",
  },
  {
    id: 4,
    name: "Relógio de Pulso",
    price: 120.00,
    category: "Acessórios",
    description: "Relógio de pulso analógico com pulseira de couro. Possui diversas funções como cronômetro e data.",
  },
  {
    id: 5,
    name: "Perfume Importado",
    price: 150.00,
    category: "Perfumes",
    description: "Perfume importado com fragrância marcante e duradoura. Ideal para ocasiões especiais.",
  },
  {
    id: 6,
    name: "Jaqueta de Couro",
    price: 200.00,
    category: "Roupas",
    description: "Jaqueta de couro sintético com zíper e botões. Ideal para dias mais frios.",
  },
  {
    id: 7,
    name: "Sapato Social",
    price: 120.00,
    category: "Calçados",
    description: "Sapato social masculino em couro com solado emborrachado. Ideal para ocasiões formais.",
  },
  {
    id: 8,
    name: "Bolsa Feminina",
    price: 80.00,
    category: "Acessórios",
    description: "Bolsa feminina com alça e fecho de zíper. Ideal para carregar itens pessoais no dia a dia.",
  },
  {
    id: 9,
    name: "Echarpe de Lã",
    price: 40.00,
    category: "Acessórios",
    description: "Echarpe de lã com estampa discreta e elegante. Ideal para dias mais frios.",
  },
  {
    id: 10,
    name: "Óculos de Sol",
    price: 100.00,
    category: "Acessórios",
    description: "Óculos de sol com armação de acetato e lentes polarizadas. Ideal para proteger os olhos dos raios solares.",
  }
  ];



const getAllProducts = () => {
    return products
}

module.exports = {
    getAllProducts
}