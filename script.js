    
        document.addEventListener('DOMContentLoaded', function() {
            const testimonials = document.querySelectorAll('.testimonial');
            const prevBtn = document.querySelector('.prev');
            const nextBtn = document.querySelector('.next');
            let currentIndex = 0;
            
            function showTestimonial(index) {
                testimonials.forEach(testimonial => {
                    testimonial.classList.remove('active');
                });
                
                testimonials[index].classList.add('active');
            }
            
            prevBtn.addEventListener('click', function() {
                currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
                showTestimonial(currentIndex);
            });
            
            nextBtn.addEventListener('click', function() {
                currentIndex = (currentIndex + 1) % testimonials.length;
                showTestimonial(currentIndex);
            });
            
            
            setInterval(function() {
                currentIndex = (currentIndex + 1) % testimonials.length;
                showTestimonial(currentIndex);
            }, 5000);
            
           
            const faqItems = document.querySelectorAll('.faq-item');
            
            faqItems.forEach(item => {
                const question = item.querySelector('.faq-question');
                const toggleIcon = question.querySelector('.toggle-icon');
                
                question.addEventListener('click', () => {
                   
                    faqItems.forEach(otherItem => {
                        if (otherItem !== item && otherItem.classList.contains('active')) {
                            otherItem.classList.remove('active');
                            otherItem.querySelector('.toggle-icon').textContent = '+';
                        }
                    });
                    
                    
                    item.classList.toggle('active');
                    
                    
                    if (item.classList.contains('active')) {
                        toggleIcon.textContent = '-';
                    } else {
                        toggleIcon.textContent = '+';
                    }
                });
            });
            
           
            const messageForm = document.getElementById('messageForm');
            
            messageForm.addEventListener('submit', function(e) {
                e.preventDefault();
                
                
                const email = document.getElementById('email').value;
                const message = document.getElementById('message').value;
                
                
                console.log('Form submitted:', { email, message });
                
                
                alert('Thank you for your message! We will get back to you soon.');
                
               
                messageForm.reset();
            });
        });