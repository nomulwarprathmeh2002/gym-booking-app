// download-images.js
const fs = require('fs');
const https = require('https');
const path = require('path');

const images = [
    { url: 'https://images.unsplash.com/photo-1758957646695-ec8bce3df462?w=1920&h=1080&fit=crop', file: 'gymbook-images/hero/luxury-gym-equipment.jpg' },
    { url: 'https://images.unsplash.com/photo-1758875569517-559a631fb44d?w=1920&h=1080&fit=crop', file: 'gymbook-images/hero/fitness-class-training.jpg' },
    { url: 'https://images.unsplash.com/photo-1758448756350-3d0eec02ba37?w=1920&h=1080&fit=crop', file: 'gymbook-images/hero/modern-gym-interior.jpg' },
    { url: 'https://images.unsplash.com/photo-1659545163072-2f983e22b457?w=1080&h=1080&fit=crop', file: 'gymbook-images/people/woman-athletic-portrait.jpg' },
    { url: 'https://images.unsplash.com/photo-1474176857210-7287d38d27c6?w=1080&h=1080&fit=crop', file: 'gymbook-images/people/man-business-professional.jpg' },
    { url: 'https://images.unsplash.com/photo-1752365250910-2c72174ad492?w=1080&h=1080&fit=crop', file: 'gymbook-images/people/woman-fitness-exercise.jpg' },
    { url: 'https://images.unsplash.com/photo-1738523686521-278410293ee9?w=1920&h=1080&fit=crop', file: 'gymbook-images/gyms/personal-training-session.jpg' },
    { url: 'https://images.unsplash.com/photo-1652347141247-5788de175766?w=1920&h=1080&fit=crop', file: 'gymbook-images/gyms/yoga-studio-class.jpg' },
    { url: 'https://images.unsplash.com/photo-1648863397001-cd77a7e98bd8?w=1920&h=1080&fit=crop', file: 'gymbook-images/gyms/fitness-woman-workout.jpg' },
    { url: 'https://images.unsplash.com/photo-1760019737803-1f862ba9faf9?w=1920&h=1080&fit=crop', file: 'gymbook-images/gyms/fitness-center-modern.jpg' },
    { url: 'https://images.unsplash.com/photo-1742239633796-859c355b3c66?w=1920&h=1080&fit=crop', file: 'gymbook-images/gyms/gym-owner-business.jpg' },
    { url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1920&h=1080&fit=crop', file: 'gymbook-images/gyms/analytics-dashboard.jpg' },
];

function downloadImage(url, dest) {
    const folder = path.dirname(dest);
    if (!fs.existsSync(folder)) {
        fs.mkdirSync(folder, { recursive: true });
    }

    return new Promise((resolve, reject) => {
        const file = fs.createWriteStream(dest);
        https.get(url, (response) => {
            response.pipe(file);
            file.on('finish', () => file.close(() => resolve(dest)));
        }).on('error', (err) => {
            fs.unlink(dest, () => reject(err));
        });
    });
}

(async () => {
    console.log('📥 Downloading images...');
    for (const img of images) {
        try {
            await downloadImage(img.url, img.file);
            console.log(`✅ Saved: ${img.file}`);
        } catch (err) {
            console.error(`❌ Failed: ${img.url}`, err);
        }
    }
    console.log('🎉 All done!');
})();
