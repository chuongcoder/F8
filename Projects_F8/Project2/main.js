

  document.addEventListener('DOMContentLoaded', () => {
    const feedbackList = document.querySelector('.feedback-list');
    const feedbackItems = document.querySelectorAll('.feedback-item');
    const prev = document.querySelector('.prev');
    const next = document.querySelector('.next');
    console.log(prev);
    console.log(next);
  
    let currentIndex = 0;
  
    function showSlide(i) {
      // Ẩn feedbackItem hiện tại
      feedbackItems[currentIndex].classList.add('hidden');
  
      currentIndex += i;
  
      if (currentIndex < 0) {
        currentIndex = feedbackItems.length - 1;
      } else if (currentIndex >= feedbackItems.length) {
        currentIndex = 0;
      }
  
      // Hiển thị feedbackItem mới
      feedbackItems[currentIndex].classList.remove('hidden');
  
      feedbackList.style.transform = `translateX(${-currentIndex * 100}%)`;
    }
  
    prev.addEventListener('click', () => {
      showSlide(-1);
    });
  
    next.addEventListener('click', () => {
      showSlide(1);
    });
  
    setInterval(() => {
      showSlide(1);
    }, 3000); // Chuyển slide tự động sau 3 giây
  
    // Ẩn tất cả các feedbackItem ngoại trừ item đầu tiên ban đầu
    for (let i = 1; i < feedbackItems.length; i++) {
      feedbackItems[i].classList.add('hidden');
    }
  });
  
