
const str = "|Category Fleet Lists | This record was created from a CSL fleet list | SECTION A: BASIC SHIP PARTICULARS | NAME: A.E.Ames | OFFICAL NO.: 114449 | TYPE: C1(Bulk Canaller) | YEAR BUILT: 1903 | BUILDER: Northumberland Shipbuilding Co.Ltd.| COUNTRY WHERE BUILT: England | LBP: 246 | BEAM: 37 | MOULDED DEPTH: 24 | GROSS TONNAGE: 1637 | NET TONNAGE: 1020 | SECTION B: OWNERSHIP / NAME CHANGES / DISPOSAL | CSL OWNERSHIP DATES:| FROM: 1914 | TO: 1920 | VESSEL'S OTHER NAME: Bueughel|VESSEL'S OTHER NAME: Ginette Le Borgne | CHRONOLOGY:| YEAR VESSEL NAME OWNERSHIP / COMMENTS | 1903 - 04 A.E.Ames W.Peterson Ltd.Newcastle Br.| 1904 - 10 A.E.Ames Canadian Ocean and Inland | Navigation Co.Ltd.Newcastle Br.| 1910 - 15 A.E.Ames Merchants Mutual Line Ltd.| (J.W.Norcross) Newcastle Br.| 1914 - 20 A.E.Ames C.S.L.| 1920 - 24 Bueughel Soc.Belge d'Armement Maritime|S.A. Antwert Be.|1924-40 Ginette Le Borgne Ch. Le Borgne Le Havre Fr.|September 12, 1940 M/S off West coast of Sardinia|1. This ship was named after one of her owners Mr. A.E. Ames of Toronto;|a capitalist, financier, entrepreneur and founder of the brokerage|house of A.E. Ames and Co.|SECTION C: CONSTRUCTION|SHIPYARD: Northumberland Shipbuilding Co. Ltd.|SHIPYARD LOCATION: Newcastle|HULL NUMBER: 109|DATE OF LAUNCH: 1903|DATE OF DELIVERY: 1903|HULL: Steel|HULL CONSTRUCTION: Rivetted, Transverse Framed.|SUPERSTRUCTURE: Wheelhouse midships-steel|SECTION E: ENGINE AND MECHANICAL|ENGINE TYPE: SR (T.E.)|CYLINDERS: 3 (20.5x33x59)|STROKE: 36|TURBINES: Not Applicable|AT (RPM): 83|YEAR BUILT: 1903|YEAR INSTALLED: 1903|ENGINE BUILDER: Wallsend Shipway and Engineering Co. Ltd.|PLACE BUILT: Newcastle, England|NUMBER OF BOILERS: 2|TYPE: Cyl SE W.P. 180|SIZE: 13.5x10.25|YEAR BUILT: 1903|YEAR INSTALLED: 1903|BOILER BUILDER: Shipway and Engineering Co. Ltd.|PLACE BUILT: Newcastle, England|BOW THRUSTER: Nil|STERN THRUSTER: Nil"
str.length //?

function createP (payload) {
  console.log(payload)
  return "\n"
};

function makeBold (payload) {
  return `<strong>${payload}</strong>`
}

function makeObject (payload) {
  const obj = {}
  obj.row = payload
  return obj
}
// use following regExp and str.split to split the lines marked by '|' into array elements
let reg1 = /\|/g//?
let rows = str.split(reg1)
rows

// Use the following regExp and the Rows Array created with reg1 to capitalize the titles.
let reg2 = /\b[\w{2,3}]*\b:?/g
let reg3 = /\b[\w{ 1, 4} ']:?/g
finalstr = []
finalstr = rows.map(ele => {
  return ele.replace(reg3, makeBold(ele))
})

finalstr //?


