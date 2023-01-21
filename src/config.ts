import { config } from "dotenv";
config();

export const PORT = process.env.PORT || '3000'

export const URL_NOTIFICACION = process.env.URL_NOTIFICACION || '/error';
export const DB_USERNAME = process.env.DB_USERNAME || 'postgres';
export const DB_PASSWORD = process.env.DB_PASSWORD || '1234';
export const DB_HOST = process.env.DB_HOST || 'localhost';
export const DB_PORT = process.env.DB_PORT || '5432';
export const DB_NAME = process.env.DB_NAME || 'test';

export const JWT_SECRET = process.env.JWT_SECRET || "NO FUNCIONO";
export const MERCADO_PAGO_TOKEN = process.env.MERCADO_PAGO_TOKEN || "TEST-123";

export const PASS_MAIL = process.env.PASS_MAIL || "1234";

export const MAIL = "MercadoLibroCompras@gmail.com";