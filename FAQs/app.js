const btnFaqs = document.querySelectorAll('.btn-faqs');
const faqsAnswers = document.querySelectorAll('.faqs-answer');

btnFaqs.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    const isOpen = faqsAnswers[index].classList.contains('faqs-answer-show');

    faqsAnswers.forEach((answer, i) => {
      answer.classList.remove('faqs-answer-show');
      btnFaqs[i].textContent = "+";
    });

    if (!isOpen) {
      faqsAnswers[index].classList.add('faqs-answer-show');
      btn.textContent = "-";
    }
  });
});
