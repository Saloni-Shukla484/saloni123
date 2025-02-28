// Function to dynamically load content for each page
function loadPage(page) {
    const contentDiv = document.getElementById('content');
  
    // Set content based on the page parameter
    switch (page) {
      case 'home':
        contentDiv.innerHTML = `
          <h1 style="backround-color:light grey; color: black;">Welcome to innovative Academy</h1>
          <p>This is the home page of innovative Academy  website. You can explore different courses and more.</p>
        `;
        break;
      case 'about':
        contentDiv.innerHTML = `
          <h1>About Us</h1>
          <p>Welcome to Innovation Academy!

Inspire. Create. Innovate.

At Innovation Academy, we empower thinkers, dreamers, and doers to shape the future. Whether you're looking to build your skills, explore groundbreaking ideas, or connect with a community of innovators, you’ve come to the right place.

Who We Are

Innovation Academy is a hub for creativity, learning, and transformation. Our mission is to nurture the next generation of innovators by providing resources, mentorship, and opportunities to turn bold ideas into reality. With a focus on interdisciplinary collaboration and hands-on experiences, we help our students thrive in a rapidly evolving world.

Our Programs

1. Innovation Labs:
Dive into cutting-edge technologies, from AI to biotech. Our labs are designed to foster experimentation and learning in a collaborative environment.

2. Workshops & Masterclasses:
Join industry leaders and experts in sessions covering design thinking, prototyping, business innovation, and more.

3. Startup Accelerator:
Have a game-changing idea? Our accelerator program provides funding, mentorship, and networking opportunities to bring your vision to life.

4. Community Events:
Network with fellow innovators at hackathons, pitch competitions, and guest speaker events.

Why Choose Us?

Expert Mentorship: Learn from top industry professionals and academics.

Cutting-Edge Facilities: Access state-of-the-art labs, tools, and resources.

Global Network: Join a thriving community of innovators from around the world.

Real-World Impact: Work on projects that solve real-world challenges and make a difference.

Success Stories

Our alumni have launched successful startups, created award-winning products, and made significant contributions in fields like renewable energy, healthcare, and technology. Will you be our next success story?

Get Involved

Ready to take the next step? Here’s how you can join us:

Apply Now: Explore our programs and submit your application today.

Attend an Event: Check out our upcoming events and get a taste of the Innovation Academy experience.

Partner With Us: Collaborate with us as an industry partner, sponsor, or mentor.

Contact Us

Have questions or want to learn more? We’d love to hear from you!

Email: info@innovationacademy.comPhone: +1 (800) 123-4567Location: 123 Innovation Drive, Tech City, USA

Follow us on social media: Facebook | LinkedIn | Twitter | Instagram

At Innovation Academy, the future is yours to create. Let’s innovate together.</p>
        `;
        break;
      case 'courses':
        contentDiv.innerHTML = `
          <h1>Our Courses</h1>
          <ul>
            <li>Web Development</li>
            <li>Data Science</li>
            <li>Machine Learning</li>
            <li>AI and Deep Learning</li>
            <li>Cloud computing</li>
          </ul>
        `;
        break;
      case 'contact':
        contentDiv.innerHTML = `
          <h1>Contact Us</h1>
          <p>You can reach us via email at <a href="mailto:info@htclasses.com">info@innovationacademy.com</a></p>
        `;
        break;
      default:
        contentDiv.innerHTML = `
          <h1>welcome</h1>
          <p>you can buy in affordable prise to our courses with certification.</p>
        `;
        break;
    }
  }
  
  // Default page load on website start
  loadPage('home');
  function showPopup() {
    document.getElementById('popup').style.display = 'flex';
  }
  
  function closePopup() {
    document.getElementById('popup').style.display = 'none';
  }