"use client";

import React, { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "../ui/table";
import { FaEdit } from "react-icons/fa";
import { FaUserPlus } from "react-icons/fa6";

import { ScrollShadow } from "@heroui/scroll-shadow";
import { AddClientModal } from "../modals/AddClientModal";
import { useModal } from "@/hooks/useModal";

interface ClientData {
  id: number;
  nom: string;
}

interface UsersTableProps {
  selectedUserId: number | null;
  onSelectUser: (userId: number | null) => void;
}

export default function UsersTable({ selectedUserId, onSelectUser }: UsersTableProps) {
    const { isOpen, openModal, closeModal } = useModal();

  const [search, setSearch] = useState("");
  const [tableData, setTableData] = useState<ClientData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/client', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
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
      <div className="flex items-center justify-center p-8">
        <p className="text-gray-500 dark:text-gray-400">Chargement...</p>
      </div>
    );
  }



  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-white/[0.05] dark:bg-white/[0.03] p-6 min-h-100 max-h-100">


      {/* Search Input */}
      <div className="flex justify-between mb-4">
        <button
          className="p-2 rounded text-blue-400 hover:bg-gray-200 dark:hover:bg-gray-800 "
           onClick={openModal}
        >
          <FaUserPlus size={20}  />
        </button>
        <AddClientModal isOpen={isOpen} onClose={closeModal} />
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
                <TableRow
                  key={row.id}
                  onClick={() => selectedUserId === row.id ? onSelectUser(null) : onSelectUser(row.id)}
                  className={`cursor-pointer transition-colors ${
                    selectedUserId === row.id
                      ? "bg-blue-50 dark:bg-blue-900/30 border-l-4 border-blue-500"
                      : "hover:bg-gray-50 dark:hover:bg-white/[0.05]"
                  }`}
                >
                  <TableCell  className="px-4 py-3 font-medium text-gray-600 text-start text-theme-sm dark:text-gray-400">
                    {row.nom}
                  </TableCell>
                  <TableCell className="px-4 py-3 font-medium text-start text-theme-sm">
                    <div className="flex gap-2">
                      <button
                        className="p-2 rounded text-blue-400 hover:bg-gray-200 dark:hover:bg-gray-800"
                        onClick={(e) => {
                          e.stopPropagation();
                          // Handle edit action
                        }}
                      >
                        <FaEdit />
                      </button>
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
