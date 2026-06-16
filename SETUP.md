# RummyVibes - Desktop App Setup Guide

This guide explains how to download, build, and run RummyVibes as a standalone desktop application.

## 📥 Download Pre-built Installers

The easiest way to use RummyVibes is to download a pre-built installer:

### Windows
- **Installer (.exe)**: [Download RummyVibes-1.0.0-Setup.exe](https://github.com/lawmo57841-collab/rummyvibes/releases)
- **Portable (.exe)**: [Download RummyVibes-1.0.0.exe](https://github.com/lawmo57841-collab/rummyvibes/releases)

### macOS
- **DMG Package**: [Download RummyVibes-1.0.0.dmg](https://github.com/lawmo57841-collab/rummyvibes/releases)
- **ZIP Archive**: [Download RummyVibes-1.0.0-mac.zip](https://github.com/lawmo57841-collab/rummyvibes/releases)

### Linux
- **AppImage**: [Download RummyVibes-1.0.0.AppImage](https://github.com/lawmo57841-collab/rummyvibes/releases)
- **DEB Package**: [Download rummyvibes_1.0.0_amd64.deb](https://github.com/lawmo57841-collab/rummyvibes/releases)

## 🛠️ Build from Source

To build RummyVibes from source code:

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/lawmo57841-collab/rummyvibes.git
   cd rummyvibes
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Build the desktop application**
   
   **For all platforms:**
   ```bash
   npm run build
   ```

   **For specific platforms:**
   ```bash
   # Windows only
   npm run electron-build -- --win

   # macOS only
   npm run electron-build -- --mac

   # Linux only
   npm run electron-build -- --linux
   ```

4. **Find your installer**
   - Installers will be in the `dist/` folder
   - Choose the appropriate installer for your operating system

5. **Install the application**
   - **Windows**: Double-click the `.exe` installer
   - **macOS**: Double-click the `.dmg` file and drag to Applications
   - **Linux**: Use your package manager or double-click the `.AppImage`

## 🚀 Development

To run RummyVibes in development mode:

```bash
# Start Electron app in development mode
npm start
```

This will start the Electron app and automatically reload when you make changes.

## 🎯 Create Your Own Installer

### Windows Installer
```bash
npm run electron-build -- --win nsis
```

### macOS DMG
```bash
npm run electron-build -- --mac dmg
```

### Linux AppImage
```bash
npm run electron-build -- --linux AppImage
```

## 📦 What's Included in the Desktop App

- ✅ Fully functional RummyVibes application
- ✅ All 5 sound profiles (Thocky, Clicky, Linear, Hollow, Crispy)
- ✅ All 5 sound sets (Default, Mechanical, Space, Nature, Arcade)
- ✅ Full customization options
- ✅ Settings persistence
- ✅ No internet required (works completely offline)
- ✅ Native desktop application experience

## ⚙️ System Requirements

### Windows
- Windows 7 or later
- 50MB disk space

### macOS
- macOS 10.12 or later
- 100MB disk space
- Intel or Apple Silicon

### Linux
- Ubuntu 18.04 or later (or equivalent)
- 100MB disk space

## 🔧 Troubleshooting

### App won't start
- Make sure Node.js is installed: `node --version`
- Try deleting `node_modules` and running `npm install` again
- On Linux, you may need to install additional dependencies

### Build fails
- Clear the build cache: `rm -rf node_modules dist build && npm install`
- Check that you have the latest Node.js version
- On macOS, you may need Xcode Command Line Tools

### Installer creation fails
- Ensure you have write permissions in the project directory
- For Windows: Administrator privileges may be required
- Try building for a single platform first

## 📝 Additional Commands

```bash
# Run web version locally (no download needed)
npm run web-serve

# Development with live reload
npm run dev

# Just start Electron without building
npm run electron-start
```

## 🤝 Contributing

To contribute improvements:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

MIT License - See LICENSE file for details

## 🎵 Enjoy!

Your RummyVibes desktop app is ready to use! Start customizing your keyboard sounds today.

---

**Questions?** Open an issue on [GitHub](https://github.com/lawmo57841-collab/rummyvibes/issues)
