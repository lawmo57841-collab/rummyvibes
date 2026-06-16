#!/bin/bash
# Build script for macOS
# Run this on a macOS machine to create the macOS installer

set -e

echo "🎹 Building RummyVibes for macOS..."

# Check if on macOS
if [[ "$OSTYPE" != "darwin"* ]]; then
    echo "❌ This script must be run on macOS"
    exit 1
fi

# Install dependencies
npm install

# Build for macOS
npm run electron-build -- --mac

echo "✅ macOS build complete!"
echo "📦 Find installers in the dist/ folder:"
ls -lh dist/*.dmg dist/*.zip 2>/dev/null || echo "No macOS installers found"
