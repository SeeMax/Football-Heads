import { 
  preLoader,
  externalLinks,
  gsapRegisters,
  clickEvents,
  fieldSetup,
  tickerRun,
  mintButton,
  walletButton,
  calcWinnings,
} from './index.js';

 


window.addEventListener('load', function() {
    // Setup Basic Functionality
    preLoader();
    externalLinks();
    gsapRegisters();
    clickEvents();
    fieldSetup();
    tickerRun();
    // mintButton();
    calcWinnings();
    // walletButton();

  if ($(window).width() <= 1024) {

  }
  
})

window.addEventListener('resize', function() {

});