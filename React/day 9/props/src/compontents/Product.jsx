
import Home from '../pages/Home'
const Product = () => {
 const arr=["gokul","harish","lokesh","ganesh","yeswanth"]
 const arrobj =[{name:"gokul",course:"java", timing:"2 HRS"},{name:"harish",course:"html", timing:"2 HRS"},
    {name:"lokesh",course:"css", timing:"2 HRS"},{name:"ganesh",course:"react", timing:"2 HRS"},
    {name:"yeswanth",course:"node", timing:"2 HRS"}
 ]

  return (
    <>
    <Home friends={arr} details={arrobj} />
    </>
  )
}

export default Product