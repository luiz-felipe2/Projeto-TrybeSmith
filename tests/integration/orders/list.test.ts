import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import OrderModel from '../../../src/database/models/order.model';
import OrderMock from '../../mocks/OrderMock';
import app from '../../../src/app';
import ProductModel from '../../../src/database/models/product.model';

chai.use(chaiHttp);

describe('GET /orders', function () { 
  beforeEach(function () { sinon.restore(); });

  it('should return 200 and the order list', async function () {
    sinon.stub(OrderModel, 'findAll').resolves(
      OrderMock.orderListMock
        .map((order) => OrderModel.build(order, {
          include: { model: ProductModel, as: 'productIds', attributes: ['id'] },
        })));
    
    const response = (await OrderModel.findAll()).map((order) => order.dataValues);
    const httpResponse = await chai.request(app).get('/orders');

    expect(httpResponse.status).to.be.equal(200);
    expect(httpResponse.body).to.be.deep.equal(OrderMock.orderListResponseMock);
      });
});
