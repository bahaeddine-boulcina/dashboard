"use client";
import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import Input from "@/components/form/input/InputField";
import Label from "@/components/form/Label";
import Select from "@/components/form/Select";
import Button from "@/components/ui/button/Button";
import { Modal } from "@/components/ui/modal";
import { useModal } from "@/hooks/useModal";
import { ChevronDownIcon } from "@/icons";
import React, { useState } from "react";
import {Tabs, Tab} from "@heroui/tabs";

export default function BlankPage() {
  const { isOpen, openModal, closeModal } = useModal();
  const options1 = [
    { value: "A", label: "Marketing" },
    { value: "B", label: "Template" },
    { value: "C", label: "Development" },
  ];
  const options2 = [
    { value: "A", label: "Marketing" },
    { value: "B", label: "Template" },
    { value: "C", label: "Development" },
  ];
  const options3 = [
    { value: "50", label: "500" },
    { value: "55", label: "550" },
    { value: "60", label: "600" },
  ];
  const options4 = [
    { value: "A", label: "Marketing" },
    { value: "B", label: "Template" },
    { value: "C", label: "Development" },
  ];
  const options5 = [
    { value: "A", label: "Marketing" },
    { value: "B", label: "Template" },
    { value: "C", label: "Development" },
  ];
  const options6 = [
    { value: "A", label: "Marketing" },
    { value: "B", label: "Template" },
    { value: "C", label: "Development" },
  ];
  const options7 = [
    { value: "A", label: "Marketing" },
    { value: "B", label: "Template" },
    { value: "C", label: "Development" },
  ];


  function addProduct() {


    fetch('/api/product', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ reference: reference.join(''), produit: produit, matiere: matiere, poids: poids, diametre: diametre, longueur: longueur, fixation: fixation, renfortbas: renfortbas, fond: fond, dotation: dotation, platine: platine })
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

  // Always 11 characters, starts as XXXXXXXXXXX
  const referenceLength = 15;
  const initialReference = Array(referenceLength).fill("X");
  const [reference, setReference] = useState(initialReference);
  const [produit, setProduit] = useState("");
  const [matiere, setMatiere] = useState("");
  const [poids, setPoids] = useState(0);
  const [diametre, setDiametre] = useState(0);
  const [longueur, setLongueur] = useState(0);
  const [fixation, setFixation] = useState("");
  const [renfortbas, setRenfortbas] = useState("");
  const [fond, setFond] = useState("");
  const [dotation, setDotation] = useState("");
  const [platine, setPlatine] = useState("");

  // Always updates the reference code at the given index
  const handleReferenceChange = (idx: number, value: string, multiLetters?: number) => {
    const newReference = [...reference];
    if (multiLetters !== undefined && multiLetters > 1) {
      for (let i = 0; i < multiLetters; i++) {
        newReference[idx + i] = value[i] || "X";
      }
    } else {
      newReference[idx] = value[0] || "X";
    }
    setReference(newReference);
  };

  const handleSave = () => {
    console.log("Saving changes...");
    closeModal();
    setReference(initialReference); // Optional: reset on close
  };

  return (
    <div>
      <PageBreadcrumb pageTitle="Blank Page" />
      <div className="min-h-screen rounded-2xl border border-gray-200 bg-white px-5 py-7 dark:border-gray-800 dark:bg-white/[0.03] xl:px-10 xl:py-12">
        <div className="mx-auto w-full max-w-[630px] text-center">
          <h3 className="mb-4 font-semibold text-gray-800 text-theme-xl dark:text-white/90 sm:text-2xl">
            Card Title Here
          </h3>
          <button
            className="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-theme-sm font-medium text-gray-700 shadow-theme-xs hover:bg-gray-50 hover:text-gray-800 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-white/[0.03] dark:hover:text-gray-200"
            onClick={openModal}
          >
            See all
          </button>
          <p className="text-sm text-gray-500 dark:text-gray-400 sm:text-base">
            Start putting content on grids or panels, you can also use different combinations of grids. Please check out the dashboard and other pages
          </p>
          <div className="rounded-2xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-white/[0.03]">
            <Modal
              isOpen={isOpen}
              onClose={closeModal}
              className="max-w-[900px] p-5 lg:p-10"
            >
              <form className=" text-start">
                <h4 className="mb-6 text-lg font-medium text-gray-800 dark:text-white/90">
                  Personal Information
                </h4>

                {/* Reference code area */}
                <div className="flex gap-2 mb-6 justify-center" aria-disabled="true">
                  {reference.map((char, i) => (
                    <span
                      key={i}
                      className={`inline-flex h-10 w-10 items-center justify-center text-lg font-bold rounded
                        ${char === "X" ? "bg-gray-200 text-gray-400" : "bg-gray-100 border-gray-300 text-gray-800"} ${i === 2 || i === 5 || i === 8 || i === 11 ? "mr-3" : ""}
                        border border-gray-300 select-none`}
                    >
                      {char}
                    </span>
                  ))}
                </div>
                <Tabs aria-label="Options">
                  <Tab key="photos" title="Photos">
                  <div className="grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-2">
                    <div className="col-span-1">
                      <Label>Produit</Label>
                      <div className="relative">
                        <Select
                          options={options1}
                          placeholder="Select Option"
                          onChange={(value) => {handleReferenceChange(0, value); setProduit(value);}}
                          className="dark:bg-dark-900"

                        />
                        <span className="absolute text-gray-500 -translate-y-1/2 pointer-events-none right-3 top-1/2 dark:text-gray-400">
                          <ChevronDownIcon />
                        </span>
                      </div>
                    </div>
                    <div className="col-span-1">
                      <Label>Matière</Label>
                      <div className="relative">
                        <Select
                          options={options2}
                          placeholder="Select Option"
                          onChange={(value) => {handleReferenceChange(1, value); setMatiere(value);}}
                          className="dark:bg-dark-900"
                        />
                        <span className="absolute text-gray-500 -translate-y-1/2 pointer-events-none right-3 top-1/2 dark:text-gray-400">
                          <ChevronDownIcon />
                        </span>
                      </div>
                    </div>
                    <div className="col-span-1">
                      <Label>Poids</Label>
                      <div className="relative">
                        <Select
                          options={options3}
                          placeholder="Select Option"
                          onChange={(value) => {
                            const input = value;
                            handleReferenceChange(2, input.toUpperCase(), 2);
                            setPoids(Number(input));
                          }}
                          className="dark:bg-dark-900"
                        />
                        <span className="absolute text-gray-500 -translate-y-1/2 pointer-events-none right-3 top-1/2 dark:text-gray-400">
                          <ChevronDownIcon />
                        </span>
                      </div>
                    </div>
                    <div className="col-span-1">
                      <Label>Diamètre / Largeur (mm)</Label>
                      <Input
                        type="text"
                        placeholder="Boruch"
                        onChange={e => {
                          const input = e.target.value;
                          handleReferenceChange(4, input.toUpperCase(), 3);
                          setDiametre(Number(input));
                        }}
                        // onChange={e => handleReferenceChange(4, (e.target.value.charAt(0) || "X").toUpperCase(), 2)}
                      />
                    </div>
                    <div className="col-span-1">
                      <Label>Longueur (mm)</Label>
                      <Input
                        type="text"
                        placeholder="Boruch"
                        onChange={e => {
                          const input = e.target.value;
                          handleReferenceChange(7, input.toUpperCase(), 4);
                          setLongueur(Number(input));
                        }}
                      />
                    </div>
                    <div className="col-span-1">
                      <Label>Fixation</Label>
                      <div className="relative">
                        <Select
                          options={options4}
                          placeholder="Select Option"
                          onChange={(value) => {handleReferenceChange(11 , value); setFixation(value);}}
                          className="dark:bg-dark-900"
                        />
                        <span className="absolute text-gray-500 -translate-y-1/2 pointer-events-none right-3 top-1/2 dark:text-gray-400">
                          <ChevronDownIcon />
                        </span>
                      </div>
                    </div>
                    <div className="col-span-1">
                      <Label>Renfort-bas</Label>
                      <div className="relative">
                        <Select
                          options={options5}
                          placeholder="Select Option"
                          onChange={(value) => {handleReferenceChange(12 , value); setRenfortbas(value);}}
                          className="dark:bg-dark-900"
                        />
                        <span className="absolute text-gray-500 -translate-y-1/2 pointer-events-none right-3 top-1/2 dark:text-gray-400">
                          <ChevronDownIcon />
                        </span>
                      </div>
                    </div>
                    <div className="col-span-1">
                      <Label>Fond</Label>
                      <div className="relative">
                        <Select
                          options={options6}
                          placeholder="Select Option"
                          onChange={(value) => {handleReferenceChange(13 , value); setFond(value);}}
                          className="dark:bg-dark-900"
                        />
                        <span className="absolute text-gray-500 -translate-y-1/2 pointer-events-none right-3 top-1/2 dark:text-gray-400">
                          <ChevronDownIcon />
                        </span>
                      </div>
                    </div>
                    <div className="col-span-1">
                      <Label>Dotation</Label>
                      <div className="relative">
                        <Select
                          options={options7}
                          placeholder="Select Option"
                          onChange={(value) => {handleReferenceChange(14 , value); setDotation(value);}}
                          className="dark:bg-dark-900"
                        />
                        <span className="absolute text-gray-500 -translate-y-1/2 pointer-events-none right-3 top-1/2 dark:text-gray-400">
                          <ChevronDownIcon />
                        </span>
                      </div>
                    </div>
                    <div className="col-span-1">
                      <Label>Platine (mm)</Label>
                      <Input
                        type="text"
                        placeholder="Boruch"
                        onChange={e => setPlatine(e.target.value)}
                      />
                    </div>
                  </div>
                </Tab>
                  <Tab key="details" title="Details">
                    Details content goes here.
                  </Tab>
                  <Tab key="shipping" title="Shipping">
                    Shipping content goes here.
                  </Tab>
                </Tabs>
                <div className="flex items-center justify-end w-full gap-3 mt-6">
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={closeModal}
                  >
                    Close
                  </Button>
                  <Button
                    size="sm"
                    onClick={addProduct}
                  >
                    Save Changes
                  </Button>
                </div>
              </form>
            </Modal>
          </div>
        </div>
      </div>
    </div>
  );
}
