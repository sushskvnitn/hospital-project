import React from 'react'
import "./about.css"
import { Link } from 'react-router-dom'
const about = () => {
  return (
    <div className="marn-top">
    <h1 className ="text-center blue_color"> <b> About us </b></h1>
    <section className="about-section">
        <div className="container">
            <div className="row">                
                <div className="content-column col-lg-6 col-md-12 col-sm-12 order-2">
                    <div className="inner-column">
                        <div className="sec-title">
                            <span className="title">About Hospital Owner</span>
                            <h2> Medicines cure diseases, but only doctors can cure patients </h2>
                        </div>
                        <div className="text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, eaque similique. Molestias deleniti qui inventore possimus incidunt blanditiis neque nisi sit, facilis quam ipsa, totam laudantium ex sint recusandae quasi reprehenderit aperiam!</div>
                      <div className="text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, nam. Dolor facilis, aliquid dignissimos error repellat quos recusandae numquam amet minima aliquam pariatur deleniti praesentium quia sapiente nisi veritatis debitis ea beatae delectus, laudantium quasi necessitatibus officia! Odit esse tempora quia pariatur eos error.  </div>
                        <div className="btn-box">
                            <Link to="/contactus" className="btn dark_blue text-white ">Contact Us</Link>
                        </div>
                    </div>
                </div>

                <div className="image-column col-lg-6 col-md-12 col-sm-12">
                    <div className="inner-column wow fadeInLeft">
                      <div className="author-desc">
                        <h2>Dr. SALIL A. GANU</h2>
<span>MBBS, MD (Medicine) <br />
DM (Rheumatology and Clinical Immunology) <br />
Post Doctoral Fellow (CMC Vellore) <br /> </span>
                      </div>
                        <figure className="image-1"><a href="/" className="lightbox-image" data-fancybox="images"><img title="Rahul Kumar Yadav" src="https://images.unsplash.com/photo-1666214276372-24e331683e78?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxzZWFyY2h8MXx8aG9zcGl0YWx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt=""/></a></figure>
                     
                    </div>
                </div>
              
            </div>
           <div className="sec-title marn-top">
                            <span className="title marn-top">Our Future Goal</span>
                            <h2>We want to lead in Rheumatology </h2>
                        </div>
          <div className="text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem consectetur sequi vero pariatur possimus rerum, ad accusamus dignissimos, cumque quo aut alias reiciendis sed, provident perferendis cupiditate eos consequuntur quod vel! Aliquam!
              </div>
               <div className="text">
             Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus unde qui, non accusamus aliquam distinctio harum ducimus tempora cumque vel ea reiciendis?  </div>
               <div className="text">                
Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint voluptatibus deserunt quae modi facilis quidem fuga suscipit, neque minus excepturi, eos aliquid non.           </div>
               <div className="text">
             Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum libero animi ratione reprehenderit laboriosam possimus quos ipsa assumenda deserunt, rerum necessitatibus pariatur.  </div>
               <div className="text">
                
In the end, I would say keep visiting our website and enjoy the quality content.
              </div>
        </div>
    </section>
 
   </div>
  )
}

export default about