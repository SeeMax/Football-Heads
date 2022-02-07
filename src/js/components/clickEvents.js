import {
  menuToggle,
  smoothScrolling,
} from './index.js'

export let clickEvents = () => {
  
  // Mobile Nav Click Event
  // let menuToggleTL = menuToggle();
  // menuToggleTL.reversed(true);
  // $('.menuToggle').on('click', function() {  
  //   if (menuToggleTL.reversed()) {
  //     menuToggleTL.play();
  //     gsap.set($('.wrapper'), {height:'100%', overflow:'hidden'});
  //   } else {
  //     gsap.set($('.wrapper'), {height:'auto', overflow:'visible'});
  //     menuToggleTL.reverse();
  //   }
	// });

  // $('#mintbutton').on('click', function(){

    // let isMobile = window.matchMedia("only screen and (max-width: 760px)").matches;

    // if (isMobile) {
    //   alert('Unfortunately you can only buy a square on a computer.');
    // } else {
    //   alert('Eventually Mint');
    // }
    
    
  // }); // On Click Portion



$('#mintPlus').on('click', function() {
  let currentCount = $('#mintbutton').attr('data-mint-count');
  if (currentCount < 5) {
    let newCount = parseInt(currentCount) + 1;
    $('#mintbutton').attr('data-mint-count', newCount);
    $('#mintNumber').html(newCount);
    $('#mintCost').html(newCount*0.02);
    // alert(newCount);
  } 
})

$('#mintMinus').on('click', function() {
  let currentCount = $('#mintbutton').attr('data-mint-count');
  if (currentCount > 1) {
    let newCount = parseInt(currentCount) - 1;
    $('#mintbutton').attr('data-mint-count', newCount);
    $('#mintNumber').html(newCount);
    $('#mintCost').html(newCount*0.02);
    // alert(newCount);
  } 
})



  // $('#load-metamask-script').on('click', function(){
  //   //Connect metamask to our site. Get the user's address.
  //   var account = null;
  //   var contract = null;
  //   const ABI = "";
  //   const ADDRESS = "";
  //   (async () =>{
  //       if (window.ethereum){
  //           await window.ethereum.send('eth_requestAccounts');
  //           window.web3 = new Web3(window.ethreum);

  //           var accounts = await web3.eth.getAccounts();
  //           account = accounts[0];
  //           document.getElementById('wallet-address').textContent = account;

  //           contract = new web3.eth.Contract(ABI, ADDRESS);
  //           updateCurrentCount();
  //           document.getElementById('increase-count').onclick = () => {
  //               increaseCurrentCount();
  //           }
  //       }
  //   })();
  // });

  $('a[href^="#"]').on('click', function(e) {
    
    e.preventDefault();
    // console.log('hash it out');
    smoothScrolling($(this));
  });
}