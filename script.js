
document.getElementById('changeTextBtn').addEventListener('click', function () {
    this.textContent = "You clicked me!";
    this.style.backgroundColor = '#8e44ad';
  });
  
  document.getElementById('hoverBox').addEventListener('mouseover', function () {
    this.style.backgroundColor = '#ffeaa7';
  });
  
  document.getElementById('keyInput').addEventListener('keypress', function (e) {
    console.log(`You pressed: ${e.key}`);
  });
  
  const secretBtn = document.getElementById('secretBtn');
  let pressTimer;
  
  secretBtn.addEventListener('dblclick', () => alert('Double-click activated!'));
  secretBtn.addEventListener('mousedown', () => {
    pressTimer = setTimeout(() => alert('Long press activated!'), 1000);
  });
  secretBtn.addEventListener('mouseup', () => clearTimeout(pressTimer));
  
  // Interactive Elements - Image Gallery
  const mainImg = document.getElementById('mainImg');
  document.querySelectorAll('.thumb').forEach(thumb => {
    thumb.addEventListener('click', function () {
      mainImg.src = this.src;
    });
  });
  
  // Accordion
  document.querySelectorAll('.accordion-btn').forEach(btn => {
    btn.addEventListener('click', function () {
      this.classList.toggle('active');
      const panel = this.nextElementSibling;
      panel.style.display = panel.style.display === 'block' ? 'none' : 'block';
    });
  });
  
  // Form Validation
  const form = document.getElementById('signupForm');
  const email = document.getElementById('email');
  const password = document.getElementById('password');
  const feedback = document.getElementById('formFeedback');
  
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    feedback.textContent = '';
  
    if (!email.validity.valid) {
      feedback.textContent = 'Please enter a valid email.';
    } else if (password.value.length < 8) {
      feedback.textContent = 'Password must be at least 8 characters.';
    } else {
      feedback.textContent = 'Form submitted successfully!';
      feedback.style.color = 'green';
    }
  });
  
  // Real-time password feedback
  password.addEventListener('input', function () {
    if (this.value.length < 8) {
      this.style.borderColor = 'red';
    } else {
      this.style.borderColor = 'green';
    }
  });
  