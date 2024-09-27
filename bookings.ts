function optimizeBookings(bookings : number[][]) : number[][] 
{
    const result : number [][] = [];
    const numRows = bookings.length;
    
    //empty list of bookings
    if(numRows == 0)
    {
        return bookings;
    }

    //sort the bookings list in ascending order according to start times
    bookings.sort((a,b) => {
        if(a[0] == b[0])
        {
            return a[1] - b[1];
        }
        else{
            return a[0] - b[0];
        }
    });
    
    let prevStartTime = bookings[0][0];
    let prevEndTime = bookings[0][1];

    for(let i = 1;i < numRows ; i++)
    {
        const currStartTime = bookings[i][0];
        const currEndTime = bookings[i][1];

        if(currStartTime  > prevEndTime)
        {
            result.push([prevStartTime, prevEndTime]);

            //update the start time and end time.
            prevStartTime = currStartTime;
            prevEndTime = currEndTime;
        }
        else{

            // take the maximum of end times.
            if(currEndTime > prevEndTime)
            {
                prevEndTime = currEndTime;
            }
        }
    }

    result.push([prevStartTime,prevEndTime]);
    return result;
}

const testCases : number[][][] = [];

const t1: number[][] = [
  [1, 2],
  [2, 4],
  [4, 6],
  [6, 8]
];

const t2: number[][] = [
  [1, 2],
  [1, 4],
  [5, 6],
  [7, 8]
];

const t3: number[][] = [];

const t5: number[][] = [
  [1, 2],
  [3, 4],
  [5, 6],
  [7, 8]
];

const t4: number[][] = [
  [1, 2],
  [4, 4],
  [5, 6],
  [7, 8]
];

testCases.push(t1);
testCases.push(t2);
testCases.push(t3);
testCases.push(t4);
testCases.push(t5);

for(let i = 0; i < 5; i++)
{
    console.log(optimizeBookings(testCases[i]));
}