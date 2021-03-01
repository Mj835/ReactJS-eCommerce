import React from "react";

const HeaderC = () => {
  return (
    <>
      <header style={{ transform: "none" }}>
        <header className="jsx-3111965634 state-intro">
          <div id="logo" className="jsx-3111965634  curp psf px1 py1">
            <h5 className="jsx-3111965634">The Condé Code</h5>
          </div>
          <div
            id="to-conde"
            className="jsx-3111965634  no-margin curp psf px1 py1"
          >
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://condenast.com"
              className="jsx-3111965634"
            >
              <div className="jsx-3386783967 btn low-opacity-true btn-inverted-false">
                condenast.com
              </div>
            </a>
          </div>
          <nav aria-hidden="true" className="jsx-3111965634 x xw xjb">
            <div className="jsx-3111965634  small active-true">
              <button tabindex="-1" className="jsx-3111965634">
                <p className="jsx-3111965634">1.Why we're here</p>
              </button>
            </div>
            <div className="jsx-3111965634  small active-false">
              <button tabindex="-1" className="jsx-3111965634">
                <p className="jsx-3111965634">2.What we believe</p>
              </button>
            </div>
            <div className="jsx-3111965634  small active-false">
              <button tabindex="-1" className="jsx-3111965634">
                <p className="jsx-3111965634">3.Our commitment</p>
              </button>
            </div>
          </nav>
          <div
            id="share-links"
            className="jsx-3111965634 curp psf px1 py1 x xw xjb"
          >
            <select aria-label="Set Language">
              <option selected="" value="en-US">
                EN
              </option>
              <option value="zh-CN">中文</option>
              <option value="zh-hant-tw">台灣 </option>
              <option value="fr">fr</option>
              <option value="it">it</option>
              <option value="ja">日本</option>
              <option value="pt">pt</option>
              <option value="ru">RU</option>
              <option value="es">ES</option>
              <option value="es-419">ES-MX </option>
            </select>
            <h6 className="jsx-3111965634">Share:</h6>
            <div className="jsx-3111965634 social-icons x xw xac mxa mb2 xjb">
              <div className="jsx-3111965634 sm-icon ">
                <a
                  aria-label="Condé Nast Twitter"
                  href="https://twitter.com/condenast"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="jsx-3111965634"
                >
                  <img
                    src="/svgs/twitter.svg"
                    alt="Condé Nast Twitter"
                    className="jsx-3111965634"
                  />
                </a>
              </div>
              <div className="jsx-3111965634 sm-icon ">
                <a
                  aria-label="Condé Nast Instagram"
                  href="https://www.instagram.com/condenast/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="jsx-3111965634"
                >
                  <img
                    src="/svgs/ig.svg"
                    alt="Condé Nast Instagram"
                    className="jsx-3111965634"
                  />
                </a>
              </div>
              <div className="jsx-3111965634 sm-icon ">
                <a
                  aria-label="Condé Nast LinkedIn"
                  href="https://www.linkedin.com/company/conde-nast-international"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="jsx-3111965634"
                >
                  <img
                    src="/svgs/linkedin.svg"
                    alt="Condé Nast LinkedIn"
                    className="jsx-3111965634"
                  />
                </a>
              </div>
            </div>
          </div>
          <button className="jsx-3111965634 mobile-expander mobile curp">
            <img
              src="/svgs/mobile-open.svg"
              alt="Toggle Mobile Nav"
              className="jsx-3111965634"
            />
          </button>
          <aside
            id="mobile-nav"
            role="dialog"
            aria-modal="false"
            className="jsx-3111965634 psf t0 l0 bgc-b c-b"
          >
            <div className="oh" style={{ height: "0px" }}>
              <div id="mobile-nav-parent" className="jsx-3111965634"></div>
            </div>
          </aside>
        </header>
      </header>
    </>
  );
};

export default HeaderC;
