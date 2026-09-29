/**
 * Лабораторная работа № 5: Верстка мобильно-ориентированного приложения
 * Скрипт интерактивности приложения P2P-шеринга «СоседШер» (SosedShare)
 */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Мобильное меню (гамбургер)
    const menuBtn = document.getElementById('mobileMenuBtn');
    const navMenu = document.getElementById('navMenu');

    if (menuBtn && navMenu) {
        menuBtn.addEventListener('click', () => {
            navMenu.classList.toggle('is-active');
            const expanded = navMenu.classList.contains('is-active');
            menuBtn.setAttribute('aria-expanded', expanded);
        });
    }

    // 2. Интерактивные чипсы категорий в каталоге
    const chips = document.querySelectorAll('.chip');
    const productCards = document.querySelectorAll('.product-card');

    chips.forEach(chip => {
        chip.addEventListener('click', () => {
            chips.forEach(c => c.classList.remove('active'));
            chip.classList.add('active');

            const category = chip.dataset.category;

            productCards.forEach(card => {
                if (category === 'all' || card.dataset.category === category) {
                    card.style.display = 'flex';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    // 3. Переключение вкладок на странице профиля
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            tabBtns.forEach(b => b.classList.remove('active'));
            tabContents.forEach(c => c.style.display = 'none');

            btn.classList.add('active');
            const targetId = btn.dataset.target;
            const targetContent = document.getElementById(targetId);
            if (targetContent) {
                targetContent.style.display = 'block';
            }
        });
    });

    // 4. Переключение миниатюр в галерее (Страница Деталей)
    const mainPhoto = document.getElementById('mainPhoto');
    const thumbs = document.querySelectorAll('.thumb-img');

    thumbs.forEach(thumb => {
        thumb.addEventListener('click', () => {
            thumbs.forEach(t => t.classList.remove('active'));
            thumb.classList.add('active');
            if (mainPhoto) {
                mainPhoto.src = thumb.src;
            }
        });
    });

    // 5. Модальное окно бронирования
    const bookModalBtn = document.getElementById('bookModalBtn');
    const bookingModal = document.getElementById('bookingModal');
    const closeModalBtn = document.getElementById('closeModalBtn');

    if (bookModalBtn && bookingModal) {
        bookModalBtn.addEventListener('click', () => {
            bookingModal.style.display = 'flex';
        });
    }

    if (closeModalBtn && bookingModal) {
        closeModalBtn.addEventListener('click', () => {
            bookingModal.style.display = 'none';
        });
    }
});
