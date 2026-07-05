import Story from "./Story"
import Cards from "./Cards"
import Table from "./Table"
import Form from "./Form"

const App =()=>{
    return(
      <>
               <div >
                <nav>
                    
                    <a href="../project/about.html"> ABOUT</a>
                    <a href="../project/collection.html">COLLECTION</a>
                    <a href="#hel">HELMETS</a>
                    <a href="#fo">FOOTER</a>
                    <a href="../project/rorm.html">ORDER</a>
                </nav>
            </div>
            <div class="para">
                <p > <i class="fa fa-cloud"></i>  GSTIN:33AAACI1607G2Z5 </p>
                <p> <i class="fa fa-mobile"></i>  Mobile Number: 7305512262</p>
                <p> <i class="fa fa-history"></i>Timing:  10am to 5pm</p>
            </div>
          <Story/>
          <Cards/>
          <Table/>
          <Form/>
    
      </>
    )

}
export default App




