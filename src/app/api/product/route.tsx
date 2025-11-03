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
  // Fetch all produits
  const [rows] = await connection.query('SELECT * FROM produit');
  await connection.end();
  return NextResponse.json(rows);
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { reference, produit, matiere, poids, diametre, longueur, fixation, renfortbas, fond, dotation, platine } = body; // adjust fields as per your table
  const connection = await getConnection();

  // Insert a new produit
  // const [result] = await connection.query(
  //   'INSERT INTO produit (reference, produit, matiere, poids, diametre, longueur, fixation, renfortbas, fond, dotation, platine, longueurcoupe, largeurcoupe, diametreanneau, colerette, snapring, snapband, joint2015, joint1510, bourrelet, dimensionfond, remarque, validation) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, null, null, null, null, null, null, null, null, null, null, null, null)',
  const [result] = await connection.query(
    'INSERT INTO produit (reference, produit, matiere, poids, diametre, longueur, fixation, renfortbas, fond, dotation, platine) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
  [reference, produit, matiere, poids, diametre, longueur, fixation, renfortbas, fond, dotation, platine]
  ) as [mysql.ResultSetHeader, any];
  await connection.end();
  return NextResponse.json({ insertId: (result as mysql.ResultSetHeader).insertId });
}

export async function PUT(request: NextRequest) {
  const body = await request.json();
  const { id, name, email, phone } = body; // id of produit to edit
  const connection = await getConnection();

  // Update produit
  await connection.query(
    'UPDATE produit SET name = ?, email = ?, phone = ? WHERE id = ?',
    [name, email, phone, id]
  );
  await connection.end();
  return NextResponse.json({ message: 'Product updated' });
}

export async function DELETE(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');
  const connection = await getConnection();

  // Delete produit by id
  await connection.query('DELETE FROM produit WHERE id = ?', [id]);
  await connection.end();
  return NextResponse.json({ message: 'Produit deleted' });
}