import { config } from "dotenv";
config();

export const APP_PORT = process.env.APP_PORT || '3000'

export const DB_USERNAME = process.env.DB_USERNAME || 'postgres';
export const DB_PASSWORD = process.env.DB_PASSWORD || '1234';
export const DB_HOST = process.env.DB_HOST || 'localhost';
export const DB_PORT = process.env.DB_PORT || '5432';
export const DB_NAME = process.env.DB_NAME || 'test';

export const JWT_SECRET = process.env.JWT_SECRET || "4EDDE5877A29AC000";
export const MERCADO_PAGO_TOKEN = process.env.MERCADO_PAGO_TOKEN || "TEST-102529111039618-111319-be2cad25aff0465082c188157129480d-184613295";