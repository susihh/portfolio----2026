import pyautogui
import time

# Pressiona a tecla Windows para abrir o menu iniciar
pyautogui.press('win')
time.sleep(1)  # pequena pausa para garantir que o menu abriu

# Digita "chrome"
pyautogui.write('chrome')
pyautogui.press('enter')
time.sleep(2)  # espera o Chrome abrir

# Digita o endereço do site
pyautogui.write('https://www.alura.com.br')
pyautogui.press('enter')