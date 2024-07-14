import { Injectable } from '@nestjs/common';
import {
  createPool,
  Pool,
  PoolConnection,
  ResultSetHeader,
  RowDataPacket,
  FieldPacket,
} from 'mysql2/promise';

@Injectable()
export class DBService {
  private pool: Pool;

  constructor() {
    this.pool = createPool({
      port: 3306,
      database: 'wish2',
      password: '12345678',
      host: 'localhost',
      user: 'root',
      connectionLimit: 10,
    });
  }

  async execute(sql: string, params: any[]): Promise<any> {
    const connection: PoolConnection = await this.pool.getConnection();
    try {
      const [result]: [ResultSetHeader, FieldPacket[]] = await connection.query(
        sql,
        params,
      );
      return result;
    } finally {
      connection.release();
    }
  }

  async executeQuery(sql: string, params: any[]): Promise<ResultSetHeader> {
    const connection: PoolConnection = await this.pool.getConnection();
    try {
      const [result]: [ResultSetHeader, FieldPacket[]] = await connection.query(
        sql,
        params,
      );
      return result;
    } finally {
      connection.release();
    }
  }

  async executeSelect(sql: string, params: any[]): Promise<RowDataPacket[]> {
    const connection: PoolConnection = await this.pool.getConnection();
    try {
      const [result]: [RowDataPacket[], FieldPacket[]] = await connection.query(
        sql,
        params,
      );
      return result;
    } finally {
      connection.release();
    }
  }
}
