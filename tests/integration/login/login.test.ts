import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import bcrypt from '../../../src/utils/Bcrypt';
import app from '../../../src/app';
import UserModel from '../../../src/database/models/user.model';
import UserMock from '../../mocks/UserMock';


chai.use(chaiHttp);

describe('POST /login', function () { 
  beforeEach(function () { sinon.restore(); });

  it('should return 400 if username is not provided', async function () {
    const response = await chai.request(app).post('/login').send(UserMock.bodySemUserName);
    expect(response.status).to.be.equal(400);
    expect(response.body).to.deep.equal({ message: '"username" and "password" are required' });
  })

  it('should return 400 if password is not provided', async function () {
    const body = {
      username: 'userTeste',
    }
    const response = await chai.request(app).post('/login').send(UserMock.bodySemPassword);
    expect(response.status).to.be.equal(400);
    expect(response.body).to.deep.equal({ message: '"username" and "password" are required' });
  })

  it('should return 401 if user is not found', async function () {
    sinon.stub(UserModel, 'findOne').resolves(null);
    const response = await chai.request(app).post('/login').send(UserMock.bodyCompleto);
    expect(response.status).to.be.equal(401);
    expect(response.body).to.deep.equal({ message: 'Username or password invalid' });
  })

  it('should return 401 if password is invalid', async function () {
    sinon.stub(UserModel, 'findOne').resolves(UserModel.build({
      username: 'userTeste',
      vocation: 'Guerreiro',
      level: 1,
      password: bcrypt.hash('654'),
    }));

    const response = await chai.request(app).post('/login').send(UserMock.bodyCompleto);
    expect(response.status).to.be.equal(401);
    expect(response.body).to.deep.equal({ message: 'Username or password invalid' });
  })

  it('should return 200 if user is found and password is valid', async function () {
    sinon.stub(UserModel, 'findOne').resolves(UserModel.build({
      username: 'userTeste',
      vocation: 'Guerreiro',
      level: 1,
      password: bcrypt.hash('123'),
    }));

    const response = await chai.request(app).post('/login').send(UserMock.bodyCompleto);
    expect(response.status).to.be.equal(200);
    expect(response.body).to.have.property('token');
  })
});
