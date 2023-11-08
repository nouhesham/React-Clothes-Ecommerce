import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import UseGetproducts from "../../Hooks/UseGetproducts.js";
import { Pagination, Navigation, A11y, Scrollbar } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import { Link } from "react-router-dom";

const Caroussel = () => {
  const [loader, error, products] = UseGetproducts();
  const limitedProducts = products.slice(0, 10);

  const swiperParams = {
    slidesPerView: 5,
    spaceBetween: 40,
    pagination: {
      clickable: true,
    },
    breakpoints: {
      1300: {
        slidesPerView: 4,
        spaceBetween: 15,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      576: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      350: {
        slidesPerView: 1,
        spaceBetween: 30,
      },
    },
  };

  return (
    <section className="most-selling py-5">
      <div className="container">
        <div className="MOstSelling">
          <h4 className="text-center">Most Selling products</h4>
        </div>
        <Swiper
          {...swiperParams}
          modules={[Pagination, Navigation, A11y, Scrollbar]}
          className="mySwiper p-lg-5 p-md-4 p-sm-1"
        >
          {limitedProducts.map((product, index) => {
            return (
              <SwiperSlide
                key={index}
                className="p-lg-3 p-md-2 p-sm-4 "
                style={{ width: "100%" }}
              >
                <figure className="img">
                  <img
                    src={product.image}
                    alt={product.title}
                    // className="p-md-3 p-lg-5 p-sm-1 w-50 mx-auto"
                  ></img>
                </figure>
                <div>
                  <p
                    className="fw-semibold text-center"
                    style={{
                      backgroundColor: "pink",
                      borderRadius: "5rem",
                      width: "80%",
                      margin: "auto",
                    }}
                  >
                    {product.category}
                  </p>
                  <p className="fw-semibold text-center">
                    {product.title.slice(0, 30)}
                  </p>
                  <Link
                    to={`/shop/${product.id}`}
                    className="d-flex justify-content-center text-decoration-none"
                  >
                    View product
                  </Link>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default Caroussel;
