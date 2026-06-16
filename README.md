# 🎹 RummyVibes - Desktop App

A desktop application where you can make your keyboard sound exactly how you want it to! Customize your typing experience with Thocky, Clicky, Linear, Hollow, and Crispy sound profiles.

## 📥 Download & Install

**You must download RummyVibes to use it!**

### Quick Download

Go to the [Releases page](https://github.com/lawmo57841-collab/rummyvibes/releases) and download the installer for your operating system:

- **Windows**: `RummyVibes-Setup.exe` (Recommended) or `RummyVibes.exe` (Portable)
- **macOS**: `RummyVibes.dmg` (Intel/Apple Silicon)
- **Linux**: `RummyVibes.AppImage` (Universal) or `.deb` package

### Installation

1. Download the installer for your OS
2. Double-click to install
3. Open RummyVibes from your Applications or Start Menu
4. Start typing and enjoy your custom keyboard sounds!

## 🚀 Build from Source

Want to build it yourself? See [SETUP.md](SETUP.md) for detailed instructions.

```bash
git clone https://github.com/lawmo57841-collab/rummyvibes.git
cd rummyvibes
npm install
npm run build
``` 

## 📥 Release Downloads

Pre-built Linux installers are available on the Releases page:

- AppImage: https://github.com/lawmo57841-collab/rummyvibes/releases/download/v1.0.0/RummyVibes-1.0.0.AppImage
- Debian (.deb): https://github.com/lawmo57841-collab/rummyvibes/releases/download/v1.0.0/rummyvibes_1.0.0_amd64.deb

Windows `.exe` installers are not included in this release because Windows builds must be produced on Windows runners (or built locally). You can either:

- Build locally on Windows using the included `build-win.bat` script (see `BUILD_PLATFORMS.md`), or
- Ask me to add a GitHub Actions workflow to automatically build Windows and macOS installers on release and upload them to the Releases page.

If you'd like the automatic CI builds, tell me and I'll add the workflow to this repo.
