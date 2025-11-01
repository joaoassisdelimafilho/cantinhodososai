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
    nomeLoja: "Cantinho do Sosai",
    subtitulo: "O Sabor que Conquista!",
    urlImagemCapa: "https://i.postimg.cc/Vkgrh8LR/Cantinho-do-sosai.png",
    urlLogoCircular: "https://i.postimg.cc/brg2kcMj/file-00000000735c71f59ab1d21fbaca4d05-1.png",

    // --- 2. CONTATO E ENTREGA ---
    telefoneWhatsapp: "5519986098916",
    taxaEntrega: 5.00,

    // --- 3. HORÁRIOS DE FUNCIONAMENTO ---
    horariosFuncionamento: [
        { dia: 0, abre: "01:00", fecha: "23:00" }, // Domingo
        { dia: 2, abre: "01:00", fecha: "23:00" }, // Terça-feira
        { dia: 3, abre: "01:00", fecha: "23:00" }, // Quarta-feira
        { dia: 4, abre: "01:00", fecha: "23:00" }, // Quinta-feira
        { dia: 5, abre: "01:00", fecha: "23:00" }, // Sexta-feira
        { dia: 6, abre: "01:00", fecha: "23:00" } // Sábado
    ],

    // --- 4. CARDÁPIO / MENU ---
    // Para cada item, adicione o campo "imagem" com o link da sua foto.
    cardapio: [
        {
            categoria: "Choripan",
            itens: [
                { nome: "01 - Linguiça Bovina", descricao: "Linguiça Bovina, Catupiry, Mussarela, Alface e Vinagrete.", preco: 24.90, imagem: "" },
                { nome: "02 - Linguiça Toscana", descricao: "Linguiça Toscana, Catupiry, Mussarela, Alface e Vinagrete.", preco: 22.90, imagem: "" },
                { nome: "03 - Linguiça Suína", descricao: "Linguiça Suína, Catupiry, Mussarela, alface e Vinagrete.", preco: 22.90, imagem: "" }
            ]
        },
        {
            categoria: "Hambúrguer",
            itens: [
                { nome: "04 - Burguer Carne", descricao: "Hambúrguer de carne Artesanal, cebola roxa, queijo prato, Bacon e alface.", preco: 24.99, imagem: "" },
                { nome: "05 - Burguer Panceta", descricao: "Hambúrguer de Panceta Artesanal, cebola roxa,queijo prato, bacon e alface.", preco: 22.90, imagem: "" }
            ]
        },
        {
            categoria: "Bauru",
            itens: [
                { nome: "06 - Bauru Contra Filé", descricao: "Contra Filé, queijo prato, batata palha, alface e cebola roxa.", preco: 32.90, imagem: "" },
                { nome: "07 - Bauru de Picanha", descricao: "Picanha, queijo prato, batata palha, alface e cebola roxa.", preco: 39.99, imagem: "" },
                { nome: "08 - Bauru de Frango", descricao: "Filé de Frango,queijo prato, batata palha, alface e cebola roxa.", preco: 28.99, imagem: "" },
                { nome: "09 - Bauru de Suíno", descricao: "Lombo Suíno, queijo prato, batata palha, alface e cebola roxa.", preco: 28.99, imagem: "" }
            ]
        },
        {
            categoria: "Espeto",
            itens: [
                { nome: "10 - Espeto de Carne", descricao: "Carne.", preco: 7.00, imagem: "" },
                { nome: "11 - Espeto de Costela", descricao: "Costela.", preco: 7.00, imagem: "" },
                { nome: "12 - Espeto de Panceta", descricao: "Panceta.", preco: 6.00, imagem: "" },
                { nome: "13 - Espeto de Frango", descricao: "Frango.", preco: 6.00, imagem: "" },
                { nome: "14 - Espeto de Coração de Frango", descricao: "Coração de Frango.", preco: 9.00, imagem: "" },
                { nome: "15 - Espeto de Pernil", descricao: "Pernil.", preco: 6.00, imagem: "" },
                { nome: "16 - Espeto de Capa do Contra", descricao: "Capa do Contra.", preco: 9.00, imagem: "" },
                { nome: "17 - Espeto de Linguiça", descricao: "Linguiça.", preco: 7.00, imagem: "" },
                { nome: "18 - Espeto de Kafta", descricao: "Kafta.", preco: 7.00, imagem: "" },
                { nome: "19 - Espeto de Kafta com queijo coalho ", descricao: "Kafta com queijo coalho.", preco: 8.00, imagem: "" },
                { nome: "20 - Romeu e Julieta", descricao: "Romeu e Julieta.", preco: 9.00, imagem: "" },
                { nome: "21 - Medalão Frango", descricao: "Medalão de Frango.", preco: 9.00, imagem: "" },
                { nome: "22 - Medalão de Mandioca", descricao: "Medalão de Mandioca.", preco: 9.00, imagem: "" },
                { nome: "23 - Pão de Alho", descricao: "Pão de alho.", preco: 5.00, imagem: "" }
            ]
}],

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

