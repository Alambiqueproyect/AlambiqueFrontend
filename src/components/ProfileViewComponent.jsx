import React from "react";
// import "../pages/styles/ProfileView.css"
import "./styles/ProfileViewComponent.css"


function ProfileViewComponent() {

  return (
    <>
      <div id="profileViewContiner1">
        <div id="profileViewContainer2">
          <img id="profile-img" src="src\assets\Ororo.png" alt="Ororo" />

          <div className="ProfileViewContainer">
            <div className="SettingContainer">
              <div className="settingObjet">
                <a href="http://localhost:5173/newproduct" id="newProductId" ><h3 >Nuevo Producto</h3></a>
                <img className="profileViewIcon" id='wishlistico' src="src\assets\plusicon.png" alt="plus" />
              </div>
              <div className="settingObjet">
                <h3>Favoritos</h3>
                <img className="profileViewIcon" id='wishlistico' src="src\assets\Star.png" alt="star" />
              </div>
              <div className="settingObjet">
                <h3>Pedidos</h3>
                <p><img className="profileViewIcon" id='orderico' src="src\assets\Package.png" alt="package" /></p>
              </div>
              <div className="settingObjet">
                <h3>Configuración</h3>
                <img className="profileViewIcon" id='settingsico' src="src\assets\GearSix.png" alt="package" />
              </div>
            </div>


          </div>

        </div>
        {/* <div id="ProductContainer"></div> */}
      </div>
    </>
  );
}
export default ProfileViewComponent;
