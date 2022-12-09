import React from 'react'
import Diseasecard from './Disease-card'
const Conditions = () => {
  return (
    <div className="Conditions marn-top " >
      <h1 className="text-center blue_color"> <b> Conditions Treated</b> </h1>
      <div className=" mx-4 ">
     <h5>Summary of the clinical experience in Rheumatology</h5> 

<div> A broad summary of experience (although not an extensive one) gained in Rheumatology is as given below  </div>
<br />
 <h3 className="blue_color">Diseases :</h3>  <br />
 <div className="d-flex justify-content-center flex-wrap "> 
    <Diseasecard to="card-1" img="https://i0.wp.com/post.healthline.com/wp-content/uploads/2022/09/rheumatoid-arthritis-swelling-deformity-bunion-nodules-uveitis-inflammation-body6.jpg?w=1575" link=""  forroute="card-1" disease="Arthritids" description="Rheumatoid Arthritis, Spondyloarthropathies, "/>  <br />
    <Diseasecard to="card-2" img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQar1sILaTb1XzU4WAmvxNB6NOPn6qdNrYww&usqp=CAU" link="" forroute="card-2" disease="Vasculitids" description="ANCA Associated vasculitis, Takayasu Arteritis, Polyarteritis Nodosa, Henoch Schoenlein purpura, cutaneous Leukocytoclastic vasculitis, Behcet’s vasculitis other rarer and secondary vasculitis. "/>  <br />
    <Diseasecard to="card-3" img="https://img.medscapestatic.com/pi/meds/ckb/50/27250tn.jpg" link="" forroute="card-3" disease="Connective tissue diseases" description="SLE, Sjogren’s Syndrome, Mixed Connective Tissue Disease, Scleroderma, Inflammatory Myositis, undifferentiated connective tissue disease "/>  <br />
    <Diseasecard to="card-4" img="https://ars.els-cdn.com/content/image/1-s2.0-S036505962100204X-gr2.jpg" link="" forroute="card-4" disease="Systemic diseases with rheumatological manifestations" description="endocrine, infectious and metabolic diseases, paraneoplastic manifestations etc. "/>  <br />
    <Diseasecard to="card-5" img="https://globalgenes.org/wp-content/uploads/2013/08/anemia.jpg" link="" forroute="card-5" disease="Predominantly single organ limited Autoimmune Diseases" description=" Autoimmune Haemolytic Anaemia, Immune-thrombocytopenic purpura; "/>  <br />
    <Diseasecard to="card-6" img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsjd8zzlzQhGEYQuhpM-YMAdsZv2JG5Hh9gT6DUxf-w_Stk-B-D6CCARw00UXuQj4KX9U&usqp=CAU" link="" forroute="card-6" disease="Paediatric rheumatology" description="Juvenile Idiopathic Arthritis, Juvenile dermatomyositis, Autoinflammatory syndromes, CRMO/ CNO, Primary Immunodeficiency Disorders, etc. "/>  <br />
    <Diseasecard to="card-7" img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvggBk1jMAVCWh0NdTm84-k2pJr7W-aKZqvg&usqp=CAU" link="" forroute="card-7" disease="Rheumatology of pregnancy" description="Antiphospholipid Syndrome (APLA syndrome), neonatal lupus and congenital heart blocks, etc. "/>  <br />
 

 </div>
   
 <h4 className="blue_color" >Procedures</h4>   – Intra-articular injections, lip biopsy, nerve-muscle biopsy, Trigger finger injections, Carpal Tunnel injections etc.

 <h4 className="blue_color">Laboratory tests</h4>   – ANA & ANCA (immunofluorescence), Immunoblots (ANA, myositis-ANAs), ELISAs (ANCA, specific ANA antibodies, anticardiolipin antibodies), Flowcytometry etc.
      </div>
    </div>
  )
}

export default Conditions