@echo off
setlocal enabledelayedexpansion
set TOKEN=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
set REPO=https://%TOKEN%@github.com/cerealsunny/cerealsunny-web.git
set DIR=C:\Users\dvera\cerealsunny-web
cd /d %DIR%

:MENU
cls
echo.
echo  =============================================
echo   ^☀  CEREAL SUNNY ^— Panel de Despliegue
echo  =============================================
echo   David Vera ^· Centerium ^· Venezuela
echo  =============================================
echo.
echo   [1]  Subir cambios a GitHub + Deploy Vercel
echo   [2]  Ver estado del repositorio
echo   [3]  Ver historial de cambios
echo   [4]  Iniciar servidor local (localhost:3000)
echo   [5]  Abrir sitio en Vercel
echo   [6]  Abrir repositorio en GitHub
echo   [0]  Salir
echo.
echo  =============================================
echo.
set /p OP=  Opcion: 

if "%OP%"=="1" goto DEPLOY
if "%OP%"=="2" goto STATUS
if "%OP%"=="3" goto LOG
if "%OP%"=="4" goto DEV
if "%OP%"=="5" goto VERCEL
if "%OP%"=="6" goto GITHUB
if "%OP%"=="0" goto SALIR
echo   Opcion no valida. Intenta de nuevo.
timeout /t 1 >nul
goto MENU

:DEPLOY
cls
echo.
echo  =============================================
echo   Subir cambios a GitHub + Deploy Vercel
echo  =============================================
echo.
set /p MSG=  Descripcion del cambio: 
if "!MSG!"=="" set MSG=Actualizacion Cereal Sunny
echo.
echo  Preparando archivos...
git add .
echo  Creando commit...
git commit -m "!MSG!"
echo  Subiendo a GitHub...
git push %REPO% main
echo.
if %ERRORLEVEL%==0 (
    echo  [OK] Cambios subidos exitosamente.
    echo  [OK] Vercel desplegara en 30-60 segundos.
) else (
    echo  [ERROR] Hubo un problema. Revisa tu conexion.
)
echo.
pause
goto MENU

:STATUS
cls
echo.
echo  =============================================
echo   Estado del repositorio
echo  =============================================
echo.
git status
echo.
pause
goto MENU

:LOG
cls
echo.
echo  =============================================
echo   Ultimos 10 cambios
echo  =============================================
echo.
git log --oneline -10
echo.
pause
goto MENU

:DEV
cls
echo.
echo  =============================================
echo   Servidor local
echo  =============================================
echo.
echo  Abre tu navegador en: http://localhost:3000
echo  Presiona Ctrl+C para detener el servidor.
echo.
npm run dev
goto MENU

:VERCEL
start https://cerealsunny-web.vercel.app
echo.
echo  Abriendo Vercel en el navegador...
echo.
timeout /t 2 >nul
goto MENU

:GITHUB
start https://github.com/cerealsunny/cerealsunny-web
echo.
echo  Abriendo GitHub en el navegador...
echo.
timeout /t 2 >nul
goto MENU

:SALIR
cls
echo.
echo  Hasta luego. ^· Cereal Sunny ^· Centerium
echo.
exit
