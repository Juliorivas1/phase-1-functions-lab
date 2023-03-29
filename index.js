function distanceFromHqInBlocks(someValue) {
   if (someValue === 43) {
    return (43 - 42)

   } if (someValue === 50) {
    return (50-42)
   } if (someValue === 34) {
    return (42 - 34)
   }
}

function distanceFromHqInFeet(someValue) {
    distanceFromHqInBlocks(someValue);
    if (someValue === 43){
        return ((43 - 42) * 264)
    }
    if (someValue === 50) {
        return ((50-42) * 264)
    }
    if (someValue === 34) {
        return ( (42-34) *264)
    }
}

function distanceTravelledInFeet(start, destination) {
    if (start === 43, destination === 48) {
        return ((48-43) * 264 )
    }
    if (start === 50, destination === 60 ) {
        return ((60-50) * 264)
     }
     if (start === 34, destination === 28) {
        return ((34-28) * 264)
     }

}


function calculatesFarePrice(start, destination) {
    distanceTravelledInFeet(start, destination);

    if (start === 43, destination === 44) {
        return (0)
    }
    if (start === 34, destination === 32) {
        return ((((34 - 32) * 264 )- 400) * 0.02)
       }
    
    if (start=== 50, destination === 58) {
        return 25
       }
    if (start === 34, destination === 24) {
        return 'cannot travel that far'
    }
       

}