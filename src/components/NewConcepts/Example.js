// export default{
//   functional: true,
//   render(createElement,{data, children}){
//     return createElement("button", data, children)
//   }
// }


export default{
  data(){
    return{
      clickCount:0
    }
  },

  computed:{
    backgroundColor(){
      return{
        'pink':this.clickCount%2 == 0,
        'green': this.clickCount%2 !=0
      }
    }
  },

  methods:{
    onClick(){
      this.clickCount += 1
    }
  },

  // render(createElement){
  //   const button = createElement('button',{
  //     on: { click: this.onClick }
  //   },'Click Me');

  //   const counter= createElement('span',{
  //     class: this.backgroundColor,
  //   },['Number of Click:', this.clickCount]);

  //   return createElement('div', [button, counter])
  //   }

    render(createElement) {
      const button = createElement('button', {
        on: {
          click: this.onClick
        }
      }, 'Click me');

      const counter = createElement('span',{
        class:this.backgroundColor,
      }, [
        'Number of clicks:',
        this.clickCount
      ]);

      return createElement('div', [
        button, counter
      ])
    }



}
