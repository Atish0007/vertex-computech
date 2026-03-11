import React, { useEffect, useState, useRef } from "react";
import "../assets/css/hardwareCarousel.css";

import one from "../assets/images/hardware/1.png";
import two from "../assets/images/hardware/2.png";
import three from "../assets/images/hardware/3.png";
import four from "../assets/images/hardware/4.png";
import five from "../assets/images/hardware/5.png";
import six from "../assets/images/hardware/6.png";
import seven from "../assets/images/hardware/7.png";
import eight from "../assets/images/hardware/8.jpg";
import nine from "../assets/images/hardware/9.png";
import ten from "../assets/images/hardware/10.png";
import elevan from "../assets/images/hardware/11.png";
import twelve from "../assets/images/hardware/12.png";
import threeteen from "../assets/images/hardware/13.png";
import fourteen from "../assets/images/hardware/14.png";
import fiveteen from "../assets/images/hardware/15.png";
import sixteen from "../assets/images/hardware/16.png";
import seventy from "../assets/images/hardware/17.png";

// const cardsData = [
//   { title: "Memory (RAM) Upgrade", desc: "High-speed DDR5 RAM for seamless multitasking.", img: one },
//   { title: "Memory (RAM) Upgrade", desc: "Corsair Vengeance DDR5 performance kit.", img: two },
//   { title: "SSD Upgrade", desc: "Samsung 990 EVO Plus ultra-fast NVMe SSD.", img: three },
//   { title: "SSD Upgrade", desc: "WD Red SA500 SATA SSD for performance boost.", img: four },
//   { title: "HDD Upgrade", desc: "Seagate Barracuda 4TB storage solution.", img: five },
//   { title: "HDD Upgrade", desc: "WD Purple 8TB surveillance HDD.", img: six },
//   { title: "Processor Upgrade", desc: "AMD Ryzen 7 powerful desktop processor.", img: seven },
//   { title: "Processor Upgrade", desc: "Intel Core Ultra high-performance CPU.", img: eight },
//   { title: "Graphics Upgrade", desc: "RTX 5090 AORUS Xtreme GPU.", img: nine },
//   { title: "Keyboard / Mouse", desc: "Wireless gaming combo upgrade.", img: ten },
//   { title: "Liquid Cooling", desc: "240mm RGB AIO liquid cooler.", img: elevan },
//   { title: "Air Cooling", desc: "High airflow RGB cooling fans.", img: twelve },
//   { title: "Cooling Pad", desc: "RGB notebook cooling pad.", img: threeteen },
//   { title: "Cabinet Upgrade", desc: "Premium ATX RGB cabinet.", img: fourteen },
//   { title: "Mouse Pad", desc: "Large stitched waterproof mouse pad.", img: fiveteen },
//   { title: "Headphones", desc: "Alienware wireless ANC headset.", img: sixteen },
//   { title: "Microphone", desc: "USB condenser mic for streaming.", img: seventy }
// ];

const cardsData = [
    { title: "Memory (RAM) Upgrade", desc: "Ant Esports 690 NEO FP 16GB (1 * 16GB) DDR5 5200 MHz Laptop Memory - AE16GD5S52M08C", img: one },
    { title: "Memory (RAM) Upgrade", desc: "CORSAIR Vengeance DDR5 RAM 16GB (2x8GB) 5200MHz CL40 Intel XMP iCUE Compatible Computer Memory.", img: two },
    { title: "SSD / HDD Upgrade", desc: "SAMSUNG 990 EVO Plus SSD 2TB, PCIe 4.0 x4 M.2 2280, Speeds Up-to 7,250MB/s, Upgrade Storage for PC/Laptops.", img: three },
    { title: "SSD / HDD Upgrade", desc: "A WD Red™ SA500 NAS SATA SSD can enhance your NAS’s response time. Efficient caching of big files makes the WD Red SSD ideal for OLTP databases.", img: four },
    { title: "HDD Upgrade", desc: "Seagate Barracuda 4 TB Internal SATA Hard Drive HDD 6Gb/s 256MB Cache 3.5 Inches (8.8 cm) for Computer Desktop PC.", img: five },
    { title: "HDD Upgrade", desc: "Western Digital 8TB WD Purple Surveillance Internal Hard Drive HDD - SATA 6 Gb/s, 256 MB Cache, 3.5.", img: six },
    { title: "Processor Upgrade", desc: "AMD Ryzen 7 9700X Desktop Processor with Integrated Radeon Graphics, 8 cores 16 Threads 32 MB Cache Base Clock 3.8 GHz Up to 5.5 GHz AM5 Socket System Memory DDR5.", img: seven },
    { title: "Processor Upgrade", desc: "Intel® Core™ Ultra 7 Desktop Processor 265 20 cores (8 P-cores + 12 E-cores) up to 5.3 GHz.", img: eight },
    { title: "Graphics Card Upgrade", desc: "GIGABYTE GV-N5090AORUSX WB-32GD | GeForce RTX 5090 AORUS Xtreme WATERFORCE WB 32GB GDDR7 Graphics Card.", img: nine },
    { title: "Keyboard / Mouse Upgrade", desc: "Ant Esports KM500W Pro Wireless Gaming Keyboard Mouse Combo, Rechargeable 104 Key LED Light Up Keyboard Ergonomic Wireless Gaming Mouse, Backlit Mouse Keyboard for Xbox PS5 PS4 PC Laptop.", img: ten },
    { title: "Liquid Cooling System Upgrade", desc: "Ant Esports ICE-240 240mm Addressable RGB 2600RPM AIO I CPU Liquid Cooler - Black I Support Intel.", img: elevan },
    { title: "Air Cooling System Upgrade", desc: "Ant Esports Royale Flow 120 Auto RGB V2 fans come with a unique crystalized ARGB diffuser on both sides of the frame ensuring not only a unique but also a homogeneous look in your PC.", img: twelve },
    { title: "Best Cooling Pad Upgrade", desc: "Ant Esports NC280 RGB Gaming Notebook Cooler, 10 - 17 + Gaming Laptop Cooling Pad for PC + USB Powered Fan + Very Stable and Silent + Compatible Mac and PS5/PS4.", img: threeteen },
    { title: "Cabinet Upgrade", desc: "Ant Esports ICE-4000 RGB Mid- Tower Computer Case/Gaming Cabinet - Black | Supports ATX, Micro-ATX, Mini-ITX | Pre-Installed 3 x 120mm ARGB Fans in Front.", img: fourteen },
    { title: "Mouse Pad", desc: "Ant Esports MP290 Gaming Mouse Pad-L- Large with Stitched Edges, Waterproof Non-Slip Base for Gaming & Office", img: fiveteen },
    { title: "Headphones", desc: "Alienware Aw920H Tri-Mode Wireless Gaming Headset-Dolby Atmos Virtual Surround Sound,Active Noise Cancelling,Ai-Driven Noise-Cancelling Microphone,Usb-C Wireless Dongle-Lunar Light-Over Ear,Multicolor", img: sixteen },
    { title: "Microphone", desc: "Ant Esports Wente 210 Mini USB Condenser Microphone for Podcast Recording, Gaming, PC, Streaming, Computer Microphone for Desktop/Laptop, Compatible with iPhone Microphone YouTube PS4 PS5 Tiktok", img: seventy }
];


export default function HardwareCarousel() {

  const [index, setIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [cardsPerView, setCardsPerView] = useState(4);
  const intervalRef = useRef(null);
  const touchStartX = useRef(0);

  const extendedCards = [
    cardsData[cardsData.length - 1],
    ...cardsData,
    cardsData[0],
  ];

  // Responsive
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 576) setCardsPerView(1);
      else if (window.innerWidth <= 992) setCardsPerView(2);
      else setCardsPerView(4);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Auto Slide
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setIndex((prev) => prev + 1);
    }, 3000);

    return () => clearInterval(intervalRef.current);
  }, []);

  // Infinite Loop Logic
  useEffect(() => {
    if (index === extendedCards.length - 1) {
      setTimeout(() => {
        setIsTransitioning(false);
        setIndex(1);
      }, 500);
    }

    if (index === 0) {
      setTimeout(() => {
        setIsTransitioning(false);
        setIndex(extendedCards.length - 2);
      }, 500);
    }

    const timeout = setTimeout(() => setIsTransitioning(true), 50);
    return () => clearTimeout(timeout);

  }, [index, extendedCards.length]);

  // Manual Controls
  const nextSlide = () => setIndex((prev) => prev + 1);
  const prevSlide = () => setIndex((prev) => prev - 1);

  // Touch Support
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (diff > 50) nextSlide();
    if (diff < -50) prevSlide();
  };

  return (
    <div
      className="amd-carousel-wrapper"
      onMouseEnter={() => clearInterval(intervalRef.current)}
      onMouseLeave={() => {
        intervalRef.current = setInterval(() => {
          setIndex((prev) => prev + 1);
        }, 4000);
      }}
    >
      <button className="amd-arrow left" onClick={prevSlide}>
        &#10094;
      </button>

      <div
        className="amd-carousel-container"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className="amd-carousel-track"
          style={{
            transform: `translateX(-${index * (100 / cardsPerView)}%)`,
            transition: isTransitioning ? "transform 0.5s ease" : "none",
          }}
        >
          {extendedCards.map((card, i) => (
            <div
              className="amd-card"
              key={i}
              style={{ flex: `0 0 ${100 / cardsPerView}%` }}
            >
              <div className="amd-img-wrapper">
                <img src={card.img} alt={card.title} />
              </div>

              <div className="amd-content">
                <h5>{card.title}</h5>
                <p>{card.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button className="amd-arrow right" onClick={nextSlide}>
        &#10095;
      </button>
    </div>
  );
}