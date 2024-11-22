import knex from 'knex';
import knexConfig from '../knexfile';
import { Model } from 'objection';

const db = knex(knexConfig);
Model.knex(db);

console.log('Knex đã được khởi tạo, chuẩn bị kết nối đến database...');

export { db };
