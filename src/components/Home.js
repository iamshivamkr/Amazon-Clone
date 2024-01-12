import React from "react";
import Product from "./Product";

function Home() {
  return (
    <div
      className="flex justify-center ml-auto mr-auto max-w-[1500px]"
      //   home
    >
      <div
        className=""
        // home__container
      >
        <img
          className="w-full -z-[1] -mb-[150px]  "
          style={{
            maskImage:
              "linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0))",
          }}
          // home__image
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img25/cnnjpp/Dec/Pongal/Gateway/Hero/PSDEsktop_Hero_v2_3000._CB585167064_.jpg"
          alt="Pongal & sankranti shopping store"
          //   can change t2t
        />
        <div
          className="flex z-[1] ml-[5px] mr-[5px] "
          // home__row
        >
          {/* Products */}
          <Product
            id="01"
            title="Redmi Note 13 5G"
            price={8499.99}
            image={
              "https://m.media-amazon.com/images/G/31/img21/Wireless/Madhav/JanART24/Teaser1/r2/JAN_ART_9CARD_._CB585749423_.png"
            }
            rating={5}
          />

          <Product
            id="02"
            title="TCL smart Tvs"
            price={16999}
            image={
              "https://m.media-amazon.com/images/G/31/Manjula/JanART24Newlaunches/pngfile/07._CB585846284_.png"
            }
            rating={4}
          />
        </div>
        {/* Row 2 */}
        <div
          className="flex z-[1] ml-[5px] mr-[5px] "
          // home__row
        >
          <Product
            id="03"
            title="NAUTICA Modern Wall Clock"
            price={999}
            image={
              "https://m.media-amazon.com/images/G/31/Manjula/JanART24Newlaunches/pngfile/1._CB585846284_.png"
            }
            rating={4}
          />
          <Product
            id="04"
            title="BSB Home Microfiber Bedsheets"
            price={399}
            image={
              "https://m.media-amazon.com/images/G/31/Manjula/JanART24Newlaunches/pngfile/03._CB585846489_.png"
            }
            rating={3}
          />
          <Product
            id="05"
            title="BenQ Smart Projector"
            price={6999}
            image={
              "https://m.media-amazon.com/images/G/31/Manjula/JanART24Newlaunches/pngfile/06._CB585846284_.png"
            }
            rating={5}
          />
        </div>
        {/* Final row */}
        <div
          className="flex z-[1] ml-[5px] mr-[5px] "
          // home__row
        >
          <Product
            id="06"
            title="Kuber Bamboo Basket With Lid"
            price={1499}
            image={
              "https://m.media-amazon.com/images/G/31/Manjula/JanART24Newlaunches/pngfile/02._CB585846284_.png"
            }
            rating={3}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
