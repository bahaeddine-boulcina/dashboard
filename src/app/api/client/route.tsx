import { NextRequest, NextResponse } from 'next/server';
import mysql from 'mysql2/promise';

// Create a helper to connect to MySQL. For demonstration, connection is inside the handler.
// For production, consider moving connection pooling outside the handler.
async function getConnection() {
  return mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '112233',
    database: 'dashboard',
  });
}

export async function GET(request: NextRequest) {
  const connection = await getConnection();
  // Fetch all clients
  const [rows] = await connection.query('SELECT * FROM client');
  await connection.end();
  return NextResponse.json(rows);
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { societe, liste_noire, observation } = body; // adjust fields as per your table
  const connection = await getConnection();

  // Insert a new client
  const [result] = await connection.query(
    'INSERT INTO client (societe, liste_noire, observation) VALUES (?, ?, ?)',
    [societe, liste_noire, observation]
  ) as [mysql.ResultSetHeader, any];
  await connection.end();
  return NextResponse.json({ insertId: (result as mysql.ResultSetHeader).insertId });
}

export async function PUT(request: NextRequest) {
  const body = await request.json();
  const { id, name, email, phone } = body; // id of client to edit
  const connection = await getConnection();

  // Update client
  await connection.query(
    'UPDATE client SET name = ?, email = ?, phone = ? WHERE id = ?',
    [name, email, phone, id]
  );
  await connection.end();
  return NextResponse.json({ message: 'Client updated' });
}

export async function DELETE(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');
  const connection = await getConnection();

  // Delete client by id
  await connection.query('DELETE FROM client WHERE id = ?', [id]);
  await connection.end();
  return NextResponse.json({ message: 'Client deleted' });
}