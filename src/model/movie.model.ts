import { Model } from 'objection';

export class MovieModel extends Model {
  static tableName = 'movies';

  id!: number;
  name_movie?: string;
  created_at?: Date;
  updated_at?: Date;

  static get jsonSchema() {
    return {
      type: 'object',
      properties: {
        id: { type: 'integer' },
        name_movie: { type: 'string' },
        created_at: { type: 'string', format: 'date-time' },
        updated_at: { type: 'string', format: 'date-time' },
      },
    };
  }
  $beforeInsert() {
    const currentTime = new Date();
    this.created_at = currentTime;
    this.updated_at = currentTime;
  }

  $beforeUpdate() {
    this.updated_at = new Date();
  }
}
