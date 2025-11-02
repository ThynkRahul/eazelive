import React from "react";
import { PackageImageSwiper } from "./PackageImage";
import Image from "next/image";
import PackageSummaryCard from "./PackageSummaryCard";
import Link from "next/link";
import VerticalTimelineElement from "./VerticalTimelineElement";
import { IPackageDetailDataType } from "../types/Common";
import PackageForm from "./PackageForm";
import packageData from "../data/en/packages.json";
interface VerticalTimelineProp {
  tourPackage: IPackageDetailDataType;
}

function VerticalTimeline({ tourPackage }: VerticalTimelineProp) {
  const packages = packageData.filter(pkg => pkg.Id <= 5 && pkg.Id > 1);
  return (
    <div className="min-h-screen max-w-[1240px] mx-auto">
      <link
        href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300..700&family=Urbanist:ital,wght@0,100..900;1,100..900&display=swap"
        rel="stylesheet"
      />
      <div className="mt-[135px] sm:mt-[165px] mx-8 mb-12">
        <p className="text-[14px] text-gray-700 mt-4">
          <span className="text-[#ccc] hover:text-[#035C7A]">
            <Link href="/" passHref>
              Home{" "}
            </Link>
          </span>
          /
          <span className="text-[#ccc] hover:text-[#035C7A]">
            <Link href="/packages" passHref>
              {" "}
              packages{" "}
            </Link>
          </span>
          <span>/ {tourPackage.Name}</span>
        </p>
        <h1 className="text-[42px] font-semibold text-black text-left leading-[1.2em] sm:leading-[1.5em]">
          <span>{tourPackage.Name}</span>
        </h1>
        <div className="flex gap-2 pt-2 mb-3">
          {tourPackage.Tags.map((tag, index) => (
            <span
              key={index}
              className={`px-3 py-1 capitalize rounded-sm text-sm text-white ${
                index % 2 === 0 ? "bg-[#025C7A]" : "bg-[#6E9753]"
              }`}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5">
        <div className="w-full overflow-auto">
          <PackageImageSwiper source={tourPackage.Id}></PackageImageSwiper>
        </div>

        <div className="flex flex-col sm:flex-row mx-8 gap-5">
          <div className="overflow-auto border-0 sm:border-2 rounded-[20px]">
            <div className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical p-[5px] sm:p-[30px]">
              <h2 className="text-2xl font-[urbanist] font-bold text-black text-left mb-4">
                Overview
              </h2>
              <div className="text-[#4f5e71] font-[urbanist] font-[500] font-[16px] leading-[1.5em]">
                {tourPackage.Overview}
              </div>
            </div>
          </div>
        </div>

        <div className="overflow-auto border-0 sm:border-2 sm:mx-8 mx-0 rounded-[20px]">
          <ul className="timeline timeline-snap-icon timeline-compact timeline-vertical p-[5px] sm:p-[30px]">
            <h2 className="text-2xl font-bold font-[urbanist] text-black text-left mx-8 mb-4">
              What to Expect
            </h2>
            {tourPackage.Itinerary.map((itinerary, index, array) => (
              <li key={itinerary.Id}>
                <VerticalTimelineElement
                  time={itinerary.Day}
                  title={itinerary.Name}
                  description={itinerary.Description}
                  images={itinerary.Images}
                  isLast={index === array.length - 1}
                />
              </li>
            ))}
          </ul>
        </div>

        <div className="overflow-auto border-0 sm:border-2 mx-8 rounded-[20px]">
          <div className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical p-[5px] sm:p-[30px]">
            <h2 className="text-2xl font-bold font-[urbanist] text-black text-left mb-4">
              Summary
            </h2>
            <ul
              className="text-[#4f5e71] font-[urbanist] font-[500] font-[16px] leading-[1.5em]"
              dangerouslySetInnerHTML={{ __html: tourPackage.Summary }}
            />
          </div>
        </div>
        {/* <ContactForm /> */}
        <PackageForm />
      </div>

      <div className="my-12 max-w-screen-xl mx-8">
        <h2
          className="text-2xl font-semibold text-black text-center sm:text-left mx-2"
          style={{ fontSize: "32px" }}
        >
          Popular Packages
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-10 mx-8">
        {packages.map(tourPackage => (
          <div key={tourPackage.Id} className="h-full">
            <PackageSummaryCard tourPackage={tourPackage}></PackageSummaryCard>
          </div>
        ))}
      </div>

      <div
        className={`info-container flex flex-col sm:flex-row justify-center gap-12 my-[70px] max-w-[1280px] mx-auto flex-wrap sm:flex-nowrap`}
      >
        <div className="info-box p-0 rounded-lg w-[100%] flex flex-col items-center sm:w-[33%]">
          <Image src="/images/email.png" alt="Info Icon 1" width={77} height={77} />
          <h2 className="info-heading text-[30px] font-[urbanist] font-bold text-black text-center mt-4">
            Email
          </h2>
          <a
            href="mailto:info@eazetours.com"
            className="info-content text-center text-[#4F5E71] font-[16px] leading-[1.2em] mt-1 transition-all duration-300 transform hover:text-[#3778EE] hover:font-semibold cursor-pointer"
          >
            info@eazetours.com
          </a>
          <a
            href="mailto:harshit@eazetours.com"
            className="info-content text-center text-[#4F5E71] font-[16px] leading-[1.2em] mt-1 transition-all duration-300 transform hover:text-[#3778EE] hover:font-semibold cursor-pointer"
          >
            harshit@eazetours.com
          </a>
        </div>

        <div className="info-box p-0 rounded-lg w-[100%] flex flex-col items-center sm:w-[33%]">
          <Image src="/images/location.png" alt="Info Icon 3" width={77} height={77} />
          <h2 className="info-heading text-[30px] font-[urbanist] font-bold text-black text-center mt-4">
            Location
          </h2>
          <a
            href="https://maps.app.goo.gl/H7RTSzRAnT3WYnjr9"
            className="info-content text-center text-[#4F5E71] font-[16px] leading-[1.2em] mt-1 transition-all duration-300 transform hover:text-[#3778EE] hover:font-semibold cursor-pointer"
          >
            Eaze House ~2nd Floor, RZP-146 <br /> Palam Colony, New Delhi, South West <br /> Delhi,
            110075
          </a>
        </div>

        <div className="info-box p-0 rounded-lg w-[100%] flex flex-col items-center sm:w-[33%]">
          <Image src="/images/phone.png" alt="Info Icon 2" width={77} height={77} />
          <h2 className="info-heading text-[30px] font-[urbanist] font-bold text-black text-center mt-4">
            Phone
          </h2>
          <a
            href="tel:+919873186168"
            className="info-content text-center text-[#4F5E71] font-[16px] leading-[1.2em] mt-1 transition-all duration-300 transform hover:text-[#3778EE] hover:font-semibold cursor-pointer"
          >
            +91 98731 86168
          </a>
          <a
            href="tel:+919911684818"
            className="info-content text-center text-[#4F5E71] font-[16px] leading-[1.2em] mt-1 transition-all duration-300 transform hover:text-[#3778EE] hover:font-semibold cursor-pointer"
          >
            +91 99116 84818
          </a>
          <a
            href="tel:+919818006830"
            className="info-content text-center text-[#4F5E71] font-[16px] leading-[1.2em] mt-1 transition-all duration-300 transform hover:text-[#3778EE] hover:font-semibold cursor-pointer"
          >
            +91 98180 06830
          </a>
        </div>
      </div>
    </div>
  );
}

export default VerticalTimeline;
