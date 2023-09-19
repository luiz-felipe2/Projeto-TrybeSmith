import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import ProductModel from '../../../src/database/models/product.model';
import ProductMock from '../../mocks/ProductMock';
import app from '../../../src/app'; 

chai.use(chaiHttp);

describe('POST /products', function () { 
  beforeEach(function () { sinon.restore(); });

  it('should return 201 and the created product', async function () {
    sinon.stub(ProductModel, 'create').resolves(ProductModel.build(ProductMock.validTransactionDB));

    const response = await chai.request(app).post('/products').send(ProductMock.validTransactionBody);
    expect(response.status).to.be.equal(201);
    expect(response.body).to.be.deep.equal(ProductMock.validTransactionDB);
  });

  it('should return 400 when the name has invalid data', async function () {
    const response = await chai.request(app).post('/products').send(ProductMock.emptyNameTransaction);
    expect(response.status).to.be.equal(400);
    expect(response.body).to.be.deep.equal({ message: 'Product data is invalid' });
  });
});
