// Preload script for security
// This script runs in the renderer process and has access to Node.js APIs
// but is isolated from the main process for security

const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
    // Add any APIs you need here
});
