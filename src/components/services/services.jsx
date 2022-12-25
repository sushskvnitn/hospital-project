import React from "react";
import "./services.css";
import AOS from "aos";
import ServiceCards from "./serviceCard";
const Services = () => {
  AOS.init();
  return (
    <div className="marn-top" data-aos="fade-down">
      <h1 className="text-center blue_color pt-4">
        
        <b>Our Services</b>
      </h1>
      <br />
      <section className="we-offer-area text-center bg-gray">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="site-heading text-center">
                <h4>
                  SARC is a Advanced Rheumatology Centre with all specialities
                  and super specialities under one roof performing entire range
                  of diagnostic, therapeutic and interventional procedures
                </h4>
              </div>
            </div>
          </div>
          <div className="row our-offer-items less-carousel d-flex justify-content-center">
            <ServiceCards
              icon="https://img.icons8.com/ios-filled/50/null/out-patient-department.png"
              title="Out-patient department (OPD)"
              description=" Outpatient department consists of a general OPD that provides for a consultation with a specialist in the field of rheumatology and immunology. A new patient as well as a patient coming for a review can book an appointment, through online token using website (link), telephonically (see contact us) or by walk-in appointments. However, since it takes time for a patient to undergo the complete work up, it is advisable to confirm appointment before coming to the OPD directly.. "
            />
            <ServiceCards
              icon="https://img.icons8.com/ios-filled/50/null/laboratory.png"
              title=" Laboratory services"
              description="We intend to provide a complete and state of the art laboratory solution when it comes to immunological ‘special’ tests, either through in-house capacity building or through collaborative effort with reputed laboratories and teaching institutes. Gone should be the days when patients from our region need to wait for days together for the report to come just because the tests are not done here. "
            />
            <ServiceCards
                icon="https://img.icons8.com/external-others-pike-picture/50/null/external-Radiology-radiology-others-pike-picture-3.png"
                title="Radiology"
                description="Basic radiology as required for rheumatological illnesses"
                />
            <ServiceCards
                icon="https://img.icons8.com/ios-filled/50/null/physical-therapy.png"
                title="Physiotherapy"
                description="Physiotherapy is used to treat a wide range of conditions, including sports injuries, back and neck pain, arthritis, and heart and lung disease.Shall start this service soon "
                />
            <ServiceCards
                icon="https://img.icons8.com/external-smashingstocks-mixed-smashing-stocks/68/null/external-medical-care-pharmacy-smashingstocks-mixed-smashing-stocks.png"
                title="Day care facility"
                description="A facility provided for the purpose of intravenous infusions under supervision. Observations following outpatient procedures. "
                />
            
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
