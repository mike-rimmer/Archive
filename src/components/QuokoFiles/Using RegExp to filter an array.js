const tstArry = [
  "Category Fleet Lists | This record was created from a CSL fleet list | SECTION A: BASIC SHIP PARTICULARS | NAME: A.E.Ames | OFFICAL NO.: 114449 | TYPE: C1(Bulk Canaller) | YEAR BUILT: 1903 | BUILDER: Northumberland Shipbuilding Co.Ltd.| COUNTRY WHERE BUILT: England | LBP: 246 | BEAM: 37 | MOULDED DEPTH: 24 | GROSS TONNAGE: 1637 | NET TONNAGE: 1020 | SECTION B: OWNERSHIP / NAME CHANGES / DISPOSAL | CSL OWNERSHIP DATES:| FROM: 1914 | TO: 1920 | VESSEL'S OTHER NAME: Bueughel|VESSEL'S OTHER NAME: Ginette Le Borgne | CHRONOLOGY:| YEAR VESSEL NAME OWNERSHIP / COMMENTS | 1903 - 04 A.E.Ames W.Peterson Ltd.Newcastle Br.| 1904 - 10 A.E.Ames Canadian Ocean and Inland | Navigation Co.Ltd.Newcastle Br.| 1910 - 15 A.E.Ames Merchants Mutual Line Ltd.| (J.W.Norcross) Newcastle Br.| 1914 - 20 A.E.Ames C.S.L.| 1920 - 24 Bueughel Soc.Belge d'Armement Maritime|S.A. Antwert Be.|1924-40 Ginette Le Borgne Ch. Le Borgne Le Havre Fr.|September 12, 1940 M/S off West coast of Sardinia|1. This ship was named after one of her owners Mr. A.E. Ames of Toronto;|a capitalist, financier, entrepreneur and founder of the brokerage|house of A.E. Ames and Co.|SECTION C: CONSTRUCTION|SHIPYARD: Northumberland Shipbuilding Co. Ltd.|SHIPYARD LOCATION: Newcastle|HULL NUMBER: 109|DATE OF LAUNCH: 1903|DATE OF DELIVERY: 1903|HULL: Steel|HULL CONSTRUCTION: Rivetted, Transverse Framed.|SUPERSTRUCTURE: Wheelhouse midships-steel|SECTION E: ENGINE AND MECHANICAL|ENGINE TYPE: SR (T.E.)|CYLINDERS: 3 (20.5x33x59)|STROKE: 36|TURBINES: Not Applicable|AT (RPM): 83|YEAR BUILT: 1903|YEAR INSTALLED: 1903|ENGINE BUILDER: Wallsend Shipway and Engineering Co. Ltd.|PLACE BUILT: Newcastle, England|NUMBER OF BOILERS: 2|TYPE: Cyl SE W.P. 180|SIZE: 13.5x10.25|YEAR BUILT: 1903|YEAR INSTALLED: 1903|BOILER BUILDER: Shipway and Engineering Co. Ltd.|PLACE BUILT: Newcastle, England|BOW THRUSTER: Nil|STERN THRUSTER: Nil",

  "Category Fleet Lists | This record was created from a CSL fleet list | SECTION A: BASIC SHIP PARTICULARS | NAME: A.E.McKinstry | OFFICAL NO.: 129491 | TYPE: C1(Bulk Canaller) | YEAR BUILT: 1910 | BUILDER: Clyde Shipbuilding and Engineering Co.Ltd.| COUNTRY WHERE BUILT: Scotland | LBP: 250 | BEAM: 42.5 | MOULDED DEPTH: 20.5 | GROSS TONNAGE: 1964 | NET TONNAGE: 1203 | SECTION B: OWNERSHIP / NAME CHANGES / DISPOSAL | CSL OWNERSHIP DATES:| FROM: 1914 | TO: 1946 | VESSEL'S OTHER NAME: Kindersly|CHRONOLOGY:|YEAR VESSEL NAME OWNERSHIP/COMMENTS|1910-12 A.E. McKinstry Interlake Transit Ltd.|(J.W. Nocross) Glasgow|1912-14 A.E. McKinstry Canada Interlake Line Ltd.|(J.W. Nocross) Glasgow|1914-26 A.E. McKinstry C.S.L.|1926-42 Kindersly C.S.L.|1942-46 Kindersly Ministry of War Transport|(J. and J. Denholm Mngrs.) London|October 1, 1946 scuttled in the north Altantic with gas ammunition.|1. When discussing the ship with crew of other ships in 1937 they|always referred to her speed - 'She can run like a scared deer.'|It is easy to see why because of the shallow depth of the hull.|A 700 I.H.P. engine probably gave her 9 knots.|SECTION C: CONSTRUCTION|SHIPYARD: Clyde Shipbuilding and Engineering Co. Ltd.|SHIPYARD LOCATION: Port Glasgow|HULL NUMBER: 290|DATE OF DELIVERY: 1910 (05)|HULL: Steel|HULL CONSTRUCTION: Rivetted Transverse. Framed.|SUPERSTRUCTURE: Steel - Wheelhouse and Masters Quarters forward|SECTION E: ENGINE AND MECHANICAL|ENGINE TYPE: SR (T.E.)|CYLINDERS: 3 (17x28x46)|STROKE: 33|TURBINES: Not Applicable|HORSEPOWER: 700|MEASURE(IHP/SHP/ETC): IHP|YEAR BUILT: 1910|YEAR INSTALLED: 1910|ENGINE BUILDER: Clyde Shipbuilding and Engineering Co. Ltd.|PLACE BUILT: Port Glasgow, Scotland|NUMBER OF BOILERS: 2|TYPE: Cyl SE 2 furnaces each|SIZE: 12.8x11|YEAR BUILT: 1910|YEAR INSTALLED: 1910|BOILER BUILDER: Clyde Shipbuilding and Engineering Co. Ltd.|PLACE BUILT: Port Glasgow, Scotland|BOW THRUSTER: Nil|STERN THRUSTER: Nil|SECTION F: CARGO HANDLING CAPACITY AND FEATURES|MOULDED DEPTH: 20.5|TANKS: F.B.;- C.D.B.,- Mach. space. D.B.- A.P.|HATCH CENTRES: 24 C to C|HOLDS: 3"
];

// use following regExp and str.split to split the lines marked by '|' into array elements
// let reg = /\|/g//?

// let rows1 = str1.split(reg)
// let rows2 = str2.split(reg)

// rows1 //?
// rows2 //?

/*
let animals = ['dogs', 'cats', 'budgies']
let search = /Ship/

let results = animals.filter(ele => {
  return  ele === "dogs" //?
})


let str3 ="Planes trains and automobiles and more trains"
let re = /trains/g
str2.match(re) // ?
 results //?
*/

function searchFor (exp, table) {
  return table.filter((ele) => {
    return ele.match(exp) //?
  })
}

const re1 = /Port Glasgow/gi
// const re2 = /toronto/gi

let result1 = searchFor(re1, tstArry)
result1.length//?

console.log(result1)
result1 // ?



