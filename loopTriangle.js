/*

Write a loop that makes seven calls to console.log to output the following triangle:

#
##
###
####
#####
######
#######

*/

var counter = 0;
var triangle = '#';

while (counter < 7) {
  console.log(triangle);
  counter++;
  triangle += '#';
}

