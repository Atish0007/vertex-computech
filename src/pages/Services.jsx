import React from "react";
import "../assets/css/services.css";
import { FaLaptop } from "react-icons/fa";
import { IoDesktopOutline } from "react-icons/io5";
import { IoCallOutline } from "react-icons/io5";
// import { FaBolt } from "react-icons/fa6";
import { FaBolt } from "react-icons/fa";

import { MdHomeRepairService } from "react-icons/md";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { MdVerified } from "react-icons/md";
import { FaUserCog } from "react-icons/fa";

import { MdSecurity } from "react-icons/md";
import { FaHome } from "react-icons/fa";
import { FaCog } from "react-icons/fa";



import one from "../assets/images/services/1.jpg";
import two from "../assets/images/services/2.jpg";
import three from "../assets/images/services/3.jpg";
import four from "../assets/images/services/4.png";
import five from "../assets/images/services/5.jpg";
import six from "../assets/images/services/6.jpg";
import seven from "../assets/images/services/7.jpg";
import eight from "../assets/images/services/8.png";
import nine from "../assets/images/services/9.jpg";
import ten from "../assets/images/services/10.jpg";
import eleven from "../assets/images/services/11.jpg";
import twelve from "../assets/images/services/12.jpg";
import thirteen from "../assets/images/services/13.png";
import fourteen from "../assets/images/services/14.jpg";
import fifteen from "../assets/images/services/15.jpg";
import sixteen from "../assets/images/services/16.jpg";
import seventeen from "../assets/images/services/17.jpg";


import chrome from "../assets/images/services/softwareImg/chrome.svg";
import anydesk from "../assets/images/services/softwareImg/anydesk.svg";
import teamviewer from "../assets/images/services/softwareImg/teamviewer.svg";
import vlc from "../assets/images/services/softwareImg/vlc.svg";
import winrar from "../assets/images/services/softwareImg/winrar.svg";
import adobe from "../assets/images/services/softwareImg/adobe.svg";
import harddisk from "../assets/images/services/softwareImg/Hard_Disk_Sentinel.jpeg";
import crystaldisk from "../assets/images/services/softwareImg/crystaldisk.png";
import keyboardtest from "../assets/images/services/softwareImg/keyboard-test-utility.png";
import WebcamViewer from "../assets/images/services/softwareImg/WebcamViewer.png";
import BatteryInfoView from "../assets/images/services/softwareImg/BatteryInfoView.png";
import ccleaner from "../assets/images/services/softwareImg/ccleaner.png";



const Services = () => {


    const spareParts = [
        { name: "Laptop Screen", img: one },
        { name: "RAM", img: two },
        { name: "Fan", img: three },
        { name: "Adapter", img: four },
        { name: "Keyboard", img: five },
        { name: "Laptop Hinges", img: six },
        { name: "Laptop Speaker", img: seven },
        { name: "Laptop Power Button", img: eight },
        { name: "Laptop DC Jack", img: nine },
        { name: "Laptop Display Cable_", img: ten },
        { name: "Laptop DVD R_W", img: eleven },
        { name: "Laptop Hard Disk", img: twelve },
        { name: "Laptop Battery", img: thirteen },
        { name: "Laptop Motherboard", img: fourteen },
        { name: "Laptop CADDY", img: fifteen },
        { name: "SSD", img: sixteen },
        { name: "Laptop Body Panel", img: seventeen },
    ];


    // Sofwares
    const softwares = [
        {
            name: "Google Chrome",
            img: chrome,
            link: "https://www.dropbox.com/scl/fi/82fte83r50wly1qg01w4j/NZXT-CAM-Setup.exe?rlkey=veyp79jsx20c8tzubd8j4ke2q&st=psmfuaov&dl=1"
        },
        {
            name: "Hard Disk Sentinel",
            img: harddisk,
            link: "https://www.dropbox.com/scl/fi/pl0a0g526bkico8c0pzzc/hdsentinel_pro_setup.zip?rlkey=a9ew2gm3yf382haqsbawtcfn9&st=8fumr10v&dl=1",
        },
        {
            name:"Crystal Disk Info",
            img: crystaldisk,
            link:"https://www.dropbox.com/scl/fi/4ffif56bcuh7xyqw7gm26/CrystalDiskInfo9_8_0.zip?rlkey=js15hzxr7ph2yjhovrwfyo653&st=bj8p94k7&dl=1"
        },
        {
            name:"Keyboard Test Utility 2.1.0",
            img: keyboardtest,
            link: "https://www.dropbox.com/scl/fi/dhzc2d3n93k07hf9jy7wg/keyboardtestutility.exe?rlkey=11ffws51hgdi3n6e5cf8m1jbi&st=ludo70ni&dl=1"
        },
        {
            name:"WebcamViewer",
            img: WebcamViewer,
            link: "https://www.dropbox.com/scl/fi/jxsfmg6v9ifv5xob566d6/Webcam-Viewer.exe?rlkey=rc5g6vhcle1kbk5c4jxz8t8zy&st=a00tszk5&dl=1"
        },
        {
            name:"Battery Info View",
            img: BatteryInfoView,
            link: "https://www.dropbox.com/scl/fi/znr1neb14jyd0mhyvyyf1/batteryinfoview.nupkg?rlkey=gx4qmq7wivbvnm45fvpbegyvq&st=zicrs836&dl=1"
        },
        {
            name:"CCleaner",
            img: ccleaner,
            link: "https://www.dropbox.com/scl/fi/0kbzij4ww5lp0332gctdd/ccsetup_online_setup.exe?rlkey=tgkkr8uutsgrl3yath94e74mr&st=wgmwcweb&dl=1"
        },
        {
            name: "VLC Player",
            img: vlc,
            link: "https://www.dropbox.com/scl/fi/v7nlzu5e1i3kfp5pi5u2i/vlc-3.0.23-win32.exe?rlkey=5a1jisk77lbxo90xud37hjuhm&st=t9xystuz&dl=1"
        },
        {
            name: "WinRAR",
            img: winrar,
            link: "https://www.dropbox.com/scl/fi/2vk37bymtvcaiz34v4977/winrar-x64-720.exe?rlkey=fg8ckl5xf6qi6cwuigeidaj9n&st=hm6405l4&dl=1"
        },
        {
            name: "AnyDesk",
            img: anydesk,
            link: "https://anydesk.com/en/downloads"
        },
        {
            name: "TeamViewer",
            img: teamviewer,
            link: "https://www.teamviewer.com/en/download/"
        },
        {
            name: "Adobe Reader",
            img: adobe,
            link: "https://get.adobe.com/reader/"
        }
    ];



    return (
        <div className="services-container">
            <div className="container py-5">
                {/* ===== SECTION 1: LAPTOP REPAIR ===== */}
                <div className="premium-card mb-5" data-aos="fade-up">
                    {/* Header with gradient accent */}
                    <div className="premium-header laptop-header">
                        <div className="d-flex align-items-center gap-4 mb-3">
                            <span className="display-5"><FaLaptop className="text-white" /></span>
                            <div>
                                <h1 className="fs-1 fw-bold mb-0 text-white">
                                    Professional Laptop Repair Service in Pune
                                    {/* <span className="HeadingTextGlow">Vertex</span> Computech */}
                                </h1>
                                {/* text-white-50 */}
                                <p className="lead text-white mb-0">
                                    {/* Professional Laptop Repair Service in Pune */}
                                    <span className="HeadingTextGlow">Vertex</span> Computech
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="premium-body">
                        {/* Intro */}
                        <p className="fw-semibold fs-5 text-white">
                            <span className="fs-4 fw-bold HeadingTextGlow">L</span>ooking for a reliable laptop repair service in Pune?
                        </p>
                        <p className="text-white-70">
                            At Vertex Computech, we provide fast, affordable, and professional
                            laptop repair services with expert technicians and high-quality
                            parts. We understand how important your laptop is for work, study,
                            and daily tasks. That’s why we offer quick diagnosis and same-day
                            repair solutions to get your device running smoothly again.
                        </p>

                        {/* Brands */}
                        <h3 className="h4 fw-bold text-white mt-5 mb-4 section-services-title laptop-title">
                            Expert Laptop Repair for All Major Brands
                        </h3>
                        <div className="row g-3 mb-5">
                            {[
                                "Apple",
                                "Lenovo",
                                "Dell",
                                "HP",
                                "Acer",
                                "Asus",
                                "Samsung",
                                "Toshiba",
                            ].map((brand) => (
                                <div key={brand} className="col-6 col-sm-4 col-md-3">
                                    <div className="brand-chip">{brand}</div>
                                </div>
                            ))}
                        </div>

                        {/* Services List */}
                        <h3 className="h4 fw-bold text-white mt-5 mb-4 section-title laptop-title">
                            Our Laptop Repair Services
                        </h3>
                        <div className="row g-3 mb-5">
                            {[
                                "Laptop Screen Repair & Replacement",
                                "Laptop Keyboard Repair & Replacement",
                                "Laptop Motherboard Repair",
                                "Laptop Charging Port Repair",
                                "Laptop Battery Replacement",
                                "Laptop RAM Upgrade",
                                "SSD Installation & Upgrade",
                                "Hard Disk Repair & Replacement",
                                "Laptop Fan Repair & Overheating Fix",
                                "Laptop Hinges Repair",
                                "Laptop Charger Repair & Replacement",
                                "Touchpad Repair & Replacement",
                                "Laptop BIOS Installation & Setup",
                                "Laptop Not Turning On Repair",
                                "Laptop Not Charging Issue",
                                "Laptop Booting Problem Fix",
                            ].map((service, idx) => (
                                <div key={idx} className="col-md-6">
                                    <div className="service-item">
                                        <span className="service-bullet laptop-bullet">•</span>
                                        <span className="text-white-70">{service}</span>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Performance Optimization */}
                        <div className="premium-highlight mb-5">
                            <h4 className="h5 fw-bold text-white d-flex align-items-center gap-2">
                                <span><FaBolt className="fs-3 golden" /></span> Laptop Performance Optimization
                            </h4>
                            <div className="row g-2 mt-3">
                                {[
                                    "Virus & Malware Removal",
                                    "Operating System Installation",
                                    "Software Installation",
                                    "Laptop Cleaning & Maintenance",
                                    "System Speed Optimization",
                                ].map((item, idx) => (
                                    <div key={idx} className="col-md-6">
                                        <div className="d-flex gap-2">
                                            <span className="greentick">✔</span>
                                            <span className="text-white-70">{item}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <p className="mt-3 text-white-50">
                                Our goal is to ensure your laptop runs faster, safer, and more
                                efficiently.
                            </p>
                        </div>

                        {/* Data Safety */}
                        <div className="premium-warning mb-5">
                            <h4 className="h5 fw-bold text-white d-flex align-items-center gap-2">
                                <span><MdSecurity className="fs-3 securityIcon" /></span> Data Safety & Recovery Services
                            </h4>
                            <p className="text-white-70 mt-2">
                                Your data is extremely important. Our technicians take extra care
                                to protect your files during the repair process. If your system
                                crashes or your hard drive fails, we also provide professional
                                data recovery services to help recover your valuable files.
                            </p>
                        </div>

                        {/* Why Choose Us */}
                        <h3 className="h4 fw-bold text-white mt-5 mb-4 section-title laptop-title">
                            Why Choose Vertex Computech?
                        </h3>
                        <div className="row g-3 mb-5">
                            {[
                                "Experienced Laptop Repair Technicians",
                                "Fast Diagnosis & Quick Service",
                                "Affordable & Transparent Pricing",
                                "Genuine Parts & Quality Repairs",
                                "Support for All Laptop Brands",
                                "Trusted Service for Students, Professionals & Businesses",
                            ].map((reason, idx) => (
                                <div key={idx} className="col-md-6">
                                    <div className="d-flex gap-2">
                                        <span className="greentick">✔</span>
                                        <span className="text-white-70">{reason}</span>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* CTA */}
                        <div className="premium-cta laptop-cta">
                            <div className="row align-items-center">
                                <div className="col-md-8">
                                    <h4 className="h5 fw-bold text-white">
                                        Visit Vertex Computech Today
                                    </h4>
                                    <p className="text-white-70 mb-md-0">
                                        If your laptop is facing any issue, don’t wait until it gets
                                        worse. Bring your device to Vertex Computech for a professional
                                        inspection and repair.
                                    </p>
                                </div>
                                <div className="col-md-4 text-md-end mt-3 mt-md-0">
                                    <button className="premium-btn laptop-btn">
                                        <IoCallOutline className="fs-4" /> Contact Us
                                    </button>
                                </div>
                            </div>
                        </div>
                        <p className="text-center text-white-50 small mt-4">
                            Fast, Affordable & Professional Laptop Repairs
                        </p>
                    </div>
                </div>

                {/* ===== SECTION 2: COMPUTER REPAIR ===== */}
                <div className="premium-card" data-aos="fade-up" data-aos-delay="200">
                    <div className="premium-header computer-header">
                        <div className="d-flex align-items-center gap-3 mb-3">
                            <span className="display-4"><IoDesktopOutline className="text-white" /></span>
                            <div>
                                <h1 className="fs-1 fw-bold mb-0 text-white">
                                    Professional Desktop Repair Service in Pune
                                    {/* <span className="HeadingTextGlow">Vertex</span> Computech */}
                                </h1>
                                <p className="lead text-white mb-0">
                                    <span className="HeadingTextGlow">Vertex</span> Computech
                                    {/* Professional Desktop Repair Service in Pune */}
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="premium-body">
                        {/* Intro */}
                        <p className="text-white-70">
                            <span className="fs-4 fw-bold HeadingTextGlow">L</span>ooking for reliable computer repair near you in Pune? We provide
                            fast, affordable, and professional computer repair services at your
                            home or office with experienced technicians. With 5+ years of
                            experience in the computer service industry, we understand customer
                            needs and ensure quick and reliable support whenever you need it.
                        </p>

                        {/* Stats */}
                        <div className="row g-4 my-5">
                            {[
                                { icon: <MdHomeRepairService />, title: "Doorstep Service", desc: "within 2 Hours" },
                                { icon: <RiMoneyDollarCircleLine />, title: "Lowest Charges", desc: "Guaranteed" },
                                { icon: <MdVerified />, title: "Trusted by", desc: "1170+ Customers" },
                                { icon: <FaUserCog />, title: "Experienced", desc: "Hardware Engineers" },
                            ].map((item, idx) => (
                                <div key={idx} className="col-sm-6 col-lg-3">
                                    <div className="stat-card">
                                        <div className="stat-icon">{item.icon}</div>
                                        <h5 className="fw-bold text-white mb-0">{item.title}</h5>
                                        <p className="computer-accent mb-0">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Additional perks */}
                        <div className="premium-highlight mb-5">
                            <div className="row g-2">
                                {[
                                    "Free Basic Diagnosis with Pickup & Drop",
                                    "100% Refund if Issue Repeats*",
                                    "Instant Support via WhatsApp, Email & Phone",
                                    "“No Fix – No Fee” – you only pay when resolved",
                                ].map((perk, idx) => (
                                    <div key={idx} className="col-md-6">
                                        <div className="d-flex gap-2">
                                            <span className="greentick">✔</span>
                                            <span className="text-white-70">{perk}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Doorstep details */}
                        <div className="premium-info mb-5">
                            <h4 className="h5 fw-bold text-white d-flex align-items-center gap-2">
                                <span><FaHome className="fs-3 homeIcon" /></span> Affordable Doorstep Computer Repair in Pune
                            </h4>
                            <p className="text-white-70 mt-2">
                                Our experienced hardware engineers will visit your home or office
                                to diagnose and repair your computer in front of you. If the issue
                                is major, we will safely take your device to our service center for
                                advanced repair and deliver it back to you after fixing the problem.
                                You will receive a pickup receipt with full device specifications
                                and spare parts details, which will also be sent to your registered
                                email for transparency.
                            </p>
                            <p className="fw-bold computer-accent mb-0">
                                Our doorstep service starts from just ₹149, making computer repair
                                convenient and affordable for everyone.
                            </p>
                        </div>

                        {/* Fast and Reliable */}
                        <h3 className="h4 fw-bold text-white mt-5 mb-4 section-title computer-title">
                            Fast and Reliable Computer Repair
                        </h3>
                        <p className="text-white-70">
                            Computers are essential devices for work, communication, and business
                            operations. When your computer stops working, it can interrupt your
                            productivity. That’s why we offer urgent computer repair services in
                            Pune with quick response times. Whether you are using Lenovo, Dell,
                            HP, All-in-One desktops, assembled PCs, or branded systems, our
                            technicians can diagnose and fix the problem quickly and efficiently.
                            Facing overheating, booting issues, or hardware failure? Don’t worry
                            – our experts will resolve the issue and restore your computer’s
                            performance.
                        </p>

                        {/* Computer Repair Services */}
                        <h3 className="h4 fw-bold text-white mt-5 mb-4 section-title computer-title">
                            Our Computer Repair Services
                        </h3>
                        <div className="row g-3 mb-5">
                            {[
                                "Virus & Malware Removal",
                                "Computer Motherboard Repair & Replacement",
                                "SMPS Replacement for Power Issues",
                                "Keyboard Replacement (Backlit & Non-Backlit)",
                                "LED / LCD / Touch Screen Replacement",
                                "All-in-One PC Motherboard Repair",
                                "Monitor Screen Replacement (LED / LCD)",
                                "Liquid Damage Repair",
                                "RAM Upgrade & Replacement",
                                "Computer Overheating Fix",
                                "CPU Fan Replacement",
                                "Desktop Hard Disk Replacement",
                                "Desktop SSD Installation",
                                "Computer Booting Issue Repair",
                            ].map((service, idx) => (
                                <div key={idx} className="col-md-6">
                                    <div className="service-item">
                                        <span className="service-bullet computer-bullet">•</span>
                                        <span className="text-white-70">{service}</span>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Optimization & Data Protection */}
                        <div className="premium-highlight mb-5">
                            <h4 className="h5 fw-bold text-white d-flex align-items-center gap-2">
                                <span><FaCog className="fs-3 gearIcon" /></span> Computer Optimization & Data Protection
                            </h4>
                            <div className="row g-2 mt-3">
                                {[
                                    "System cleaning and performance boost",
                                    "Virus and spyware removal",
                                    "Software installation and updates",
                                    "Hardware upgrades for better speed",
                                ].map((item, idx) => (
                                    <div key={idx} className="col-md-6">
                                        <div className="d-flex gap-2">
                                            <span className="greentick">✔</span>
                                            <span className="text-white-70">{item}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <p className="mt-3 text-white-50">
                                During the repair process, we make sure your important data remains
                                safe. Our goal is to return your device with faster performance and
                                improved reliability.
                            </p>
                        </div>

                        {/* CTA */}
                        <div className="premium-cta computer-cta">
                            <div className="row align-items-center">
                                <div className="col-md-8">
                                    <h4 className="h5 fw-bold text-white">
                                        Need immediate computer help?
                                    </h4>
                                    <p className="text-white-70 mb-md-0">
                                        Our team is ready to assist you – on call or at your doorstep.
                                    </p>
                                </div>
                                <div className="col-md-4 text-md-end mt-3 mt-md-0">
                                    <button className="premium-btn computer-btn">
                                        <IoCallOutline className="fs-4" /> Request Service
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Spare Parts Slider Section */}
                <section className="sparePartsSection">
                    <div className="container">

                        <div className="sectionHeader text-center">
                            <h2> <span className="HeadingTextGlow">Computer</span> Spare Parts</h2>
                            {/* <div className="section-divider"></div> */}
                            <p>High Quality Genuine Components</p>
                        </div>

                        <div className="spareSlider">

                            <div className="spareTrack">

                                {/* first loop */}
                                {spareParts.map((item, index) => (
                                    <div className="spareCard" key={index}>
                                        <img src={item.img} alt={item.name} />
                                        <h4>{item.name}</h4>
                                    </div>
                                ))}

                                {/* duplicate loop for infinite */}
                                {spareParts.map((item, index) => (
                                    <div className="spareCard" key={"dup" + index}>
                                        <img src={item.img} alt={item.name} />
                                        <h4>{item.name}</h4>
                                    </div>
                                ))}


                            </div>

                        </div>

                    </div>
                </section>

                {/* Softwares Section */}
                <section className="softwareSection">

                    <div className="container">

                        <div className="sectionHeader text-center">
                            <h2>Popular <span className="HeadingTextGlow">Software</span> Downloads</h2>
                            <p>Quick access to essential computer software</p>
                        </div>

                        <div className="softwareGrid">

                            {softwares.map((item, index) => (
                                <a
                                    href={item.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="softwareCard"
                                    key={index}
                                >

                                    <img src={item.img} alt={item.name}  style={index === 9 || index === 10 ? { transform: "scale(1.5)" } : {}} />
                                    {/* style={index === 1 || index === 2 ? { transform: "scale(1.5)" } : {}} */}

                                    <h4>{item.name}</h4>

                                    <button className="premium-btn laptop-btn">
                                        Download
                                    </button>

                                </a>
                            ))}

                        </div>

                    </div>

                </section>



            </div>
        </div>
    );
};

export default Services;