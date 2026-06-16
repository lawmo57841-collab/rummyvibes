// Main application logic for RummyVibes

class RummyVibesApp {
    constructor() {
        this.keyCount = 0;
        this.lastKeyTime = 0;
        this.minTimeBetweenSounds = 30; // milliseconds to prevent overlapping sounds
        
        this.initializeElements();
        this.setupEventListeners();
        this.loadSavedSettings();
    }

    initializeElements() {
        // Profile buttons
        this.profileBtns = document.querySelectorAll('.profile-btn');
        
        // Soundset buttons
        this.soundsetBtns = document.querySelectorAll('.soundset-btn');
        
        // Settings sliders
        this.volumeSlider = document.getElementById('volume');
        this.pitchSlider = document.getElementById('pitch');
        this.speedSlider = document.getElementById('speed');
        this.reverbSlider = document.getElementById('reverb');
        
        this.volumeValue = document.getElementById('volumeValue');
        this.pitchValue = document.getElementById('pitchValue');
        this.speedValue = document.getElementById('speedValue');
        this.reverbValue = document.getElementById('reverbValue');
        
        // Test area
        this.testArea = document.getElementById('testArea');
        
        // Statistics
        this.keyCountDisplay = document.getElementById('keyCount');
        this.currentProfileDisplay = document.getElementById('currentProfile');
        this.currentSoundsetDisplay = document.getElementById('currentSoundset');
        this.masterVolumeDisplay = document.getElementById('masterVolume');
        
        // Reset button
        this.resetBtn = document.getElementById('resetBtn');
    }

    setupEventListeners() {
        // Profile selection
        this.profileBtns.forEach(btn => {
            btn.addEventListener('click', (e) => this.selectProfile(e.target.dataset.profile));
        });

        // Soundset selection
        this.soundsetBtns.forEach(btn => {
            btn.addEventListener('click', (e) => this.selectSoundset(e.target.dataset.soundset));
        });

        // Settings sliders
        this.volumeSlider.addEventListener('input', (e) => this.updateVolume(e.target.value));
        this.pitchSlider.addEventListener('input', (e) => this.updatePitch(e.target.value));
        this.speedSlider.addEventListener('input', (e) => this.updateSpeed(e.target.value));
        this.reverbSlider.addEventListener('input', (e) => this.updateReverb(e.target.value));

        // Test area keyboard events
        this.testArea.addEventListener('keydown', (e) => this.handleKeyPress(e));
        this.testArea.addEventListener('keyup', (e) => this.handleKeyRelease(e));

        // Global keyboard events (everywhere on the page)
        document.addEventListener('keydown', (e) => {
            if (e.target !== this.testArea && !e.target.matches('input, button, textarea')) {
                this.handleKeyPress(e, true);
            }
        });

        // Reset button
        this.resetBtn.addEventListener('click', () => this.resetToDefaults());
    }

    handleKeyPress(e, isGlobal = false) {
        const currentTime = Date.now();
        
        // Prevent overlapping sounds and skip modifier keys
        if (currentTime - this.lastKeyTime < this.minTimeBetweenSounds) {
            return;
        }

        // Skip control keys
        if (this.isControlKey(e)) {
            return;
        }

        this.lastKeyTime = currentTime;
        this.keyCount++;
        this.updateStatistics();

        // Play sound
        soundGenerator.playSound();

        // Visual feedback
        this.addKeyPressEffect(e.key);
    }

    handleKeyRelease(e) {
        // Could add release sound here if needed
    }

    isControlKey(e) {
        const controlKeys = [
            'Control', 'Alt', 'Shift', 'Meta',
            'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight',
            'Enter', 'Tab', 'Escape', 'Backspace', 'Delete',
            'CapsLock', 'NumLock', 'ScrollLock'
        ];
        return controlKeys.includes(e.key);
    }

    addKeyPressEffect(key) {
        // Optional: Add visual feedback to test area
        if (this.testArea === document.activeElement) {
            this.testArea.style.boxShadow = '0 0 15px rgba(102, 126, 234, 0.5)';
            setTimeout(() => {
                this.testArea.style.boxShadow = '';
            }, 50);
        }
    }

    selectProfile(profile) {
        soundGenerator.setProfile(profile);
        
        // Update active button
        this.profileBtns.forEach(btn => {
            btn.classList.remove('active');
            if (btn.dataset.profile === profile) {
                btn.classList.add('active');
            }
        });

        this.updateStatistics();
        this.saveSettings();
    }

    selectSoundset(soundSet) {
        soundGenerator.setSoundSet(soundSet);
        
        // Update active button
        this.soundsetBtns.forEach(btn => {
            btn.classList.remove('active');
            if (btn.dataset.soundset === soundSet) {
                btn.classList.add('active');
            }
        });

        this.updateStatistics();
        this.saveSettings();
    }

    updateVolume(value) {
        soundGenerator.setVolume(value);
        this.volumeValue.textContent = value;
        this.masterVolumeDisplay.textContent = value + '%';
        this.saveSettings();
    }

    updatePitch(value) {
        soundGenerator.setPitch(value);
        this.pitchValue.textContent = value;
        this.saveSettings();
    }

    updateSpeed(value) {
        soundGenerator.setSpeed(value);
        this.speedValue.textContent = value;
        this.saveSettings();
    }

    updateReverb(value) {
        soundGenerator.setReverb(value);
        this.reverbValue.textContent = value;
        this.saveSettings();
    }

    updateStatistics() {
        this.keyCountDisplay.textContent = this.keyCount;
        this.currentProfileDisplay.textContent = 
            soundGenerator.profiles[soundGenerator.currentProfile].name;
        this.currentSoundsetDisplay.textContent = 
            soundGenerator.soundSets[soundGenerator.currentSoundSet].name;
    }

    resetToDefaults() {
        // Reset sliders
        this.volumeSlider.value = 100;
        this.pitchSlider.value = 100;
        this.speedSlider.value = 100;
        this.reverbSlider.value = 0;

        // Reset profile and soundset
        this.selectProfile('thocky');
        this.selectSoundset('default');

        // Update all values
        this.updateVolume(100);
        this.updatePitch(100);
        this.updateSpeed(100);
        this.updateReverb(0);

        // Reset key count
        this.keyCount = 0;
        this.updateStatistics();

        // Show confirmation
        this.showResetConfirmation();
    }

    showResetConfirmation() {
        const originalText = this.resetBtn.textContent;
        this.resetBtn.textContent = '✓ Reset!';
        this.resetBtn.style.background = 'linear-gradient(135deg, var(--success) 0%, #38a169 100%)';
        
        setTimeout(() => {
            this.resetBtn.textContent = originalText;
            this.resetBtn.style.background = '';
        }, 2000);
    }

    saveSettings() {
        const settings = {
            profile: soundGenerator.currentProfile,
            soundSet: soundGenerator.currentSoundSet,
            volume: this.volumeSlider.value,
            pitch: this.pitchSlider.value,
            speed: this.speedSlider.value,
            reverb: this.reverbSlider.value
        };
        localStorage.setItem('rummyvibesSettings', JSON.stringify(settings));
    }

    loadSavedSettings() {
        const saved = localStorage.getItem('rummyvibesSettings');
        if (saved) {
            try {
                const settings = JSON.parse(saved);
                
                // Load profile
                if (settings.profile) {
                    this.selectProfile(settings.profile);
                }
                
                // Load soundset
                if (settings.soundSet) {
                    this.selectSoundset(settings.soundSet);
                }
                
                // Load sliders
                if (settings.volume) {
                    this.volumeSlider.value = settings.volume;
                    this.updateVolume(settings.volume);
                }
                if (settings.pitch) {
                    this.pitchSlider.value = settings.pitch;
                    this.updatePitch(settings.pitch);
                }
                if (settings.speed) {
                    this.speedSlider.value = settings.speed;
                    this.updateSpeed(settings.speed);
                }
                if (settings.reverb !== undefined) {
                    this.reverbSlider.value = settings.reverb;
                    this.updateReverb(settings.reverb);
                }
            } catch (e) {
                console.log('Could not load saved settings:', e);
            }
        }
    }
}

// Initialize app when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    const app = new RummyVibesApp();
    console.log('🎹 RummyVibes loaded! Start typing to hear your custom keyboard sounds.');
});
