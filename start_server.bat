@echo off
cd /d "%~dp0"
echo Iniciando servidor en http://localhost:8000
echo.
echo Presiona Ctrl+C para detener el servidor
echo.
start http://localhost:8000/arbolCanvas.html
call %USERPROFILE%\anaconda3\Scripts\activate.bat
python -m http.server 8000
pause
