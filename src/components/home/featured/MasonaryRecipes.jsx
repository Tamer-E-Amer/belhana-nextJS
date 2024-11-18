"use client";
import React from "react";
import Masonry from "react-masonry-css";
import styles from "./MasonryLayout.module.css";
import Link from "next/link";

const images = [
  "/assets/imgs/1.png",
  "/assets/imgs/2.png",
  "/assets/imgs/3.png",
  "/assets/imgs/5.png",
  "/assets/imgs/4.png",
  "/assets/imgs/6.png",
  "/assets/imgs/8.png",
  "/assets/imgs/11.png",
  "/assets/imgs/7.png",
  "/assets/imgs/9.png",
  "/assets/imgs/10.png",
  "/assets/imgs/12.jpg",
];

const breakpointColumnsObj = {
  default: 4,
  1100: 3,
  700: 2,
  500: 1,
};

const MasonryLayout = ({ recipeData }) => {
  return (
    <>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className={styles.myMasonryGrid}
        columnClassName={styles.myMasonryGridColumn}
      >
        {recipeData.map((rec) => (
          // It is important to set the width of the div container of the image
          <Link key={rec._id} href={`belhana/recipe/${rec.slug}`} prefetch={false}>
            <div
              className={`${styles.masonryItem} cursor-pointer relative flex items-center justify-center group overflow-hidden w-full sm:w-[200px]`}
            >
              <img
                src={`assets/imgs/optimized/${rec.coverImage}`}
                alt={rec.title}
                loading="lazy"
              />

              {/* orange div data */}

              <div className=" group-hover:top-1/2  -translate-y-1/2 w-full py-6 bg-primary-orange/80 text-sm md:text-lg text-white transition-all duration-500 absolute -top-36 text-center  ">
                {rec.title}
              </div>
            </div>
          </Link>
        ))}
      </Masonry>
      <Link href={"/belhana/recipe"} className="w-full md:w-[360px]">
        <div className="  border py-2 flex items-center justify-center cursor-pointer text-xl bg-gray-200 hover:bg-primary-orange hover:text-white text-gray-600 transitio duration-300">
          Discover more...
        </div>
      </Link>
    </>
  );
};

export default MasonryLayout;
