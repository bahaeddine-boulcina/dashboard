"use client";
import type { Metadata } from "next";
import { EcommerceMetrics } from "@/components/ecommerce/EcommerceMetrics";
import React from "react";
import MonthlySalesChart from "@/components/ecommerce/MonthlySalesChart";
import StatisticsChart from "@/components/ecommerce/StatisticsChart";
import RecentOrders from "@/components/ecommerce/RecentOrders";
import DemographicCard from "@/components/ecommerce/DemographicCard";




export default function Ecommerce() {
  function handleClick() {


    fetch('/api/client', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ societe: 'John', liste_noire: '1', observation: '555-123' })
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
      });

    // export const metadata: Metadata = {
    //   title:
    //     "Next.js E-commerce Dashboard | TailAdmin - Next.js Dashboard Template",
    //   description: "This is Next.js Home for TailAdmin Dashboard Template",
    // };

  }
  return (
    <div className="grid grid-cols-12 gap-4 md:gap-6">
      <div className="col-span-12 space-y-6">
        <EcommerceMetrics />

        <MonthlySalesChart />
      </div>

      {/* <div className="col-span-12 xl:col-span-5">
        <CalendarMini />
      </div> */}

      <div className="col-span-12">
        <StatisticsChart />
      </div>

      <div className="col-span-12 xl:col-span-5">
        <DemographicCard />
      </div>

      <div className="col-span-12 xl:col-span-7">
        <RecentOrders />
      </div>
      <div className="col-span-12 xl:col-span-7">
        <button onClick={handleClick}>hello</button>
      </div>
    </div>
  );
}
