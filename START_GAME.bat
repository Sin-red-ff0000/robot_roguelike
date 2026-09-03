@echo off
setlocal
cd /d "%~dp0"
set "PORT=8765"
set "URL=http://127.0.0.1:%PORT%/index.html"

echo ==============================================
echo   AI Robot Roguelike - Local Launcher
echo ==============================================
echo.
echo Game folder:
echo %CD%
echo.

where py >nul 2>nul
if not errorlevel 1 goto USE_PY

where python >nul 2>nul
if not errorlevel 1 goto USE_PYTHON

echo Python 3 was not found.
echo.
echo Install Python 3, then run this file again.
echo If Python is already installed, make sure "py" or "python" works in Command Prompt.
echo.
pause
exit /b 1

:OPEN_BROWSER
start "" powershell -NoProfile -WindowStyle Hidden -Command "Start-Sleep -Milliseconds 900; Start-Process '%URL%'"
exit /b

:USE_PY
call :OPEN_BROWSER
echo Starting local server at %URL%
echo.
echo Keep this window open while playing.
echo To stop the game server, press Ctrl+C or close this window.
echo.
py -3 -m http.server %PORT% --bind 127.0.0.1
goto END

:USE_PYTHON
call :OPEN_BROWSER
echo Starting local server at %URL%
echo.
echo Keep this window open while playing.
echo To stop the game server, press Ctrl+C or close this window.
echo.
python -m http.server %PORT% --bind 127.0.0.1
goto END

:END
echo.
echo Server stopped.
pause
