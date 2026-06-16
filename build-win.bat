@echo off
REM Build script for Windows
REM Run this on a Windows machine to create the Windows installer

echo.
echo 🎹 Building RummyVibes for Windows...
echo.

REM Check if on Windows
if not exist "package.json" (
    echo ❌ Run this script from the RummyVibes root directory
    exit /b 1
)

REM Install dependencies
call npm install

REM Build for Windows
call npm run electron-build -- --win

echo.
echo ✅ Windows build complete!
echo 📦 Find installers in the dist/ folder
echo.
pause
