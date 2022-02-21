// Create an array to hold the CSV file
let trendsLine = [];

// Findind the minimum and maximum trend to scale the data

let minTrends;
let maxTrends;

function preload() {
  // The text from the file is loaded into an array.
  trendsLine = loadStrings("Crypto.csv");
}

function setup() {
  createCanvas(500, 500);
  background(235);

  // Check if the data was uploaded
  if (trendsLine == null) {
    print("Failure to load the file");

    while (true) {}
  }

  print(
    "trends loaded from file successfully, read " + trendsLine.length + " lines"
  );

  // Finding the minimum and maximum trend
  findMinMaxTrend();
}

function findMinMaxTrend() {
  let singleRow = [];

  // loop over each row in the file
  for (let csvRowNumber = 1; csvRowNumber < trendsLine.length; csvRowNumber++) {
    // get a single row and split that row into individual words
    singleRow = split(trendsLine[csvRowNumber], ",");

    let trends = int(singleRow[1]);

    // The file may be missing a field, in which case the converstion to a float might have failed
    if (isNaN(trends)) {
      print("conversion to float failed; skipping row " + csvRowNumber);
    } else {
      if (csvRowNumber == 1) {
        minTrends = trends;
        maxTrends = trends;
      }

      if (trends < minTrends) minTrends = trends;
      if (trends > maxTrends) maxTrends = trends;
    }
  } // end of for() loop

  print("Trends (min, max) = (" + minTrends + "," + maxTrends + ")");
} // end of findMinMaxTrends

let csvRowNumber = 1;
// Skip the first line, since we know it's a header

function draw() {
  let singleRow = [];

  // get a single row and split that row into
  // individual words
  singleRow = split(trendsLine[csvRowNumber], ",");

  let trends = int(singleRow[1]);
  let xCord = (csvRowNumber * width) / trendsLine.length;

  // Check for non-numerical strings.
  if (isNaN(trends)) {
    print("conversion to float failed; skipping row " + csvRowNumber);
  } else {
    // scale that to fit on our canvas
    //println(csvRowNumber);
    let trendHeight = map(trends, minTrends, maxTrends, 0, height);

    // Put a mark there
    strokeWeight(5);
    point(xCord, 400 - trendHeight);
  } // end of valid data

  csvRowNumber++;
  if (csvRowNumber >= trendsLine.length) {
    print("finished");
    noLoop();
  }
}
