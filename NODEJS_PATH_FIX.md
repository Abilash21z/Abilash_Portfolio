# Fix Node.js PATH Issue

## The Issue
Node.js was installed but not added to your Windows PATH environment variable, which is why you got the "npm is not recognized" error.

## Temporary Fix (Already Applied)
I've temporarily added Node.js to your PATH for the current terminal session. This is why npm install is now running.

## Permanent Fix
To permanently add Node.js to your PATH:

### Option 1: Using Windows System Properties
1. Press `Win + R`, type `sysdm.cpl` and press Enter
2. Click on the "Advanced" tab
3. Click "Environment Variables"
4. Under "System Variables", find and select "Path"
5. Click "Edit"
6. Click "New" and add: `C:\Program Files\nodejs`
7. Click "OK" on all windows
8. Restart your terminal or VS Code

### Option 2: Using PowerShell (Run as Administrator)
```powershell
$existingPath = [Environment]::GetEnvironmentVariable("Path", "Machine")
if ($existingPath -notlike "*nodejs*") {
    $newPath = $existingPath + ";C:\Program Files\nodejs"
    [Environment]::SetEnvironmentVariable("Path", $newPath, "Machine")
    Write-Host "Node.js added to system PATH"
} else {
    Write-Host "Node.js already in PATH"
}
```

### Option 3: Using Command Prompt (Run as Administrator)
```cmd
setx /M PATH "%PATH%;C:\Program Files\nodejs"
```

## Verify Installation
After applying the permanent fix, open a new terminal and run:
```bash
node --version
npm --version
```

Both commands should work without needing to add the PATH manually each time.

## Current Status
Your npm install is currently running. Once it completes, you'll be able to:
1. Run `npm start` to start the development server
2. Run `npm run build` to build for production
3. Access your portfolio at `http://localhost:3000`
