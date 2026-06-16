# Building RummyVibes for Different Platforms

This guide explains how to build RummyVibes installers for your operating system.

## Quick Overview

- **Windows Build**: Must be built on Windows
- **macOS Build**: Must be built on macOS
- **Linux Build**: Must be built on Linux

## Building on Windows

### Prerequisites
- Node.js (v14 or higher)
- npm

### Build Instructions

1. Clone the repository:
   ```bash
   git clone https://github.com/lawmo57841-collab/rummyvibes.git
   cd rummyvibes
   ```

2. Run the build script:
   ```bash
   build-win.bat
   ```

3. Find your installer in the `dist/` folder:
   - `RummyVibes-Setup.exe` (Installer)
   - `RummyVibes.exe` (Portable - no installation needed)

## Building on macOS

### Prerequisites
- Node.js (v14 or higher)
- npm
- Xcode Command Line Tools (optional, for signing)

### Build Instructions

1. Clone the repository:
   ```bash
   git clone https://github.com/lawmo57841-collab/rummyvibes.git
   cd rummyvibes
   ```

2. Make the build script executable:
   ```bash
   chmod +x build-mac.sh
   ```

3. Run the build script:
   ```bash
   ./build-mac.sh
   ```

4. Find your installer in the `dist/` folder:
   - `RummyVibes-1.0.0.dmg` (Disk Image)
   - `RummyVibes-1.0.0-mac.zip` (ZIP Archive)

## Building on Linux

### Prerequisites
- Node.js (v14 or higher)
- npm

### Build Instructions

1. Clone the repository:
   ```bash
   git clone https://github.com/lawmo57841-collab/rummyvibes.git
   cd rummyvibes
   ```

2. Make the build script executable:
   ```bash
   chmod +x build-linux.sh
   ```

3. Run the build script:
   ```bash
   ./build-linux.sh
   ```

4. Find your installer in the `dist/` folder:
   - `RummyVibes-1.0.0.AppImage` (Universal)
   - `rummyvibes_1.0.0_amd64.deb` (Debian/Ubuntu)

## Manual Build

If you prefer to build manually without scripts:

```bash
# Install dependencies
npm install

# Build for your platform
npm run electron-build -- --win    # Windows
npm run electron-build -- --mac    # macOS
npm run electron-build -- --linux  # Linux

# Or build for all platforms at once (requires all platforms available)
npm run build
```

## Troubleshooting

### Build fails with "wine is required"
- This happens when trying to build Windows on Linux/macOS
- You must build on the target platform (Windows builds on Windows, etc.)

### No installers created
- Make sure you're in the correct directory
- Check that Node.js is installed: `node --version`
- Try deleting `node_modules` and running `npm install` again

### Permission denied on .sh files
- Make scripts executable:
  ```bash
  chmod +x build-mac.sh
  chmod +x build-linux.sh
  ```

## Contributing Builds

If you build installers for your platform, please consider:
1. Creating a GitHub issue to announce the build
2. Uploading to the releases page
3. Sharing the download link with the community

## Platform-Specific Requirements

### Windows
- Windows 7 or later
- No additional requirements for building

### macOS
- macOS 10.12 or later
- Intel or Apple Silicon support
- Optional: Xcode for code signing

### Linux
- Ubuntu 18.04 or later (or equivalent)
- GCC toolchain for some dependencies

---

**Questions?** Open an issue on [GitHub](https://github.com/lawmo57841-collab/rummyvibes/issues)
