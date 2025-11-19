"use client";
import React, { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "../ui/table";
import { FaEdit, FaTrash } from "react-icons/fa";
import {ScrollShadow} from "@heroui/scroll-shadow";

interface ClientData {
  id: number;
  nom: string;
}

export default function UsersTable() {
  const [search, setSearch] = useState("");
  const [tableData, setTableData] = useState<ClientData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch clients from API
    fetch('/api/client', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
            // Map the data to only include id and nom, filter out null/undefined nom values
      const formattedData = data
        .filter((item: any) => item.nom != null)
        .map((item: any, index: number) => ({
          id: item.id || index + 1,
          nom: item.nom || ''
        }));
      setTableData(formattedData);
      setLoading(false);
    })
    .catch(error => {
      console.error('Error fetching clients:', error);
      setLoading(false);
    });
  }, []);

      const filteredData = tableData.filter((row) =>
    row.nom && row.nom.toLowerCase().includes(search.toLowerCase())
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
                    {row.nom}
                  </TableCell>
                  <TableCell className="px-4 py-3 font-medium text-start text-theme-sm">
                    <div className="flex gap-2 justify-end">
                      <button className="p-2 rounded text-blue-400 hover:bg-gray-200 dark:hover:bg-gray-800">
                        <FaEdit />
                      </button>
                      {/* <button className="p-2 rounded text-red-400 hover:bg-gray-200 dark:hover:bg-gray-800">
                        <FaTrash />
                      </button> */}
                    </div>
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