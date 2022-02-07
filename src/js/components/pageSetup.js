export let preLoader = () => {
  let tl = new gsap.timeline({
    duration:0.05,
    ease:'power4.out',
    onComplete: function(){
      $('#preloader').remove();
    }
  })
  tl.to('#preloader svg', {scale:0})
	tl.to('#preloader', {opacity:0})
}

export let externalLinks= () => {
	// console.log('external link');
  $('a').each(function() {
    let a = new RegExp('/' + window.location.host + '/');
    if(!a.test(this.href)) {
      $(this).on('click', function(event) {
        event.preventDefault();
        event.stopPropagation();
        window.open(this.href, '_blank');
      });
    }
  });
}

export let smoothScrolling = (theLink) => {
  
  let target = $(theLink).attr('href');
  let headerHeight = $('.header').outerHeight(); 
  gsap.to(window, {duration:1, 
    scrollTo:{
      y:target, 
      // Activate if Header Is Fixed
      // offsetY:headerHeight
    }
  });
  return false;
}

export let fieldSetup = () => {

  let tl = gsap.timeline({
    repeat:-1,
    defaults:{
      duration:10,
      ease:"none",
    }
  })

  // Grass Move
  // 1400 = off screen
  // 1120 = end of screen
  gsap.set('.grassStripe1', {x:-560});
  gsap.set('.grassStripe2', {x:0});
  gsap.set('.grassStripe3', {x:560});
  gsap.set('.grassStripe4', {x:1120});

  tl.to('.grassStripe1', {x:0}, "grassRoll");
  tl.to('.grassStripe2', {x:560}, "grassRoll");
  tl.to('.grassStripe3', {x:1120}, "grassRoll");
  tl.to('.grassStripe4', {x:1680}, "grassRoll");

  // Clock Blink
  gsap.to('.clockLine span', {duration:.05, opacity:0, repeat:-1, repeatDelay:.5, yoyo:true, ease:'none'});
}

export let tickerRun = () => {

  $('.single-ticker-text').wrapAll('<span class="ticker-items">');
  var tickerWidth = $('.the-ticker-section').width();
  var spanWidth = $('.the-ticker-section span').width();
  $('.the-ticker-section span').clone().appendTo('.the-ticker-section');
  $('.the-ticker-section span').wrapAll('<span class="ticker-wrapper">');
    
  gsap.set( '.ticker-wrapper' , {x: tickerWidth } );
  var speed = 200;
  var initDuration = tickerWidth/speed;
  var loopDuration = spanWidth/speed;
  var tl = gsap.timeline({
  defaults:{
    ease:'none'
  }
  });
  tl.to('.ticker-wrapper' , initDuration , { x: 0} );
  tl.to('.ticker-wrapper' , loopDuration , { x: -spanWidth, repeat: -1 } );

}


export let mintButton = () => {
    //Connect metamask to our site. Get the user's address.

  //   document.getElementById('mintbutton').onclick = () => {
    
  //   var amount = 1;
  //   var account = null;
  //   var contract = null;
  //   const ABI = [
  //     {
  //       "inputs": [],
  //       "stateMutability": "nonpayable",
  //       "type": "constructor"
  //     },
  //     {
  //       "anonymous": false,
  //       "inputs": [
  //         {
  //           "indexed": true,
  //           "internalType": "address",
  //           "name": "owner",
  //           "type": "address"
  //         },
  //         {
  //           "indexed": true,
  //           "internalType": "address",
  //           "name": "approved",
  //           "type": "address"
  //         },
  //         {
  //           "indexed": true,
  //           "internalType": "uint256",
  //           "name": "tokenId",
  //           "type": "uint256"
  //         }
  //       ],
  //       "name": "Approval",
  //       "type": "event"
  //     },
  //     {
  //       "anonymous": false,
  //       "inputs": [
  //         {
  //           "indexed": true,
  //           "internalType": "address",
  //           "name": "owner",
  //           "type": "address"
  //         },
  //         {
  //           "indexed": true,
  //           "internalType": "address",
  //           "name": "operator",
  //           "type": "address"
  //         },
  //         {
  //           "indexed": false,
  //           "internalType": "bool",
  //           "name": "approved",
  //           "type": "bool"
  //         }
  //       ],
  //       "name": "ApprovalForAll",
  //       "type": "event"
  //     },
  //     {
  //       "anonymous": false,
  //       "inputs": [
  //         {
  //           "indexed": true,
  //           "internalType": "address",
  //           "name": "previousOwner",
  //           "type": "address"
  //         },
  //         {
  //           "indexed": true,
  //           "internalType": "address",
  //           "name": "newOwner",
  //           "type": "address"
  //         }
  //       ],
  //       "name": "OwnershipTransferred",
  //       "type": "event"
  //     },
  //     {
  //       "anonymous": false,
  //       "inputs": [
  //         {
  //           "indexed": true,
  //           "internalType": "address",
  //           "name": "from",
  //           "type": "address"
  //         },
  //         {
  //           "indexed": true,
  //           "internalType": "address",
  //           "name": "to",
  //           "type": "address"
  //         },
  //         {
  //           "indexed": true,
  //           "internalType": "uint256",
  //           "name": "tokenId",
  //           "type": "uint256"
  //         }
  //       ],
  //       "name": "Transfer",
  //       "type": "event"
  //     },
  //     {
  //       "inputs": [],
  //       "name": "MAX_TOKENS",
  //       "outputs": [
  //         {
  //           "internalType": "uint256",
  //           "name": "",
  //           "type": "uint256"
  //         }
  //       ],
  //       "stateMutability": "view",
  //       "type": "function"
  //     },
  //     {
  //       "inputs": [],
  //       "name": "ProvenanceHash",
  //       "outputs": [
  //         {
  //           "internalType": "string",
  //           "name": "",
  //           "type": "string"
  //         }
  //       ],
  //       "stateMutability": "view",
  //       "type": "function"
  //     },
  //     {
  //       "inputs": [],
  //       "name": "SQUARE_PRICE",
  //       "outputs": [
  //         {
  //           "internalType": "uint256",
  //           "name": "",
  //           "type": "uint256"
  //         }
  //       ],
  //       "stateMutability": "view",
  //       "type": "function"
  //     },
  //     {
  //       "inputs": [
  //         {
  //           "internalType": "uint256",
  //           "name": "numTokens",
  //           "type": "uint256"
  //         }
  //       ],
  //       "name": "SquareMint",
  //       "outputs": [],
  //       "stateMutability": "payable",
  //       "type": "function"
  //     },
  //     {
  //       "inputs": [
  //         {
  //           "internalType": "address",
  //           "name": "addy",
  //           "type": "address"
  //         }
  //       ],
  //       "name": "addToGang",
  //       "outputs": [],
  //       "stateMutability": "nonpayable",
  //       "type": "function"
  //     },
  //     {
  //       "inputs": [
  //         {
  //           "internalType": "address",
  //           "name": "to",
  //           "type": "address"
  //         },
  //         {
  //           "internalType": "uint256",
  //           "name": "tokenId",
  //           "type": "uint256"
  //         }
  //       ],
  //       "name": "approve",
  //       "outputs": [],
  //       "stateMutability": "nonpayable",
  //       "type": "function"
  //     },
  //     {
  //       "inputs": [
  //         {
  //           "internalType": "address",
  //           "name": "owner",
  //           "type": "address"
  //         }
  //       ],
  //       "name": "balanceOf",
  //       "outputs": [
  //         {
  //           "internalType": "uint256",
  //           "name": "",
  //           "type": "uint256"
  //         }
  //       ],
  //       "stateMutability": "view",
  //       "type": "function"
  //     },
  //     {
  //       "inputs": [],
  //       "name": "baseExtension",
  //       "outputs": [
  //         {
  //           "internalType": "string",
  //           "name": "",
  //           "type": "string"
  //         }
  //       ],
  //       "stateMutability": "view",
  //       "type": "function"
  //     },
  //     {
  //       "inputs": [
  //         {
  //           "internalType": "uint256",
  //           "name": "tokenId",
  //           "type": "uint256"
  //         }
  //       ],
  //       "name": "getApproved",
  //       "outputs": [
  //         {
  //           "internalType": "address",
  //           "name": "",
  //           "type": "address"
  //         }
  //       ],
  //       "stateMutability": "view",
  //       "type": "function"
  //     },
  //     {
  //       "inputs": [
  //         {
  //           "internalType": "address",
  //           "name": "owner",
  //           "type": "address"
  //         },
  //         {
  //           "internalType": "address",
  //           "name": "operator",
  //           "type": "address"
  //         }
  //       ],
  //       "name": "isApprovedForAll",
  //       "outputs": [
  //         {
  //           "internalType": "bool",
  //           "name": "",
  //           "type": "bool"
  //         }
  //       ],
  //       "stateMutability": "view",
  //       "type": "function"
  //     },
  //     {
  //       "inputs": [
  //         {
  //           "internalType": "address",
  //           "name": "addy",
  //           "type": "address"
  //         }
  //       ],
  //       "name": "isInGang",
  //       "outputs": [
  //         {
  //           "internalType": "bool",
  //           "name": "",
  //           "type": "bool"
  //         }
  //       ],
  //       "stateMutability": "view",
  //       "type": "function"
  //     },
  //     {
  //       "inputs": [],
  //       "name": "name",
  //       "outputs": [
  //         {
  //           "internalType": "string",
  //           "name": "",
  //           "type": "string"
  //         }
  //       ],
  //       "stateMutability": "view",
  //       "type": "function"
  //     },
  //     {
  //       "inputs": [],
  //       "name": "owner",
  //       "outputs": [
  //         {
  //           "internalType": "address",
  //           "name": "",
  //           "type": "address"
  //         }
  //       ],
  //       "stateMutability": "view",
  //       "type": "function"
  //     },
  //     {
  //       "inputs": [
  //         {
  //           "internalType": "uint256",
  //           "name": "tokenId",
  //           "type": "uint256"
  //         }
  //       ],
  //       "name": "ownerOf",
  //       "outputs": [
  //         {
  //           "internalType": "address",
  //           "name": "",
  //           "type": "address"
  //         }
  //       ],
  //       "stateMutability": "view",
  //       "type": "function"
  //     },
  //     {
  //       "inputs": [],
  //       "name": "renounceOwnership",
  //       "outputs": [],
  //       "stateMutability": "nonpayable",
  //       "type": "function"
  //     },
  //     {
  //       "inputs": [],
  //       "name": "revealed",
  //       "outputs": [
  //         {
  //           "internalType": "bool",
  //           "name": "",
  //           "type": "bool"
  //         }
  //       ],
  //       "stateMutability": "view",
  //       "type": "function"
  //     },
  //     {
  //       "inputs": [
  //         {
  //           "internalType": "uint256",
  //           "name": "",
  //           "type": "uint256"
  //         },
  //         {
  //           "internalType": "uint256",
  //           "name": "value",
  //           "type": "uint256"
  //         }
  //       ],
  //       "name": "royaltyInfo",
  //       "outputs": [
  //         {
  //           "internalType": "address",
  //           "name": "receiver",
  //           "type": "address"
  //         },
  //         {
  //           "internalType": "uint256",
  //           "name": "royaltyAmount",
  //           "type": "uint256"
  //         }
  //       ],
  //       "stateMutability": "view",
  //       "type": "function"
  //     },
  //     {
  //       "inputs": [
  //         {
  //           "internalType": "address",
  //           "name": "from",
  //           "type": "address"
  //         },
  //         {
  //           "internalType": "address",
  //           "name": "to",
  //           "type": "address"
  //         },
  //         {
  //           "internalType": "uint256",
  //           "name": "tokenId",
  //           "type": "uint256"
  //         }
  //       ],
  //       "name": "safeTransferFrom",
  //       "outputs": [],
  //       "stateMutability": "nonpayable",
  //       "type": "function"
  //     },
  //     {
  //       "inputs": [
  //         {
  //           "internalType": "address",
  //           "name": "from",
  //           "type": "address"
  //         },
  //         {
  //           "internalType": "address",
  //           "name": "to",
  //           "type": "address"
  //         },
  //         {
  //           "internalType": "uint256",
  //           "name": "tokenId",
  //           "type": "uint256"
  //         },
  //         {
  //           "internalType": "bytes",
  //           "name": "_data",
  //           "type": "bytes"
  //         }
  //       ],
  //       "name": "safeTransferFrom",
  //       "outputs": [],
  //       "stateMutability": "nonpayable",
  //       "type": "function"
  //     },
  //     {
  //       "inputs": [
  //         {
  //           "internalType": "address",
  //           "name": "operator",
  //           "type": "address"
  //         },
  //         {
  //           "internalType": "bool",
  //           "name": "approved",
  //           "type": "bool"
  //         }
  //       ],
  //       "name": "setApprovalForAll",
  //       "outputs": [],
  //       "stateMutability": "nonpayable",
  //       "type": "function"
  //     },
  //     {
  //       "inputs": [
  //         {
  //           "internalType": "bytes4",
  //           "name": "interfaceId",
  //           "type": "bytes4"
  //         }
  //       ],
  //       "name": "supportsInterface",
  //       "outputs": [
  //         {
  //           "internalType": "bool",
  //           "name": "",
  //           "type": "bool"
  //         }
  //       ],
  //       "stateMutability": "view",
  //       "type": "function"
  //     },
  //     {
  //       "inputs": [],
  //       "name": "symbol",
  //       "outputs": [
  //         {
  //           "internalType": "string",
  //           "name": "",
  //           "type": "string"
  //         }
  //       ],
  //       "stateMutability": "view",
  //       "type": "function"
  //     },
  //     {
  //       "inputs": [
  //         {
  //           "internalType": "uint256",
  //           "name": "tokenId",
  //           "type": "uint256"
  //         }
  //       ],
  //       "name": "tokenURI",
  //       "outputs": [
  //         {
  //           "internalType": "string",
  //           "name": "",
  //           "type": "string"
  //         }
  //       ],
  //       "stateMutability": "view",
  //       "type": "function"
  //     },
  //     {
  //       "inputs": [
  //         {
  //           "internalType": "address",
  //           "name": "from",
  //           "type": "address"
  //         },
  //         {
  //           "internalType": "address",
  //           "name": "to",
  //           "type": "address"
  //         },
  //         {
  //           "internalType": "uint256",
  //           "name": "tokenId",
  //           "type": "uint256"
  //         }
  //       ],
  //       "name": "transferFrom",
  //       "outputs": [],
  //       "stateMutability": "nonpayable",
  //       "type": "function"
  //     },
  //     {
  //       "inputs": [
  //         {
  //           "internalType": "address",
  //           "name": "newOwner",
  //           "type": "address"
  //         }
  //       ],
  //       "name": "transferOwnership",
  //       "outputs": [],
  //       "stateMutability": "nonpayable",
  //       "type": "function"
  //     },
  //     {
  //       "inputs": [
  //         {
  //           "internalType": "address payable",
  //           "name": "wallet",
  //           "type": "address"
  //         },
  //         {
  //           "internalType": "uint256",
  //           "name": "amount",
  //           "type": "uint256"
  //         }
  //       ],
  //       "name": "withdraw",
  //       "outputs": [],
  //       "stateMutability": "payable",
  //       "type": "function"
  //     }
  //   ];

  // const ADDRESS = "0xdd5bace9522991fd1e52404619a4872d838cf410";
  //   (async () =>{
  //     if (window.ethereum){
  //       await window.ethereum.send('eth_requestAccounts');
  //       window.web3 = new Web3(window.ethereum);

  //       var accounts = await web3.eth.getAccounts();
  //       account = accounts[0];
          
  //       contract = new web3.eth.Contract(ABI, ADDRESS);

          
  //       var amount = parseInt(document.getElementById('mintbutton').getAttribute('data-mint-count'));
  //       var price = 20000000000000000;
  //       console.log(amount);
  //       contract.methods.SquareMint(amount).send({from: account, value: price * amount}); // make sure this matches one for one with actual mint price in wei on contract or it won't work.
    
  //     }
  //   })();
  // }

}


export let calcWinnings = () => {

  let fifteenPerETH = $('.fifteenPercentWinnerETH');
  let fortyFivePerETH = $('.fortyFivePercentWinnerETH');
  let fifteenPerUSD = $('.fifteenPercentWinnerUSD');
  let fortyFivePerUSD = $('.fortyFivePercentWinnerUSD');
  let totalPot = 1.98

  fifteenPerETH.html(totalPot * 0.15+" ETH");
  fortyFivePerETH.html(totalPot * 0.45+" ETH");
  
  const settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://coingecko.p.rapidapi.com/simple/price?ids=ethereum&vs_currencies=usd",
    "method": "GET",
    "headers": {
      "x-rapidapi-host": "coingecko.p.rapidapi.com",
      "x-rapidapi-key": "6f51d3f7aamsh94afd664133c27dp1a3f74jsn41e4767ba3e9"
    }
  };
  
  $.ajax(settings).done(function (response) {
    // console.log(response.ethereum.usd);
    let currentUSD = response.ethereum.usd

    let fifteenUSD = ((1.98 * 0.15) * currentUSD).toFixed(2);
    let fortyFiveUSD = ((1.98 * 0.45) * currentUSD).toFixed(2);


    fifteenPerUSD.html("$"+fifteenUSD+"<span>*</span>");
    fortyFivePerUSD.html("$"+fortyFiveUSD+"<span>*</span>");
  });
  
}



