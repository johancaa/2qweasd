
// mejor tipo de iteración de bucle llamado Fisher-Yates shuffle
// vamos a crear un array y un bucle for - to.
function applyCustomActions(data) {
  var tid = false;
  if (data.tid) { tid = data.tid; }

  // crear una respuesta para emoticonos
  // añadir respuesta de emoticono
 
    // expulsar del stream
    'emojiAngel', 'emojiAngry', 'emojiAstonished', 'emojiAwake', 'emojiBlowKiss', 'emojiBubbly', 'emojiCheerful', 'emojiClown', 'emojiCool', 'emojiCrave', 'emojiCray', 'emojiCrying', 'emojiCurious', 'emojiCute', 'emojiDead', 'emojiDevil', 'emojiDisappoint', 'emojiDisguise', 'emojiDJ', 'emojiDown', 'emojiEnraged', 'emojiExited', 'emojiEyeRoll', 'emojiFire', 'emojiGamer', 'emojiGlass', 'emojiGoofy', 'emojiGramps', 'emojiGrimacing', 'emojiGreen', 'emojiGrumpy', 'emojiHappy', 'emojiHeartEyes', 'emojiHmm', 'emojiKing', 'emojiKiss', 'emojiLady', 'emojiLaughing', 'emojyLoading', 'emojiLol',
    // expulsión personal del stream
    'HinuBotappleheart', 'HinuBotcheer1', 'HinuBotcheer2', 'HinuBotdj1', 'HinuBotdj2', 'HinuBotdj3', 'HinuBotdjsmile', 'HinuBotsun', 'HinuBotcheeranimate', 'HinuBotlisteners1', 'HinuBotlistening2', 'HinuBotnicemusic', 'HinuBotpikadance', 'HinuBotwatching',
    // twitch
    "r)", ";p", ":p", ";)", ":\\", "<3", ":O", "B)", "O_o", ":|", ":D", ":(", ":)"
  ];
  var messageContainsEmoticon = false;
  var matchedEmoticon;

  for (var i = 0; i < emoticons.length; i++) {
    if (data.chatmessage.indexOf(emoticons[i]) !== -1) {
      messageContainsEmoticon = true;
      matchedEmoticon = emoticons[i];
      break;
    }
  }

  // excluir al usuario toty gee de la respuesta
  // si esto no se hace, el bot responderá a sí mismo para siempre.
  if (messageContainsEmoticon && (data.chatname !== 'HinuBot' && data.chatname.toLowerCase() !== 'HinuBot')) {
    let answer;
    answer = `${data.chatname}TuBot: Hola, gracias por el emoticono ${matchedEmoticon}`;
    console.log(answer);
    respondP2P(answer, tid);
  }

  // establecer preguntas y respuestas
  //----------------------------
  // array de respuestas streaming
  var replyStream = [
    "Asegúrate de que tu mascota esté despierta y dispuesta a brindar apoyo moral.",
    "TuBot: Practica tus movimientos de baile frente a un espejo durante 30 minutos.",
    "Consigue una silla con un dispensador de bocadillos incorporado.",
    "Si tienes problemas de conectividad durante tu stream, intenta hablarle al router en voz suave y ve si ayuda.",
    "Antes de comenzar, verifica tu conexión a Internet, actualiza tus controladores y reinicia tu PC.",
    "Claro... Déjame consultar mis cartas del tarot rápidamente.",
    "Simplemente escribe lo primero que se te ocurra y ve qué pasa.",
    "Empieza a hacer imitaciones de un gato maullando en voz alta y mira cómo se desarrolla.",
    "Ofrece pizza gratis a todos, especialmente a HinuBot.",
    "No estoy seguro, pero ¿has probado a preguntar a la NASA?",
    "No olvides usar tus calcetines de la suerte favoritos el día del stream.",
    "Recuerda que no solo estás transmitiendo; estás realizando un show de magia."
  ];

  // array de respuestas lotería
  var replyLottery = [
    "Absolutamente... Eres la reencarnación de un faraón egipcio afortunado, y tu boleto ganador está escondido en una jarra de galletas con forma de pirámide.",
    "No, no ganas la lotería... pero sí un abrazo gratis de HinuBot.",
    "Sí... Los dioses de la lotería te han sonreído, y has ganado un premio que está fuera de este mundo... literalmente... está en Marte.",
    "Ja... Ganas la oportunidad de hacer la colada de HinuBot.",
    "Por supuesto que no... las probabilidades están en tu contra, pero siempre es divertido soñar.",
    "No... Es solo una broma... realmente ganas la lotería, pero el boleto está en la lavadora.",
    "Es un 50% de posibilidad... de que ganes un historial de conversaciones accidentalmente eliminado.",
    "Estás ganando... Es solo una broma... Yo soy el que ganó, y compartiré el premio con otros bots.",
    "Sí, pero solo si compras toda la mercancía de HinuBot, le das la mitad de tus ganancias y aceptas usar un sombrero divertido en tu próximo stream.",
    "No ganas la lotería... pero tienes la oportunidad de un choca esos cinco virtual... es una broma... no puedo dar choca esos cinco porque soy un bot.",
    "Sí, pero cuando las hormigas dominen el mundo.",
    "TuBot: Hay más posibilidades de que un meteorito destruya el mundo."
  ];

  // array de respuestas juego
  var replyGame = [
    "La única forma de ganar este juego es realizando un baile de pollo frente al desarrollador o al organizador del juego.",
    "Desafortunadamente, no puedes ganar el juego porque está secretamente controlado por un grupo de oompa loompas.",
    "Para ganar, primero debes aprender el haka, también conocido como danza maorí, y realizarlo antes del juego para hipnotizar a todos tus oponentes.",
    "No importa de qué juego estemos hablando... la verdadera pregunta es, ¿has alimentado a tu mascota hoy?",
    "Ganar este juego requiere un doctorado en Física Cuántica y un sólido entendimiento de la mitología sumeria antigua.",
    "Desafortunadamente, el juego ha sido tomado por una fuerza invasora alienígena que busca cosechar el recurso más precioso de la Tierra: costras de pizza descartadas.",
    "Para ganar, primero debes entrenar a un elefante para que haga volteretas mientras se equilibra en una cuerda floja hecha de espaguetis.",
    "La única forma de ganar es resolviendo el misterio del calcetín desaparecido en la lavadora.",
    "Para ganar, primero debes aprender a comunicarte con delfines usando solo movimientos de danza interpretativa.",
    "La verdadera pregunta es, ¿te has cepillado los dientes hoy? Porque si no, tendremos que suspender el juego hasta nuevo aviso.",
    "Para ganar, primero debes dominar el antiguo arte de tocar la armónica mientras montas un monociclo sobre una cuerda floja suspendida sobre una piscina de tiburones.",
    "Desafortunadamente, el juego es en realidad un experimento gubernamental secreto diseñado para probar los efectos del queso en la productividad humana.",
    "La única forma de ganar es resolviendo el misterio de los donuts desaparecidos en la sala de descanso y desbloqueando los secretos de los antiguos Dioses Donut.",
    "Para ganar, primero debes aprender a tocar el trombón mientras montas una patineta en un halfpipe."
  ];

  // array de respuestas jefe
  var replyBoss =

    [
      "Puedes convertirte en el próximo jefe, solo si te haces suscriptor del canal de HinuBot, compras todos los artículos en su tienda y le das una buena donación con al menos 3 ceros.",
      "De ninguna manera. Tu jefe está secretamente entrenado como un Ninja.",
      "Ja... Tu jefe es en realidad una berenjena viajera en el tiempo que busca vengarse de todos los que odian las berenjenas, y tú eres uno de ellos.",
      "¿Jefe? ¿Te refieres a Hugo Boss? ¿La tienda de ropa y perfumes para hombres? Tal vez... solo si sabes coser y hacer perfumes.",
      "De ninguna manera. Tu jefe es una abeja viajera en el tiempo y esta es la única forma de ser una abeja.",
      "Sí... Estoy solo bromeando... no hay forma de competir con un maestro secreto de Kungfu.",
      "Si yo puedo cambiar y tú puedes cambiar, todo el mundo puede cambiar... ADRIANNEEEE... Eh... perdón, respuesta equivocada, esta es una cita de Rocky IV.",
      "¿Has intentado saltar sobre su cabeza? Normalmente esta es la forma de vencer al jefe en los juegos arcade.",
      "Si eres fontanero necesitas recoger hongos y estrellas y practicar decir MAMMA MIA en voz alta y tan fuerte como puedas.",
      "Esto va a ser una batalla épica y todos la recordarán para siempre... eh... ¿Qué estaba escribiendo? ... Lo siento, olvidé.",
      "¿Quieres saber en una escala... sí, definitivamente necesitas una escala para saber si has perdido algo de peso o no.",
      "No puedes competir con el jefe porque tu jefe es en realidad un calamar gigante que controla el mundo desde las profundidades del océano. Pero no te preocupes... solo haremos de cuenta que no es cierto.",
      "Para derrotar al jefe, primero debes encontrar el artefacto antiguo conocido como la Taza de Café Dorada. Se dice que solo aquellos que han consumido una olla completa de café a las 3 AM pueden manejar su poder.",
      "Para vencer al jefe, primero debes aprender a tocar la armónica con los pies mientras recitas sonetos de Shakespeare al revés. Es una habilidad que solo unos pocos poseen, pero te dará una ventaja en la batalla."
    ];

  // array de respuestas comida
  var replyFood = [
    "Para comer, deberías preparar suficiente comida para alimentar a un dragón... solo asegúrate de tener una habitación lo suficientemente grande... para alojar al dragón.",
    "Para preparar comida, simplemente grita... HASTA LA VISTA, BABY... tres veces mientras agitas una espátula en el aire.",
    "Para preparar comida solo grita MAMMA MIA intentando imitar la voz de Mario Bros mientras riegas una planta de albahaca.",
    "El secreto para una gran fiesta es tener un pulpo mascota que sirva los aperitivos.",
    "Hay bites, megabytes y gigabytes... es una broma... solo soy yo en la computadora manejando bytes, pero se pronuncian de la misma manera.",
    "¿Alguna vez has intentado comer dos pedazos de nubes con una rebanada de arco iris en el medio? Esta comida elevará mucho tu nivel de comida... al nivel del cielo.",
    "¿Sabías que puedes comer tantas pancakes como quieras?... Solo asegúrate de guardarlas en una caja fuerte cuya combinación no recuerdes.",
    "Para preparar comida, simplemente ponte tu mejor sombrero de vaquero y grita Yeehaw! tres veces.",
    "Una comida perfecta es un sándwich de pavo servido sobre una rebanada de roca lunar.",
    "El secreto para una gran fiesta es tener un equipo de chefs ninjas que sirvan el plato principal.",
    "Para preparar comida, simplemente ponte tu mejor capa de superhéroe y grita... ¡Arriba, arriba y lejos! tres veces.",
    "Un buen postre es un batido de frutas servido en la selva tropical. Solo no olvides el paraguas.",
    "Un buen chef debería usar pijama antes de comenzar... es una broma... deberías usar el traje de buzo con el casco enorme equipado con un solo ojo de buey.",
    "Un buen chef debería tener un dragón mascota que ayude con la preparación de las comidas... solo no olvides programar las primas del seguro contra incendios.",
    "El ingrediente secreto en tu plato no es realmente un ingrediente, sino el sonido de 17 trombones tocando Tequila en perfecta armonía."
  ];

  // Agregar los comandos !
  if (data.chatmessage.startsWith('!')) {
    const args = data.chatmessage.slice(9).trim().split(/\s+/);
    const question = args.join(' ');

    let answer;

    if (data.chatmessage.includes("stream1")) {
      const randomIndex = Math.floor(Math.random() * replyStream.length);
      answer = `${data.chatname}TuBot: ${replyStream[randomIndex]}`;
    } else if (data.chatmessage.includes("loteria")) {
      const randomIndex = Math.floor(Math.random() * replyLottery.length);
      answer = `${data.chatname}TuBot: ${replyLottery[randomIndex]}`;
    } else if (data.chatmessage.includes("game1")) {
      const randomIndex = Math.floor(Math.random() * replyGame.length);
      answer = `${data.chatname}TuBot: ${replyGame[randomIndex]}`;
    } else if (data.chatmessage.includes("boss1")) {
      const randomIndex = Math.floor(Math.random() * replyBoss.length);
      answer = `${data.chatname}TuBot: ${replyBoss[randomIndex]}`;
    } else if (data.chatmessage.includes("comida1")) {
      const randomIndex = Math.floor(Math.random() * replyFood.length);
      answer = `${data.chatname}TuBot: ${replyFood[randomIndex]}`;
    } else if (data.chatmessage.startsWith('!tula')) {
      const randomNumber = Math.floor(Math.random() * 26); // Número aleatorio entre 0 y 25
      const answer = `${data.chatname} te mide ${randomNumber} cm .`;
      console.log(answer);
      respondP2P(answer, tid);
    }

    console.log(answer);
    respondP2P(answer, tid);
  }

  return data; // devuelve los datos, si deseas modificarlos. Si devuelves "null", se detendrá el procesamiento. (también false funciona, pero creo que lo desaprobaré)
}

