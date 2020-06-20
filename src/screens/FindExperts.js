import React, { Fragment } from 'react';
import Data from '../Data';
import language from '../language'

function FindExperts(props){

return <div className="nice">  
 <div className="Main-Body-Content">

 
      
<div className="main-box">

<h3 className="filter">Filters</h3>
<div className="box1">
 <h3 className="expertise">EXPERTISE</h3>
 <form className="search-form">
     <input type="text" name="search" />
         <span className="he fa fa-search"></span>
         
 </form>

 <h3 className="expertise">FOCUS AREA</h3>
 <form className="search-form" >
     <input type="text" name="search" />
         <span className="he fa fa-search"></span>
         
 </form>

 <h3 className="expertise">RATINGS</h3>
<div className="rating-box">
 <div className="rating">
     <label className="container">
         <input type="radio" name="rate" />
             <span className="fa fa-star checked"></span>
             <span className="fa fa-star checked"></span>
             <span className="fa fa-star checked"></span>
             <span className="fa fa-star checked"></span>
             <span className="fa fa-star unchecked"></span>
         <span className="checkmark"></span>
     </label>
     <label className="container">
         <input  type="radio" name="rate" />
             <span className="fa fa-star checked"></span>
             <span className="fa fa-star checked"></span>
             <span className="fa fa-star checked"></span>
             <span className="fa fa-star unchecked"></span>
             <span className="fa fa-star unchecked"></span>
         <span className="checkmark"></span>
     </label>
 </div>

 <div className="rating">
     <label className="container">
         <input type="radio" name="rate" />
         <span className="fa fa-star checked"></span>
         <span className="fa fa-star checked"></span>
         <span className="fa fa-star checked"></span>
         <span className="fa fa-star unchecked"></span>
         <span className="fa fa-star unchecked"></span>
     <span className="checkmark"></span>
     </label>
     <label className="container">
         <input className="startwo" type="radio" name="rate" />
         <span className="fa fa-star checked"></span>
         <span className="fa fa-star checked"></span>
         <span className="fa fa-star unchecked"></span>
         <span className="fa fa-star unchecked"></span>
         <span className="fa fa-star unchecked"></span>
     <span className="checkmark"></span>
     </label>
 </div>
</div>

 <h3 className="expertise">PRICE</h3>

 <div className="rating-box-price">
     <div className="rating-price">
     {
            language.price.map(price=>
         <label className="container1">
             <input type="radio" name="price" />
            <span className="free">{price.prices}</span>
             <span className="checkmark" ></span>
         </label>
            )}
         
     </div>
 </div>


 <h3 className="expertise">SESSION AVAILABILITY</h3>

 <div className="rating-box-price">
     <div className="rating-price">

     {      language.time.map(time=>
         <label className="container1">
             <input type="radio" name="session" />
            <span className="free">{time.times} min</span>
             <span className="checkmark" ></span>
         </label>
            
            )}
     </div>
 </div>


 <h3 className="expertise">LANGUAGE</h3>

 <div className="rating-box-price">
     <div className="rating-price">
        {
            language.languages.map(lang=>
                <label className="container1">
                <input type="radio" name="language" />
            <span className="free">{lang.languages}</span>
                <span className="checkmark" ></span>
            </label>
                )
        }
        
     </div>

     <h3 className="more">More</h3>


 </div>
</div>
</div>  


        <div className="main-box">

<div className="mm">
    <h3 className="filter-it">Featured Experts</h3>
    <div  className="custom-select">
     <select>
         <option value="0">Best Match</option>
         <option value="1">professor</option>
         <option value="2">Experience</option>
         <option value="3">Part Time</option>
         <option value="4">Regular</option>
         <option value="5">Beignner</option>
        
       </select>
      
    </div>
 </div>

 


{
Data.experts.map(expert=>
<div className="doit">
<div className="expert-one">
<div className="expert"> 
<div className="section-profile-1">
 <div className="profile-pic-image">
     <img src={expert.image} alt="" />
     
 </div>

 <div className="profile-price-details">
     <span className="profile-price-text">Price:</span>
<span className="profile-status-text">{expert.price}</span>    
 </div>

 <div className="profile-rating-category">
     <span className="profile-star fa fa-star checked"></span>
<span className="profile-rate-text">{expert.rating}</span>
     <span className="profile-view-text">({expert.views})</span>
 </div>


</div>

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>  

<div className="section-profile-2">
<div className="content-expert-area">

 <div className="profile-expert-name">
     <div className="profile-heart-view">
         <div className="expert-name">
<span className="name-person">{expert.name}</span> 
         </div>
         <div className="heart-view">

             <i className="heart-icon fa fa-heart-o"></i>
             <button className="profile-button">View Profile</button>
         </div>
     </div>

     <div className="expert-company">
         <div className="text-class">
             <span className="person-company">{expert.company}</span>
         </div>
 </div>
 </div>




<div className="profile-details-expert-work">

 <div className="expert-information">
     <div className="section-11">
         <div className="info-expert">
            <div className="timer">
             <span class="ti fa fa-history"></span>
             {expert.sessiontime}
         </div>
         <div className="location">
             <span className="ti fa fa-globe "></span>
           
             {expert.area}
         </div>
         <div className="city">
             <span className="ti fa fa-text-width"></span>
             {expert.languages}
            </div>
              <div className="empty"> </div>
              <div className="empty"> </div>
         </div>
     </div>
     <div className="section-12">
         <div className="info-expert-2">
             {expert.description}
         </div>
     </div>
     <div className="section-13">
         <div className="info-expert-3">
            <span className="marketing">
                {expert.skill1}
            </span>
            <span className="marketing">
                {expert.skill2}
            </span>
            <span className="marketing">
                {expert.skill3}
            </span>
            <span className="marketing">
                {expert.skill4}
            </span>
          
            
            

         
            
        
            
         </div>
     </div>
 </div>
</div>
</div>
</div>
</div>
</div>    
</div>
)
}

 

</div>


</div>        
</div>


}


export default FindExperts;