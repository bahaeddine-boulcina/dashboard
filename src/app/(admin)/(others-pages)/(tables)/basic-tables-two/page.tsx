import ComponentCard from "@/components/common/ComponentCard";
import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import RecentOrders from "@/components/ecommerce/RecentOrders";
import Details from "@/components/product/Details";
import BasicTableTwo from "@/components/tables/BasicTableTwo";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Next.js Basic Table | TailAdmin - Next.js Dashboard Template",
  description:
    "This is Next.js Basic Table  page for TailAdmin  Tailwind CSS Admin Dashboard Template",
  // other metadata
};

export default function BasicTablesTwo() {
  return (
    <div>
      <PageBreadcrumb pageTitle="Basic Table two" />
        <div className="grid grid-cols-12 gap-4 md:gap-6">

              <div className="col-span-12 xl:col-span-3 space-y-6">
                <ComponentCard title="Users">
                  <BasicTableTwo />
                </ComponentCard>
                <ComponentCard title="Basic Table 2">
                  <BasicTableTwo />
                </ComponentCard>
              </div>

              <div className="col-span-12 xl:col-span-9 space-y-6">
                <ComponentCard title="Details">
                  <Details />
                </ComponentCard>
                <ComponentCard title="Recent Orders">
                  <RecentOrders />
                </ComponentCard>
              </div>
            </div>


      {/* <div className="space-y-6">
        <ComponentCard title="Basic Table 2">
          <BasicTableTwo />
        </ComponentCard>
      </div> */}
    </div>
  );
}
