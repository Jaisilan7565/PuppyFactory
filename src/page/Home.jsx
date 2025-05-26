import React, { useEffect, useState } from "react";
import heroImage from "../assets/hero-dog.jpg";
import grooming from "../assets/grooming.jpeg";
import accessories from "../assets/accessories.jpeg";
import groupPet from "../assets/group-pet.jpg";
import petSection from "../assets/pet-section.jpeg";
import premiumFood from "../assets/premium-food.jpeg";
import { useInView } from "../hooks/useInView";

const Home = () => {
  const cards = [
    { img: grooming, title: "Grooming" },
    { img: accessories, title: "Accessories" },
    { img: groupPet, title: "All Breeds" },
  ];

  const whyUsCards = [
    {
      title: "End-to-End Solutions",
      desc: "We manage every aspect of your furnishing project, saving you time and resources.",
      bg: "bg-gradient-to-br from-[#f3ede9] to-[#ede5de]",
    },
    {
      title: "After-Sales Support",
      desc: "We are committed to providing ongoing support & after-sales service to address any future needs or concerns.",
      bg: "bg-gradient-to-br from-[#eae3da] to-[#d5c9bb]",
    },
    {
      title: "No Variety Restrictions",
      desc: "We partner with any vendor meeting our quality standards, providing the broadest selection of furniture solutions to suit your needs and preferences.",
      bg: "bg-gradient-to-br from-[#5b4532] to-[#3b2e25]",
      textWhite: true,
    },
    {
      title: "Superior Quality",
      desc: "Our partnerships with the best suppliers grant us access to the finest materials, craftsmanship, and quality control processes.",
      image: "https://images.unsplash.com/photo-1600585152915-d208bec867a3", // Replace with your actual image URL
      darkText: true,
    },
    {
      title: "Bespoke Furniture",
      desc: "We specialize in sourcing custom-made furniture pieces that perfectly match your unique vision and requirements.",
      bg: "bg-gradient-to-br from-[#47372a] to-[#2b1d14]",
      textWhite: true,
    },
  ];

  const [ref, inView] = useInView();
  return (
    <div className=" w-full  overflow-x-hidden bg-white">
      <div
        className=" top-0 left-0 w-full h-screen bg-cover bg-center z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
        }}
        loading="lazy"
      >
        <div className="grid grid-row-2 h-full px-10">
          {/* Left Box – aligned to top */}
          <div className="flex justify-start mt-20">
            <div className="self-start w-fit text-peach-light px-6 py-4 backdrop-blur-sm bg-black/30 rounded-xl mt-10">
              <h1 className="text-5xl font-bold mb-4">
                Welcome to Puppy Factory
              </h1>
              <p className="text-xl">
                Pet Grooming • Food & Accessories • Puppies & Kittens of All
                Breeds
              </p>
            </div>
          </div>

          {/* Right Box – aligned to bottom */}
          <div className="flex justify-end mb-20">
            <div className="self-end w-fit text-peach-light px-6 py-4 rounded-xl mb-10">
              <p className="text-xl font-bold md:text-4xl">
                From Grooming to Goodies
                <br />
                <span className="text-peach text-3xl md:text-7xl">
                  Love Your Pet Right!
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Content*/}
      <div class="mx-auto w-screen max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-22">
        <div class="mx-auto max-w-prose text-center">
          <h1 class="text-4xl font-bold text-gray-900 sm:text-5xl">
            At
            <strong class="text-saddle-brown"> Puppy Factory </strong>
          </h1>

          <p class="mt-4 text-base text-pretty text-gray-700 sm:text-lg/relaxed">
            We believe pets are not just animals - they’re family. Whether
            you're looking for top-quality grooming services, nutritious food,
            stylish accessories, or a new furry friend to welcome home, we have
            everything your pet needs to live their happiest, healthiest life.
            Our shelves are stocked with love, and our team is dedicated to
            providing care, comfort, and expert guidance to pet parents. From
            tail wags to purring snuggles, we’re here to make every moment with
            your pet extra special.
          </p>
        </div>
      </div>

      {/* Cards Section */}
      <div className="bg-saddle-brown py-12 px-4 md:px-12 text-peach">
        <h1 className="text-center mb-10 text-4xl font-bold text-white sm:text-5xl">
          We are <strong className="text-peach">BEST</strong> at
        </h1>

        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-items-center"
        >
          {cards.map((card, idx) => (
            <div
              key={idx}
              className={`bg-white w-2/3 h-full rounded-lg shadow-lg overflow-hidden transform transition-all duration-500 ease-in-out
  hover:scale-[1.05] hover:shadow-2xl hover:shadow-peach hover:-rotate-1 hover:-translate-y-1
              ${
                inView
                  ? "translate-x-0 opacity-100 delay-" + idx * 100
                  : "-translate-x-10 opacity-0"
              }`}
            >
              <div className="w-full h-fit flex items-center justify-center bg-gray-100">
                <img
                  src={card.img}
                  alt={card.title}
                  className="max-h-full object-contain"
                />
              </div>
              <div className="p-4 text-gray-800 flex justify-center">
                <h3 className="text-3xl font-semibold">{card.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Section */}
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:items-center md:gap-8">
            <div>
              <div className="max-w-lg md:max-w-none">
                <h2 className="text-2xl font-semibold text-gray-900 sm:text-3xl">
                  Where Wagging Tails Meet Exceptional Care
                </h2>

                <p className="mt-4 text-gray-700">
                  More than just a pet shop, we’re a destination for joy,
                  health, and style. From gourmet treats to breed-specific
                  grooming and curated accessories, every detail is designed
                  with love and expertise. Our passionate team ensures your pet
                  not only looks great but feels great too—because they deserve
                  nothing less than the extraordinary.
                </p>
              </div>
            </div>

            <div>
              <img src={petSection} loading="lazy" className="rounded" alt="" />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-[#f9f6f2] py-12 px-4 md:px-12">
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-10">
          Why <span className="text-[#c1945b] font-bold">Choose</span> Our Pet
          Shop
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-[#f5eee8] rounded-xl p-6 text-center">
            <h3 className="text-lg font-semibold mb-2">Complete Pet Care</h3>
            <p className="text-sm text-gray-700">
              From grooming to health checkups, we offer end-to-end services to
              keep your pets healthy and happy.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-gradient-to-br from-[#f5eee8] to-[#e3d5c4] rounded-xl p-6 text-center">
            <h3 className="text-lg font-semibold mb-2">Lifetime Support</h3>
            <p className="text-sm text-gray-700">
              We offer lifelong assistance, advice, and after-sales services to
              support your pet journey.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-gradient-to-b from-[#5a422f] to-[#2b1f15] text-white rounded-xl p-6 text-center lg:row-span-2 flex flex-col justify-between h-full py-18">
            <div>
              <h3 className="text-lg font-semibold mb-2">
                Diverse Pet Options
              </h3>
              <p className="text-sm">
                We provide a wide variety of breeds, accessories, and services
                tailored to different pet needs and lifestyles.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">
                Custom Pet Solutions
              </h3>
              <p className="text-sm">
                Whether it's a specific breed, accessory, or care package, we
                tailor our offerings to your pet’s needs.
              </p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="relative rounded-xl overflow-hidden lg:col-span-2 h-60">
            <img
              src={premiumFood}
              alt="Pet Supplies"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40 flex items-end p-6 text-white">
              <div>
                <h3 className="text-lg font-semibold mb-2">Premium Quality</h3>
                <p className="text-sm">
                  We work only with trusted suppliers to offer premium pet food,
                  accessories, and health products.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}

      <footer className="bg-saddle-brown text-peach py-10 px-4 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">
          {/* Logo and Tagline */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-2">
              Puppy Factory
            </h2>
            <p className="text-peach/80">
              Where love meets loyalty – because your pet deserves the best.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Products
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-3">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  Grooming
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Pet Spa
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Boarding
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Adoption
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h3 className="text-white font-semibold mb-3">Get in Touch</h3>
            <p className="mb-2">📍 123 Pet Lane, Furryville</p>
            <p className="mb-2">📞 +91 98765 43210</p>
            <p className="mb-4">✉️ info@puppyfactory.com</p>

            <div className="flex space-x-4">
              <a href="#">
                <i className="fab fa-facebook-f text-white hover:text-peach"></i>
              </a>
              <a href="#">
                <i className="fab fa-instagram text-white hover:text-peach"></i>
              </a>
              <a href="#">
                <i className="fab fa-twitter text-white hover:text-peach"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-10 text-center text-peach/70 text-xs border-t border-peach/30 pt-4">
          © {new Date().getFullYear()} Puppy Factory. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Home;
