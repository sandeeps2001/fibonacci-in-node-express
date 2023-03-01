const express = require("express")
const router = express.Router()
router
  .route("/:id")
  .get((req, res) => {
    console.log(req.user)
    // # A CONSTANT VARIABLE WHICH IS SET TO BE 100, DEFINES THE MAXIMUM THRESHOLD OF OUR MACHINE TO PRINT FIBBO SERIES
const MAX = 100
const MIN = 1

function getFibonacciSeries(numSize){
    let prevVal = 0 
    let currVal = 1
    try{
          if (isNaN(numSize) == true){
            throw new Error("sorry , input should me numeric ")
        }else{
            numSize = parseInt(numSize)
        }
        if (numSize > MAX){
            throw new Error("Sorry, you are exceeded the maximum limit")
        }

        if (numSize < MIN){
            throw new Error(`the num size should be greater than ${MIN}`)
        }

        if (numSize == MIN) {
          res.send(`the value at ${numSize} of the fiboSeries is ${0}`)
            // print("the value at {} of the fiboSeries is {}".format(numSize, 0))
            return
        }
        // print("the series {} {}".format(prevVal, currVal), end = "")
        i = 2
        while (i < numSize) {
            nextVal = prevVal + currVal
            prevVal = currVal
            currVal = nextVal
           // print(" {}".format(nextVal), end = "")
            i += 1
        }

        // print("")
        res.send(`the value at ${numSize} of the fiboSeries is ${currVal}`)
    } catch (err) {
      res.send(err)
    }
}
num = req.params.id
getFibonacciSeries(num)
  })
module.exports = router
