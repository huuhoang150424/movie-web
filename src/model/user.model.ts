import { Model } from 'objection';

export class UserModel extends Model {
  static tableName = 'users';

  id!: number;
  name!: string;
  email!: string;
  password!: string;
  gender!: string;
  created_at?: Date;
  updated_at?: Date;

  static jsonSchema = {
    type: 'object',
    properties: {
      id: { type: 'integer' },
      name: { type: 'string' },
      email: { type: 'string' },
      password: { type: 'string' },
      gender: { type: 'string' },
      created_at: { type: 'string', format: 'date-time' },
      updated_at: { type: 'string', format: 'date-time' },
    },
    required: ['name', 'email', 'password', 'gender'],
  };

  $beforeInsert() {
    const currentTime = new Date();
    this.created_at = currentTime;
    this.updated_at = currentTime;
  }

  $beforeUpdate() {
    this.updated_at = new Date();
  }
}
