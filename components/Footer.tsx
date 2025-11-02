"use client"
import React from "react";
import Link from "next/link";
import Image from "next/image";
import signature from "../public/images/logo.png";
import { getLandingTranslations } from "../lib/translationHelper";
import LanguageSelector from "./LanguageSelector";

function Footer({ locale }: { locale: string }) {
  const { footer, navigation } = getLandingTranslations(locale);

  return (
    <footer className="footer flex flex-col bg-[#0D2000] text-white border-t-2 border-gray-300 gap-0">
      <div className="container mx-auto flex flex-wrap flex-col md:flex-row gap-y-0 sm:gap-2 lg:gap-4 justify-between p-6 md:py-10 md:px-7">
        {/* ─────────────────── First Column ──────────────────── */}
        <div className="md:w-[20%] w-full lg:w-[18%] mb-8 text-left pl-0">
          <Link href="/" passHref>
            <Image
              className="z-0 mb-4 md:mx-0"
              src={signature}
              width={200}
              height={87}
              alt="Logo"
            />
          </Link>

          <p className="text-sm mt-2 mb-4">{footer.about}</p>
          <div className="flex justify-start md:justify-start space-x-2 my-4">
            <a
              href="https://www.tripadvisor.in/Attraction_Review-g304551-d17734269-Reviews-EAZE_TOURS-New_Delhi_National_Capital_Territory_of_Delhi.html"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-600 transition-colors"
            >
              <span className="relative w-7 h-7 flex items-center justify-center rounded-full bg-white text-black hover:bg-gray-300">
                <i className="fab fa-tripadvisor text-lg leading-lg" />
              </span>
            </a>

            <a
              href="https://www.facebook.com/eazetour/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-600 transition-colors"
            >
              <span className="relative w-7 h-7 flex items-center justify-center rounded-full bg-white text-black hover:bg-gray-300">
                <i className="fab fa-facebook-f text-lg leading-lg" />
              </span>
            </a>

            <a
              href="https://www.pinterest.com/eazetourpackages/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-600 transition-colors"
            >
              <span className="relative w-7 h-7 flex items-center justify-center rounded-full bg-white text-black hover:bg-gray-300">
                <i className="fab fa-pinterest text-sm leading-lg" />
              </span>
            </a>

            <a
              href="https://www.instagram.com/eazetourpackages/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-600 transition-colors"
            >
              <span className="relative w-7 h-7 flex items-center justify-center rounded-full bg-white text-black hover:bg-gray-300">
                <i className="fab fa-instagram text-lg leading-lg" />
              </span>
            </a>
          </div>

          {/* Language Selector */}
          <div className="mt-4">
            <LanguageSelector currentLocale={locale} variant="footer" />
          </div>
        </div>

        {/* ─────────────────── Second Column ──────────────────── */}
        <div className="md:w-[50%] w-full lg:w-[40%] mb-8 md:pt-10">
          <div className="text-lg font-semibold mb-4">{footer.sections.topDestinations}</div>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-0 gap-y-2">
            <li className="w-max">
              <Link
                href={`/${locale}/packages/forts-and-palaces-india`}
                className="hover:text-blue-600 transition-colors"
              >
                Fort and Palaces of India
              </Link>
            </li>
            <li className="w-max">
              <Link
                href={`/${locale}/packages/royal-rajasthan-tour-package-india`}
                className="hover:text-blue-600 transition-colors"
              >
                Luxury Tour Package
              </Link>
            </li>
            <li className="w-max">
              <Link
                href={`/${locale}/packages/gujarat-tribal-tour-package-india`}
                className="hover:text-blue-600 transition-colors"
              >
                Tribal Tour Package India
              </Link>
            </li>
            <li className="w-max">
              <Link
                href={`/${locale}/packages/kerala-cochin-trivandrum-tour-india`}
                className="hover:text-blue-600 transition-colors"
              >
                Kerala Tour Package
              </Link>
            </li>
            <li className="w-max">
              <Link
                href={`/${locale}/packages/ayurveda-tour-package-kerala-india`}
                className="hover:text-blue-600 transition-colors"
              >
                Ayurveda Tour in India
              </Link>
            </li>
            <li className="w-max">
              <Link
                href={`/${locale}/packages/chardham-pilgrimage-tour-package-india`}
                className="hover:text-blue-600 transition-colors"
              >
                Chardham Tour Package India
              </Link>
            </li>
            <li className="w-max">
              <Link
                href={`/${locale}/packages/tiger-safari-tour-india`}
                className="hover:text-blue-600 transition-colors"
              >
                Tiger Safari Tour Package
              </Link>
            </li>
            <li className="whitespace-normal break-words">
              <Link href={`/${locale}/packages`} className="hover:text-blue-600 transition-colors">
                Best Tours to India from USA
              </Link>
            </li>
            <li className="w-max">
              <Link
                href={`/${locale}/packages/wildlife-safari-tour-package-india`}
                className="hover:text-blue-600 transition-colors"
              >
                Wildlife Tour Package
              </Link>
            </li>
            <li className="w-max">
              <Link
                href={`/${locale}/packages/markha-trek-leh-travel-package`}
                className="hover:text-blue-600 transition-colors"
              >
                Trekking Tour Package in India
              </Link>
            </li>
            <li className="w-max">
              <Link
                href={`/${locale}/packages/south-india-tour-package-india`}
                className="hover:text-blue-600 transition-colors"
              >
                South India Tour Package
              </Link>
            </li>
            <li className="w-max">
              <Link
                href={`/${locale}/packages/romantic-andaman-tour-package-india`}
                className="hover:text-blue-600 transition-colors"
              >
                Honeymoon Tour Package India
              </Link>
            </li>
          </ul>
        </div>

        {/* ─────────────────── Third Column ──────────────────── */}
        <div className="md:w-[10%] w-full lg:w-[8%] mb-8 md:pt-10">
          <div className="text-lg font-semibold mb-4">{footer.sections.topDestinations}</div>
          <ul className="space-y-2 pl-1">
            <li>
              <Link
                href={`/${locale}/packages/classical-delhi-jaipur-agra-khajurao-varanasi-tour-india`}
                className="hover:text-blue-600 transition-colors"
              >
                {footer.destinations.delhi}
              </Link>
            </li>
            <li>
              <Link
                href={`/${locale}/packages/forts-of-rajasthan-from-delhi-11-days-package-india`}
                className="hover:text-blue-600 transition-colors"
              >
                {footer.destinations.jaipur}
              </Link>
            </li>
            <li>
              <Link
                href={`/${locale}/packages/golden-triangle-delhi-agra-jaipur-7-days-package-india`}
                className="hover:text-blue-600 transition-colors"
              >
                {footer.destinations.agra}
              </Link>
            </li>
            <li>
              <Link
                href={`/${locale}/packages/north-india-temple-tour-package-india`}
                className="hover:text-blue-600 transition-colors"
              >
                {footer.destinations.varanasi}
              </Link>
            </li>
            <li>
              <Link
                href={`/${locale}/packages/golden-chariot-bangalore-mysore-goa-tour-package-india`}
                className="hover:text-blue-600 transition-colors"
              >
                {footer.destinations.goa}
              </Link>
            </li>
          </ul>
        </div>

        {/* ─────────────────── Fourth Column ──────────────────── */}
        <div className="md:w-[20%] w-full lg:w-[7%] mb-8 md:pt-10">
          <div className="text-lg font-semibold mb-4">{footer.sections.usefulLinks}</div>
          <ul className="space-y-2 pl-1">
            <li>
              <Link href={`/${locale}/about`} className="hover:text-blue-600 transition-colors">
                {navigation.links.aboutUs}
              </Link>
            </li>
            <li>
              <Link href={`/${locale}/contact`} className="hover:text-blue-600 transition-colors">
                {navigation.links.contactUs}
              </Link>
            </li>
            <li>
              <Link href={`/${locale}/packages`} className="hover:text-blue-600 transition-colors">
                {navigation.links.packages}
              </Link>
            </li>
            <li>
              <Link href={`/${locale}/gallery`} className="hover:text-blue-600 transition-colors">
                {navigation.links.gallery}
              </Link>
            </li>
            <li>
              <Link
                href={`/${locale}/testimonials`}
                className="hover:text-blue-600 transition-colors"
              >
                {navigation.links.testimonials}
              </Link>
            </li>
            <li>
              <Link href={`/${locale}/blog`} className="hover:text-blue-600 transition-colors">
                {navigation.links.blog}
              </Link>
            </li>
          </ul>
        </div>

        {/* ─────────────────── Fifth Column ──────────────────── */}
        <div className="md:w-[70%] w-full lg:w-[17%] mb-8 md:pt-10">
          <div className="text-lg font-semibold mb-4">Contact Us</div>
          <div className="space-y-4">
            <div className="flex items-start space-x-2">
              <i className="fa fa-phone-alt text-lg -mt-1" />
              <div>
                <p className="text-sm">
                  <a href="tel:+919873186168" className="hover:text-blue-600">
                    +91 98731 86168
                  </a>
                </p>
                <p className="text-sm">
                  <a href="tel:+919911684818" className="hover:text-blue-600">
                    +91 99116 84818
                  </a>
                </p>
                <p className="text-sm">
                  <a href="tel:+919818006830" className="hover:text-blue-600">
                    +91 98180 06830
                  </a>
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-2">
              <i className="far fa-envelope text-lg -mt-1" />
              <div>
                <p className="text-sm">
                  <a href="mailto:info@eazetours.com;" className="hover:text-blue-600">
                    info@eazetours.com
                  </a>
                </p>
                <p className="text-sm">
                  <a href="mailto:harshit@eazetours.com" className="hover:text-blue-600">
                    harshit@eazetours.com
                  </a>
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-2">
              <i className="fa fa-map-marker-alt text-lg -mt-1" />
              <p className="text-sm">
                <a
                  href="https://maps.app.goo.gl/H7RTSzRAnT3WYnjr9"
                  className="hover:text-blue-600 w-[200px]"
                >
                  Eaze House ~2nd Floor, RZP-146 Palam Colony, New Delhi, South West Delhi, 110075
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ─────────────────── Copyright ──────────────────── */}
      <div className="w-full bg-midnight text-white py-7 text-center justify-center border-t border-white border-opacity-50">
        <p className="text-sm">
          &copy; Copyright{" "}
          <a href={`/${locale}`} className="hover:text-blue-600">
            Eaze Tours
          </a>{" "}
          {new Date().getFullYear()} All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
