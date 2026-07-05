const Cards=()=>{
return(
    <>
     
        <h1>APPLICATION FORM</h1>
        
      <div>
        <form>
                <lable>DATE OF APPLICATION</lable>
               <input type="datetime-local"/><br/><br/><br/>
               
               <div>
                <label>First name</label>
                <input type="text" placeholder="First name"/>
                <label>Last name</label>
                <input type="text" placeholder="Last name"/><br/><br/><br/>
                </div>

                <div> 
                <label>DOB</label>
                <input type="tel" placeholder="DD /MM /YEAR"/>
                <lable>AGE</lable>
                <input type="number" min="18" max="40" /><br/><br/><br/>
                </div>

                <div>
                <lable>MOBILE NUMER</lable>
                <input type="tel" minlength="10" maxlength="10" placeholder="10 digit number"/><br/><br/><br/>
                </div>

                <div>
                <label>GENDER</label>
               <input type="radio" name="GENDER"/>MALE
               <input type="radio" name="GENDER"/>FEMALE  <br/><br/><br/>
               </div>

               <div>
               <lable>EMAIL ADDRESS</lable>
               <input type="email" placeholder="name2@gmail.com"/><br/><br/><br/>
               </div>

               <div>
               <lable>PROGRAMING LANGUAGE</lable>
               <input type="checkbox" name="PROGRAMING LANGUAGE"/>HTML
                <input type="checkbox"name="PROGRAMING LANGUAGE"/>CSS
                 <input type="checkbox"name="PROGRAMING LANGUAGE"/>JAVA SCRIPT
                  <input type="checkbox"name="PROGRAMING LANGUAGE"/>REACT <br/><br/><br/>
                  </div>

                  <div>
                   <lable>PASSWORD</lable>
                  <input type="password" placeholder="Enter password"/>
                   <lable> CONFORM PASSWORD</lable>
                   <input type="password" placeholder="Conform password"/><br/><br/><br/>
                   </div>

                   <div>
                   <label>DISCRIPTION</label>
                     <textarea rows="3" cols="50"></textarea><br/><br/> 
                     </div>

                    <p contenteditable="">Text your content</p><br/>
                      <p contenteditable="">Text your content</p><br/>
                      <input type="submit" value="submit"/><br/><br/>
                 </form>   
          </div>
    </>
)
}
export default Cards