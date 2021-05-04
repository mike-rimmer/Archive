export default{
  functional: true,
  render(createElement,{data, children}){
    return createElement("button", data, children)
  }
}
