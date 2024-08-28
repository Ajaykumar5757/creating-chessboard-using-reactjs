// import React from 'react';

import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChessKing, faChessQueen, faChessRook, faChessBishop, faChessKnight, faChessPawn } from '@fortawesome/free-solid-svg-icons';
import './index.css';


function ShowChessBoard() {
  return (
    <div class="chess-content">
      <h1>Chess Board</h1>
      <div class="row">

        {/* Row 1: Black Major Pieces */}
        <div className="row-element-one"><FontAwesomeIcon icon={faChessRook} className="black-piece" /></div>
        <div className="row-element-two"><FontAwesomeIcon icon={faChessKnight} className="black-piece" /></div>
        <div className="row-element-one"><FontAwesomeIcon icon={faChessBishop} className="black-piece" /></div>
        <div className="row-element-two"><FontAwesomeIcon icon={faChessQueen} className="black-piece" /></div>
        <div className="row-element-one"><FontAwesomeIcon icon={faChessKing} className="black-piece" /></div>
        <div className="row-element-two"><FontAwesomeIcon icon={faChessBishop} className="black-piece" /></div>
        <div className="row-element-one"><FontAwesomeIcon icon={faChessKnight} className="black-piece" /></div>
        <div className="row-element-two"><FontAwesomeIcon icon={faChessRook} className="black-piece" /></div>

        {/* Row 2: Black Pawns */}
        <div className="row-element-two"><FontAwesomeIcon icon={faChessPawn} className="black-piece" /></div>
        <div className="row-element-one"><FontAwesomeIcon icon={faChessPawn} className="black-piece" /></div>
        <div className="row-element-two"><FontAwesomeIcon icon={faChessPawn} className="black-piece" /></div>
        <div className="row-element-one"><FontAwesomeIcon icon={faChessPawn} className="black-piece" /></div>
        <div className="row-element-two"><FontAwesomeIcon icon={faChessPawn} className="black-piece" /></div>
        <div className="row-element-one"><FontAwesomeIcon icon={faChessPawn} className="black-piece" /></div>
        <div className="row-element-two"><FontAwesomeIcon icon={faChessPawn} className="black-piece" /></div>
        <div className="row-element-one"><FontAwesomeIcon icon={faChessPawn} className="black-piece" /></div>

        {/* Row 3: Empty Row */}
        <div class="row-element-one"></div>
        <div class="row-element-two"></div>
        <div class="row-element-one"></div>
        <div class="row-element-two"></div>
        <div class="row-element-one"></div>
        <div class="row-element-two"></div>
        <div class="row-element-one"></div>
        <div class="row-element-two"></div>

        {/* Row 4: Empty Row */}
        <div class="row-element-two"></div>
        <div class="row-element-one"></div>
        <div class="row-element-two"></div>
        <div class="row-element-one"></div>
        <div class="row-element-two"></div>
        <div class="row-element-one"></div>
        <div class="row-element-two"></div>
        <div class="row-element-one"></div>

        {/* Row 5: Empty Row */}
        <div class="row-element-one"></div>
        <div class="row-element-two"></div>
        <div class="row-element-one"></div>
        <div class="row-element-two"></div>
        <div class="row-element-one"></div>
        <div class="row-element-two"></div>
        <div class="row-element-one"></div>
        <div class="row-element-two"></div>

        {/* Row 6: Empty Row */}
        <div class="row-element-two"></div>
        <div class="row-element-one"></div>
        <div class="row-element-two"></div>
        <div class="row-element-one"></div>
        <div class="row-element-two"></div>
        <div class="row-element-one"></div>
        <div class="row-element-two"></div>
        <div class="row-element-one"></div>

        {/* Row 7: White Pawns */}
        <div className="row-element-one"><FontAwesomeIcon icon={faChessPawn} className="white-piece" /></div>
        <div className="row-element-two"><FontAwesomeIcon icon={faChessPawn} className="white-piece" /></div>
        <div className="row-element-one"><FontAwesomeIcon icon={faChessPawn} className="white-piece" /></div>
        <div className="row-element-two"><FontAwesomeIcon icon={faChessPawn} className="white-piece" /></div>
        <div className="row-element-one"><FontAwesomeIcon icon={faChessPawn} className="white-piece" /></div>
        <div className="row-element-two"><FontAwesomeIcon icon={faChessPawn} className="white-piece" /></div>
        <div className="row-element-one"><FontAwesomeIcon icon={faChessPawn} className="white-piece" /></div>
        <div className="row-element-two"><FontAwesomeIcon icon={faChessPawn} className="white-piece" /></div>

        {/* Row 8: White Major Pieces */}
        <div className="row-element-two"><FontAwesomeIcon icon={faChessRook} className="white-piece" /></div>
        <div className="row-element-one"><FontAwesomeIcon icon={faChessKnight} className="white-piece" /></div>
        <div className="row-element-two"><FontAwesomeIcon icon={faChessBishop} className="white-piece" /></div>
        <div className="row-element-one"><FontAwesomeIcon icon={faChessQueen} className="white-piece" /></div>
        <div className="row-element-two"><FontAwesomeIcon icon={faChessKing} className="white-piece" /></div>
        <div className="row-element-one"><FontAwesomeIcon icon={faChessBishop} className="white-piece" /></div>
        <div className="row-element-two"><FontAwesomeIcon icon={faChessKnight} className="white-piece" /></div>
        <div className="row-element-one"><FontAwesomeIcon icon={faChessRook} className="white-piece" /></div>
      </div>
    </div>
  );
}

ReactDOM.render(<ShowChessBoard />, document.getElementById("root"));