// Sound generation and management for RummyVibes

class SoundGenerator {
    constructor() {
        this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
        this.profiles = {
            thocky: {
                name: 'Thocky',
                frequency: 150,
                duration: 0.15,
                decay: 0.4,
                noise: 0.3
            },
            clicky: {
                name: 'Clicky',
                frequency: 800,
                duration: 0.08,
                decay: 0.2,
                noise: 0.6
            },
            linear: {
                name: 'Linear',
                frequency: 300,
                duration: 0.1,
                decay: 0.3,
                noise: 0.2
            },
            hollow: {
                name: 'Hollow',
                frequency: 400,
                duration: 0.2,
                decay: 0.6,
                noise: 0.4
            },
            crispy: {
                name: 'Crispy',
                frequency: 1000,
                duration: 0.06,
                decay: 0.15,
                noise: 0.8
            }
        };

        this.soundSets = {
            default: {
                name: 'Default',
                profileModifier: { frequency: 1, duration: 1, noise: 1 }
            },
            mechanical: {
                name: 'Mechanical',
                profileModifier: { frequency: 0.8, duration: 1.2, noise: 1.3 }
            },
            space: {
                name: 'Space',
                profileModifier: { frequency: 1.2, duration: 0.8, noise: 0.7 }
            },
            nature: {
                name: 'Nature',
                profileModifier: { frequency: 0.7, duration: 1.5, noise: 1.1 }
            },
            arcade: {
                name: 'Arcade',
                profileModifier: { frequency: 1.5, duration: 0.5, noise: 0.9 }
            }
        };

        this.currentProfile = 'thocky';
        this.currentSoundSet = 'default';
        this.settings = {
            volume: 1.0,
            pitch: 1.0,
            speed: 1.0,
            reverb: 0
        };
    }

    playSound() {
        const profile = this.profiles[this.currentProfile];
        const soundSet = this.soundSets[this.currentSoundSet];
        
        // Apply sound set modifiers
        const frequency = profile.frequency * this.settings.pitch;
        const duration = (profile.duration / this.settings.speed) * soundSet.profileModifier.duration;
        const noiseLevel = profile.noise * soundSet.profileModifier.noise;

        // Create oscillator for pitch
        const oscillator = this.audioContext.createOscillator();
        oscillator.frequency.value = frequency;
        oscillator.type = 'sine';

        // Create gain node for volume envelope
        const gainNode = this.audioContext.createGain();
        gainNode.gain.setValueAtTime(
            this.settings.volume * (1 - this.settings.reverb * 0.3),
            this.audioContext.currentTime
        );
        gainNode.gain.exponentialRampToValueAtTime(
            0.01,
            this.audioContext.currentTime + duration
        );

        // Create noise
        const bufferSize = this.audioContext.sampleRate * duration;
        const noiseBuffer = this.audioContext.createBuffer(1, bufferSize, this.audioContext.sampleRate);
        const noiseData = noiseBuffer.getChannelData(0);
        
        for (let i = 0; i < bufferSize; i++) {
            noiseData[i] = (Math.random() * 2 - 1) * noiseLevel;
        }

        const noiseSource = this.audioContext.createBufferSource();
        noiseSource.buffer = noiseBuffer;

        // Create noise gain node
        const noiseGainNode = this.audioContext.createGain();
        noiseGainNode.gain.setValueAtTime(
            this.settings.volume * noiseLevel * (1 - this.settings.reverb * 0.3),
            this.audioContext.currentTime
        );
        noiseGainNode.gain.exponentialRampToValueAtTime(
            0.01,
            this.audioContext.currentTime + duration
        );

        // Create reverb effect with delay
        if (this.settings.reverb > 0) {
            const delay = this.audioContext.createDelay();
            delay.delayTime.value = 0.05;
            
            const delayGain = this.audioContext.createGain();
            delayGain.gain.value = this.settings.reverb * 0.3;

            gainNode.connect(delay);
            delay.connect(delayGain);
            delayGain.connect(this.audioContext.destination);

            noiseGainNode.connect(delay);
        }

        // Connect nodes
        oscillator.connect(gainNode);
        gainNode.connect(this.audioContext.destination);

        noiseSource.connect(noiseGainNode);
        noiseGainNode.connect(this.audioContext.destination);

        // Start and stop sounds
        oscillator.start(this.audioContext.currentTime);
        oscillator.stop(this.audioContext.currentTime + duration);

        noiseSource.start(this.audioContext.currentTime);
        noiseSource.stop(this.audioContext.currentTime + duration);
    }

    setProfile(profile) {
        if (this.profiles[profile]) {
            this.currentProfile = profile;
        }
    }

    setSoundSet(soundSet) {
        if (this.soundSets[soundSet]) {
            this.currentSoundSet = soundSet;
        }
    }

    setVolume(value) {
        this.settings.volume = value / 100;
    }

    setPitch(value) {
        this.settings.pitch = value / 100;
    }

    setSpeed(value) {
        this.settings.speed = value / 100;
    }

    setReverb(value) {
        this.settings.reverb = value / 100;
    }
}

// Create global sound generator instance
const soundGenerator = new SoundGenerator();
