"use client";

import React, { useEffect, useRef, useState } from "react";
import { useSearchParams } from "next/navigation";
import PackageSummaryCard from "./PackageSummaryCard";
import packageData from "../data/en/packages.json";

function PackagesList() {
  const searchParams = useSearchParams();
  const initialTab = searchParams.get("tab") || "all";

  const [tabName, setTabName] = useState(initialTab);
  const [packagesList, setPackagesList] = useState(packageData);
  const dropDownRef = useRef<HTMLDetailsElement>(null);

  const tabDisplayName = new Map<string, string>([
    ["all", "All Packages"],
    ["adventure", "Adventure Tours"],
    ["ayurveda", "Ayurveda"],
    ["cultural", "Cultural Tours"],
    ["luxury", "Luxury Tours"],
    ["honeymoon", "Honeymoon Tours"],
    ["pilgrim", "Pilgrimage Tours"],
    ["tribal", "Tribals Tours"],
    ["wildlife", "Wildlife Tours"],
    ["bhutan", "Bhutan"],
    ["srilanka", "Sri Lanka"],
    ["nepal", "Nepal"],
    ["maldives", "Maldives"],
  ]);

  useEffect(() => {
    if (initialTab !== "all") {
      const filteredPackages = packageData.filter(tourPackage =>
        tourPackage.Tags.includes(initialTab)
      );
      setPackagesList(filteredPackages);
    } else {
      setPackagesList(packageData);
    }
    setTabName(initialTab);
  }, [initialTab]);

  function handleTabClick(tab: string) {
    setTabName(tab);

    if (tab !== "all") {
      const filtered = packageData.filter(pkg => pkg.Tags.includes(tab));
      setPackagesList(filtered);
    } else {
      setPackagesList(packageData);
    }

    if (dropDownRef.current) {
      dropDownRef.current.removeAttribute("open");
    }

    // Update URL without reloading
    const url = new URL(window.location.href);
    url.searchParams.set("tab", tab);
    window.history.replaceState({}, "", url);
  }

  const getTabClass = (tab: string) => {
    return `tab px-[10px] ${tabName === tab ? "tab-active !text-[#fff] !bg-[#025C7A]" : ""}`;
  };

  return (
    <>
      {/* Tabs for large screens */}
      <div
        role="tablist"
        className="hidden lg:flex lg:flex-wrap lg:justify-center lg:tabs lg:tabs-boxed max-w-[1180px] mx-auto"
      >
        <button role="tab" className={getTabClass("all")} onClick={() => handleTabClick("all")}>
          All Packages
        </button>
        <button
          role="tab"
          className={getTabClass("adventure")}
          onClick={() => handleTabClick("adventure")}
        >
          Adventure Tours
        </button>
        <button
          role="tab"
          className={getTabClass("cultural")}
          onClick={() => handleTabClick("cultural")}
        >
          Cultural Tours
        </button>
        <button
          role="tab"
          className={getTabClass("luxury")}
          onClick={() => handleTabClick("luxury")}
        >
          Luxury Tours
        </button>
        <button
          role="tab"
          className={getTabClass("honeymoon")}
          onClick={() => handleTabClick("honeymoon")}
        >
          Honeymoon Tours
        </button>
        <button
          role="tab"
          className={getTabClass("pilgrim")}
          onClick={() => handleTabClick("pilgrim")}
        >
          Pilgrimage Tours
        </button>
        <button
          role="tab"
          className={getTabClass("tribal")}
          onClick={() => handleTabClick("tribal")}
        >
          Tribals Tours
        </button>
        <button
          role="tab"
          className={getTabClass("wildlife")}
          onClick={() => handleTabClick("wildlife")}
        >
          Wildlife Tours
        </button>
        <button
          role="tab"
          className={getTabClass("bhutan")}
          onClick={() => handleTabClick("bhutan")}
        >
          Bhutan
        </button>
        <button
          role="tab"
          className={getTabClass("srilanka")}
          onClick={() => handleTabClick("srilanka")}
        >
          Sri Lanka
        </button>
        <button role="tab" className={getTabClass("nepal")} onClick={() => handleTabClick("nepal")}>
          Nepal
        </button>
        <button
          role="tab"
          className={getTabClass("maldives")}
          onClick={() => handleTabClick("maldives")}
        >
          Maldives
        </button>
      </div>

      {/* Dropdown for small screens */}
      <div className="flex justify-center lg:hidden">
        <details className="dropdown" ref={dropDownRef}>
          <summary className="btn m-1">{tabDisplayName.get(tabName)}</summary>
          <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
            {Array.from(tabDisplayName.entries()).map(([key, label]) => (
              <li key={key}>
                <button onClick={() => handleTabClick(key)}>{label}</button>
              </li>
            ))}
          </ul>
        </details>
      </div>

      {/* Packages grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 mx-8 my-8">
        {packagesList.map(tourPackage => (
          <div key={tourPackage.Id}>
            <PackageSummaryCard tourPackage={tourPackage} />
          </div>
        ))}
      </div>
    </>
  );
}

export default PackagesList;
