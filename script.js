// Navigation functionality
document.addEventListener("DOMContentLoaded", () => {
  const navToggle = document.getElementById("navToggle")
  const navMenu = document.getElementById("navMenu")
  const navButtons = document.querySelectorAll(".nav-button")
  const Swal = window.Swal // Declare the Swal variable

  // Mobile menu toggle
  navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active")
    navToggle.classList.toggle("active")
  })

  // Close mobile menu when clicking on a button
  navButtons.forEach((button) => {
    button.addEventListener("click", () => {
      navMenu.classList.remove("active")
      navToggle.classList.remove("active")
    })
  })

  // Smooth scrolling for navigation links
  navButtons.forEach((button) => {
    button.addEventListener("click", function (e) {
      e.preventDefault()
      const targetId = this.textContent.toLowerCase()
      const targetSection = document.querySelector(`#${targetId}`)

      if (targetSection) {
        const offsetTop = targetSection.offsetTop - 70 // Account for fixed nav
        window.scrollTo({
          top: offsetTop,
          behavior: "smooth",
        })
      }
    })
  })

  // Active navigation button highlighting
  function updateActiveNavButton() {
    const sections = document.querySelectorAll("section[id]")
    const scrollPos = window.scrollY + 100

    sections.forEach((section) => {
      const sectionTop = section.offsetTop
      const sectionHeight = section.offsetHeight
      const sectionId = section.getAttribute("id")

      if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
        navButtons.forEach((button) => button.classList.remove("active"))
        // Find the button that corresponds to this section
        navButtons.forEach((button) => {
          if (
            button.textContent.toLowerCase() === sectionId ||
            (sectionId === "home" && button.textContent === "Home")
          ) {
            button.classList.add("active")
          }
        })
      }
    })
  }

  // Scroll progress indicator
  function updateScrollProgress() {
    const scrollTop = window.scrollY
    const docHeight = document.documentElement.scrollHeight - window.innerHeight
    const scrollPercent = (scrollTop / docHeight) * 100

    let progressBar = document.querySelector(".scroll-progress")
    if (!progressBar) {
      progressBar = document.createElement("div")
      progressBar.className = "scroll-progress"
      document.body.appendChild(progressBar)
    }

    progressBar.style.width = scrollPercent + "%"
  }

  // Fade in animation for elements
  function animateOnScroll() {
    const elements = document.querySelectorAll(
      ".about-card, .publication-card, .project-card, .skill-category, .contact-item",
    )

    elements.forEach((element) => {
      const elementTop = element.getBoundingClientRect().top
      const elementVisible = 150

      if (elementTop < window.innerHeight - elementVisible) {
        element.classList.add("fade-in", "visible")
      }
    })
  }

  // Animate skill bars when they come into view
  function animateSkillBars() {
    const skillBars = document.querySelectorAll(".skill-progress")

    skillBars.forEach((bar) => {
      const barTop = bar.getBoundingClientRect().top

      if (barTop < window.innerHeight - 100) {
        const width = bar.style.width
        bar.style.width = "0%"
        setTimeout(() => {
          bar.style.width = width
        }, 100)
      }
    })
  }

  // Event listeners
  window.addEventListener("scroll", () => {
    updateActiveNavButton()
    updateScrollProgress()
    animateOnScroll()
    animateSkillBars()
  })

  // Initial calls
  updateActiveNavButton()
  updateScrollProgress()
  animateOnScroll()

  // Contact form submission with SheetDB integration
  const contactForm = document.getElementById("contactForm")
  const submitBtn = document.getElementById("submitBtn")
  const btnText = document.getElementById("btnText")

  contactForm.addEventListener("submit", async (e) => {
    e.preventDefault()

    // Show loading state
    submitBtn.disabled = true
    btnText.innerHTML = '<span class="loading"></span> Sending...'

    // Get form data
    const formData = new FormData(contactForm)
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      subject: formData.get("subject"),
      message: formData.get("message"),
      timestamp: new Date().toISOString(),
    }

    try {
      // Replace 'YOUR_SHEETDB_API_URL' with your actual SheetDB API URL
      const response = await fetch("https://sheetdb.io/api/v1/YOUR_SHEETDB_API_URL", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          data: [data],
        }),
      })

      if (response.ok) {
        // Success
        Swal.fire({
          icon: "success",
          title: "Message Sent!",
          text: "Thank you for your message. I'll get back to you soon!",
          confirmButtonColor: "#059669",
          timer: 5000,
          timerProgressBar: true,
        })

        // Reset form
        contactForm.reset()
      } else {
        throw new Error("Failed to send message")
      }
    } catch (error) {
      console.error("Error:", error)

      // Error alert
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong! Please try again or contact me directly via email.",
        confirmButtonColor: "#059669",
        footer: '<a href="mailto:sadia15-3980@diu.edu.bd">Send email directly</a>',
      })
    } finally {
      // Reset button state
      submitBtn.disabled = false
      btnText.innerHTML = '<i class="fas fa-paper-plane"></i> Send Message'
    }
  })

  // Add initial fade-in class to animated elements
  const animatedElements = document.querySelectorAll(
    ".about-card, .publication-card, .project-card, .skill-category, .contact-item",
  )
  animatedElements.forEach((element) => {
    element.classList.add("fade-in")
  })
})

// Utility function for smooth scrolling
function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId)
  if (section) {
    const offsetTop = section.offsetTop - 70
    window.scrollTo({
      top: offsetTop,
      behavior: "smooth",
    })
  }
}

// Navbar background change on scroll
window.addEventListener("scroll", () => {
  const nav = document.querySelector(".nav")
  if (window.scrollY > 50) {
    nav.style.background = "rgba(255, 255, 255, 0.98)"
    nav.style.boxShadow = "0 2px 20px rgba(0, 0, 0, 0.1)"
  } else {
    nav.style.background = "rgba(255, 255, 255, 0.95)"
    nav.style.boxShadow = "none"
  }
})

// Typing effect for hero title (optional enhancement)
function typeWriter(element, text, speed = 100) {
  let i = 0
  element.innerHTML = ""

  function type() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i)
      i++
      setTimeout(type, speed)
    }
  }

  type()
}

// Initialize typing effect on page load (optional)
// window.addEventListener('load', function() {
//     const heroTitle = document.querySelector('.hero-title .text-primary');
//     if (heroTitle) {
//         typeWriter(heroTitle, 'Sadia Islam', 150);
//     }
// });
