"use client";
import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "../ui/table";
import { FaEdit, FaTrash } from "react-icons/fa";

// Example data based on the image; you should replace this with your actual data source.
const tableData = [
  {
    id: 1,
    name: "Abram Schleifer boulcina baha eddine",
    position: "Sales Assistant",
    office: "Edinburgh",
    age: 57,
    startDate: "25 Apr, 2027",
    salary: "$89,500",
  },
  {
    id: 2,
    name: "Charlotte Anderson",
    position: "Marketing Manager",
    office: "London",
    age: 42,
    startDate: "12 Mar, 2025",
    salary: "$105,000",
  },
  // ... Add all other entries here
];

export default function BasicTableThree() {
  const [search, setSearch] = useState("");

  const filteredData = tableData.filter((row) =>
    [row.name]
      .join(" ")
      .toLowerCase()
      .includes(search.toLowerCase())
  );

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
        <div className="">
          <Table>
            <TableHeader className="border-b border-gray-100 dark:border-white/[0.05]">
              <TableRow>
                <TableCell isHeader className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400">User</TableCell>
                <TableCell isHeader className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400">Action</TableCell>
              </TableRow>
            </TableHeader>
            <TableBody className="divide-y divide-gray-100 dark:divide-white/[0.05]">
              {filteredData.map((row) => (
                <TableRow key={row.id}>
                  <TableCell className="px-4 py-3 font-medium text-gray-600 text-start text-theme-sm dark:text-gray-400">{row.name}</TableCell>
                  <TableCell className="px-4 py-3 font-medium text-start text-theme-sm">
                    <div className="flex gap-2">
                      <button className="p-2 rounded text-blue-400 hover:bg-gray-200 dark:hover:bg-gray-800">
                        <FaEdit />
                      </button>
                      <button className="p-2 rounded text-red-400 hover:bg-gray-200 dark:hover:bg-gray-800">
                        <FaTrash />
                      </button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}