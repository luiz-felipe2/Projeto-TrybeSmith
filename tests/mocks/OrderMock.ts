import { Order } from '../../src/types/Order';

const orderListMock: Order[] = [
  {
    "id": 1,
    "userId": 1,
    "productIds": [{ "id": 1 }, { "id": 2 }]
  },
  {
    "id": 2,
    "userId": 3,
    "productIds": [{ "id": 3 }, { "id": 4 }]
  },
  {
    "id": 3,
    "userId": 2,
    "productIds": [{ "id": 5 }]
  }
]

const orderListResponseMock: Order[] = [
  {
    "id": 1,
    "userId": 1,
    "productIds": [1, 2]
  },
  {
    "id": 2,
    "userId": 3,
    "productIds": [3, 4]
  },
  {
    "id": 3,
    "userId": 2,
    "productIds": [5]
  }
]

export default {
  orderListMock,
  orderListResponseMock,
}
