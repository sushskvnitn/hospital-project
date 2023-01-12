import React from "react";
import Diseasecard from "./Disease-card";
import "../services/services.css";
import AOS from "aos";
const Conditions = () => {
  AOS.init();
  return (
    <div className="Conditions marn-top ">
      <h1 className="text-center blue_color pt-4">
        <b> Conditions Treated</b>
      </h1>
      <div className=" mx-4 ">
        <h4 className="text-center mt-4">
          
        </h4>
        <h5 className="text-center">
          A broad category wise summary of conditions that are treated by a Rheumatologist is provided below
        </h5>
        <br />
        <h3 className="blue_color">Categories of diseases </h3> <br /> 
        <div className="text-end">
          <mark style={{
            color: "#043d78",
            backgroundColor: "#fff",
          }}  >Click the card to know more  </mark>
        </div>
        
        <div className="d-flex justify-content-center flex-wrap ">
         
          <br />
          <Diseasecard
            to="card-2"
            img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQar1sILaTb1XzU4WAmvxNB6NOPn6qdNrYww&usqp=CAU"
            link=""
            backheader="These diseases include - "
            backdescription="     Giant cell arteritis (GCA), 
    • Takayasu arteritis (Tak), 
    • Polyarteritis nodosa (PAN), 
    • Kawasaki disease (KD), 
    • ANCA associated vasculitis 
    • Henoch Schonleine purpura (HSP)
    • Cryoglobulinemic vasculitis
    • Primary angiitis of CNS
    • Cutaneous leukocytoclastic vasculitis
    • Vasculitis secondary to systemic illnesses"
            forroute="card-2"
            disease="Vasculitids"
            description="Vasculitids as a group consists of various vasculitis, which are the group of diseases in which blood supply to the involved organ is hampered due to an inflammation of blood vessels supplying it."
          />
          <br />
          <Diseasecard
            to="card-6"
            img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsjd8zzlzQhGEYQuhpM-YMAdsZv2JG5Hh9gT6DUxf-w_Stk-B-D6CCARw00UXuQj4KX9U&usqp=CAU"
            link=""
            forroute="card-6"
            backheader="These diseases include - "
            backdescription="
     Autoimmune uveitis
    • Autoimmune haemolytic anaemia
    • Immune thrombocytopenic purpura
    • Cutaneous leukocytoclastic vasculitis
    • Pyoderma gangrenosum
    • Erythema nodosum
    • Primary angiitis of central nervous system
            "
            disease="Single organ limited autoimmune diseases"
            description="The single organ limited autoimmune diseases for which a rheumatological consultation might be required include  "
          />
          <br />
          
          <Diseasecard
            to="card-8"
            img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvggBk1jMAVCWh0NdTm84-k2pJr7W-aKZqvg&usqp=CAU"
            link=""
            forroute="card-8"
            disease="Pregnancy and Rheumatology"
            backheader="Common diseases for which a rheumatologist gets referral include –"
            backdescription="
     Antiphospholipid syndrome
    • Systemic lupus erythematosus
    • Neonatal lupus
    • Congenital heart disease
    • vasculitis "
            description="The pregnancy can alter the natural course of your rheumatic disease and your disease can also alter the outcome of a pregnancy. Therefore, it is advisable to contact your rheumatologist and OBGYN doctor for an unplanned or a planned pregnancy (even in planning stage)."
          />
           <Diseasecard
            to="card-1"
            img="https://i0.wp.com/post.healthline.com/wp-content/uploads/2022/09/rheumatoid-arthritis-swelling-deformity-bunion-nodules-uveitis-inflammation-body6.jpg?w=1575"
            link="https://www.youtube.com/watch?v=vznl2Vd5Y9Q"
            backheader="These conditions include the following (not an exhaustive list) –"
            backdescription="   
              Rheumatoid arthritis, 
             • Spndyloarthritis, 
             • Ankylosing spondylitis, 
             ◦   psoriatic arthritis, 
             ◦   Enteropathic arthritis, 
             ◦   reactive arthritis "
            forroute="card-1"
            disease="Arthritids"
            description="Arthritds are diseases who’s predominant symptom is related to joints (joint pain/ swelling/ stiffness or dysfunction)."
          />
          <Diseasecard
            to="card-4"
            img="https://ars.els-cdn.com/content/image/1-s2.0-S036505962100204X-gr2.jpg"
            link=""
            forroute="card-4"
            backheader="These diseases include - "
            backdescription="
     Bursitis
    • Enthesitis
    • Tenosinuvitis
    • Tendinosis"
            disease="Soft tissue rheumatism "
            description="Soft tissue rheumatism includes disorders of tendons and their sheaths, ligaments, bursae, joint capsules, muscles, fasciae and others. "
          />
          <br />
          <Diseasecard
            to="card-5"
            img="https://globalgenes.org/wp-content/uploads/2013/08/anemia.jpg"
            link=""
            forroute="card-5"
            disease="Rheumatic manifestations of systemic diseases"
            backheader="These diseases include - "
            backdescription="
     Atherosclerosis
    • Infections like – TB, hepatitis, HIV, paraneoplastic arthritis
    • Endocrinopathies and metabolic diseases – Diabetes mellitus, hypothyroidism, glycogen storage diseases
    • Hematological diseases like sickle cell anaemia, thalassemias, hemochromatosis, hemophilias, vonWillbrand disease etc
    • Hereditary abnormalities of connective tissues – Marphan’s syndrome, Ehler’s Donlos Syndrome, etc"
            description="‘Not all aches and pains are due to rheumatic diseases !’ 
There are many other medical conditions that can mimic a rheumatic disease due to their peculiar clinical manifestations. "
          />
          <br />
          <Diseasecard
            to="card-7"
            img="https://www.mountsinai.org/files/MSHealth/Assets/HS/Care/Pediatrics/MSHS-Pediatrics-Rheumatology-2col-770x420.jpg"
            link="https://www.youtube.com/watch?v=2L8DaIJuP1E"
            forroute="card-7"
            disease="Paediatric rheumatology"
            backheader="These diseases include - "
            backdescription="
     Juvenile idiopathic arthritis
    • Childhood onset systemic lupus erythematosus
    • Juvenile dermatmyositis
    • Chronic recurrent multifocal osteomyelitis/ chronic nonbacterial osteomyelitis
            "
            description="These diseases do occur in children and they are not even rare. In fact, children unlike in adults have a developing (not yet completely developed) immune system because of which many of these diseases are even more severe if they start in childhood. Severe nature of these problems have their unique unintended effects on growth and development in children "
          />
          <br />
          <Diseasecard
            to="card-3"
            img="https://img.medscapestatic.com/pi/meds/ckb/50/27250tn.jpg"
            link=""
            forroute="card-3"
            backheader="Main diseases in this category include - "
            backdescription="
     Systemic Lupus Erythematosus (SLE)
    • Primary Sjogrens Syndrome (PSS)
    • Immune Mediated Inflammatory Myositis 
        ◦ Dermatomyositis, 
        ◦ Polymyositis
        ◦ Inclusion body myositis
    • Systemic Sclerosis (SSc)
    • Mixed Connective Tissue Disease (MCTD)
    • Undifferentiated Connective Tissue Diseases (UCTDs)"
            disease="Connective tissue diseases"
            description="These truly multi-system diseases with varied manifestations do not present with joint symptoms alone (although these are presenting symptoms in many such diseases). Because of involvement of multiple body systems, their clinical manifestations also are varied such as skin rash, dry eyes, redness of eys, watering, photophobia, fingertip ulcers, skin tightness, difficulty swallowing food, limb weakness tingling and numbness etc. "
          />
      
          <br />
        </div>
        <div className="row   text-center">
          <h2 className=" text-center"> More Information </h2>
          <div className="col-md-5 offset-md-1 col-sm-6 equal-height  ">
            <div
              className="item blue_color card-shadow-cnd bg-light rounded"
              style={{ height: "18rem" }}
            >
              <i className="fas fa-scroll fs-2 m-2"></i>
              <h4>Links to educational videos</h4>
              <p>What is Rheumatology part 1 (marathi)
              https://youtu.be/UHvtlKdOkDI</p>
              <p>Joint pain (marathi) 
              https://youtu.be/ChjawRD6lsE</p>
              <p>"https://youtu.be/2L8DaIJuP1E"</p>
              <p>Backache (marathi)
              https://youtu.be/vznl2Vd5Y9Q</p>
            </div>
          </div>
          <div className="col-md-5 col-sm-6 equal-height ">
            <div
              className="item blue_color card-shadow-cnd bg-light rounded"
              style={{ height: "18rem" }}
            >
              <i className="fas fa-microscope fs-2 m-2"></i>
              <h4>Laboratory tests</h4>
              <p>ANA & ANCA (immunofluorescence)</p>
              <p>Immunoblots (ANA, myositis-ANAs)</p>
              <p>
                ELISAs (ANCA, specific ANA antibodies, <br /> anticardiolipin
                antibodies)
              </p>
              <p>Flowcytometry</p>
            </div>
          </div>
        </div>
        <br />
        {/* <h4 className="blue_color" >Procedures</h4>   – Intra-articular injections, lip biopsy, nerve-muscle biopsy, Trigger finger injections, Carpal Tunnel injections etc.

 <h4 className="blue_color">Laboratory tests</h4>   – ANA & ANCA (immunofluorescence), Immunoblots (ANA, myositis-ANAs), ELISAs (ANCA, specific ANA antibodies, anticardiolipin antibodies), Flowcytometry etc. */}
      </div>
    </div>
  );
};

export default Conditions;
