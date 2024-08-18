document.addEventListener('DOMContentLoaded', () => {
    const accordion = document.getElementById('accordion');
    const items = accordion.querySelectorAll('.accordion-item');

    items.forEach(item => {
        const button = item.querySelector('.accordion-title');
        const content = item.querySelector('.accordion-content');
        const icon = button.querySelector('svg');

        button.addEventListener('click', () => {
            // Close all items
            items.forEach(otherItem => {
                if (otherItem !== item) {
                    const otherContent = otherItem.querySelector('.accordion-content');
                    otherContent.style.maxHeight = null;
                    otherItem.querySelector('svg').classList.remove('rotate-180');
                }
            });

            // Toggle the clicked item
            if (content.style.maxHeight) {
                content.style.maxHeight = null;
                icon.classList.remove('rotate-180');
            } else {
                content.style.maxHeight = content.scrollHeight + 'px';
                icon.classList.add('rotate-180');
            }
        });
    });
});
