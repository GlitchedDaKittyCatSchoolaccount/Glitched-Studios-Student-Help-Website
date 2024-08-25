gsap.fromTo( // i have no clue what this is
    ".loading-page",
    { opacity: 1 },
    {
      opacity: 0,
      display: "none",
      duration: 1.5,
      delay: 3.5,
    }
  );
  
  gsap.fromTo(
    ".logo-name",
    {
      y: 50,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration: 2,
      delay: 0.5,
    }
  );
  

  const audio = document.getElementById("audio");
  audio.volume = 0.8;
  
  const titleElement = document.getElementById("title");
  const titleText = "NSM Official Website";
  let currentIndex = 0;

  const navBar = document.querySelector('.nav-bar');
  const navBarButton = document.getElementById('nav-bar-button');
  const closeButton = document.getElementById('close-button');

  navBarButton.addEventListener('click', () => {
      navBar.classList.toggle('show');
      navBarButton.style.display = 'none';
      closeButton.style.display = 'block';
  });

  closeButton.addEventListener('click', () => {
      navBar.classList.remove('show');
      navBarButton.style.display = 'block';
      closeButton.style.display = 'none';
  });
  
  function typeWriter() {
      if (currentIndex < titleText.length) {
          titleElement.textContent += titleText[currentIndex];
          currentIndex++;
          setTimeout(typeWriter, 500);
      }
  }
  
  typeWriter();
  