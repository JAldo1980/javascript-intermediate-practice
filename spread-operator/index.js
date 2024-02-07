const averageSharePriceByMonthQ1 = [109.6, 103.3, 89.4];
const averageSharePriceByMonthQ2 = [109.3, 126.1, 103.3];
const averageSharePriceByMonthQ3 = [120.8, 102.3, 106.8];
const averageSharePriceByMonthQ4 = [110.9, 119.8, 113.7];

function findPriceExtremes(arr) {
  const highest = Math.max(...accumulator);
  const lowest = Math.min(...accumulator);
  console.log(`The highest average share price was ${highest}`);
  console.log(`The lowest average share price was ${lowest}`);
}

const accumulator = [
  ...averageSharePriceByMonthQ1,
  ...averageSharePriceByMonthQ2,
  ...averageSharePriceByMonthQ3,
  ...averageSharePriceByMonthQ4,
];

/*
Challenge:
1. Call this function with one array holding 
   all of the data from the 4 arrays above.
*/
findPriceExtremes(accumulator);
