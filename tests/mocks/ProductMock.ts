import { ProductInputtableTypes } from '../../src/database/models/product.model';
import { Product } from '../../src/types/Product';

  const validProduct: ProductInputtableTypes = {
    "name": "Martelo de Thor",
    "price": "30 peças de ouro",
    "orderId": 4
  };

  const validProductDB: Product = {
    "id": 1,
    "name": "Martelo de Thor",
    "price": "30 peças de ouro",
    "orderId": 4
  }

  const emptyProductName: ProductInputtableTypes = {
    "id": 1,
    "name": "",
    "price": "30 peças de ouro",
    "orderId": 4
  };

  const validProductList: Product[] = [
    {
      "id": 1,
      "name": "Eco de Luden",
      "price": "30 peças de ouro",
      "orderId": 1
    },
    {
      "id": 2,
      "name": "Cajado do Vazio",
      "price": "25 peças de ouro",
      "orderId": 1
    },
  ]

  const productSemNome = {
    "id": 1,
    "price": "30 peças de ouro",
    "orderId": 5
  }

  export default {
    validProduct,
    validProductDB,
    emptyProductName,
    validProductList,
    productSemNome,
    };