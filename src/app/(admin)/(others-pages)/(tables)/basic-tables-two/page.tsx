"use client";

import ComponentCard from "@/components/common/ComponentCard";
import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import RecentOrders from "@/components/ecommerce/RecentOrders";
import Details from "@/components/product/Details";
import React, { useState } from "react";
import RefTable from "@/components/tables/RefTable";
import UsersTable from "@/components/tables/UsersTable";

export default function BasicTablesTwo() {
  const [selectedUserId, setSelectedUserId] = useState<number | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<any | null>(null);

  return (
    <div>
      <PageBreadcrumb pageTitle="Basic Table two" />
      <div className="grid grid-cols-12 gap-4 md:gap-6">
        <div className="col-span-12 xl:col-span-3 space-y-6">
          <ComponentCard title="Users">
            <UsersTable
              selectedUserId={selectedUserId}
              onSelectUser={setSelectedUserId}
            />
          </ComponentCard>
          <ComponentCard title="References">
            <RefTable
              selectedUserId={selectedUserId}
              selectedProduct={selectedProduct}
              onSelectProduct={setSelectedProduct}
            />
          </ComponentCard>

        </div>

        <div className="col-span-12 xl:col-span-9 space-y-6">
          <ComponentCard title="Details">
            <Details product={selectedProduct} />
          </ComponentCard>

          <ComponentCard title="Recent Orders">
            <RecentOrders />
          </ComponentCard>
        </div>
      </div>
    </div>
  );
}
