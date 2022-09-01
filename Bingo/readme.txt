* Descripción del programa *

El programa generará un cartón de Bingo. Y lo mostrará por pantalla.
En este cartón aparecerán 15 números de manera aleatoria, los cuales no se podrán repetir.
Cada cartón tendrá 3 filas por 9 columnas.
Cada fila tendrá 5 números.
Cada columna tendrá 1 o 2 números.

* Configuración del entorno *

- El primer paso será instalar venv. En la terminar debemos ingresar: pip install venv.
- Echo esto podremos crear nuestro entorno virtual, nos posicionaremos en la raiz del proyecto y en una terminal ingresamos el comando:
    python3 -m venv "nombre_del_entorno"

¡ Creamos un entorno virtual ya que todos los paquetes que utilicemos en el proyecto solo se instalarán en éste !

- El próximo paso será activar dicho entorno. En la terminal:
    Windows ->  nombre_del_entorno\Scripts\activate.bat
    Linux o MacOs -> nombre_del_entorno/bin/activate

¡ En el lado izquierdo deberá aparecer '(nombre_del_entorno)', lo cual indicará que el entorno ya está activado !

- Por último deberemos instalar todos los paquetes, los cuales aparecen detallados en el archivo requirements.
Para ello en nuestra terminal (con el entorno virtual activado) ingresamos:
    pip install -r requirements.txt

* Utilización *

- Habiendo realizado los pasos anteriores podrás utilizar el programa libremente.
Previa activación del entorno virtual, en una terminal deberás ingresar:
    python main.py

- Para finalizar el entorno basta con utilizar el comando "deactivate"