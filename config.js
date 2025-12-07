// ==================================================================================
// ARQUIVO DE CONFIGURAÇÃO DO CARDÁPIO DIGITAL
// ==================================================================================
//
// Instruções:
// 1. Altere os valores de texto sempre DENTRO DAS ASPAS DUPLAS ("").
// 2. Para URLs de imagens, use o link direto da imagem (geralmente termina em .jpg, .png, .gif).
// 3. Nos horários, use o formato "HH:MM" (ex: "18:00").
// 4. Salve o arquivo após fazer as alterações.
//
// ==================================================================================
const CONFIG = {
    // --- 1. INFORMAÇÕES GERAIS DA LOJA ---
    nomeLoja: "Cantinho do Sossai",
    subtitulo: "O Sabor que Conquista!",
    urlImagemCapa: "https://i.postimg.cc/Vkgrh8LR/Cantinho-do-sosai.png",
    urlLogoCircular: "https://i.postimg.cc/Vv70J6MF/file-00000000f0d8720e9ce344c6388306f2.png",

    // --- 2. CONTATO E ENTREGA ---
    telefoneWhatsapp: "5519986098916",
    taxaEntrega: 6.00,

    // --- 3. HORÁRIOS DE FUNCIONAMENTO ---
    horariosFuncionamento: [
        { dia: 0, abre: "17:00", fecha: "23:00" }, // Domingo
        { dia: 1, abre: "17:00", fecha: "23:00" }, // Domingo
        { dia: 3, abre: "17:00", fecha: "23:00" }, // Quarta-feira
        { dia: 4, abre: "17:00", fecha: "23:00" }, // Quinta-feira
        { dia: 5, abre: "17:00", fecha: "23:00" }, // Sexta-feira
        { dia: 6, abre: "17:00", fecha: "23:00" }  // Sábado
    ],

    // --- 4. CARDÁPIO / MENU ---
    // Para cada item, adicione o campo "imagem" com o link da sua foto.
    cardapio: [
        {
            categoria: "Espetos",
            itens: [
                { nome: "Carne", descricao: "", preco: 7.00, imagem: "" },
                { nome: "Capa de Filé", descricao: "", preco: 9.00, imagem: "" },
                { nome: "Tulípa", descricao: "", preco: 8.00, imagem: "" },
                { nome: "Tender", descricao: "", preco: 8.00, imagem: "" },
                { nome: "Copa Lombo", descricao: "", preco: 8.00, imagem: "" },
                { nome: "Costelinha", descricao: "", preco: 9.00, imagem: "" },
                { nome: "Panceta", descricao: "", preco: 6.00, imagem: "" },
                { nome: "Pernil", descricao: "", preco: 6.00, imagem: "" },
                { nome: "Frango", descricao: "", preco: 6.00, imagem: "" },
                { nome: "Coração de Frango", descricao: "", preco: 9.00, imagem: "" },
                { nome: "Cupim com Queijo", descricao: "", preco: 10.00, imagem: "" },
                { nome: "Kafta", descricao: "", preco: 7.00, imagem: "" },
                { nome: "Kafta com Queijo", descricao: "", preco: 8.00, imagem: "" },
                { nome: "Romeu e Julieta com Bacon", descricao: "", preco: 10.00, imagem: "" },
                { nome: "Medalhão de Frango", descricao: "", preco: 10.00, imagem: "" },
                { nome: "Medalhão de Queijo", descricao: "", preco: 10.00, imagem: "" },
                { nome: "Queijo Coalho", descricao: "", preco: 9.00, imagem: "" },
                { nome: "Pão de Alho", descricao: "", preco: 5.00, imagem: "" }
            ]
        },
        {
            categoria: "Lanches",
            itens: [
                { nome: "X Burguer Carne Artesabal", descricao: "Hamburguer Artesanal, Queijo Prato, Bacon, Tomate, Alface e Catupiry .", preco: 21.99, imagem: "" }
            ]
        },
        {
            categoria: "Cervejas",
            itens: [
                { nome: "Antártica Boa", descricao: "Lata", preco: 7.00, imagem: "" },
                { nome: "Amstel", descricao: "Lata", preco: 7.00, imagem: "" },
                { nome: "Antártica Original", descricao: "Lata", preco: 8.00, imagem: "" },
                { nome: "Heineken", descricao: "Lata", preco: 10.00, imagem: "" }
            ]
        },
        {
            categoria: "Sucos Naturais",
            itens: [
                { nome: "Laranja", descricao: "", preco: 6.00, imagem: "" },
                { nome: "Abacaxi", descricao: "", preco: 6.00, imagem: "" },
                { nome: "Acerola", descricao: "", preco: 6.00, imagem: "" }
            ]
        },
        {
            categoria: "Refrigerantes e Bebidas",
            itens: [
                { nome: "H2O Limão/Limoneto", descricao: "", preco: 6.00, imagem: "" },
                { nome: "Coca-Cola", descricao: "Lata", preco: 5.00, imagem: "" },
                { nome: "Coca-Cola Zero", descricao: "Lata", preco: 5.00, imagem: "" },
                { nome: "Sprite", descricao: "Lata", preco: 5.00, imagem: "" },
                { nome: "Fanta", descricao: "Lata", preco: 5.00, imagem: "" },
                { nome: "Itubaína", descricao: "355ml", preco: 5.00, imagem: "" },
                { nome: "Água Sem Gás", descricao: "", preco: 3.00, imagem: "" },
                { nome: "Água Com Gás", descricao: "", preco: 5.00, imagem: "" },
                { nome: "Coca-Cola 2L", descricao: "", preco: 10.00, imagem: "" },
                { nome: "Guaraná Antártica 2L", descricao: "", preco: 10.00, imagem: "" }
            ]
        }
    ],

    // --- 5. INFORMAÇÕES DE CONTATO E REDES SOCIAIS ---
    informacoesLoja: {
        endereco: "Rua Joaquim Saturnino Ferreira, 123 - Bairro Jardim Pedro Ometto, Cidade Santa Cruz das Palmeiras- SP",
        horario: "Atendimento: Terça a Domingo, das 18:00 às 23:00",
        instagram: "https://www.instagram.com/seu_usuario",
        facebook: "https://www.facebook.com/sua_pagina",
        whatsapp: `https://api.whatsapp.com/send?phone=${"5519986098916"}`,
        chavePix: "seu-email-ou-telefone@pix.com.br"
    }
};
