document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navMenu = document.querySelector('.nav-menu');

    mobileMenuBtn.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
    });

    // Close menu when clicking a link
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        });
    });
});

function openModal(imgSrc) {
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    modal.style.display = "block";
    modalImg.src = imgSrc;
}

function closeModal() {
    const modal = document.getElementById('imageModal');
    modal.style.display = "none";
}

// Close modal when clicking outside the image
window.onclick = function(event) {
    const modal = document.getElementById('imageModal');
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function checkPassword(event) {
    event.preventDefault();
    
    const form = document.getElementById('password-form');
    const accessCode = form.access_code.value;
    const errorMessage = document.getElementById('password-error');
    
    // Change this to your desired access code
    const correctAccessCode = "Rashed2024"; 
    
    if (accessCode === correctAccessCode) {
        // Hide password form and show contact form
        form.style.display = 'none';
        document.getElementById('contact-form').style.display = 'block';
        errorMessage.style.display = 'none';
    } else {
        // Show error message
        errorMessage.style.display = 'block';
        form.access_code.value = ''; // Clear the input
    }
}

function handleSubmit(event) {
    event.preventDefault();
    
    const form = document.getElementById('contact-form');
    const name = form.name.value;
    const email = form.email.value;
    const message = form.message.value;
    
    // Create email content
    const subject = "Contact Form Submission from " + name;
    const body = `Name: ${name}
Email: ${email}

Message:
${message}`;

    // Open default email client
    window.location.href = `mailto:mahmudrasin@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Show confirmation message
    form.style.display = 'none';
    document.getElementById('confirmation-message').style.display = 'block';
    
    // Reset form
    form.reset();
}