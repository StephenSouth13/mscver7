document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.getElementById('mobile-toggle');
    const menu = document.getElementById('nav-menu');

    toggle.addEventListener('click', () => {
        menu.classList.toggle('active');
        toggle.innerHTML = menu.classList.contains('active')
            ? '<i class="bi bi-x"></i>'
            : '<i class="bi bi-list"></i>';
    });

    // Active menu item khi scroll tới section
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-menu li a');

    function setActiveMenu() {
        const scrollY = window.scrollY;

        sections.forEach((section) => {
            const sectionTop = section.offsetTop - 150; // trừ header (tuỳ chỉnh)
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
                navLinks.forEach((link) => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    window.addEventListener('scroll', setActiveMenu);
});

window.addEventListener('scroll', function() {
    const logoImg = document.querySelector('.logo img');
    if (window.scrollY > 50) {
      logoImg.style.height = '50px';
    } else {
      logoImg.style.height = '70px'; // Chiều cao ban đầu
    }
  });

  document.addEventListener("DOMContentLoaded", function () {
    const toggle = document.getElementById("mobile-toggle");
    const close = document.getElementById("mobile-close");
    const mobileMenu = document.getElementById("nav-mobile-menu");
    const overlay = document.getElementById("mobile-overlay");

    // Mở menu
    toggle.addEventListener('click', () => {
      mobileMenu.classList.add('active');
      overlay.classList.add('active');
    });

    // Đóng menu
    close.addEventListener('click', () => {
      mobileMenu.classList.remove('active');
      overlay.classList.remove('active');
    });

    // Đóng menu khi nhấn vào overlay
    overlay.addEventListener('click', () => {
      mobileMenu.classList.remove('active');
      overlay.classList.remove('active');
    });
  });
  let currentSlide = 0;

function moveSlide(direction) {
  const slides = document.querySelectorAll('.msc-grid');
  const totalSlides = slides.length;

  // Cập nhật chỉ số slide hiện tại
  currentSlide += direction;

  // Đảm bảo chỉ số không ra ngoài giới hạn
  if (currentSlide < 0) {
    currentSlide = totalSlides - 1; // Quay về slide cuối
    document.getElementById("current-year").innerText = "KHÓA 2024";
  } else if (currentSlide >= totalSlides) {
    currentSlide = 0; // Quay về slide đầu
    document.getElementById("current-year").innerText = "KHÓA 2025";
  }

  // Di chuyển carousel
  const carousel = document.querySelector('.carousel-slide');
  const offset = -currentSlide * (300 + 20); // 300 là chiều rộng item + 20 là khoảng cách
  carousel.style.transform = `translateX(${offset}px)`;
}
// Back to Top Button
document.addEventListener('DOMContentLoaded', () => {
  const backToTopButton = document.getElementById('back-to-top');

  // Hiển thị nút khi cuộn xuống
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      backToTopButton.classList.add('show');
    } else {
      backToTopButton.classList.remove('show');
    }
  });

  // Cuộn lên đầu trang khi nhấn nút
  backToTopButton.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
});