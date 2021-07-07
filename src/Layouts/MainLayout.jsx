import React from "react";
import MainWrapper from "../shared/Wrappers/MainPageWrapper";
import ContentWrapper from "../shared/Wrappers/PageContentWrapper";
import Header from "../shared/Header";
import Footer from "../shared/Footer";
import Sidebar from "../Home/components/Sidebar";
import PropTypes from "prop-types";

const MainLayout = (props) => {
  return (
    <React.Fragment>
      <MainWrapper>
        <ContentWrapper>
          <header>
            <Header
              //cartItemNumber={props.storeCartCount}
              toggleSideBar={props.toggleSideBar}
            />
          </header>
          <main style={{ display: 'flex' }}>
            <Sidebar/>
            <div style={{ width: 100 + '%' }}>
              {props.children}
              
            </div>
          </main>
          <footer>
            <Footer />
          </footer>
        </ContentWrapper>
      </MainWrapper>
    </React.Fragment>
  );
};

MainLayout.propTpes = {
  //storeCartCount: PropTypes.number.isRequired,
  closeModalClick: PropTypes.func,
  modalMessage: PropTypes.string,
  showSideBar: PropTypes.bool,
  toggleSideBar: PropTypes.func.isRequired,
};

export default MainLayout;
