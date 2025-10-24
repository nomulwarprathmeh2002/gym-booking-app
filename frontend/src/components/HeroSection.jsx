import React from 'react';
import herobackground from '../assets/Hero/herobackground.png';
import HeroSectionsearchbar from './HeroSectionsearchbar';
import Scrollindicator from './Scrollindicator';
const HeroSection = () => {
    return (
        <section
            style={{
                height: '100vh',
                width: '100vw',
                backgroundImage: `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url(${herobackground})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                color: '#fff',
                padding: '0 20px',
            }}
        >
            {/* Headings */}
            <div style={{ marginBottom: '2rem' }}>
                <h1
                    style={{
                        fontSize: '3.2rem',
                        fontWeight: '700',
                        lineHeight: '1.3',
                        marginBottom: '1rem',
                    }}
                >
                    Find Gym <br />
                    <span style={{ color: '#ff5e84' }}>Anywhere, Anytime</span>
                </h1>
                <p
                    style={{
                        fontSize: '1.1rem',
                        maxWidth: '600px',
                        margin: '0 auto',
                        opacity: 0.9,
                    }}
                >
                    Discover and book premium gyms in your city. Train at world-class facilities
                    with certified trainers and state-of-the-art equipment.
                </p>
            </div>

            {/* Search Bar */}
            <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                <HeroSectionsearchbar />
            </div>

            {/* Stats Section */}
            <div
                style={{
                    display: 'flex',
                    gap: '3rem',
                    marginTop: '3rem',
                    fontSize: '1rem',
                    fontWeight: '500',
                }}
            >
                <Scrollindicator />
            </div>
        </section>
    );
};

export default HeroSection;
