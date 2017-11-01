import React from 'react';

class ApplicationsList extends React.Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <section id="projects" className="section">
        <div className="section-inner">

          <div className="container">

            <header className="heading">
              <h2>Projects</h2>
              <div className="separator"></div>
            </header>

            <ul className="filter">
              <li data-group="all" className="active">All</li>
              <li data-group="web">sites</li>
              <li data-group="illustration">apps</li>
            </ul>

            <ul className="works">
              <li data-groups="[&quot;web&quot;]" className="works-item"><a href="#works-item-details-1" className="works-item-link"><span className="works-item-thumb"><img src="images/lvrt1.png" width="250" height="250" alt=""></span></a>
                <div id="works-item-details-1" className="popup mfp-hide">
                  <figure><img src="images/lvrt1.png" width="750" height="500" alt=""></figure>
                    <div className="popup-inner">
                      <h3>Sunday Sessions by LVRT - Business Website</h3>
                      <p>A website for an LA based collective for LVRT llc.</p>
                      <div className="center"><a href="https://ritagya.github.io/SundaySession/" target="_blank" className="btn">View site</a></div>
                    </div>
              </div>
            </li>
                <li data-groups="[&quot;web&quot;]" className="works-item"><a href="#works-item-details-2" className="works-item-link"><span className="works-item-thumb"><img src="images/flat.png" width="250" height="250" alt=""></span></a>
                  <div id="works-item-details-2" className="popup mfp-hide">
                    <figure><img src="images/flat.png" width="750" height="500" alt=""></figure>
                      <div className="popup-inner">
                        <h3>Colorful Flat</h3>
                        <p>PSD template website.</p>
                        <div className="center"><a href="https://ritagya.github.io/ColorfulFlat/" target="_blank" className="btn">View site</a></div>
                      </div>
              </div>
            </li>
                  <li data-groups="[&quot;web&quot;]" className="works-item works-item-t"><a href="#works-item-details-4" className="works-item-link"><span className="works-item-thumb"><img src="images/visual.png" width="250" height="250" alt=""></span></a>
                    <div id="works-item-details-4" className="popup mfp-hide">
                      <figure><img src="images/visual.png" width="750" height="500" alt=""></figure>
                        <div className="popup-inner">
                          <h3>Noah Andrews</h3>
                          <p>PSD conversion for Noah Andrews website | Personal website</p>
                          <div className="center"><a href="https://ritagya.github.io/VisualArts/" target="_blank" className="btn">View site</a></div>
                        </div>
              </div>
            </li>
                    <li data-groups="[&quot;illustration&quot;]" className="works-item"><a href="#works-item-details-7" className="works-item-link"><span className="works-item-thumb"><img src="images/money1.gif" width="250" height="250" alt=""></span></a>
                      <div id="works-item-details-7" className="popup mfp-hide">
                        <figure><img src="images/budgetApp.png" width="750" height="500" alt=""></figure>
                          <div className="popup-inner">
                            <h3>Budgety</h3>
                            <p>An interactive app to manage your monthly budget.</p>
                            <div className="center"><a href="https://ritagya.github.io/Budgety/" target="_blank" className="btn">View site</a></div>
                          </div>
              </div>
            </li>
                      <li data-groups="[&quot;illustration&quot;]" className="works-item"><a href="#works-item-details-8" className="works-item-link"><span className="works-item-thumb"><img src="images/calendar1.gif" width="250" height="250" alt=""></span></a>
                        <div id="works-item-details-8" className="popup mfp-hide">
                          <figure><img src="images/calendarly1.png" width="750" height="500" alt=""></figure>
                            <div className="popup-inner">
                              <h3>Calendarly</h3>
                              <p>Application to help enterprises book appointments.</p>
                              <div className="center"><a href="https://ritagya.github.io/Calendarly/" target="_blank" className="btn">View site</a></div>
                            </div>
              </div>
            </li>
                        <li data-groups="[&quot;illustration&quot;]" className="works-item"><a href="#works-item-details-9" className="works-item-link"><span className="works-item-thumb"><img src="images/clock4.gif" width="250" height="250" alt=""></span></a>
                          <div id="works-item-details-9" className="popup mfp-hide">
                            <figure><img src="images/digitalClock.png" width="750" height="500" alt=""></figure>
                              <div className="popup-inner">
                                <h3>Digital Clock</h3>
                                <p>A simple responsive digital clock made with <3 Javascript.</p>
                                <div className="center"><a href="https://ritagya.github.io/Digital-Clock/" target="_blank" className="btn">View site</a></div>
                              </div>
              </div>
            </li>
          <li data-groups="[&quot;illustration&quot;]" className="works-item works-item-w"><a href="#works-item-details-3" className="works-item-link"><span className="works-item-thumb"><img src="images/pig.png" width="250" height="250" alt=""></span></a>
            <div id="works-item-details-3" className="popup mfp-hide">
              <figure><img src="images/pig-game.png" width="750" height="500" alt=""></figure>
                <div className="popup-inner">
                  <h3>The Pig Game</h3>
                  <p>GAME RULES:
            <ul style="text-align : left">
                      <li>The game has 2 players, playing in rounds</li>
                      <li>In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score</li>
                      <li>BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn</li>
                      <li>The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn</li>
                      <li>The first player to reach 100 points on GLOBAL score wins the game</li>
                    </ul>
                  </p>
                  <div className="center"><a href="https://ritagya.github.io/pig-game/" target="_blank" className="btn">View site</a></div>
                </div>
              </div>

            </li>
          <li data-groups="[&quot;illustration&quot;]" className="works-item"><a href="#works-item-details-5" className="works-item-link"><span className="works-item-thumb"><img src="images/chinese.png" width="250" height="250" alt=""></span></a>
            <div id="works-item-details-5" className="popup mfp-hide">
              <figure><img src="images/chinesehoro.png" width="750" height="500" alt=""></figure>
                <div className="popup-inner">
                  <h3>Chinese Zodiac</h3>
                  <p>An app created with Javascript where you can get a reading for your characteristics by entering your Chinese animal sign.</p>
                  <div className="center"><a href="https://ritagya.github.io/Chinese_Horoscope_App/" target="_blank" className="btn">View site</a></div>
                </div>
              </div>
            </li>

          <li data-groups="[&quot;illustration&quot;]" className="works-item"><a href="#works-item-details-6" className="works-item-link"><span className="works-item-thumb"><img src="images/shinchan1.png" width="250" height="250" alt=""></span></a>
            <div id="works-item-details-6" className="popup mfp-hide">
              <figure><img src="images/shin.png" width="750" height="500" alt=""></figure>
                <div className="popup-inner">
                  <h3>Shin Chan Quiz</h3>
                  <p>A quiz app on a popular Japanese cartoon called Shin Chan.</p>
                  <div className="center"><a href="https://ritagya.github.io/ShinChan_Quiz_App/" target="_blank" className="btn">View site</a></div>
                </div>
              </div>
            </li>

          </ul>

        </div>

      </div>
    </section>
    )
  }
}

