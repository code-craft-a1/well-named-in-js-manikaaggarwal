import { getColorFromPairNumber, ColorPair, getPairNumberFromColor} from './main.js'

function test(){
			let pairNumber;
            pairNumber = 4;
            let testPair1 = getColorFromPairNumber(pairNumber);
            console.log(`[In]Pair Number: ${pairNumber},[Out] Colors:${testPair1}`);
			console.assert(testPair1.majorColor == "WHITE");
			console.assert(testPair1.minorColor == "BROWN");

			pairNumber = 5;
            testPair1 = getColorFromPairNumber(pairNumber);
            console.log(`[In]Pair Number: ${pairNumber},[Out] Colors:${testPair1}`);
			console.assert(testPair1.majorColor == "WHITE");
			console.assert(testPair1.minorColor == "SLATEGRAY");
			 
			pairNumber = 23;
            testPair1 = getColorFromPairNumber(pairNumber);
            console.log(`[In]Pair Number: ${pairNumber},[Out] Colors:${testPair1}`);
			console.assert(testPair1.majorColor == "RED");
			console.assert(testPair1.minorColor == "GREEN");
			 
            let testPair2 = new ColorPair();
			testPair2.majorColor="YELLOW";
			testPair2. minorColor ="GREEN";
            pairNumber =getPairNumberFromColor(testPair2);
            console.log(`[In]Colors: ${testPair2}, [Out] PairNumber: ${pairNumber}`);
			console.assert(pairNumber==18);

			testPair2 = new ColorPair();
			testPair2.majorColor="RED";
			testPair2. minorColor ="BLUE";
            pairNumber =getPairNumberFromColor(testPair2);
            console.log(`[In]Colors: ${testPair2}, [Out] PairNumber: ${pairNumber}`);
			console.assert(pairNumber==6);
}

test();

function printReport(){
  for(let i=1; i<25; i++){
    const testPair = getColorFromPairNumber(i);
    console.log(`[In]Pair Number: ${i},[Out] Colors:${testPair}`);
  }
}

printReport();
