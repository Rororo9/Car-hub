"use client";

import Image from "next/image";

import { CustomButton } from "../components";

const Hero = () => {
  const handleScroll = () => {
    const nextSection = document.getElementById("discover");

    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">
          Найти, забронировать, арендовать автомобиль — быстро и очень просто!
        </h1>

        <p className="hero__subtitle">
          Упростите процесс аренды автомобиля с помощью нашего простого процесса бронирования.
        </p>

        <CustomButton
          title="Смотреть автомобили"
          containerStyles="bg-primary-blue text-white rounded-full mt-10"
          handleClick={handleScroll}
        />
      </div>
      <div className="hero__image-container">
        <div className="hero__image">
          <Image src="/hero.png" alt="hero" fill className="object-contain" />
        </div>

        <div className="hero__image-overlay" />
      </div>
    </div>
  );
};

export default Hero;
