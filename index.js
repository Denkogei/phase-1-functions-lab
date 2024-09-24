// Code your solution in this file!
function distanceFromHqInFeet(block){
    const  feetBlock =264
    const distfromBlock = distanceFromHqInBlocks( block);
    return distfromBlock * feetBlock;
}
function distanceFromHqInBlocks(somevalue){
    const location = 42
    return Math.abs(somevalue - location)
}
function distanceFromHqInFeet(someValue) {
    return distanceFromHqInBlocks(someValue) * 264;
}{

}
function distanceTravelledInFeet(location,destination){
    return Math.abs(destination - location) *264
}
function calculatesFarePrice(start, destination){
    const distanceInFeet = Math.abs(destination - start) * 264 
    if (distanceInFeet <= 400) return 0;
    if (distanceInFeet <= 2000) return (distanceInFeet - 400) * 0.02;
    if (distanceInFeet < 2500) return 25;
    return 'cannot travel that far';
}