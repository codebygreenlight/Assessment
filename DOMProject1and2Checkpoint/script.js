// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
    // Get all product cards
    const cards = document.querySelectorAll('.card-body');
    
    // Initialize total price
    updateTotalPrice();

    // Add event listeners to each card
    cards.forEach(card => {
        const plusBtn = card.querySelector('.fa-plus-circle');
        const minusBtn = card.querySelector('.fa-minus-circle');
        const deleteBtn = card.querySelector('.fa-trash-alt');
        const likeBtn = card.querySelector('.fa-heart');
        const quantity = card.querySelector('.quantity');

        // Plus button click
        plusBtn.addEventListener('click', function() {
            quantity.textContent = parseInt(quantity.textContent) + 1;
            updateTotalPrice();
        });

        // Minus button click
        minusBtn.addEventListener('click', function() {
            if (parseInt(quantity.textContent) > 0) {
                quantity.textContent = parseInt(quantity.textContent) - 1;
                updateTotalPrice();
            }
        });

        // Delete button click
        deleteBtn.addEventListener('click', function() {
            card.closest('.card-body').remove();
            updateTotalPrice();
        });

        // Like button click
        likeBtn.addEventListener('click', function() {
            this.classList.toggle('liked');
            if (this.classList.contains('liked')) {
                this.style.color = '#de6b5c';
            } else {
                this.style.color = 'black';
            }
        });
    });
});

// Function to update total price
function updateTotalPrice() {
    let total = 0;
    const cards = document.querySelectorAll('.card-body');
    
    cards.forEach(card => {
        const quantity = parseInt(card.querySelector('.quantity').textContent);
        const unitPrice = parseInt(card.querySelector('.unit-price').textContent);
        total += quantity * unitPrice;
    });

    document.querySelector('.total').textContent = total + ' $';
} 