
"use client";

import { Modal } from "@/components/ui/modal";
import Button from "@/components/ui/button/Button";
import { ChevronDownIcon } from "@/icons";
import Label from "@/components/form/Label";
// import Select from "@/components/form/Select";
import Input from "@/components/form/input/InputField";
import { Checkbox } from "@heroui/react";
import React, { useState } from "react";

type AddClientModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export function AddClientModal({ isOpen, onClose }: AddClientModalProps) {

  function addClient() {
    fetch('/api/client', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ nom: 'John', liste_noire: '1', observation: '555-123' })
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
      });
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose} className="max-w-[900px] p-5 lg:p-10">
      <div className="rounded-2xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-white/[0.03] xl:px-10 xl:py-12">
        <form className=" text-start">

          <h3 className="mb-5 text-lg font-semibold text-gray-800 dark:text-white/90 lg:mb-7">
            Ajouter un client
          </h3>

          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-7 2xl:gap-x-32">
            <div className="col-span-2">
              <Label htmlFor="nom">Société</Label>
              <Input id="nom" placeholder="Nom de la société" />
            </div>
            <div className="col-span-2">
              <Label htmlFor="observation">observation</Label>
              <Input id="observation" placeholder="observation" />
            </div>
            <Checkbox defaultSelected>❌ Liste Noire</Checkbox>

          </div>
        </form>
      </div>
    </Modal>
  );
}
