import React from "react";
import { useLocation } from "react-router";
import AnimatedPage from "../../AnimatedPage";
import { CarouselComponent } from "../../components/carousels-card/CarouselsComp";
import { MainLayout } from "../../components/layout/MainLayout";
import { OfferComponent } from "../../components/offers/Offers";

export const LandingPage = () => {
  const location = useLocation();
  return (
    <AnimatedPage>
      <MainLayout key={location.pathname} location={location}>
        <div className="landing-page-body p-2">
          <CarouselComponent />
          <OfferComponent />
          LandingPage
        </div>
      </MainLayout>
    </AnimatedPage>
  );
};
