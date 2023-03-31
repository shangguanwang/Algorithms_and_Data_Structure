# Pyramids - Two Side Steps
### My logic
1. First get the total number of length on the last row. Except for the first row, every other row we add #*2, so the total length should equal to 1 + (n-1)\*2

2. Inside the for loop, for each iteration, we want to calculate the number of #, and the number of space. The number of space should equal to the total length minus the number of #, divided by two because we need space on both sides.


