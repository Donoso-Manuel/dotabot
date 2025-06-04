// src/data/responses.js
const responses = [
  {
    keywords: ['horario', 'planilla', 'asistencia','turnos','turno'],
    answer:
      'Para consultas sobre horario o planilla de asistencia, debes escribir al correo: planificacion.rinconada@enjoy.cl. Recuerda que "planificacion" se escribe sin tilde.',
  },
  {
    keywords: ['libre compensado', 'día compensado', 'dia compensado', 'feriado trabajado'],
    answer:
      'Un libre compensado es un día adicional que se devenga al trabajar un día feriado. Este se puede utilizar de lunes a domingo sin restricción, mientras no sea feriado y en común acuerdo con la jefatura.',
  },
  {
    keywords: ['como solicitar libre compensado','solicitar libre compensado', 'cómo pedir libre compensado', 'como pedir libre compensado', 'pedir día compensado'],
    answer:
      'Para solicitar un libre compensado, debes enviar un correo con un mínimo de 72 horas de anticipación a tu jefatura, con copia a planificacion.rinconada@enjoy.cl. La jefatura debe responder en un máximo de 48 horas corridas; si no hay respuesta en ese plazo, se considerará que el libre fue otorgado, según indica el protocolo de libres compensados.',
  },
  {
    keywords: ['contingente', 'ver vacaciones', 'vacaciones buk', 'libres buk', 'cuántos días tengo', 'dias disponibles', 'vacaciones especiales', 'mi ficha buk'],
    answer:
      `Para revisar el contingente disponible de vacaciones, feriados legales, vacaciones progresivas, libres compensados y vacaciones especiales en BUK, sigue estos pasos:

1. Ingresa a tu cuenta de BUK.
2. Ve a la sección **"Mi Ficha"**.
3. Selecciona la pestaña **"Vacaciones"**.

En esta sección, verás varias columnas que corresponden a los tipos de días disponibles. Cada columna contiene 5 filas que significan lo siguiente:

- **1° fila:** Días devengados hasta la fecha.
- **2° fila:** Días ya tomados efectivamente.
- **3° fila:** Días vencidos (solo en casos especiales con caducidad).
- **4° fila:** Días solicitados para el futuro (aún no tomados).
- **5° fila:** Saldo disponible (devengados menos los demás).

Más abajo en la misma sección, verás el detalle de los días solicitados, clasificados como: **"Aprobados"**, **"Rechazados"**, **"Solicitados"** y **"Requiere firma"**.`,
  },
  {
  keywords: ['solicitar vacaciones', 'pedir vacaciones', 'cómo pedir vacaciones', 'como pedir vacaciones', 'firma vacaciones', 'vacaciones buk'],
  answer: `
Para solicitar vacaciones en BUK:

1. Ingresa a BUK y dirígete a **"Mi Ficha"**.
2. Selecciona la pestaña **"Vacaciones"** para revisar lo disponible.
3. Baja hasta la sección **"Vacaciones tomadas"**.
4. En la esquina superior derecha del cuadro, haz clic en **"Solicitar"**.
5. Se desplegará una ventana donde debes elegir el tipo de vacaciones. Solo verás las opciones disponibles según tu contingente.
6. Selecciona la **fecha de inicio y término** (no se pueden elegir fines de semana ni festivos).
7. (Opcional) Agrega un comentario.
8. Haz clic en **"Firmar"**.
9. Ingresa tu contraseña y elige si quieres recibir tu código de confirmación por correo o SMS.
10. Una vez ingresado el código, BUK recargará la página y podrás ver tu solicitud en el estado **"Solicitado"** en la sección "Vacaciones tomadas".

📌 **Importante:**  
- Si aparece el estado **"Requiere firma"**, significa que el proceso de firma no se completó.  
  En ese caso, no debes comenzar la solicitud de nuevo. Solo sigue la línea hacia la derecha y haz clic en el ícono de una hoja con un lápiz ✏️ para completar la firma.

- Si el estado no es **"Solicitado"**, la jefatura no podrá aprobar la solicitud, y si llegas al periodo sin haberlo gestionado correctamente, comenzará a generarse **ausencia**.
  `
},
{
  keywords: ['descuentos','descuentos por hora','horas no trabajadas'],
  answer:`Este tipo de descuento se puede dar por varios motivos:
  - Le faltó trabajar horas en la semana
  - Permiso no cargado o no informado
  - Cierre de marca (no realizó su marca de ingreso o salida)
  - Cambio de turno no informado
  
  En cualquiera de estos casos puede contactarse con planificacion.rinconada@enjoy.cl donde podra solicitar informacion o su planilla de asistencia.
  Sí no realizó alguna marca consulte como realizar el proceso de **regularizacion de marcas**`
},
{
  keywords:['regularizacion de marca','marca no realizada','olvide marcar','arreglar marcas'],
  answer:`Para el proceso de regularizacion de marcas debe primero identificar que día(s) no realizó su(s) marca(s)
  - Debe enviar un correo a su jefatura directa informando el problema de marcas indicando:
    - Día
    - Ingreso o Salida
    - Horario real de ingreso o Salida
    - !! no olvides colocar tus datos !! **nombre y  rut completos**
    - con copia a planificacion.rinconada@enjoy.cl (recuerda que planificacion es sin tilde)
    con este proceso se inicia el proceso de regularizacion correspondiente`
},
{
  keywords:['vacaciones progresivas'],
  answer:`Las vacaciones progresivas en Chile son días adicionales de vacaciones que un trabajador puede obtener por antigüedad laboral más allá de los 15 días hábiles que otorga la ley como mínimo legal. Estos días adicionales se otorgan como reconocimiento a la permanencia prolongada en el sistema laboral formal.
    - Requisito principal: El trabajador debe haber cumplido 10 años de trabajo, continuos o no, en uno o más empleadores del sector público o privado
    - Luego de cumplir los 10 años: Por cada 3 años adicionales trabajados con el mismo empleador, el trabajador adquiere 1 día hábil adicional de vacaciones.`
}
];

export default responses;
