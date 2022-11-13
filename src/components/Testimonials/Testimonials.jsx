import React from 'react'
import Card from './card'
const Testimonials = () => {
  return (
    <>
      <section className="Testimonials">
  <div class="row d-flex justify-content-center">
    <div class="col-md-10 col-xl-8 text-center">
      <h3 class="mb-4">Testimonials</h3>
      <p class="mb-4 pb-2 mb-md-5 pb-md-0">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, error amet
        numquam iure provident voluptate esse quasi, veritatis totam voluptas nostrum
        quisquam eum porro a pariatur veniam.
      </p>
    </div>
  </div>
   
  <div class="row text-center"> 
    <Card rate="3" name="Lorem, ipsum." job="doctor" image="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp"  description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos in rerum alias?" />
    <Card rate="3" name="Lorem, ipsum." job="doctor" image="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp"  description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos in rerum alias?" />
    <Card rate="3" name="Lorem, ipsum." job="doctor" image="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp"  description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos in rerum alias?" />

  </div>
</section>
    </>
  )
}

export default Testimonials