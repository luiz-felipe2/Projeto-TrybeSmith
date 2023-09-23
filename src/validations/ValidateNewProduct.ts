import { ProductInputtableTypes } from '../database/models/product.model';
import { ServiceResponseError } from '../types/ServiceResponse';
import ProductSchema from './Schemas';

const validateNewProduct = (product: ProductInputtableTypes): ServiceResponseError | undefined => {
  const { error } = ProductSchema.validate(product);
  if (error) {
    if (error.message.includes('is required')) {
      return { status: 'BAD_REQUEST', data: { message: error.message } };
    }
    return { status: 'UNPROCESSABLE', data: { message: error.message } };
  }
};

export default validateNewProduct;
