@echo off
setlocal
cd /d "%~dp0"
set "PORT=8765"
set "LOCAL_URL=http://127.0.0.1:%PORT%/index.html"

for /f "usebackq delims=" %%I in (`powershell -NoProfile -Command "$ip=(Get-NetIPAddress -AddressFamily IPv4 ^| Where-Object {$_.IPAddress -notlike '127.*' -and $_.IPAddress -notlike '169.254*'} ^| Sort-Object InterfaceMetric ^| Select-Object -First 1 -ExpandProperty IPAddress); if($ip){$ip}"`) do set "LAN_IP=%%I"

if not defined LAN_IP set "LAN_IP=YOUR-PC-IP"
set "PHONE_URL=http://%LAN_IP%:%PORT%/index.html"

echo ==============================================
echo   AI Robot Roguelike - PC + Smartphone LAN
echo ==============================================
echo.
echo PC:    %LOCAL_URL%
echo Phone: %PHONE_URL%
echo.
echo 1. Keep this window open.
echo 2. Connect the phone to the same Wi-Fi as this PC.
echo 3. Open the Phone URL above on the phone browser.
echo 4. If Windows Firewall asks, allow access on Private networks.
echo.

where py >nul 2>nul
if not errorlevel 1 goto USE_PY
where python >nul 2>nul
if not errorlevel 1 goto USE_PYTHON

echo Python 3 was not found.
pause
exit /b 1

:OPEN_BROWSER
start "" powershell -NoProfile -WindowStyle Hidden -Command "Start-Sleep -Milliseconds 900; Start-Process '%LOCAL_URL%'"
exit /b

:USE_PY
call :OPEN_BROWSER
py -3 -m http.server %PORT% --bind 0.0.0.0
goto END

:USE_PYTHON
call :OPEN_BROWSER
python -m http.server %PORT% --bind 0.0.0.0
goto END

:END
echo.
echo Server stopped.
pause
