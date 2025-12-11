"use client";

import Input from "@/components/form/input/InputField";
import Label from "@/components/form/Label";
import Select from "@/components/form/Select";
import Button from "@/components/ui/button/Button";
import { ChevronDownIcon } from "@/icons";
import { useEffect, useState } from "react";

interface DetailsProps {
  product: any | null;
}

export default function Details({ product }: DetailsProps) {
  const options1 = [
    { value: "1", label: "Manche Filtrante" },
    { value: "2", label: "Poche Filtrante" },
    { value: "3", label: "Produit Spécifique" },
  ];
  const options2 = [
    { value: "A", label: "Polyester" },
    { value: "B", label: "Acrylique" },
    { value: "C", label: "Polyester + Acrylique" },
    { value: "D", label: "Polypropylène" },
    { value: "E", label: "Méta-Aramide (NOMEX)" },
    { value: "F", label: "PPS" },
    { value: "G", label: "PTFE" },
    { value: "H", label: "Polyimide (P83)" },
    { value: "J", label: "Fiberglass (Tissu de verre)" },
  ];
  const options3 = [
    { value: 300, label: "300" },
    { value: 350, label: "350" },
    { value: 400, label: "400" },
    { value: 450, label: "450" },
    { value: 500, label: "500" },
    { value: 550, label: "550" },
    { value: 600, label: "600" },
    { value: 650, label: "650" },
    { value: 700, label: "700" },
    { value: 750, label: "750" },
    { value: 770, label: "770" },
    { value: 800, label: "800" },
  ];
  const options4 = [
    { value: "A", label: "Sans (Coupé Net)" },
    { value: "B", label: "Anneau Metallique" },
    { value: "C", label: "Colerette" },
    { value: "D", label: "Simple Joint Extérieur 20 x 15 mm" },
    { value: "E", label: "Simple Joint Extérieur 15 x 10 mm" },
    { value: "F", label: "Double Joint Extérieur 15 x 10 mm" },
    { value: "G", label: "Snap-Ring + Simple Joint Extérieur 15 x 10 mm" },
    { value: "H", label: "Snap-Ring + Double Joint Extérieur 15 x 10 mm" },
    { value: "J", label: "Snap-Ring + Snap-Band" },
    { value: "K", label: "Simple Bourellet Intérieur" },
    { value: "L", label: "Double  Bourellet Intérieur" },
    { value: "M", label: "Snap-Ring + Simple Bourellet Intérieur" },
    { value: "N", label: "Snap-Ring + Double Bourellet Intérieur" },
    { value: "P", label: "Anneau Metallique + Anneaux Centraux" },
    { value: "Q", label: "Anneau Metallique + Snap-Ring" },
    { value: "R", label: "Collier de Serrage" },
    { value: "S", label: "Anneau Cousu (Méme Matière)" },
  ];
  const options5 = [
    { value: "0", label: "Sans Renfort-Bas" },
    { value: "1", label: "Renfort-Bas 100 mm" },
    { value: "2", label: "Renfort-Bas 150 mm" },
    { value: "3", label: "Renfort-Bas Poche 70 mm" },
    { value: "4", label: "Renfort-Bas Poche 70 mm 1 Couture en Longueur" },
    { value: "5", label: "Renfort-Bas Poche 70 mm 2 Coutures en Longueur" },
    { value: "6", label: "Support Poche Filtrante" },
  ];
  const options6 = [
    { value: "0", label: "Sans-Fond" },
    { value: "1", label: "Fond Rond" },
    { value: "2", label: "Fond Carré" },
    { value: "3", label: "Double Fond Rond" },
    { value: "4", label: "Double Fond Carré" },
    { value: "5", label: "Fond Cousu" },
    { value: "6", label: "Anneau Métallique" },
    { value: "7", label: "Fond Oval" },
    { value: "8", label: "Double Fond Oval" },
    { value: "9", label: "Snap-Ring" },
  ];
  const options7 = [
    { value: "0", label: "Sans Dotation" },
    { value: "1", label: "Téte Séparée | Renfort-Bas Séparé" },
    { value: "2", label: "Téte NON Séparée | Renfort-Bas NON Séparé" },
    { value: "3", label: "Téte NON Séparée | Renfort-Bas Séparé" },
    { value: "4", label: "Téte Séparée | Renfort-Bas NON Séparé" },
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


  useEffect(() => {
    if (Array.isArray(product) && product.length > 0) {
      setReference(product[0].reference.split(""));
      setProduit(product[0].produit);
      setMatiere(product[0].matiere);
      setPoids(product[0].poids);
      setDiametre(product[0].diametre);
      setFixation(product[0].fixation);
      setRenfortbas(product[0].renfortbas);
      setFond(product[0].fond);
      setDotation(product[0].dotation);
      setPlatine(product[0].platine);
      setLongueur(product[0].longueur);
    }
  }, [product]);

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
    setReference(initialReference); // Optional: reset on close
  };

  return (
    <div>
      <div className="rounded-2xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-white/[0.03] xl:px-10 xl:py-12">
        <form className=" text-start">

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

          <div className="grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-2">
            {/* For each field, fire handleReferenceChange(idx) on value change */}
            <div className="col-span-1">
              <Label>Produit</Label>
              <div className="relative">
                <Select
                  value={produit || ""}
                  options={options1}
                  placeholder={options1.find(opt => opt.value === produit)?.label || "Select Option"}
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
                  value={matiere || ""}
                  options={options2}
                  placeholder={options2.find(opt => opt.value === matiere)?.label || "Select Option"}
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
                  value={poids || 0}
                  options={options3}
                  placeholder={
                    options3.find(opt => opt.value === poids)?.label || "Select Option"
                  }
                  onChange={(value) => {
                    const input = String(value);
                    const code = input.slice(0, 2);
                    handleReferenceChange(2, code.toUpperCase(), 2);
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
                value={diametre || ""}
                type="text"
                placeholder="###"
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
                value={longueur || ""}
                type="text"
                placeholder="#####"
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
                  value={fixation || ""}
                  options={options4}
                  placeholder={options4.find(opt =>opt.value === fixation)?.label || "Select Option"}
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
                  value={renfortbas || ""}
                  options={options5}
                  placeholder={options5.find(opt =>opt.value === renfortbas)?.label || "Select Option"}
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
                  value={fond || ""}
                  options={options6}
                  placeholder={options6.find(opt =>opt.value === fond)?.label || "Select Option"}
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
                  value={dotation || ""}
                  options={options7}
                  placeholder={options7.find(opt =>opt.value === dotation)?.label || "Select Option"}
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
                value={platine || ""}
                type="text"
                placeholder="Boruch"
                onChange={e => setPlatine(e.target.value)}
              />
            </div>
          </div>
          <div className="flex items-center justify-end w-full gap-3 mt-6">
            <Button
              size="sm"
              onClick={addProduct}
            >
              Save Changes
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
