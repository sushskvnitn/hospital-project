import React from 'react'
import DoctorCard from './doctorcard'
import AOS from 'aos';
const Doctors = () => {
  AOS.init();
  return (
    <div className=" Conditions" data-aos="fade-down">
    <h1 className="text-center blue_color pt-4" > <b>Meet our Doctors </b> </h1>
    <h5 className="text-center" >Place your trust in our team of Doctors with the midas touch and decades
of experience. Live pain free on your way to recovery.</h5>
    <div className="container d-flex justify-content-center flex-wrap">

      <div className="row">
        <div className="col-md-4">
          <DoctorCard name="Salil A Ganu "
          subdesc="Consultant rheumatologist and clinical immunologist"
           education="MBBS
           • MD (internal medicine)
           • Post-doctoral fellow from CMC vellore (clinical immunology and rheumatology)
           • DM (clinical immunology and rheumatology)"
           address=""
           website=""
           email=""
          experiance="Worked as a senior resident (PG) 3 years as a part of DM training at Amrita Institute of Medical Science, Kochi. •
            Worked as a senior resident (PG) for 2 years and senior registrar (non-PG) for 6 months in prestigious Christina Medical College Vellore.
            • Has a keen interest in clinical research further area of interest – connective tissue diseases, vasculitis and autoinflammatory syndromes."
          image="https://img.freepik.com/free-photo/portrait-smiling-male-doctor_171337-1532.jpg?w=996&t=st=1670048389~exp=1670048989~hmac=a9a06ea7e58052cdc5f2c3bf201a793e59dffca753526f4962fec80b22da8a6d"
          interests="Orthopedics"
          achievement="  Ganu SA, Mathew AJ, Nadaraj A, Jeyaseelan L, Danda D. Cotrimoxazole prophylaxis prevents major infective episodes in patients with systemic lupus erythematosus on immunosuppressants: A non-concurrent cohort study. Lupus. 2021 May;30(6):893-900. doi: 10.1177/0961203321995238. Epub 2021 Feb 24. PMID: 33626971.
          • Visalakshy J, Surendran S, Ganu S, Shah K, Mithun CB, Marwaha V, Biswas L, Kartha N, Pillai G. Describing the Clinical and Laboratory Features and HLA-B Pattern of Adult-Onset Idiopathic Autoimmune Uveitis at a Tertiary Hospital in South India: A Cross-Sectional Study. ScientificWorldJournal. 2022 Feb 8;2022:5032881. doi: 10.1155/2022/5032881. PMID: 35197811; PMCID: PMC8860532." />
        </div>
        <div className="col-md-4">
          <DoctorCard name="Mohini Ashok Ganu" 
            subdesc="Senior visiting consultant physician with special interest in rheumatology"
           education="MBBS, MD"
           address="abcd chowk ,nagpur"
           website="www.google.com"
           email="abcd@gmail.com"
           achievement="2nd rank in cardio"
          experiance="AIIMS, New Delhi"
          image="https://img.freepik.com/free-photo/portrait-smiling-male-doctor_171337-1532.jpg?w=996&t=st=1670048389~exp=1670048989~hmac=a9a06ea7e58052cdc5f2c3bf201a793e59dffca753526f4962fec80b22da8a6d"
          interests="Orthopedics"
           />
        </div>
        <div className="col-md-4">  
          <DoctorCard name="Ashok Shankar Ganu "
          subdesc="Senior visiting consultant physician "
          education="MBBS, MD"
          address="abcd chowk ,nagpur"
          website="www.google.com"
          email="abcd@gmail.com"
          achievement="2nd rank in cardio"
          experiance="AIIMS, New Delhi"
          image="https://img.freepik.com/free-photo/portrait-smiling-male-doctor_171337-1532.jpg?w=996&t=st=1670048389~exp=1670048989~hmac=a9a06ea7e58052cdc5f2c3bf201a793e59dffca753526f4962fec80b22da8a6d"
          interests="Orthopedics"
          />
        </div>
         <div className="col-md-4">  
          <DoctorCard name="Devashree S. Warnekar-Ganu"
          subdesc="Consultant anaesthetist"
          education="MBBS, MD"
          address="abcd chowk ,nagpur"
          website="www.google.com"
          email="abcd@gmail.com"
          achievement="2nd rank in cardio"
          experiance="AIIMS, New Delhi"
          image="https://img.freepik.com/free-photo/portrait-smiling-male-doctor_171337-1532.jpg?w=996&t=st=1670048389~exp=1670048989~hmac=a9a06ea7e58052cdc5f2c3bf201a793e59dffca753526f4962fec80b22da8a6d"
          interests="Orthopedics"
          />
        </div>
      </div>
    </div>


    </div>
  )
}

export default Doctors