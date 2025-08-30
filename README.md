# Luxury Car Gallery

A modern, responsive car dealership website showcasing luxury vehicles from top brands. Built with HTML, CSS, JavaScript, and Bootstrap 5.

## Features

- 🚗 Display of luxury cars with detailed specifications
- 📱 Fully responsive design for all devices
- 🔍 Interactive car cards with hover effects
- ℹ️ Modal popups for detailed car information
- 📞 Contact form for customer inquiries
- ⚡ Fast loading and optimized performance

## Technologies Used

- HTML5
- CSS3 (with custom animations)
- JavaScript (ES6+)
- [Bootstrap 5](https://getbootstrap.com/)
- [Font Awesome 6](https://fontawesome.com/)
- Google Fonts

## Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- No additional installations required

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/luxury-car-gallery.git
   ```
2. Open `index.html` in your preferred web browser

## Project Structure

```
car-dealership/
├── index.html          # Main HTML file
├── styles.css          # Custom CSS styles
├── script.js           # JavaScript functionality
└── assets/             # Image assets
    ├── audi-a6.jpg
    ├── bugatti-veyron.jpg
    ├── lamborghini-sian.jpg
    └── ...
```

## Customization

### Adding New Cars

To add a new car, update the `cars` array in `script.js` with the following format:

```javascript
{
    brand: 'Brand Name',
    model: 'Model Name',
    image: 'image-filename.jpg',
    miles: 'XX-XX km/l',
    price: 'PKR X,XXX,XXX',
    year: 'YYYY',
    transmission: 'Automatic/Manual',
    description: 'Brief description of the car'
}
```

### Styling

- Modify `styles.css` for custom styling
- Adjust colors in the `:root` variables for theming
- Update breakpoints in the media queries for responsive design

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (latest)

## Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Bootstrap](https://getbootstrap.com/) for the responsive framework
- [Font Awesome](https://fontawesome.com/) for the icons
- All car manufacturers for their amazing vehicles
