// Array of testimonials
const testimonials = [
    
    {
        user:"Isaac Semb",
        photoUrl:"https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        quote: "This is the best service I have ever used!",
    
    },
    {
        user:"James Olanya",
        photoUrl:"https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnxlbnwwfDJ8MHx8fDA%3D",
        quote: "Amazing experience, highly recommend it!",
    
    },
    {
        user:"George Peter",
        photoUrl:"https://images.unsplash.com/photo-1628157588553-5eeea00af15c?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHVzZXJ8ZW58MHwyfDB8fHww",
        quote: "Customer support was fantastic, 10/10!",
    
    },
    {
        user:"Adam Sabdler",
        photoUrl:"https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHVzZXJ8ZW58MHwyfDB8fHww",
        quote: "I will definitely use this again, thank you!",
    
    },
    {
        user:"",
        photoUrl:"https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHVzZXJ8ZW58MHwyfDB8fHww",
        quote: "Great quality and fast delivery!"
    
    }
];

// Get the testimonial element
const testimonialUser = document.querySelector('.username');
const testimonialUserImage = document.querySelector('.user-img');
const testimonialText = document.querySelector('.text');

// get the 

// Function to update the testimonial
let currentIndex = 0;
function updateTestimonial() {

    const {user, photoUrl, quote } = testimonials[currentIndex]
    
    testimonialText.textContent = quote;
    testimonialUser.textContent = user
    testimonialUserImage.src = photoUrl

    currentIndex = (currentIndex + 1) % testimonials.length; // Loop back to the start

}

// Change testimonial every 10 seconds
setInterval(updateTestimonial, 5000);

// Initialize with the first testimonial
updateTestimonial();