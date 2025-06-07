
document.addEventListener('DOMContentLoaded', () => {
    const ratingButtons = document.querySelectorAll('.rating-btn');
    const submitBtn = document.getElementById('submit-btn');
    const thankYouMessage = document.querySelector('.thank-you-message');
    const ratingSelection = document.querySelector('.rating-selection');
    const selectedRatingSpan = document.getElementById('selected-rating');

    let selectedRating = null;

    ratingButtons.forEach(button => {
        button.addEventListener('click', () => {
            ratingButtons.forEach(btn => btn.classList.remove('selected'));
            button.classList.add('selected');
            selectedRating = button.getAttribute('data-value');
            submitBtn.disabled = false;
        });
    });

    submitBtn.addEventListener('click', () => {
        if (selectedRating) {
            ratingSelection.classList.add('hidden');
            selectedRatingSpan.textContent = selectedRating;
            thankYouMessage.classList.remove('hidden');
        }
    });
});
