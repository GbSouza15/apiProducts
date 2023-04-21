const products = [
  {
    id: 1,
    name: "Camisa Polo",
    price: 50.00,
    category: "Roupas",
    description: "Camisa de manga curta com colarinho e botões na frente. Ideal para um visual casual elegante.",
    image: "https://lojasedio.com.br/5335-large_default/camisa-masculina-casual-de-botao-listra-contraste-colorida-de-manga-curta-.jpg"
  },
  {
    id: 2,
    name: "Calça Jeans",
    price: 80.00,
    category: "Roupas",
    description: "Calça de tecido jeans, fechamento com botão e zíper. Combina com diversos looks.",
    image: "https://cdn.awsli.com.br/600x700/1002/1002184/produto/44756412/whatsapp-image-20230203-at-165048-064b9e6037.jpg"
  },
  {
    id: 3,
    name: "Tênis Nike Air Max",
    price: 300.00,
    category: "Calçados",
    description: "Tênis esportivo da marca Nike com amortecimento Air Max. Ideal para atividades físicas e práticas esportivas em geral.",
    image: "https://imgnike-a.akamaihd.net/1920x1920/022831ID.jpg"
  },
  {
    id: 4,
    name: "Relógio de Pulso",
    price: 120.00,
    category: "Acessórios",
    description: "Relógio de pulso analógico com pulseira de couro. Possui diversas funções como cronômetro e data.",
    image:"https://zionstorerj.com.br/wp-content/uploads/2021/03/Screenshot_1-5.png"
  },
  {
    id: 5,
    name: "Perfume Importado",
    price: 150.00,
    category: "Perfumes",
    description: "Perfume importado com fragrância marcante e duradoura. Ideal para ocasiões especiais.",
    image: "https://cdn.awsli.com.br/2279/2279691/produto/141858993/5f9b66a364.jpg"
  },
  {
    id: 6,
    name: "Jaqueta de Couro",
    price: 200.00,
    category: "Roupas",
    description: "Jaqueta de couro sintético com zíper e botões. Ideal para dias mais frios.",
    image: "https://static.netshoes.com.br/produtos/jaqueta-moletom-zune-masculina-ziper-moderna-dia-a-dia-macia/19/OOE-0135-219/OOE-0135-219_zoom1.jpg?ts=1623845652"
  },
  {
    id: 7,
    name: "Sapato Social",
    price: 120.00,
    category: "Calçados",
    description: "Sapato social masculino em couro com solado emborrachado. Ideal para ocasiões formais.",
    image: "https://cf.shopee.com.br/file/db565fe0cb661d1048275797aad33ba9"
  },
  {
    id: 8,
    name: "Bolsa Feminina",
    price: 80.00,
    category: "Acessórios",
    description: "Bolsa feminina com alça e fecho de zíper. Ideal para carregar itens pessoais no dia a dia.",
    image: "https://static.dafiti.com.br/p/DHAFFY-BOLSAS-Bolsa-Feminina-Ba%C3%BA-Grande,-Al%C3%A7a-de-M%C3%A3o/Transversal-Z%C3%ADper-Marrom-6917-9379907-1-zoom.jpg"
  },
  {
    id: 9,
    name: "Echarpe de Lã",
    price: 40.00,
    category: "Acessórios",
    description: "Echarpe de lã com estampa discreta e elegante. Ideal para dias mais frios.",
    image: "https://cdn.awsli.com.br/1000x1000/1710/1710994/produto/105310583/3f06a52f64.jpg"
  },
  {
    id: 10,
    name: "Óculos de Sol",
    price: 100.00,
    category: "Acessórios",
    description: "Óculos de sol com armação de acetato e lentes polarizadas. Ideal para proteger os olhos dos raios solares.",
    image: "https://images.tcdn.com.br/img/img_prod/810719/oculos_de_sol_oakley_quadrado_oo9018_ojector_3191_1_8d7b4a0542f8b5ebf1be0315fd8b4edb.jpg"
  }
  ];



const getAllProducts = () => {
    return products
}

module.exports = {
    getAllProducts
}