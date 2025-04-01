const contactForm=document.getElementById('contact-form'),
   contactMessage= document.getElementById('contact-message')

const sendEmail  = (e) =>{
    e.preventDefault()
    
   
    emailjs.sendForm('service_4zhs3ta','template_5phac9k','#contact-form','5I1I1F0KUgJCCG49j')
    .then(() =>{
    
      contactMessage.textContent="Message sent successfully ✅"
     
    
    setTimeout(() =>{
        contactMessage.textContent =""
    },5000)   
    
   
    contactForm.reset()

},()=>{
   
    contactMessage.textCOntent='Message not sent (service error) ❌'
})


}

contactForm.addEventListener('submit',sendEmail)