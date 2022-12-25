  // *************************************************************************************************************//



function drawHeart() {

  // *************************************************************************************************************//
                                              // VARIABLES //

  let x = 'G';
  let y = ' ';

  // *************************************************************************************************************//
                                          // ARRAY OF STRINGS //
  let lines = [
                (y.repeat(28) + x.repeat(6)),
                (y.repeat(25) + x.repeat(11)),
                (y.repeat(24) + x.repeat(13)),
                (y.repeat(23) + x.repeat(4) + y.repeat(6) + x.repeat(5)),
                (y.repeat(13) + x.repeat(6) + y.repeat(3) + x.repeat(3) + y.repeat(9) + x.repeat(3)),
                (y.repeat(11) + x.repeat(10) + y.repeat(1) + x.repeat(2) + y.repeat(9) + x.repeat(4)),
                (y.repeat(10) + x.repeat(4) + y.repeat(4) + x.repeat(5) + y.repeat(10) + x.repeat(3)),
                (y.repeat(9) + x.repeat(4) + y.repeat(8) + x.repeat(2) + y.repeat(9) + x.repeat(3)),
                (y.repeat(9) + x.repeat(3) + y.repeat(20) + x.repeat(2)),
                (y.repeat(9) + x.repeat(4) + y.repeat(18) + x.repeat(2)),
                (y.repeat(10) + x.repeat(3) + y.repeat(17) + x.repeat(2)),
                (y.repeat(10) + x.repeat(4) + y.repeat(14) + x.repeat(2) + y.repeat(9) + x + y.repeat(4) + x),
                (y.repeat(11) + x.repeat(4) + y.repeat(11) + x.repeat(3) + y.repeat(9) + x.repeat(2) + y.repeat(3) + x.repeat(2)),
                (y.repeat(13) + x.repeat(3) + y.repeat(9) + x.repeat(3) + y.repeat(8) + x.repeat(3) + y.repeat(2) + x.repeat(3) + y.repeat(2) + x.repeat(2)),
                (y.repeat(14) + x.repeat(4) + y.repeat(5) + x.repeat(3) + y.repeat(9) + x.repeat(4) + y + x.repeat(8)),
                (y.repeat(7) + x.repeat(2) + y.repeat(7) + x.repeat(3) + y.repeat(4) + x.repeat(3) + y.repeat(3) + y.repeat(2) + x.repeat(3) + y.repeat(2) + x.repeat(2)),
                (y.repeat(6) + x.repeat(2) + y.repeat(10) + x.repeat(6) + y.repeat(6) + x.repeat(4)),
                (y.repeat(5) + x.repeat(2) + y.repeat(11) + x.repeat(4) + y.repeat(4) + x.repeat(6)),
                (y.repeat(4) + x.repeat(3) + y.repeat(10) + x.repeat(4) + y + x.repeat(7)),
                (y.repeat(3) + x.repeat(3) + y.repeat(9) + x.repeat(4)),
                (y.repeat(5) + x.repeat(3) + y + x.repeat(7)),
                (y.repeat(7) + x.repeat(3)),
              ];

  // *************************************************************************************************************//
                                                  //  LOGIC //
  for(let line of lines){
    console.log(line);
  };

  // *************************************************************************************************************//
};                                            // END OF FUNCTION //
  // *************************************************************************************************************//
  
  
  // *************************************************************************************************************//
                                            //  RUNING SCRIPT  //
                                                  drawHeart();
  // *************************************************************************************************************//
  
  
