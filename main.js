document.addEventListener("DOMContentLoaded", () => {
  // Character data
  const characters = {
    feith: {
      name: "Feith Noir",
      title: "El Protagonista Silencioso",
      image: "https://i.imgur.com/JjZqP9a.png",
      rank: "B",
      age: "22 años",
      race: "Humano",
      element: "Sombra",
      description:
        "Feith no es muy fuerte físicamente, pero destaca por su habilidad única 'Hear me now' que hace que la gente ignore su presencia hasta que diga una palabra clave, convirtiéndolo en un maestro del sigilo. También posee una habilidad pasiva que lo hace inmune a ataques que seleccionen a un solo objetivo.",
      motivations:
        "Busca redimirse por errores pasados mientras utiliza sus habilidades para ayudar a los demás de manera discreta.",
      likes: [
        "El silencio y la tranquilidad",
        "Ayudar sin ser visto",
        "Té de hierbas",
      ],
      dislikes: [
        "Multitudes ruidosas",
        "Ser el centro de atención",
        "Violencia innecesaria",
      ],
      stats: [
        { name: "Fuerza", value: 30, max: 100, color: "bg-red-500" },
        { name: "Destreza", value: 65, max: 100, color: "bg-blue-500" },
        { name: "Sigilo", value: 95, max: 100, color: "bg-green-500" },
        { name: "Magia", value: 40, max: 100, color: "bg-purple-500" },
        { name: "Energía", value: 50, max: 100, color: "bg-yellow-500" },
        {
          name: "Dominio de Energía",
          value: 60,
          max: 100,
          color: "bg-pink-500",
        },
      ],
      abilities: [
        {
          name: "Hear Me Now (Única)",
          description:
            "Hace que los demás ignoren su presencia hasta que diga una palabra clave. Duración: 5 minutos. Enfriamiento: 10 minutos.",
        },
        {
          name: "Inmunidad a Ataques Selectivos (Pasiva)",
          description:
            "Es inmune a cualquier habilidad o ataque que seleccione específicamente a un solo objetivo.",
        },
        {
          name: "Curación Silenciosa (Común)",
          description:
            "Puede curar heridas menores sin hacer ruido. Eficacia aumenta en áreas oscuras.",
        },
      ],
    },
    cocoa: {
      name: "Cocoa de Mdir",
      title: "La Princesa Gato",
      image: "https://i.imgur.com/KLQmX9P.png",
      rank: "A",
      age: "19 años",
      race: "Chica Gato",
      element: "Viento",
      description:
        "Hija del regente de Mdir, es enérgica, caprichosa, terca y orgullosa. Está desesperada por reunir 20 personas para su gremio antes de que lo clausuren. Especialista en invocar familiares que ayudan en combate.",
      motivations:
        "Probar su valía como líder y evitar que cierren su gremio, el último legado de su familia.",
      likes: [
        "Ser el centro de atención",
        "Comida de lujo",
        "Retos que prueben su habilidad",
      ],
      dislikes: [
        "Que la ignoren",
        "Fracasar en sus objetivos",
        "Personas que no toman en serio sus responsabilidades",
      ],
      stats: [
        { name: "Fuerza", value: 45, max: 100, color: "bg-red-500" },
        { name: "Destreza", value: 70, max: 100, color: "bg-blue-500" },
        { name: "Sigilo", value: 60, max: 100, color: "bg-green-500" },
        { name: "Magia", value: 75, max: 100, color: "bg-purple-500" },
        { name: "Energía", value: 80, max: 100, color: "bg-yellow-500" },
        {
          name: "Dominio de Energía",
          value: 85,
          max: 100,
          color: "bg-pink-500",
        },
      ],
      abilities: [
        {
          name: "Invocación de Familiares (Única)",
          description:
            "Puede invocar hasta 3 familiares simultáneos que combaten a su lado. Cada familiar tiene habilidades especiales.",
        },
        {
          name: "Agilidad Felina (Pasiva)",
          description:
            "Movilidad aumentada, puede saltar más alto y caer desde mayores alturas sin daño.",
        },
        {
          name: "Grito de Batalla (Común)",
          description:
            "Aumenta temporalmente las estadísticas de aliados cercanos. Efecto se potencia con más aliados presentes.",
        },
      ],
    },
    jenny: {
      name: "Jenny Lee Chan",
      title: "La Maestra de Artes Marciales",
      image: "https://i.imgur.com/NJPzB4W.png",
      rank: "A",
      age: "25 años",
      race: "Humana",
      element: "Fuego",
      description:
        "Artista marcial empedernida y dedicada, es estricta, muy seria y solo piensa en entrenar y mejorar. No tolera la mediocridad en el combate y siempre busca superar sus límites.",
      motivations:
        "Convertirse en la mejor artista marcial de Mdir y encontrar oponentes dignos que la ayuden a crecer.",
      likes: [
        "Entrenamiento riguroso",
        "Oponentes fuertes",
        "Disciplina y orden",
      ],
      dislikes: [
        "Pereza",
        "Trucos sucios en combate",
        "Que interrumpan su entrenamiento",
      ],
      stats: [
        { name: "Fuerza", value: 90, max: 100, color: "bg-red-500" },
        { name: "Destreza", value: 95, max: 100, color: "bg-blue-500" },
        { name: "Sigilo", value: 40, max: 100, color: "bg-green-500" },
        { name: "Magia", value: 20, max: 100, color: "bg-purple-500" },
        { name: "Energía", value: 85, max: 100, color: "bg-yellow-500" },
        {
          name: "Dominio de Energía",
          value: 80,
          max: 100,
          color: "bg-pink-500",
        },
      ],
      abilities: [
        {
          name: "Furia del Dragón (Única)",
          description:
            "Aumenta exponencialmente su fuerza y velocidad durante 1 minuto. Después sufre fatiga extrema.",
        },
        {
          name: "Resistencia Infinita (Pasiva)",
          description:
            "Su resistencia física es mucho mayor que la normal, permitiéndole entrenar por horas sin cansancio.",
        },
        {
          name: "Técnica de Contraataque (Común)",
          description:
            "Puede contraatacar inmediatamente después de esquivar un golpe. Daño aumentado si el ataque original era fuerte.",
        },
      ],
    },
    cheshire: {
      name: "Cheshire",
      title: "La Invocadora Rota",
      image: "https://i.imgur.com/QWqV9bD.png",
      rank: "S",
      age: "20 años",
      race: "Humana",
      element: "Caos",
      description:
        "Una maga invocadora cuyo pacto con su familiar se rompió abruptamente, dividiendo sus estadísticas. Ella conservó la fuerza bruta del familiar pero perdió la inteligencia que solía tener. Ahora es una chica impulsiva, honesta con sus sentimientos y con una fuerza abrumadora, pero incapaz de usar muchas de sus técnicas antiguas.",
      motivations:
        "Encontrar a su familiar perdido y recuperar el equilibrio de sus habilidades, mientras aprende a vivir con su nueva condición.",
      likes: [
        "Comida abundante",
        "Proteger a sus amigos",
        "Aprender cosas nuevas (aunque le cueste)",
      ],
      dislikes: [
        "Que la traten como tonta",
        "Personas que esconden sus intenciones",
        "Espacios cerrados",
      ],
      stats: [
        { name: "Fuerza", value: 97, max: 100, color: "bg-red-500" },
        { name: "Destreza", value: 50, max: 100, color: "bg-blue-500" },
        { name: "Sigilo", value: 20, max: 100, color: "bg-green-500" },
        { name: "Magia", value: 65, max: 100, color: "bg-purple-500" },
        { name: "Energía", value: 85, max: 100, color: "bg-yellow-500" },
        {
          name: "Dominio de Energía",
          value: 30,
          max: 100,
          color: "bg-pink-500",
        },
      ],
      abilities: [
        {
          name: "Fuerza del Familiar Perdido (Única)",
          description:
            "Posee fuerza física sobrehumana, capaz de levantar objetos varias veces su tamaño. Sin embargo, le cuesta controlarla.",
        },
        {
          name: "Invocación de Tentáculos (Única)",
          description:
            "Puede invocar tentáculos del vacío que atrapan enemigos. Cantidad y tamaño dependen de su estado emocional.",
        },
        {
          name: "Resistencia Anómala (Pasiva)",
          description:
            "Es extremadamente resistente a daño físico y magia oscura, pero vulnerable a ataques psíquicos.",
        },
      ],
    },
    elizabeth: {
      name: "Elizabeth",
      title: "La Rival Metódica",
      image: "https://i.imgur.com/mX7tQyE.png",
      rank: "A",
      age: "23 años",
      race: "Humana",
      element: "Metal",
      description:
        "Líder del primer gremio que fundó Cocoa antes de ser abandonada. Es seria, inflexible y antepone el deber sobre todo. Sus padres modificaron su arma para convertirla en el 'arma definitiva' al ver que no progresaba como esperaban, lo que la llevó a huir con su hermana de su país natal.",
      motivations:
        "Probar que su método de liderazgo es superior al de Cocoa y proteger a su hermana menor a toda costa.",
      likes: [
        "Estrategia y planificación",
        "Armas y tecnología",
        "Su hermana menor",
      ],
      dislikes: [
        "Improvisación",
        "Cocoa y sus métodos",
        "Que pongan en peligro a su hermana",
      ],
      stats: [
        { name: "Fuerza", value: 60, max: 100, color: "bg-red-500" },
        { name: "Destreza", value: 75, max: 100, color: "bg-blue-500" },
        { name: "Sigilo", value: 55, max: 100, color: "bg-green-500" },
        { name: "Magia", value: 40, max: 100, color: "bg-purple-500" },
        { name: "Energía", value: 65, max: 100, color: "bg-yellow-500" },
        {
          name: "Dominio de Energía",
          value: 70,
          max: 100,
          color: "bg-pink-500",
        },
      ],
      abilities: [
        {
          name: "Arma Definitiva (Única)",
          description:
            "Su arma modificada puede cambiar entre 3 modos: pistola, espada y escudo. Cada modo tiene habilidades especiales.",
        },
        {
          name: "Visión Táctica (Pasiva)",
          description:
            "Puede analizar rápidamente el campo de batalla y detectar puntos débiles en formaciones enemigas.",
        },
        {
          name: "Disparo de Precisión (Común)",
          description:
            "Un disparo que ignora parcialmente la armadura. Precisión aumenta si el objetivo está distraído.",
        },
      ],
    },
    rapscallion: {
      name: "Rapscallion",
      title: "El Antagonista Transcendente",
      image: "https://i.imgur.com/pwVYjXf.png",
      rank: "SS",
      age: "???",
      race: "Entidad Mecánico-Orgánica",
      element: "Vacío",
      description:
        "Una entidad que trasciende el universo y lo ve todo como su patio de juegos. Actualmente está rota luego de enfrentarse a los suyos por cometer un 'acto tabú'. Cocoa trabaja para él buscando piezas de otros de su especie para acelerar su reconstrucción.",
      motivations:
        "Recuperar su poder completo y vengarse de aquellos que lo castigaron, sin importar el costo para el mundo mortal.",
      likes: [
        "Juegos y acertijos",
        "Caos controlado",
        "Piezas de otros como él",
      ],
      dislikes: [
        "Reglas y limitaciones",
        "Orden y predictibilidad",
        "Que interfieran con sus planes",
      ],
      stats: [
        { name: "Fuerza", value: 100, max: 100, color: "bg-red-500" },
        { name: "Destreza", value: 100, max: 100, color: "bg-blue-500" },
        { name: "Sigilo", value: 100, max: 100, color: "bg-green-500" },
        { name: "Magia", value: 100, max: 100, color: "bg-purple-500" },
        { name: "Energía", value: 100, max: 100, color: "bg-yellow-500" },
        {
          name: "Dominio de Energía",
          value: 100,
          max: 100,
          color: "bg-pink-500",
        },
      ],
      abilities: [
        {
          name: "Manipulación de Realidad (Única)",
          description:
            "Puede alterar pequeñas porciones de realidad a su voluntad, aunque en su estado actual esto es limitado y consume mucha energía.",
        },
        {
          name: "Inmunidad Transcendente (Pasiva)",
          description:
            "Es inmune a la mayoría de formas de daño convencionales. Solo puede ser herido por ciertos tipos de energía.",
        },
        {
          name: "Fragmentación Dimensional (Única)",
          description:
            "Puede teletransportarse y crear pequeños portales que absorben ataques. En su estado completo podría crear portales a otras dimensiones.",
        },
      ],
    },
  };

  // Modal functionality
  const modal = document.getElementById("characterModal");
  const closeModal = document.getElementById("closeModal");

  // Add click events to all character buttons
  document.querySelectorAll(".character-card button").forEach((button) => {
    button.addEventListener("click", function () {
      const characterName = this.textContent.includes("Feith")
        ? "feith"
        : this.textContent.includes("Cocoa")
        ? "cocoa"
        : this.textContent.includes("Jenny")
        ? "jenny"
        : this.textContent.includes("Cheshire")
        ? "cheshire"
        : this.textContent.includes("Elizabeth")
        ? "elizabeth"
        : "rapscallion";

      const character = characters[characterName];

      // Set modal content
      document.getElementById("modalTitle").textContent = character.name;
      document.getElementById("modalImage").src = character.image;
      document.getElementById("modalRank").textContent = character.rank;
      document.getElementById("modalAge").textContent = character.age;
      document.getElementById("modalRace").textContent = character.race;
      document.getElementById("modalElement").textContent = character.element;
      document.getElementById("modalDescription").textContent =
        character.description;
      document.getElementById("modalMotivations").textContent =
        character.motivations;

      // Set likes and dislikes
      const likesList = document.getElementById("modalLikes");
      const dislikesList = document.getElementById("modalDislikes");

      likesList.innerHTML = character.likes
        .map(
          (like) =>
            `<li class="flex items-start mb-1"><i class="fas fa-check text-green-400 mt-1 mr-2"></i><span>${like}</span></li>`
        )
        .join("");
      dislikesList.innerHTML = character.dislikes
        .map(
          (dislike) =>
            `<li class="flex items-start mb-1"><i class="fas fa-times text-red-400 mt-1 mr-2"></i><span>${dislike}</span></li>`
        )
        .join("");

      // Set stats
      const statsContainer = document.getElementById("modalStats");
      statsContainer.innerHTML = character.stats
        .map(
          (stat) => `
                    <div class="mb-3">
                        <div class="flex justify-between mb-1">
                            <span>${stat.name}</span>
                            <span>${stat.value}/${stat.max}</span>
                        </div>
                        <div class="stat-bar bg-stone-700">
                            <div class="stat-fill ${
                              stat.color
                            }" style="width: ${
            (stat.value / stat.max) * 100
          }%"></div>
                        </div>
                    </div>
                `
        )
        .join("");

      // Set abilities
      const abilitiesContainer = document.getElementById("modalAbilities");
      abilitiesContainer.innerHTML = character.abilities
        .map(
          (ability) => `
                    <div class="mb-4 p-3 bg-stone-700/50 rounded-lg">
                        <h5 class="font-semibold mb-1 ${
                          ability.name.includes("(Única)")
                            ? "text-purple-300"
                            : ability.name.includes("(Pasiva)")
                            ? "text-blue-300"
                            : "text-green-300"
                        }">
                            ${ability.name}
                        </h5>
                        <p class="text-sm text-stone-300">${
                          ability.description
                        }</p>
                    </div>
                `
        )
        .join("");

      // Show modal
      modal.classList.remove("hidden");
      document.body.style.overflow = "hidden";
    });
  });

  // Close modal
  closeModal.addEventListener("click", function () {
    modal.classList.add("hidden");
    document.body.style.overflow = "auto";
  });

  // Close modal when clicking outside
  modal.addEventListener("click", function (e) {
    if (e.target === modal) {
      modal.classList.add("hidden");
      document.body.style.overflow = "auto";
    }
  });
});
