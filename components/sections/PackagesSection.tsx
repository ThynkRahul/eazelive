import React from "react";
import { getLandingTranslations } from "../../lib/translationHelper";
import { ITranslations } from "../../types/Common";
import PackageSummaryCard from "../PackageSummaryCard";
import packageData from "../../data/en/packages.json";

interface PackagesSectionProps {
  locale?: string;
}

const PackagesSection = ({ locale = "en" }: PackagesSectionProps) => {
  // Load translations directly using use()
  const translations: ITranslations = getLandingTranslations(locale);
  const { popularPackages } = translations.landing;
  const packagesList = packageData.filter(pkg => [1, 7, 9, 16, 2, 28, 25, 29].includes(pkg.Id));

  return (
    <>
      <div className="my-12 max-w-[1280px] mx-0 sm:mx-auto">
        <h2
          className="text-2xl font-semibold text-black text-center sm:text-left mx-4"
          style={{ fontSize: "32px" }}
        >
          {popularPackages.heading}
        </h2>
      </div>

      <div className="flex justify-center items-center max-w-screen-xl mx-0 sm:mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-10 w-full">
          {packagesList.map(tourPackage => (
            <div key={tourPackage.Id}>
              <PackageSummaryCard
                tourPackage={tourPackage}
                onSale={[9, 16].includes(tourPackage.Id)}
              ></PackageSummaryCard>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center my-12">
        <a href="/packages">
          <button className="px-8 py-4 mt-8 mb-12 border-2 border-[#025C7A] bg-white text-[#025C7A] rounded-full hover:bg-[#025C7A] hover:text-white transition-all duration-300">
            {popularPackages.cta.allPackages}
          </button>
        </a>
      </div>
    </>
  );
};

export default PackagesSection;
