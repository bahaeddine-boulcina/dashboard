"use client";

import React, { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "../ui/table";
import { FaEdit } from "react-icons/fa";
import { ScrollShadow } from "@heroui/scroll-shadow";

interface ProductData {
  id: number;
  reference: string;
  clientId?: number; // Add this field to link products to clients
}

interface RefTableProps {
  selectedUserId: number | null;
  selectedProduct: any | null;
  onSelectProduct: (product: any) => void;
}

export default function RefTable({ selectedUserId, selectedProduct, onSelectProduct }: RefTableProps) {
  const [search, setSearch] = useState("");
  const [tableData, setTableData] = useState<ProductData[]>([]);
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState([]);


  useEffect(() => {
  const url = selectedUserId
    ? `/api/product?clientId=${selectedUserId}`
    : '/api/product';

  fetch(url, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  })
    .then(res => res.json())
    .then(data => {
      const formattedData = data.map((item: any) => ({
        id: item.id,
        reference: item.reference,
        clientId: item.id_client
      }));
      setProduct(data);
      setTableData(formattedData);
      setLoading(false);
    })
    .catch(error => {
      console.error('Error fetching products:', error);
      setLoading(false);
    });
}, [selectedUserId]); // Re-fetch when selectedUserId changes


  // Filter by selected user first, then by search
  const filteredData = tableData
    .filter((row) => selectedUserId === null || row.clientId === selectedUserId)
    .filter((row) => row.reference.toLowerCase().includes(search.toLowerCase()));

  if (loading) {
    return (
      <div className="flex items-center justify-center p-8">
        <p className="text-gray-500 dark:text-gray-400">Chargement...</p>
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-white/[0.05] dark:bg-white/[0.03] p-6 min-h-100 max-h-100">
      {/* Search Input */}
      <div className="flex justify-end items-center mb-4">

        <input
          type="text"
          placeholder="Search…"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="rounded-lg px-4 py-2 border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200 max-w-50"
        />
      </div>
      <div className="max-w-full overflow-x-auto">
        <ScrollShadow className="max-h-70">
          {filteredData.length === 0 ? (
            <div className="flex items-center justify-center p-8">
              <p className="text-gray-500 dark:text-gray-400">
                {selectedUserId
                  ? "Aucune référence trouvée pour cet utilisateur"
                  : "Sélectionnez un utilisateur pour voir ses références"}
              </p>
            </div>
          ) : (
            <Table>
              <TableBody className="divide-y divide-gray-100 dark:divide-white/[0.05]">
                {filteredData.map((row) => (
                  <TableRow
                    key={row.id}
                    className={`cursor-pointer  hover:bg-gray-50 dark:hover:bg-white/[0.05] ${selectedProduct?.[0]?.id === row.id ? "bg-blue-50 dark:bg-blue-900/30" : ""}`}
                    onClick={() =>
                    {onSelectProduct(product);
                    console.log("Selected product:", product);}
                    }
                  >
                    <TableCell className="px-4 py-3 font-medium text-gray-600 text-start text-theme-sm dark:text-gray-400">
                      {row.reference}
                    </TableCell>
                    <TableCell className="px-4 py-3 font-medium text-start text-theme-sm">
                      <div className="flex gap-2">
                        <button className="p-2 rounded text-blue-400 hover:bg-gray-200 dark:hover:bg-gray-800">
                          <FaEdit />
                        </button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </ScrollShadow>
      </div>
    </div>
  );
}
