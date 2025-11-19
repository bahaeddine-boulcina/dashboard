"use client";
import React, { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "../ui/table";
import { FaEdit } from "react-icons/fa";
import { ScrollShadow } from "@heroui/scroll-shadow";

interface ProductData {
  id: number;
  reference: string;
}

export default function RefTable() {
  const [search, setSearch] = useState("");
  const [tableData, setTableData] = useState<ProductData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch products from API
    fetch('/api/product', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      // Map the data to only include id and reference
      const formattedData = data.map((item: any, index: number) => ({
        id: item.id || index + 1,
        reference: item.reference
      }));
      setTableData(formattedData);
      setLoading(false);
    })
    .catch(error => {
      console.error('Error fetching products:', error);
      setLoading(false);
    });
  }, []);

    const filteredData = tableData.filter((row) =>
    row.reference.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) {
    return (
      <div className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-white/[0.05] dark:bg-white/[0.03] p-6 min-h-100 max-h-100 flex items-center justify-center">
        <p className="text-gray-600 dark:text-gray-400">Chargement...</p>
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-white/[0.05] dark:bg-white/[0.03] p-6 min-h-100 max-h-100">
      {/* Search Input */}
      <div className="flex justify-end mb-4">
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
          <Table>
            <TableBody className="divide-y divide-gray-100 dark:divide-white/[0.05]">
              {filteredData.map((row) => (
                <TableRow key={row.id} className="hover:bg-gray-50 dark:hover:bg-white/[0.05]">
                  <TableCell className="px-4 py-3 font-medium text-gray-600 text-start text-theme-sm dark:text-gray-400 cursor-pointer">
                    {row.reference}
                  </TableCell>
                  <TableCell className="px-4 py-3 font-medium text-gray-600 text-start text-theme-sm dark:text-gray-400 cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><path fill="currentColor" d="M22 12a10 10 0 0 1-10 10A10 10 0 0 1 2 12A10 10 0 0 1 12 2a10 10 0 0 1 10 10m-2 0a8 8 0 0 0-8-8a8 8 0 0 0-8 8a8 8 0 0 0 8 8a8 8 0 0 0 8-8M8.6 16.6l4.6-4.6l-4.6-4.6L10 6l6 6l-6 6z"></path></svg>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </ScrollShadow>
      </div>
    </div>
  );
}
