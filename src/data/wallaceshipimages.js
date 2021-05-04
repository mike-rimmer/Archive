

export const wallaceImg = []
// const SERVER = 'http:\\\\localhost\\'
const SERVER = 'http:\\\\marmuseum.ca\\'

for(let i = 0; i < 83; i++){
  const title= `wallace-${i}`
  const url=`${SERVER}shiplists2\\list-db-server\\images\\wallaceships\\wallace(${i}).jpg`
  wallaceImg.push({title:title, url: url})
}


