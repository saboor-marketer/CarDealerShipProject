// Car data
const cars = [
    {
        brand: 'Bugatti',
        model: 'Divo',
        image: 'bugatti-divo-99leadgallery-1535035005.jpg',
        miles: '5-8 km/l',
        price: 'PKR 1,200,000,000',
        year: '2023',
        transmission: 'Automatic',
        description: 'The Bugatti Divo is a mid-engine track-focused sports car developed and manufactured by Bugatti Automobiles S.A.S.'
    },
    {
        brand: 'Bugatti',
        model: 'Veyron',
        image: 'bugatti-veyron-front-schräg-links-2.jpg',
        miles: '4-7 km/l',
        price: 'PKR 1,800,000,000',
        year: '2019',
        transmission: 'Automatic',
        description: 'The Bugatti Veyron is a mid-engine sports car designed and developed in Germany by the Volkswagen Group.'
    },
    {
        brand: 'Audi',
        model: 'A6',
        image: 'Audi_A6_Front.jpg',
        miles: '15-20 km/l',
        price: 'PKR 25,000,000',
        year: '2023',
        transmission: 'Automatic',
        description: 'The Audi A6 is an executive car made by the German automaker Audi.'
    },
    {
        brand: 'Audi',
        model: 'A7',
        image: 'Audi_A7_Front.jpg',
        miles: '14-18 km/l',
        price: 'PKR 35,000,000',
        year: '2023',
        transmission: 'Automatic',
        description: 'The Audi A7 is a luxury liftback coupe produced by Audi AG.'
    },
    {
        brand: 'Lamborghini',
        model: 'Sian',
        image: 'lamborghini_sian1.jpg',
        miles: '6-10 km/l',
        price: 'PKR 1,500,000,000',
        year: '2023',
        transmission: 'Automatic',
        description: 'The Lamborghini Sián is a mid-engine hybrid sports car produced by the Italian automotive manufacturer Lamborghini.'
    },
    {
        brand: 'Lexus',
        model: 'LS 500',
        image: 'cc_2025LES120002_01_1280_0083.png',
        miles: '12-16 km/l',
        price: 'PKR 45,000,000',
        year: '2023',
        transmission: 'Automatic',
        description: 'The Lexus LS is a full-size luxury sedan serving as the flagship model of Lexus.'
    },
    {
        brand: 'BMW',
        model: '7 Series',
        image: 'ho7hhva_1601385.jpg',
        miles: '13-17 km/l',
        price: 'PKR 40,000,000',
        year: '2023',
        transmission: 'Automatic',
        description: 'The BMW 7 Series is a full-size luxury sedan produced by the German automaker BMW.'
    }
];

// Brands data
const brands = [
    { name: 'Bugatti', logo: 'bugatti-veyron-front-schräg-links-2.jpg' },
    { name: 'Audi', logo: 'Audi_A6_Front.jpg' },
    { name: 'Lamborghini', logo: 'lamborghini_sian1.jpg' },
    { name: 'Lexus', logo: 'cc_2025LES120002_01_1280_0083.png' },
    { name: 'BMW', logo: 'ho7hhva_1601385.jpg' }
];

// Function to create car cards
function createCarCards() {
    const container = document.querySelector('#featured .row');
    
    cars.forEach((car, index) => {
        const col = document.createElement('div');
        col.className = 'col-md-4 mb-4 fade-in';
        col.style.animationDelay = `${index * 0.1}s`;
        
        col.innerHTML = `
            <div class="card h-100">
                <img src="${car.image}" class="card-img-top" alt="${car.brand} ${car.model}">
                <div class="card-body">
                    <h5 class="card-title">${car.brand} ${car.model} (${car.year})</h5>
                    <p class="card-text">${car.description}</p>
                    <div class="car-specs">
                        <span><i class="fas fa-tachometer-alt"></i> ${car.miles}</span>
                        <span><i class="fas fa-cog"></i> ${car.transmission}</span>
                    </div>
                    <div class="d-flex justify-content-between align-items-center mt-3">
                        <h4 class="price mb-0">${car.price}</h4>
                        <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#carModal" 
                                data-car='${JSON.stringify(car).replace(/'/g, "\\'")}'>
                            View Details
                        </button>
                    </div>
                </div>
            </div>
        `;
        
        container.appendChild(col);
    });
}

// Function to create brand logos
function createBrandLogos() {
    const container = document.getElementById('brands-container');
    
    brands.forEach((brand, index) => {
        const col = document.createElement('div');
        col.className = 'col-6 col-md-4 col-lg-2 mb-4';
        
        col.innerHTML = `
            <div class="brand-logo">
                <img src="${brand.logo}" alt="${brand.name}" class="img-fluid">
                <h5>${brand.name}</h5>
            </div>
        `;
        
        container.appendChild(col);
    });
}

// Initialize the page
function init() {
    createCarCards();
    createBrandLogos();
    
    // Add event listener for modal
    document.addEventListener('click', function(e) {
        if (e.target.matches('[data-bs-target="#carModal"]')) {
            const carData = JSON.parse(e.target.getAttribute('data-car').replace(/\\'/g, "'"));
            updateModal(carData);
        }
    });
    
    // Form submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your message! We will get back to you soon.');
            this.reset();
        });
    }
}

// Update modal with car details
function updateModal(car) {
    const modalTitle = document.querySelector('#carModal .modal-title');
    const modalBody = document.querySelector('#carModal .modal-body');
    
    modalTitle.textContent = `${car.brand} ${car.model} (${car.year})`;
    
    modalBody.innerHTML = `
        <div class="row">
            <div class="col-md-6">
                <img src="${car.image}" class="img-fluid rounded" alt="${car.brand} ${car.model}">
            </div>
            <div class="col-md-6">
                <p>${car.description}</p>
                <ul class="list-unstyled">
                    <li><strong>Price:</strong> ${car.price}</li>
                    <li><strong>Fuel Efficiency:</strong> ${car.miles}</li>
                    <li><strong>Transmission:</strong> ${car.transmission}</li>
                    <li><strong>Year:</strong> ${car.year}</li>
                </ul>
                <button class="btn btn-primary w-100">Book a Test Drive</button>
            </div>
        </div>
    `;
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', init);
