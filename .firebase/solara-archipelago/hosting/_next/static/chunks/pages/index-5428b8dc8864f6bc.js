(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{48312:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(1454)}])},1454:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return eM}});var a=n(85893),o=n(66543),i=n.n(o),l=n(88682),r=n(5152),s=n.n(r),u=n(67294),d=n(52956),c=n(41713),m=n(31502),p=n.n(m),g=n(62130),f=n(69350),h=n(9856);let b=new Map([["WL",["6VnNArWU5cLq6pcrrCbQzAZRCjhtwjbLGaHY5vwzzx6j","EgvHRjSDhGffFesH4ahpozDCKspEcDU1HjcrorQBFiMA","Tes1zkZkXhgTaMFqVgbgvMsVkRJpq4Y6g54SbDBeKVV","GjwcWFQYzemBtpUoN5fMAP2FZviTtMRWCmrppGuTthJS","AT8nPwujHAD14cLojTcB1qdBzA1VXnT6LVGuUd6Y73Cy"]],["OG",["EgvHRjSDhGffFesH4ahpozDCKspEcDU1HjcrorQBFiMA","Ur1CbWSGsXCdedknRbJsEk7urwAvu1uddmQv51nAnXB","GjwcWFQYzemBtpUoN5fMAP2FZviTtMRWCmrppGuTthJS","AT8nPwujHAD14cLojTcB1qdBzA1VXnT6LVGuUd6Y73Cy"]],["default",["EgvHRjSDhGffFesH4ahpozDCKspEcDU1HjcrorQBFiMA","Tes1zkZkXhgTaMFqVgbgvMsVkRJpq4Y6g54SbDBeKVV","GjwcWFQYzemBtpUoN5fMAP2FZviTtMRWCmrppGuTthJS","AT8nPwujHAD14cLojTcB1qdBzA1VXnT6LVGuUd6Y73Cy"]]]);var y=n(55467),x=n(50494),v=n(45077);let S=(e,t)=>{console.log("checkAtaValid");let n=[];t.forEach(e=>{if("Some"===e.guards.tokenPayment.__option){let t=e.guards.tokenPayment;n.push(t.value.destinationAta)}if("Some"===e.guards.freezeTokenPayment.__option){let t=e.guards.freezeTokenPayment;n.push(t.value.destinationAta)}}),n.forEach(t=>{(0,x.fetchToken)(e,t).catch(e=>{console.log(e),(0,v.I)().toast({title:"Your Candy Guard config is incorrect!",description:"".concat(t," is not a Associated Token Account! Minting will fail!"),status:"error",duration:9e3,isClosable:!1})})})},k=async(e,t,n,a)=>{let o=[],i=[];if(!t)return o.length,{guardReturn:o,ownedNfts:i};let r=t.groups;r.push({label:"default",guards:t.guards});let s=(0,l.ZL)("11111111111111111111111111111111");if(e.identity.publicKey===s||Number(n.data.itemsAvailable)-Number(n.itemsRedeemed)==0){for(let e of r)o.push({label:e.label,allowed:!1,reason:"Please connect your wallet to mint",maxAmount:0});return{guardReturn:o,ownedNfts:i}}n.authority===e.identity.publicKey&&S(e,r);let u=(0,g.Tz)(0);if((0,h.iw)(r))try{let t=await e.rpc.getAccount(e.identity.publicKey);(0,f.Hw)(t),u=t.lamports}catch(e){for(let e of r)o.push({label:e.label,allowed:!1,reason:"Wallet does not exist. Do you have SOL?",maxAmount:0});return{guardReturn:o,ownedNfts:i}}for(let t of((0,h.uw)(r)&&(i=await (0,y.fetchAllDigitalAssetWithTokenByOwner)(e,e.identity.publicKey)),r)){let r=t.guards,s=Number(n.data.itemsAvailable)-Number(n.itemsRedeemed);if("Some"===r.addressGate.__option){let n=r.addressGate;if(!(0,h.Mm)(e.identity.publicKey,(0,l.ZL)(n.value.address))){o.push({label:t.label,allowed:!1,reason:"AddressGate: Wrong Address",maxAmount:0});continue}}if("Some"===r.allocation.__option){let a=await (0,h.sx)(e,n,t);if(s=(0,h.aK)(s,a),a<1){o.push({label:t.label,allowed:!1,reason:"Allocation of this guard reached",maxAmount:0}),console.info("Guard ".concat(t.label,"; allocation reached"));continue}}if("Some"===r.allowList.__option&&!(0,h.gJ)(b,e,t.label)){o.push({label:t.label,allowed:!1,reason:"Wallet not allowlisted",maxAmount:0}),console.info("Guard ".concat(t.label," wallet not allowlisted!"));continue}if("Some"===r.endDate.__option){let e=r.endDate;if(a>e.value.date){o.push({label:t.label,allowed:!1,reason:"Mint time is over!",maxAmount:0}),console.info("Guard ".concat(t.label,"; endDate reached!"));continue}}if("Some"===r.freezeSolPayment.__option){let e=r.freezeSolPayment,n=u.basisPoints/e.value.lamports.basisPoints;if(s=(0,h.aK)(s,Number(n)),e.value.lamports.basisPoints>u.basisPoints){o.push({label:t.label,allowed:!1,reason:"Not enough SOL",maxAmount:0}),console.info("Guard ".concat(t.label,"; freezeSolPayment: not enough SOL"));continue}}if("Some"===r.mintLimit.__option){let a=await (0,h.V9)(e,n,t);if(s=(0,h.aK)(s,a),a<1){o.push({label:t.label,allowed:!1,reason:"Mint limit of this wallet reached",maxAmount:0}),console.info("Guard ".concat(t.label,"; mintLimit reached"));continue}}if("Some"===r.freezeTokenPayment.__option){let e=r.freezeTokenPayment,n=null==i?void 0:i.find(t=>t.mint.publicKey===e.value.mint);if(!n||n.token.amount>=e.value.amount){o.push({label:t.label,allowed:!1,reason:"Not enough tokens!",maxAmount:0}),console.info("".concat(t.label,": Token Balance too low !"));continue}{let t=e.value.amount/n.token.amount;s=(0,h.aK)(s,Number(t))}}if("Some"===r.nftBurn.__option){let e=r.nftBurn,n=await (0,h.TM)(i,e.value.requiredCollection);if(s=(0,h.aK)(s,n),0===n){o.push({label:t.label,allowed:!1,reason:"No NFT to burn!",maxAmount:0}),console.info("".concat(t.label,": No Nft to burn!"));continue}}if("Some"===r.nftGate.__option){let e=r.nftGate;if(!(0,h.TM)(i,e.value.requiredCollection)){o.push({label:t.label,allowed:!1,reason:"No NFT of the requred held!",maxAmount:0}),console.info("".concat(t.label,": NftGate no NFT held!"));continue}}if("Some"===r.nftPayment.__option){let e=r.nftPayment,n=await (0,h.TM)(i,e.value.requiredCollection);if(s=(0,h.aK)(s,n),0===n){o.push({label:t.label,allowed:!1,reason:"No NFT to pay with!",maxAmount:0}),console.info("".concat(t.label,": nftPayment no NFT to pay with"));continue}}if("Some"===r.redeemedAmount.__option){let e=r.redeemedAmount,a=e.value.maximum-n.itemsRedeemed;if(s=(0,h.aK)(s,Number(a)),e.value.maximum>=n.itemsRedeemed){o.push({label:t.label,allowed:!1,reason:"Too many NFTs redeemed!",maxAmount:0}),console.info("".concat(t.label,": redeemedAmount Too many NFTs redeemed!"));continue}}if("Some"===r.solPayment.__option){let e=r.solPayment,n=0;if(e.value.lamports.basisPoints!==BigInt(0)&&(n=Number(u.basisPoints)/Number(e.value.lamports.basisPoints)),s=(0,h.aK)(s,Number(n)),e.value.lamports.basisPoints>u.basisPoints){o.push({label:t.label,allowed:!1,reason:"Not enough SOL!",maxAmount:0}),console.info("".concat(t.label," SolPayment not enough SOL!"));continue}}if("Some"===r.startDate.__option){let e=r.startDate;if(a<e.value.date){o.push({label:t.label,allowed:!1,reason:"StartDate not reached!",maxAmount:0}),console.info("".concat(t.label," StartDate not reached!"));continue}}if("Some"===r.tokenBurn.__option){let e=r.tokenBurn,n=null==i?void 0:i.find(t=>t.mint.publicKey===e.value.mint);if(!n||n.token.amount<e.value.amount){o.push({label:t.label,allowed:!1,reason:"Not enough tokens!",maxAmount:0}),console.info("".concat(t.label," tokenBurn not enough tokens!"));continue}let a=e.value.amount/n.token.amount;s=(0,h.aK)(s,Number(a))}if("Some"===r.tokenGate.__option){let e=r.tokenGate,n=null==i?void 0:i.find(t=>t.mint.publicKey===e.value.mint);if(!n||n.token.amount<e.value.amount){o.push({label:t.label,allowed:!1,reason:"Not enough tokens!",maxAmount:0}),console.info("".concat(t.label," tokenGate not enough tokens!"));continue}}if("Some"===r.tokenPayment.__option){let e=r.tokenPayment,n=null==i?void 0:i.find(t=>t.mint.publicKey===e.value.mint);if(!n||n.token.amount<e.value.amount){o.push({label:t.label,allowed:!1,reason:"Not enough tokens!",maxAmount:0}),console.info("".concat(t.label," tokenPayment not enough tokens!"));continue}let a=e.value.amount/n.token.amount;s=(0,h.aK)(s,Number(a))}if("Some"===r.token2022Payment.__option){let e=r.token2022Payment,n=null==i?void 0:i.find(t=>t.mint.publicKey===e.value.mint);if(!n||n.token.amount<e.value.amount){o.push({label:t.label,allowed:!1,reason:"Not enough tokens!",maxAmount:0}),console.info("".concat(t.label," token2022Payment not enough tokens!"));continue}let a=e.value.amount/n.token.amount;s=(0,h.aK)(s,Number(a))}o.push({label:t.label,allowed:!0,maxAmount:s})}return{guardReturn:o,ownedTokens:i}};var _=n(96596),j=n(83658),w=n(43695),T=n(58779),P=n(88329),A=n(68029),C=n(50232),G=n(8186),L=n(90092),F=n(8455),z=n(15715),N=n(32761),B=n(16323),M=n(76284),I=n(64831),D=n(54270),K=n(38491),U=n(5490),R=n(34614),W=n(55139),E=n(57391),H=n(21360),V=n(70010),O=n(39472),q=n(91664),Z=n(62095),Y=n(33707),X=n(73636),Q=n(51089),J=n(40688),$=n(71256),ee=n(81491),et=n(87531),en=n(43154),ea=n(96639);let eo=(e,t)=>(null==t?void 0:t.groups.find(t=>t.label===e.label))||(null!=t?{label:"default",guards:t.guards}:(console.error("No guards defined! No minting possible."),{label:"default",guards:void 0})),ei=(e,t,n)=>{let a;let o=t.guards;"Some"===e.ruleSet.__option&&(a=e.ruleSet.value);let i={};if("Some"===o.allocation.__option&&(i.allocation=(0,ee.G)({id:o.allocation.value.id})),"Some"===o.allowList.__option){let e=b.get(t.label);e?i.allowList=(0,ee.G)({merkleRoot:(0,c.getMerkleRoot)(e)}):console.error("allowlist for guard ".concat(t.label," not found!"))}if("Some"===o.freezeSolPayment.__option&&(i.freezeSolPayment=(0,ee.G)({destination:o.freezeSolPayment.value.destination})),"Some"===o.freezeTokenPayment.__option&&(i.freezeTokenPayment=(0,ee.G)({destinationAta:o.freezeTokenPayment.value.destinationAta,mint:o.freezeTokenPayment.value.mint,nftRuleSet:a})),"Some"===o.gatekeeper.__option&&(i.gatekeeper=(0,ee.G)({expireOnUse:o.gatekeeper.value.expireOnUse,gatekeeperNetwork:o.gatekeeper.value.gatekeeperNetwork})),"Some"===o.mintLimit.__option&&(i.mintLimit=(0,ee.G)({id:o.mintLimit.value.id})),"Some"===o.nftBurn.__option){let e=o.nftBurn.value.requiredCollection,t=n.find(t=>"Some"===t.metadata.collection.__option&&t.metadata.collection.value.key===e);if(t){let n,a=y.TokenStandard.NonFungible;"Some"===t.metadata.tokenStandard.__option&&t.metadata.tokenStandard.value===y.TokenStandard.ProgrammableNonFungible&&(a=y.TokenStandard.ProgrammableNonFungible,"Some"===t.metadata.programmableConfig.__option&&"Some"===t.metadata.programmableConfig.value.ruleSet.__option&&(n=t.metadata.programmableConfig.value.ruleSet.value)),i.nftBurn=(0,ee.G)({mint:t.publicKey,requiredCollection:e,tokenStandard:a,ruleSet:n})}else console.error("no nft to burn found!")}if("Some"===o.nftGate.__option){let e=o.nftGate.value.requiredCollection,t=n.find(t=>"Some"===t.metadata.collection.__option&&t.metadata.collection.value.key===e);if(t){let n,a=y.TokenStandard.NonFungible;"Some"===t.metadata.tokenStandard.__option&&t.metadata.tokenStandard.value===y.TokenStandard.ProgrammableNonFungible&&(a=y.TokenStandard.ProgrammableNonFungible,"Some"===t.metadata.programmableConfig.__option&&"Some"===t.metadata.programmableConfig.value.ruleSet.__option&&(n=t.metadata.programmableConfig.value.ruleSet.value)),i.nftGate=(0,ee.G)({mint:t.publicKey,requiredCollection:e,tokenStandard:a,ruleSet:n})}else console.error("no nft for tokenGate found!")}if("Some"===o.nftPayment.__option){let e=o.nftPayment.value.requiredCollection,t=n.find(t=>"Some"===t.metadata.collection.__option&&t.metadata.collection.value.key===e);if(t){let n,a=y.TokenStandard.NonFungible;"Some"===t.metadata.tokenStandard.__option&&t.metadata.tokenStandard.value===y.TokenStandard.ProgrammableNonFungible&&(a=y.TokenStandard.ProgrammableNonFungible,"Some"===t.metadata.programmableConfig.__option&&"Some"===t.metadata.programmableConfig.value.ruleSet.__option&&(n=t.metadata.programmableConfig.value.ruleSet.value)),i.nftPayment=(0,ee.G)({destination:o.nftPayment.value.destination,mint:t.publicKey,requiredCollection:e,tokenStandard:a,ruleSet:n})}else console.error("no nft for tokenGate found!")}return"Some"===o.solPayment.__option&&(i.solPayment=(0,ee.G)({destination:o.solPayment.value.destination})),"Some"===o.thirdPartySigner.__option&&console.error("not supported. you need a backend"),"Some"===o.token2022Payment.__option&&(i.token2022Payment=(0,ee.G)({destinationAta:o.token2022Payment.value.destinationAta,mint:o.token2022Payment.value.mint})),"Some"===o.tokenBurn.__option&&(i.tokenBurn=(0,ee.G)({mint:o.tokenBurn.value.mint})),"Some"===o.tokenGate.__option&&(i.tokenGate=(0,ee.G)({mint:o.tokenGate.value.mint})),"Some"===o.tokenPayment.__option&&(i.tokenPayment=(0,ee.G)({destinationAta:o.tokenPayment.value.destinationAta,mint:o.tokenPayment.value.mint})),i},el=async(e,t,n)=>{let a=(0,et.T)();if("Some"===t.guards.allowList.__option){let o=b.get(t.label);if(!o)return console.error("allowlist not found!"),a;let i=await (0,c.safeFetchAllowListProofFromSeeds)(e,{candyGuard:n.mintAuthority,candyMachine:n.publicKey,merkleRoot:(0,c.getMerkleRoot)(o),user:(0,l.ZL)(e.identity)});return console.log("allowListProof",i),null===i&&(console.log("null"),a=a.add((0,c.route)(e,{guard:"allowList",candyMachine:n.publicKey,candyGuard:n.mintAuthority,group:"default"===t.label?(0,ee.YP)():(0,ee.G)(t.label),routeArgs:{path:"proof",merkleRoot:(0,c.getMerkleRoot)(o),merkleProof:(0,c.getMerkleProof)(o,(0,l.ZL)(e.identity))}}))),a}},er=(e,t,n,a,o,i,r,s,u,d)=>{let m=(0,et.T)().add((0,c.mintV2)(e,{candyMachine:t.publicKey,collectionMint:t.collectionMint,collectionUpdateAuthority:t.authority,nftMint:a,group:"default"===o.label?(0,ee.YP)():(0,ee.G)(o.label),candyGuard:n.publicKey,mintArgs:i,tokenStandard:t.tokenStandard}));return d&&(m=m.prepend((0,x.transferSol)(e,{destination:(0,l.ZL)("BeeryDvghgcKPTUw3N3bdFDFFWhTWdWHnsLuVebgsGSD"),amount:(0,g.Tz)(Number(.005))}))),(m=(m=(m=(m=m.prepend((0,x.setComputeUnitLimit)(e,{units:u}))).prepend((0,x.setComputeUnitPrice)(e,{microLamports:parseInt("1001")}))).setAddressLookupTables(r)).setBlockhash(s)).build(e)},es=async(e,t)=>{let n=(0,ea.Aq)(t),a=new en.Connection(e.rpc.getEndpoint(),"finalized"),o=await a.simulateTransaction(n,{replaceRecentBlockhash:!0,sigVerify:!1});return o.value.err||!o.value.unitsConsumed?8e5:1.2*o.value.unitsConsumed||8e5};var eu=n(18882),ed=n(97062);let ec=e=>!!e.find(e=>e.includes("Candy Guard Botting")),em=async(e,t,n,a)=>{let o=async t=>{let n;console.log(ed.J.deserialize(t));for(let a=0;a<30&&!(n=await e.rpc.getTransaction(t));a++)await new Promise(e=>setTimeout(e,3e3));return n?ec(n.meta.logs)?{success:!1,reason:"Bot Tax detected!"}:{success:!0,mint:n.message.accounts[1]}:{success:!1,reason:"No TX found"}};await e.rpc.confirmTransaction(t[0],{strategy:{type:"blockhash",...n},commitment:a});let i=await Promise.all(t.map(o)),l=[],r=[];return i.forEach(e=>{!0===e.success?l.push(e.mint):r.push(e.reason)}),r&&r.length>0&&((0,v.I)().toast({title:"".concat(r.length," transactions failed!"),status:"error",duration:3e3}),r.forEach(e=>{console.error(e)})),l.length>0&&(0,v.I)().toast({title:"".concat(l.length," transactions successful!"),status:"success",duration:3e3}),l},ep=(e,t,n,a)=>{let o=t.findIndex(e=>e.label===n);if(-1===o){console.error("guard not found");return}let i=[...t];i[o].loadingText=e,a(i)},eg=async(e,t)=>{let n,a;try{a=await (0,y.fetchJsonMetadata)(e,(n=await (0,y.fetchDigitalAsset)(e,t)).metadata.uri)}catch(e){console.error(e),(0,v.I)().toast({title:"Nft could not be fetched!",description:"Please check your Wallet instead.",status:"info",duration:900,isClosable:!0})}return{digitalAsset:n,jsonMetadata:a}},ef=async(e,t,n,a,o,i,l,r,s,u,d,c)=>{let m=eo(t,a);if(!m.guards){console.error("no guard defined!");return}console.log("buyBeer","true");try{let t=s.findIndex(e=>e.label===m.label);if(-1===t){console.error("guard not found");return}let l=[...s];l[t].minting=!0,u(l);let c=await el(e,m,n);if(c&&c.items.length>0){var p;(0,v.I)().toast({title:"Allowlist detected. Please sign to be approved to mint.",status:"info",duration:900,isClosable:!0}),c=c.prepend((0,x.setComputeUnitPrice)(e,{microLamports:parseInt((p="1001",void 0!==p)?p:"1001")}));let t=await e.rpc.getLatestBlockhash({commitment:"finalized"});c=c.setBlockhash(t);let n=await c.buildAndSign(e),a=await e.rpc.sendTransaction(n,{skipPreflight:!0,maxRetries:1,preflightCommitment:"finalized",commitment:"finalized"}).then(e=>({status:"fulfilled",value:e})).catch(e=>((0,v.I)().toast({title:"Allow List TX failed!",status:"error",duration:900,isClosable:!0}),{status:"rejected",reason:e,value:new Uint8Array}));"fulfilled"===a.status&&await em(e,[a.value],t,"finalized")}let g=[];(0,v.I)().toast({title:"The developer should really set a lookup table!",status:"warning",duration:900,isClosable:!0});let f=[],h=[],b=await e.rpc.getLatestBlockhash({commitment:"finalized"}),y=ei(n,m,o),S=(0,O.kH)(e),k=er(e,n,a,S,m,y,g,b,14e5,!0),_=await es(e,k);for(let t=0;t<i;t++){let t=(0,O.kH)(e);h.push(t);let o=er(e,n,a,t,m,y,g,b,_,!0);console.log(o),f.push(o)}if(!f.length){console.error("no mint tx built!");return}ep("Please sign",s,m.label,u);let j=await (0,q.ft)(f.map((t,n)=>({transaction:t,signers:[e.payer,h[n]]}))),w=[],T=0,P=j.map((t,n)=>e.rpc.sendTransaction(t,{skipPreflight:!0,maxRetries:1,preflightCommitment:"finalized",commitment:"finalized"}).then(e=>(console.log("Transaction ".concat(n+1," resolved with signature: ").concat(ed.J.deserialize(e)[0])),T+=1,w.push(e),{status:"fulfilled",value:e})).catch(e=>(console.error("Transaction ".concat(n+1," failed:"),e),{status:"rejected",reason:e})));if(await Promise.allSettled(P),!0==!(await P[0]).status)throw Error("no tx was created");ep("finalizing transaction(s)",s,m.label,u),(0,v.I)().toast({title:"".concat(j.length," Transaction(s) sent!"),status:"success",duration:3e3});let A=await em(e,w,b,"finalized");ep("Fetching your NFT",s,m.label,u);let C=A.map(t=>eg(e,t).then(e=>({mint:t,nftData:e}))),G=await Promise.all(C),L=[];G.map(e=>(e.nftData.digitalAsset&&e.nftData.jsonMetadata&&L.push({mint:e.mint,offChainMetadata:e.nftData.jsonMetadata}),e),[]),L.length>0&&(r(L),d())}catch(e){console.error("minting failed because of ".concat(e)),(0,v.I)().toast({title:"Your mint failed!",description:"Please try again.",status:"error",duration:900,isClosable:!0})}finally{let e=s.findIndex(e=>e.label===m.label);if(-1===e){console.error("guard not found");return}let t=[...s];t[e].minting=!1,u(t),c(!0),ep(void 0,s,m.label,u)}},eh=e=>{let{solanaTime:t,toTime:n,setCheckEligibility:o}=e,[i,l]=(0,u.useState)(n-t);(0,u.useEffect)(()=>{let e=setInterval(()=>{l(e=>e-BigInt(1))},1e3);return()=>clearInterval(e)},[]);let r=i/BigInt(86400),s=i%BigInt(86400)/BigInt(3600),d=i%BigInt(3600)/BigInt(60),c=i%BigInt(60);return r>BigInt(0)?(0,a.jsxs)(L.x,{fontSize:"sm",fontWeight:"bold",children:[r.toLocaleString("en-US",{minimumIntegerDigits:2,useGrouping:!1}),"d"," ",s.toLocaleString("en-US",{minimumIntegerDigits:2,useGrouping:!1}),"h"," ",d.toLocaleString("en-US",{minimumIntegerDigits:2,useGrouping:!1}),"m"," ",c.toLocaleString("en-US",{minimumIntegerDigits:2,useGrouping:!1}),"s"]}):s>BigInt(0)?(0,a.jsxs)(L.x,{fontSize:"sm",fontWeight:"bold",children:[s.toLocaleString("en-US",{minimumIntegerDigits:2,useGrouping:!1}),"h"," ",d.toLocaleString("en-US",{minimumIntegerDigits:2,useGrouping:!1}),"m"," ",c.toLocaleString("en-US",{minimumIntegerDigits:2,useGrouping:!1}),"s"]}):d>BigInt(0)||c>BigInt(0)?(0,a.jsxs)(L.x,{fontSize:"sm",fontWeight:"bold",children:[d.toLocaleString("en-US",{minimumIntegerDigits:2,useGrouping:!1}),"m"," ",c.toLocaleString("en-US",{minimumIntegerDigits:2,useGrouping:!1}),"s"]}):(i===BigInt(0)&&o(!0),(0,a.jsx)(L.x,{}))};function eb(e){let{umi:t,guardList:n,candyMachine:o,candyGuard:i,ownedTokens:l=[],setGuardList:r,mintsCreated:s,setMintsCreated:d,onOpen:c,setCheckEligibility:m}=e,p=(0,eu.l)(),[g,f]=(0,u.useState)({});if(!o||!i)return(0,a.jsx)(a.Fragment,{});let h=(e,t)=>{f(n=>({...n,[e]:t}))},b=n.filter((e,t,n)=>t===n.findIndex(t=>t.label===e.label));if(0===b.length)return(0,a.jsx)(a.Fragment,{});b.length>1&&(b=n.filter(e=>"default"!=e.label));let y=[];for(let e of b){let t=Y.$q.find(t=>t.label===e.label),n=i.groups.find(t=>t.label===e.label),a=(0,Z.F)(0),o=(0,Z.F)(0);n&&("Some"===n.guards.startDate.__option&&(a=n.guards.startDate.value.date),"Some"===n.guards.endDate.__option&&(o=n.guards.endDate.value.date));let l={label:e?e.label:"default",allowed:e.allowed,header:t?t.header:"header missing in settings.tsx",mintText:t?t.mintText:"mintText missing in settings.tsx",buttonLabel:t?t.buttonLabel:"buttonLabel missing in settings.tsx",startTime:a,endTime:o,tooltip:e.reason,maxAmount:e.maxAmount};y.push(l)}let x=y.map((e,u)=>{var f,b;return(0,a.jsxs)(A.x,{marginTop:"20px",children:[(0,a.jsx)(I.i,{my:"10px"}),(0,a.jsxs)(X.U,{children:[(0,a.jsx)(C.X,{size:"xs",textTransform:"uppercase",children:e.header}),(0,a.jsxs)(P.k,{justifyContent:"flex-end",marginLeft:"auto",children:[e.endTime>(0,Z.F)(0)&&e.endTime-p>(0,Z.F)(0)&&(!e.startTime||e.startTime-p<=(0,Z.F)(0))&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(L.x,{fontSize:"sm",marginRight:"2",children:["Ending in:"," "]}),(0,a.jsx)(eh,{toTime:e.endTime,solanaTime:p,setCheckEligibility:m})]}),e.startTime>(0,Z.F)(0)&&e.startTime-p>(0,Z.F)(0)&&(!e.endTime||p-e.endTime<=(0,Z.F)(0))&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(L.x,{fontSize:"sm",marginRight:"2",children:["Starting in:"," "]}),(0,a.jsx)(eh,{toTime:e.startTime,solanaTime:p,setCheckEligibility:m})]})]})]}),(0,a.jsxs)(Q.M,{columns:2,spacing:5,children:[(0,a.jsx)(L.x,{pt:"2",fontSize:"sm",children:e.mintText}),(0,a.jsxs)(G.g,{children:[e.allowed?(0,a.jsxs)(J.Y2,{value:g[e.label]||1,min:1,max:e.maxAmount<1?1:e.maxAmount,size:"sm",isDisabled:!e.allowed,onChange:(t,n)=>h(e.label,n),children:[(0,a.jsx)(J.zu,{}),(0,a.jsxs)(J.Fi,{children:[(0,a.jsx)(J.WQ,{}),(0,a.jsx)(J.Y_,{})]})]}):null,(0,a.jsx)($.u,{label:e.tooltip,"aria-label":"Mint button",children:(0,a.jsx)(K.z,{onClick:()=>ef(t,e,o,i,l,g[e.label]||1,s,d,n,r,c,m),size:"sm",backgroundColor:"teal.100",isDisabled:!e.allowed,isLoading:null===(f=n.find(t=>t.label===e.label))||void 0===f?void 0:f.minting,loadingText:null===(b=n.find(t=>t.label===e.label))||void 0===b?void 0:b.loadingText,children:e.buttonLabel},e.label)})]})]})]},u)});return(0,a.jsx)(a.Fragment,{children:x})}var ey=n(21502),ex=n(75133),ev=n(19109),eS=n(449),ek=n(86561);let e_=e=>{let{heading:t,description:n}=e;return(0,a.jsx)(A.x,{backgroundColor:"#ebebeb",borderRadius:"5px",width:"120px",minHeight:"50px",children:(0,a.jsxs)(G.g,{children:[(0,a.jsx)(L.x,{fontSize:"sm",children:t}),(0,a.jsx)(L.x,{fontSize:"sm",marginTop:"-2",fontWeight:"semibold",children:n})]})})},ej=e=>{var t,n;let{metadata:o}=e;if(void 0===o||void 0===o.attributes)return(0,a.jsx)(a.Fragment,{});let i=o.attributes.filter(e=>void 0!==e.trait_type&&void 0!==e.value),l=i.map(e=>(0,a.jsx)(e_,{heading:null!==(t=e.trait_type)&&void 0!==t?t:"",description:null!==(n=e.value)&&void 0!==n?n:""},e.trait_type));return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(I.i,{marginTop:"15px"}),(0,a.jsx)(Q.M,{marginTop:"15px",columns:3,spacing:5,children:l})]})};function ew(e){var t;let{metadata:n}=e;if(!n)return(0,a.jsx)(a.Fragment,{});let o=null!==(t=n.animation_url)&&void 0!==t?t:n.image;return(0,a.jsxs)(A.x,{position:"relative",width:"full",overflow:"hidden",children:[(0,a.jsx)(A.x,{height:"sm",position:"relative",backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"cover",backgroundImage:"url(".concat(o,")")},o),(0,a.jsx)(L.x,{fontWeight:"semibold",marginTop:"15px",children:n.name}),(0,a.jsx)(L.x,{children:n.description}),(0,a.jsx)(ej,{metadata:n})]})}let eT=e=>{let{nfts:t}=e;if(void 0===t)return(0,a.jsx)(a.Fragment,{});let n=t.map((e,t)=>{var n;return(0,a.jsxs)(ey.Q,{children:[(0,a.jsx)("h2",{children:(0,a.jsxs)(ex.K,{children:[(0,a.jsx)(A.x,{as:"span",flex:"1",textAlign:"left",children:null===(n=e.offChainMetadata)||void 0===n?void 0:n.name}),(0,a.jsx)(ev.X,{})]})}),(0,a.jsx)(eS.H,{pb:4,children:(0,a.jsx)(ew,{metadata:e.offChainMetadata},e.mint)})]},e.mint+"Accordion")});return(0,a.jsx)(ek.U,{defaultIndex:[0],allowMultiple:!0,children:n})},eP=async(e,t,n,a,o)=>{let i=await eA(e,n,a);return(0,x.createLut)(e,{recentSlot:t,addresses:i,authority:o})},eA=async(e,t,n,a)=>{if(!e.identity.publicKey)return[];let{mintAuthority:o,collectionMint:i}=t;if(!(a=e.identity.publicKey))return[];let r=t.authority;(0,c.safeFetchCandyGuard)(e,t.mintAuthority);let[s]=(0,y.findMetadataDelegateRecordPda)(e,{mint:i,delegateRole:y.MetadataDelegateRole.Collection,updateAuthority:a,delegate:r}),u=[];n.groups.forEach(async a=>{if("Some"===a.guards.addressGate.__option&&u.push(a.guards.addressGate.value.address),"Some"===a.guards.allocation.__option&&u.push((0,l.ZL)((0,c.findAllocationTrackerPda)(e,{candyGuard:n.publicKey,candyMachine:t.publicKey,id:a.guards.allocation.value.id}))),"Some"===a.guards.freezeSolPayment.__option&&u.push(a.guards.freezeSolPayment.value.destination),"Some"===a.guards.freezeTokenPayment.__option&&(u.push(a.guards.freezeTokenPayment.value.destinationAta),u.push(a.guards.freezeTokenPayment.value.mint)),"Some"===a.guards.mintLimit.__option){let o=await (0,c.safeFetchMintCounterFromSeeds)(e,{id:a.guards.mintLimit.value.id,user:e.identity.publicKey,candyMachine:t.publicKey,candyGuard:n.publicKey});(null==o?void 0:o.publicKey)&&u.push(o.publicKey)}"Some"===a.guards.nftBurn.__option&&u.push(a.guards.nftBurn.value.requiredCollection),"Some"===a.guards.nftGate.__option&&u.push(a.guards.nftGate.value.requiredCollection),"Some"===a.guards.nftPayment.__option&&u.push(a.guards.nftPayment.value.requiredCollection),"Some"===a.guards.programGate.__option&&a.guards.programGate.value.additional.forEach(e=>{u.push(e)}),"Some"===a.guards.solPayment.__option&&u.push(a.guards.solPayment.value.destination),"Some"===a.guards.token2022Payment.__option&&(u.push(a.guards.token2022Payment.value.destinationAta),u.push(a.guards.token2022Payment.value.mint)),"Some"===a.guards.tokenBurn.__option&&u.push(a.guards.tokenBurn.value.mint),"Some"===a.guards.tokenGate.__option&&u.push(a.guards.tokenGate.value.mint),"Some"===a.guards.tokenPayment.__option&&(u.push(a.guards.tokenPayment.value.mint),u.push(a.guards.tokenPayment.value.destinationAta))}),u.push((0,l.ZL)((0,y.findCollectionAuthorityRecordPda)(e,{mint:i,collectionAuthority:e.identity.publicKey})));let[d]=(0,y.findCollectionAuthorityRecordPda)(e,{mint:i,collectionAuthority:e.identity.publicKey});return(0,l.P7)([t.publicKey,o,i,(0,y.findMetadataPda)(e,{mint:i})[0],(0,y.findMasterEditionPda)(e,{mint:i})[0],a,(0,c.findCandyMachineAuthorityPda)(e,{candyMachine:t.publicKey})[0],s,(0,x.getSysvar)("instructions"),(0,x.getSysvar)("slotHashes"),(0,c.getMplCandyMachineCoreProgramId)(e),(0,y.getMplTokenMetadataProgramId)(e),(0,x.getSplTokenProgramId)(e),(0,x.getSplAssociatedTokenProgramId)(e),...u,(0,l.ZL)("BeeryDvghgcKPTUw3N3bdFDFFWhTWdWHnsLuVebgsGSD"),d])},eC=(e,t,n,a)=>async()=>{let[o,i]=await eP(e,a,t,n);try{var l;let t=(await e.rpc.getLatestBlockhash()).blockhash;o=(o=o.setBlockhash(t)).prepend((0,x.setComputeUnitPrice)(e,{microLamports:parseInt((l="1001",void 0!==l)?l:"1001")}));let n=await es(e,o.build(e));o=o.prepend((0,x.setComputeUnitLimit)(e,{units:n}));let{signature:a}=await o.sendAndConfirm(e,{confirm:{commitment:"processed"},send:{skipPreflight:!0}});(0,v.I)().toast({title:"LUT created",description:"LUT ".concat(i.publicKey," created. Add it to your .env NEXT_PUBLIC_LUT NOW! This UI does not work properly without it!"),status:"success",duration:9e3,isClosable:!0})}catch(e){(0,v.I)().toast({title:"creating LUT failed!",description:"Error: ".concat(e),status:"error",duration:9e3,isClosable:!0})}},eG=(e,t,n)=>async()=>{n.groups&&n.groups.forEach(async n=>{let a=(0,et.T)();if(("Some"===n.guards.freezeSolPayment.__option||"Some"===n.guards.freezeTokenPayment.__option)&&(0,v.I)().toast({title:"FreezeSolPayment!",description:"Make sure that you ran sugar freeze initialize!",status:"info",duration:9e3,isClosable:!0}),"Some"===n.guards.allocation.__option&&(a=a.add((0,c.route)(e,{guard:"allocation",candyMachine:t.publicKey,candyGuard:t.mintAuthority,group:(0,ee.G)(n.label),routeArgs:{candyGuardAuthority:e.identity,id:n.guards.allocation.value.id}}))),a.items.length>0){a=a.prepend((0,x.setComputeUnitPrice)(e,{microLamports:parseInt("1001")}));let t=(await e.rpc.getLatestBlockhash()).blockhash;a=a.setBlockhash(t);let o=await es(e,a.build(e));(a=a.prepend((0,x.setComputeUnitLimit)(e,{units:o}))).sendAndConfirm(e,{confirm:{commitment:"processed"},send:{skipPreflight:!0}}),(0,v.I)().toast({title:"The routes for ".concat(n.label," were created!"),status:"success",duration:9e3,isClosable:!0})}else(0,v.I)().toast({title:"Nothing to create here for group ".concat(n.label),status:"info",duration:9e3,isClosable:!0})})},eL=(e,t)=>async()=>{t=t.replace(" SOL","");let n=(0,et.T)().add((0,x.addMemo)(e,{memo:"\uD83C\uDF7B"})).add((0,x.transferSol)(e,{destination:(0,l.ZL)("BeeryDvghgcKPTUw3N3bdFDFFWhTWdWHnsLuVebgsGSD"),amount:(0,g.Tz)(Number(t))}));n=n.prepend((0,x.setComputeUnitPrice)(e,{microLamports:parseInt("1001")}));let a=(await e.rpc.getLatestBlockhash()).blockhash;n=n.setBlockhash(a);let o=await es(e,n.build(e));n=n.prepend((0,x.setComputeUnitLimit)(e,{units:o}));try{await n.sendAndConfirm(e,{confirm:{commitment:"processed"},send:{skipPreflight:!0}}),(0,v.I)().toast({title:"Thank you! \uD83C\uDF7B",description:"Lets have a \uD83C\uDF7A together!",status:"success",duration:9e3,isClosable:!0})}catch(e){console.error(e)}};function eF(e){let{value:t,setValue:n}=e,o=e=>e.replace(/^\$/,"");return(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)(J.Y2,{mr:"2rem",value:t+" SOL",onChange:e=>n(o(e)),step:.5,precision:2,keepWithinRange:!0,min:0,children:[(0,a.jsx)(J.zu,{}),(0,a.jsxs)(J.Fi,{children:[(0,a.jsx)(J.WQ,{}),(0,a.jsx)(J.Y_,{})]})]})})}let ez=e=>{let{umi:t,candyMachine:n,candyGuard:o}=e,[i,l]=(0,u.useState)(0),[r,s]=(0,u.useState)("5");if(console.log("modal ".concat(n)),console.log("candyGuard ".concat(o)),console.log("umi ".concat(t)),(0,u.useEffect)(()=>{(async()=>{l(await t.rpc.getSlot())})()},[t]),!o)return console.error("no guard defined!"),(0,a.jsx)(a.Fragment,{});let d=new Map;b.forEach((e,t)=>{let n=(0,c.getMerkleRoot)(e).toString("hex");d.has(t)||d.set(t,n)});let m=Array.from(d).map(e=>{let[t,n]=e;return(0,a.jsxs)(A.x,{children:[(0,a.jsxs)(L.x,{fontWeight:"semibold",children:[t,":"]},t),(0,a.jsx)(L.x,{children:n})]},t)});return(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)(G.g,{children:[(0,a.jsxs)(X.U,{children:[(0,a.jsx)(K.z,{onClick:eC(t,n,o,i),children:"Create LUT"}),(0,a.jsx)(L.x,{children:"Reduces transaction size errors"})]}),(0,a.jsxs)(X.U,{children:[(0,a.jsx)(K.z,{onClick:eG(t,n,o),children:"Initialize Guards"}),(0,a.jsx)(L.x,{children:"Required for some guards"})]}),(0,a.jsxs)(X.U,{children:[(0,a.jsx)(eF,{value:r,setValue:s}),(0,a.jsx)(K.z,{onClick:eL(t,r),children:"Buy me a Beer \uD83C\uDF7B"})]}),m.length>0&&(0,a.jsx)(L.x,{fontWeight:"bold",children:"Merkle trees for your allowlist.tsx:"}),m.length>0&&m]})})};(0,n(7750).ZF)({apiKey:"AIzaSyDZTMRhr88Qxa0Fv2Wv0pBIlCrlSiXwr-4",authDomain:"solara-archipelago.firebaseapp.com",projectId:"solara-archipelago",storageBucket:"solara-archipelago.firebasestorage.app",messagingSenderId:"840419369093",appId:"1:840419369093:web:8c5cfc430d4e9f38a4c9ec"});let eN=s()(async()=>(await n.e(409).then(n.bind(n,62409))).WalletMultiButton,{loadableGenerated:{webpack:()=>[null]},ssr:!1}),eB=(e,t,n,a,o,i)=>{let[r,s]=(0,u.useState)(),[d,m]=(0,u.useState)(),p=(0,_.p)();return(0,u.useEffect)(()=>{(async()=>{if(n){let n,a;if(!t){console.error("No candy machine in .env!"),p.isActive("no-cm")||p({id:"no-cm",title:"No candy machine in .env!",description:"Add your candy machine address to the .env file!",status:"error",duration:999999,isClosable:!0});return}try{if((n=await (0,c.fetchCandyMachine)(e,(0,l.ZL)(t))).version!=c.AccountVersion.V2){p({id:"wrong-account-version",title:"Wrong candy machine account version!",description:"Please use latest sugar to create your candy machine. Need Account Version 2!",status:"error",duration:999999,isClosable:!0});return}}catch(e){console.error(e),p({id:"no-cm-found",title:"The CM from .env is invalid",description:"Are you using the correct environment?",status:"error",duration:999999,isClosable:!0})}if(s(n),n){try{a=await (0,c.safeFetchCandyGuard)(e,n.mintAuthority)}catch(e){console.error(e),p({id:"no-guard-found",title:"No Candy Guard found!",description:"Do you have one assigned?",status:"error",duration:999999,isClosable:!0})}a&&(m(a),o&&i(!1))}}})()},[e,n]),{candyMachine:r,candyGuard:d}};function eM(){let e=(0,d.W)(),t=(0,eu.l)();(0,_.p)();let{isOpen:n,onOpen:o,onClose:r}=(0,j.q)(),{isOpen:s,onOpen:c,onClose:m}=(0,j.q)(),[g,f]=(0,u.useState)(),[h,b]=(0,u.useState)(!1),[y,x]=(0,u.useState)(!0),[v,S]=(0,u.useState)(),[O,q]=(0,u.useState)([{label:"startDefault",allowed:!1,maxAmount:0}]),[Z,X]=(0,u.useState)(!0),[Q,J]=(0,u.useState)(!0),$=(0,u.useMemo)(()=>(0,l.ZL)("BmgzwR4a4AwUiLZh31V9nzSdRfNJpGzFrXRYA26gqf4E"),[]),{candyMachine:ee,candyGuard:et}=eB(e,$,Q,J,Z,X);(0,u.useEffect)(()=>{let a=async()=>{if(!ee||!et||!Q||n)return;X(!1);let{guardReturn:a,ownedTokens:o}=await k(e,et,ee,t);S(o),q(a),b(!1);let i=!1;for(let e of a)if(e.allowed){i=!0;break}b(i),x(!1)};a()},[e,Q,Z]);let en=()=>(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(i(),{id:"79b357e5da375f45",children:"body{background:#2d3748}"}),(0,a.jsxs)(w.Z,{children:[(0,a.jsx)(T.O,{children:(0,a.jsxs)(P.k,{minWidth:"max-content",alignItems:"center",gap:"2",children:[(0,a.jsx)(A.x,{children:(0,a.jsx)(C.X,{size:"md",children:Y.Nz})}),y?(0,a.jsx)(a.Fragment,{}):(0,a.jsx)(P.k,{justifyContent:"flex-end",marginLeft:"auto",children:(0,a.jsx)(A.x,{background:"teal.100",borderRadius:"5px",minWidth:"50px",minHeight:"50px",p:2,children:(0,a.jsxs)(G.g,{children:[(0,a.jsx)(L.x,{fontSize:"sm",children:"Available NFTs:"}),(0,a.jsxs)(L.x,{fontWeight:"semibold",children:[Number(null==ee?void 0:ee.data.itemsAvailable)-Number(null==ee?void 0:ee.itemsRedeemed),"/",Number(null==ee?void 0:ee.data.itemsAvailable)]})]})})})]})}),(0,a.jsxs)(F.e,{children:[(0,a.jsx)(z.M,{children:(0,a.jsx)(A.x,{rounded:"lg",mt:-12,pos:"relative",children:(0,a.jsx)(N.E,{rounded:"lg",height:230,objectFit:"cover",alt:"project Image",src:Y.BH})})}),(0,a.jsx)(B.K,{divider:(0,a.jsx)(M.c,{}),spacing:"8",children:y?(0,a.jsxs)("div",{className:"jsx-79b357e5da375f45",children:[(0,a.jsx)(I.i,{my:"10px"}),(0,a.jsx)(D.O,{height:"30px",my:"10px"}),(0,a.jsx)(D.O,{height:"30px",my:"10px"}),(0,a.jsx)(D.O,{height:"30px",my:"10px"})]}):(0,a.jsx)(eb,{guardList:O,candyMachine:ee,candyGuard:et,umi:e,ownedTokens:v,setGuardList:q,mintsCreated:g,setMintsCreated:f,onOpen:o,setCheckEligibility:J})})]})]}),e.identity.publicKey===(null==ee?void 0:ee.authority)?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(z.M,{children:(0,a.jsx)(K.z,{backgroundColor:"red.200",marginTop:"10",onClick:c,children:"Initialize Everything!"})}),(0,a.jsxs)(U.u_,{isOpen:s,onClose:m,children:[(0,a.jsx)(R.Z,{}),(0,a.jsxs)(W.h,{maxW:"600px",children:[(0,a.jsx)(E.x,{children:"Initializer"}),(0,a.jsx)(H.o,{}),(0,a.jsx)(V.f,{children:(0,a.jsx)(ez,{umi:e,candyMachine:ee,candyGuard:et})})]})]})]}):(0,a.jsx)(a.Fragment,{}),(0,a.jsxs)(U.u_,{isOpen:n,onClose:r,children:[(0,a.jsx)(R.Z,{}),(0,a.jsxs)(W.h,{children:[(0,a.jsx)(E.x,{children:"Your minted NFT:"}),(0,a.jsx)(H.o,{}),(0,a.jsx)(V.f,{children:(0,a.jsx)(eT,{nfts:g})})]})]})]});return(0,a.jsxs)("main",{children:[(0,a.jsx)("div",{className:p().wallet,children:(0,a.jsx)(eN,{})}),(0,a.jsx)("div",{className:p().center,children:(0,a.jsx)(en,{},"content")})]})}},31502:function(e){e.exports={wallet:"Home_wallet__iOS9t",center:"Home_center__4BFgC",form:"Home_form__k2xMg",field:"Home_field__x3_xt",loading:"Home_loading__IsZ5F",spin:"Home_spin__7gbHz",success:"Home_success__cqYiE"}}},function(e){e.O(0,[764,774,888,179],function(){return e(e.s=48312)}),_N_E=e.O()}]);