const mystr = "Category Fleet Lists|This record was created from a CSL fleet list|SECTION A: BASIC SHIP PARTICULARS|NAME: A.E. Ames|OFFICAL NO.: 114449|TYPE: C1 (Bulk Canaller)|YEAR BUILT: 1903|BUILDER: Northumberland Shipbuilding Co. Ltd.|COUNTRY WHERE BUILT: England|LBP: 246|BEAM: 37|MOULDED DEPTH: 24|GROSS TONNAGE: 1637|NET TONNAGE: 1020|SECTION B: OWNERSHIP/NAME CHANGES/DISPOSAL|CSL OWNERSHIP DATES:|FROM: 1914|TO: 1920|VESSEL'S OTHER NAME: Bueughel|VESSEL'S OTHER NAME: Ginette Le Borgne|CHRONOLOGY:|YEAR VESSEL NAME OWNERSHIP/COMMENTS|1903-04 A.E. Ames W. Peterson Ltd. Newcastle Br.|1904-10 A.E. Ames Canadian Ocean and Inland|Navigation Co. Ltd. Newcastle Br.|1910-15 A.E. Ames Merchants Mutual Line Ltd.|(J.W. Norcross) Newcastle Br.|1914-20 A.E. Ames C.S.L.|1920-24 Bueughel Soc. Belge d'Armement Maritime|S.A. Antwert Be.|1924-40 Ginette Le Borgne Ch. Le Borgne Le Havre Fr.|September 12, 1940 M/S off West coast of Sardinia|1. This ship was named after one of her owners Mr. A.E. Ames of Toronto;|a capitalist, financier, entrepreneur and founder of the brokerage|house of A.E. Ames and Co.|SECTION C: CONSTRUCTION|SHIPYARD: Northumberland Shipbuilding Co. Ltd.|SHIPYARD LOCATION: Newcastle|HULL NUMBER: 109|DATE OF LAUNCH: 1903|DATE OF DELIVERY: 1903|HULL: Steel|HULL CONSTRUCTION: Rivetted, Transverse Framed.|SUPERSTRUCTURE: Wheelhouse midships-steel|SECTION E: ENGINE AND MECHANICAL|ENGINE TYPE: SR (T.E.)|CYLINDERS: 3 (20.5x33x59)|STROKE: 36|TURBINES: Not Applicable|AT (RPM): 83|YEAR BUILT: 1903|YEAR INSTALLED: 1903|ENGINE BUILDER: Wallsend Shipway and Engineering Co. Ltd.|PLACE BUILT: Newcastle, England|NUMBER OF BOILERS: 2|TYPE: Cyl SE W.P. 180|SIZE: 13.5x10.25|YEAR BUILT: 1903|YEAR INSTALLED: 1903|BOILER BUILDER: Shipway and Engineering Co. Ltd.|PLACE BUILT: Newcastle, England|BOW THRUSTER: Nil|STERN THRUSTER: Nil"

const mystrArr = mystr.split('|')

mystrArr//?

mystrArr.length//?

for(let i =0; i< mystrArr.length; i++){
  console.log(mystrArr[i])
}


const arr = ['a','b','c'];
const res = arr.reduce((acc,curr)=> (acc[curr]='',acc),{});
console.log(res)


const obj ={
bildnme:"",
buildloc:"DIGBY, Nova Scotia",
buildprov:"Nova Scotia",
id:"1",
own:"",
place:"YARMOUTH",
placeclosed:", , ",
prov:"Nova Scotia",
registration:"YARMOUTH, Nova Scotia",
remark:"OWNED IN ST. JOHN",
rig:"SHIP",
vname:"A & E. LOVITT",
url:"wallace-1.jpg",
imageName:"BlueNose"
}

const  {url, imageName} = obj

url
imageName

obj//?
delete obj.url
delete obj.imageName

obj//?

const temp = Object.entries(obj)

temp

const image = temp.splice(-4)

image//?

temp.length//?
