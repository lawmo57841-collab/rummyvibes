# 🎹 RummyVibes - Custom Keyboard Sounds

Make your keyboard sound exactly how you want it to! RummyVibes is a customizable keyboard sound app where you can select different sound profiles, adjust various parameters, and create the perfect typing experience for yourself.

## 🌟 Features

- **5 Sound Profiles**: Choose from Thocky, Clicky, Linear, Hollow, or Crispy sounds
- **5 Sound Sets**: Default, Mechanical, Space, Nature, and Arcade themed sound sets
- **Customizable Settings**:
  - Volume control (0-100%)
  - Pitch adjustment (50-150%)
  - Speed control (50-150%)
  - Reverb effect (0-100%)
- **Real-time Playback**: Sounds play as you type in the test area
- **Global Keyboard Support**: Sounds play even outside the app (when typing on the page)
- **Statistics Tracking**: Monitor keys pressed, current profile, soundset, and master volume
- **Persistent Settings**: Your preferences are saved in browser storage
- **Beautiful UI**: Modern dark theme with smooth animations and responsive design

## 🚀 Getting Started

### Option 1: Direct Browser Access
Simply open `index.html` in your web browser. The app works completely offline with no external dependencies!

### Option 2: Local Server
```bash
# Using Python (Python 3)
python -m http.server 8000

# Using Python (Python 2)
python -m SimpleHTTPServer 8000

# Using Node.js
npx http-server . -p 8000

# Using live-server for live reload
npx live-server --port=8000
```

Then navigate to `http://localhost:8000` in your browser.

## 📖 How to Use

1. **Select a Sound Profile**: Click one of the five profile buttons (Thocky, Clicky, Linear, Hollow, Crispy)
2. **Choose a Sound Set**: Select your preferred sound set theme
3. **Customize Your Sound**: Adjust volume, pitch, speed, and reverb to your liking
4. **Start Typing**: Type in the test area to hear your custom keyboard sounds
5. **Enjoy**: Your settings are automatically saved!

### Sound Profiles Explained

- **Thocky**: Deep, satisfying typing sounds - great for mechanical keyboard enthusiasts
- **Clicky**: Sharp, crisp mechanical clicks - perfect for tactile feedback lovers
- **Linear**: Smooth, consistent sounds - ideal for those who prefer uniformity
- **Hollow**: Resonant, echoing sounds - creates an interesting acoustic effect
- **Crispy**: Bright, distinctive clicks - perfect for arcade-style typing

### Sound Sets Explained

- **Default**: Standard sound characteristics
- **Mechanical**: Enhanced mechanical keyboard feel with deeper tones
- **Space**: Futuristic, synth-like sounds inspired by space themes
- **Nature**: Organic, natural-sounding keys with subtle variations
- **Arcade**: Retro arcade game-style sounds and beeps

## 🎨 Settings

### Volume (0-100%)
Controls the overall loudness of the keyboard sounds.

### Pitch (50-150%)
Adjusts the frequency of the sounds. Lower values create deeper sounds, higher values create sharper sounds.

### Speed (50-150%)
Controls how quickly the sound decays. Lower values create longer sounds, higher values create snappier, quicker sounds.

### Reverb (0-100%)
Adds echo and spatial effects to the sounds, simulating different room acoustics.

## 💾 Storage

All your settings are automatically saved to your browser's local storage, so your preferences persist between sessions!

Reset your settings anytime with the "Reset to Defaults" button.

## 🛠️ Technical Details

### Architecture

- **index.html**: Main interface and structure
- **styles.css**: Modern styling with dark theme and animations
- **sounds.js**: Sound generation engine using Web Audio API
- **app.js**: Application logic and event handling

### Browser Support

- Chrome/Chromium (Full support)
- Firefox (Full support)
- Safari (Full support)
- Edge (Full support)

Requires a modern browser with Web Audio API support.

## 📱 Responsive Design

RummyVibes works great on:
- Desktop computers
- Tablets
- Mobile devices (though keyboard typing experience varies by device)

## 🔊 Sound Generation

Sounds are generated using the Web Audio API with:
- Sine wave oscillators for base tones
- Procedural noise for realistic keyboard texture
- Envelope-based volume shaping for natural sound decay
- Optional reverb/delay effects for ambience

## 🎮 Keyboard Shortcuts

All typing works! There are no special keyboard shortcuts - just type naturally and enjoy your custom sounds.

## 🐛 Troubleshooting

### No Sound Playing
- Check your browser volume
- Ensure your computer volume is not muted
- Try clicking on the page first (some browsers require user interaction before playing audio)
- Check browser console for any errors (F12 → Console tab)

### Settings Not Saving
- Make sure localStorage is enabled in your browser
- Check if you're in private/incognito mode (storage may be cleared)

### Uneven Sound Timing
- This can happen on some devices with high CPU load
- Try closing other browser tabs
- Reduce the number of sounds playing simultaneously

## 🚀 Future Features

Potential enhancements for future versions:
- Custom sound uploads
- Recording and playback of typed text with sounds
- Different key categories (space bar, shift, enter with unique sounds)
- Preset sharing via URL
- Metronome/typing game modes
- Analytics and typing statistics
- Mobile app versions

## 📄 License

MIT License - Feel free to use, modify, and distribute this project!

## 🤝 Contributing

Contributions are welcome! Feel free to:
- Report bugs or issues
- Suggest new sound profiles
- Improve the UI/UX
- Optimize the sound generation
- Add new features

## 🎵 Enjoy Your Custom Keyboard Sounds!

Make your typing experience unique with RummyVibes. Whether you want thocky mechanical sounds or futuristic space noises, you're in control!

---

**Made with 🎹 for keyboard enthusiasts**
