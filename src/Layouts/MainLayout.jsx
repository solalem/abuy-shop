import React from "react";
import MainWrapper from "../shared/UI/Wrappers/MainPageWrapper";
import ContentWrapper from "../shared/UI/Wrappers/PageContentWrapper";
import MainMenu from "../shared/Menus/MainMenu";
import Footer from "../shared/Footer/Index";
import Sidebar from "../Home/components/Sidebar";
import PropTypes from "prop-types";

const MainLayout = (props) => {
  return (
    <React.Fragment>
      <MainWrapper>
        <ContentWrapper>
          <header>
            <MainMenu
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
