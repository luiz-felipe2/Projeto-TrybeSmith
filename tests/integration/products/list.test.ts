import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import ProductModel from '../../../src/database/models/product.model';
import ProductMock from '../../mocks/ProductMock';
import app from '../../../src/app'; 

chai.use(chaiHttp);

describe('GET /products', function () { 
  beforeEach(function () { sinon.restore(); });

  it('should return 200 and the product list', async function () {
    sinon.stub(ProductModel, 'findAll').resolves([
      ProductModel.build(ProductMock.validProductList[0]),
      ProductModel.build(ProductMock.validProductList[1]),
    ]);

    const response = await chai.request(app).get('/products');
    expect(response.status).to.be.equal(200);
    expect(response.body).to.be.deep.equal(ProductMock.validProductList);
  });

});
