#!/bin/bash
# GymBook Image Download Script
# This script downloads all images used in the project

echo "Creating images directory..."
mkdir -p gymbook-images/{hero,people,gyms}

echo "Downloading images..."

# Luxury Gym Equipment
wget -O "gymbook-images/hero/luxury-gym-equipment.jpg" "https://images.unsplash.com/photo-1758957646695-ec8bce3df462?w=1920&h=1080&fit=crop"

# Fitness Class Group Training
wget -O "gymbook-images/hero/fitness-class-training.jpg" "https://images.unsplash.com/photo-1758875569517-559a631fb44d?w=1920&h=1080&fit=crop"

# Modern Gym Interior Equipment
wget -O "gymbook-images/hero/modern-gym-interior.jpg" "https://images.unsplash.com/photo-1758448756350-3d0eec02ba37?w=1920&h=1080&fit=crop"

# Athletic Woman Portrait Smile
wget -O "gymbook-images/people/woman-athletic-portrait.jpg" "https://images.unsplash.com/photo-1659545163072-2f983e22b457?w=1080&h=1080&fit=crop"

# Businessman Professional Happy
wget -O "gymbook-images/people/man-business-professional.jpg" "https://images.unsplash.com/photo-1474176857210-7287d38d27c6?w=1080&h=1080&fit=crop"

# Fitness Woman Exercise
wget -O "gymbook-images/people/woman-fitness-exercise.jpg" "https://images.unsplash.com/photo-1752365250910-2c72174ad492?w=1080&h=1080&fit=crop"

# Personal Training Session
wget -O "gymbook-images/gyms/personal-training-session.jpg" "https://images.unsplash.com/photo-1738523686521-278410293ee9?w=1920&h=1080&fit=crop"

# Yoga Studio Class
wget -O "gymbook-images/gyms/yoga-studio-class.jpg" "https://images.unsplash.com/photo-1652347141247-5788de175766?w=1920&h=1080&fit=crop"

# Fitness Woman Workout
wget -O "gymbook-images/gyms/fitness-woman-workout.jpg" "https://images.unsplash.com/photo-1648863397001-cd77a7e98bd8?w=1920&h=1080&fit=crop"

# Fitness Center Modern
wget -O "gymbook-images/gyms/fitness-center-modern.jpg" "https://images.unsplash.com/photo-1760019737803-1f862ba9faf9?w=1920&h=1080&fit=crop"

# Gym Owner Business
wget -O "gymbook-images/gyms/gym-owner-business.jpg" "https://images.unsplash.com/photo-1742239633796-859c355b3c66?w=1920&h=1080&fit=crop"

# Analytics Dashboard
wget -O "gymbook-images/gyms/analytics-dashboard.jpg" "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1920&h=1080&fit=crop"

echo "Download complete! Images saved to gymbook-images/"
