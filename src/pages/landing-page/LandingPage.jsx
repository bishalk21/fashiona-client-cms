import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router";
import AnimatedPage from "../../AnimatedPage";
import AllProductsOnLp from "../../components/allproducts/AllProductsOnLp";
import { CarouselComponent } from "../../components/carousels-card/CarouselsComp";
import { MainLayout } from "../../components/layout/MainLayout";
import { OfferComponent } from "../../components/offers/Offers";
import { SpecialItemComponent } from "../../components/special/SpecialItem";
import { fetchProductsAction } from "../products/productAction";

export const LandingPage = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const { products } = useSelector((state) => state.product);
  useEffect(() => {
    dispatch(fetchProductsAction());
  }, [dispatch]);

  return (
    <AnimatedPage>
      <MainLayout key={location.pathname} location={location}>
        <div className="landing-page-body p-2">
          <CarouselComponent />
          <OfferComponent />
          <SpecialItemComponent />
          <AllProductsOnLp products={products} />
        </div>
      </MainLayout>
    </AnimatedPage>
  );
};
