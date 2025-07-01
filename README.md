
# 🛒 Shopee Cart – Carrinho de Compras em JavaScript

Este projeto é uma simulação de um carrinho de compras (estilo Shopee), criado com JavaScript moderno e modular (ES Modules). Ele permite adicionar, remover e listar itens, além de calcular o valor total do carrinho.

---

## 📁 Estrutura do Projeto

```
📦 shopee-cart/
├── index.js                # Arquivo principal da aplicação
├── services/
│   ├── cart.js             # Lógica do carrinho de compras
│   └── item.js             # Função para criar novos itens
```

---

## 🚀 Funcionalidades

- ✅ Adicionar itens ao carrinho e à lista de desejos  
- ✅ Remover uma unidade de um item do carrinho  
- ✅ Deletar um item completamente do carrinho  
- ✅ Exibir todos os itens no carrinho  
- ✅ Calcular o valor total com base nas quantidades atualizadas  

---

## 📦 Exemplo de Uso

```js
const item1 = await createItem("Hotwheels ferrari", 20.99, 1);
await cartService.addItem(myCart, item1);

await cartService.removeItem(myCart, item1);

await cartService.displaycart(myCart);

await cartService.calculateTotal(myCart);
```

---

## 🔧 Tecnologias Utilizadas

- JavaScript (ESModules)
- Programação assíncrona (`async/await`)
- Node.js (recomendado para execução)

---

## ▶️ Como Executar

1. Clone o repositório:
   ```bash
   git clone https://github.com/weullersilva/shopee-cart.git
   cd shopee-cart
   ```

2. Execute com Node.js:
   ```bash
   node index.js
   ```

> ⚠️ Certifique-se de estar usando uma versão do Node.js que suporte ES Modules (v14+ com `"type": "module"` no `package.json`, ou v16+).

---

## ✨ Melhorias Futuras

- Persistência de dados com banco de dados ou localStorage  
- Interface Web com HTML/CSS  
- Testes automatizados com Jest  
- Separação entre lista de desejos e carrinho com funções específicas  

---

## 👨‍💻 Autor

Desenvolvido por **Weuller Silva**  
📧 weuller.silva@email.com  
🔗 [GitHub](https://github.com/weullersilva)
