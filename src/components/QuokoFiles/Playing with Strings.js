const record = {
  key:123,
  Details:{
  Beam:" 43",
  BuildCountry:"Scotland",
  Builder:" Clyde Shipbuilding and Engineering Co. Ltd.",
  Category:"Fleet List",
  Comments:"|1908-12 Acadian Mutual Steamship Co. Ltd.|(J.W. Norcross) Glasgow|1912-14 Acadian Canada Interlake Line Ltd.|(J.W. Norcross) Glasgow|1914-18 Acadian C.S.L.|T/S 11 miles SW by W from Trevose Head by UB 117 on September 16, 1918|SECTION C: CONSTRUCTION|SHIPYARD: Clyde Shipbuilding and Engineering Co. Ltd.|",
  DateFrom:" 1914",
  DateTo:" 1918"
}
}

let comments = record.Details.Comments.split('|')

comments.forEach(ele=>{
  console.log(ele)//
})





// let wallaceImg = []


// for(let i = 0; i < 86; i++){
//   title= 'Resolver'
//   url=`resolver(${i}).jpg`
//   wallaceImg.push({title:title, url: url})
// }

// wallaceImg[0].title //?



// records.forEach((ele) =>{
//   console.log(ele.key)//?
// })
