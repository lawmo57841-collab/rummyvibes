#!/bin/bash
# Build script for Linux
# Run this on Linux to create the Linux installer

set -e

echo "🎹 Building RummyVibes for Linux..."

# Install dependencies
npm install

# Build for Linux
npm run electron-build -- --linux

echo "✅ Linux build complete!"
echo "📦 Find installers in the dist/ folder:"
ls -lh dist/*.AppImage dist/*.deb 2>/dev/null || echo "No Linux installers found"
