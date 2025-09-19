interface IReportHelp {
    label: string
    behaviors: {
        name: string
        report: {
            shaping: string
            signal: string
            duration: string
            position: string
            distance: string
            distraction: string
            generalization: string
            mastery: string
        }
    }[]
}

export const useReportHelpStore = defineStore('reportHelp', () => {
    const reportHelp: globalThis.Ref<IReportHelp[]> = ref([
        {
            label: 'Niveau 1',
            behaviors: [
                { 
                    name: 'Nom',
                    report: {
                        shaping: 'Prendre une friandise et la rapprocher du visage. Lorsque le chien regarde l\'éducateur, récompenser. Ensuite, éloigner petit à petit la friandisedu visage avec toujours la même exigence pour la récompense. Répéter plusieursfois pour obtenir une réaction fluide',
                        signal: 'Introduire le nom du chien au moment où le regard arrive sur le visage de l\'éducateur. Répéter 50-100 fois',
                        duration: 'Attendre 1 seconde, puis 2, etc. avant de récompenser le chien lorsqu\'il regarde dans la direction de l\'éducateur',
                        position: 'Changer de position',
                        distance: 'Ajouter un peu de distance',
                        distraction: 'Réaliser le comportement dans des environnements différents, avec d\'autres personnes autour ou encore avec du bruit/odeurs environnant',
                        generalization: 'Faire les 3D en même temps',
                        mastery: 'Maitrise du comportement...'
                    }
                },
                { 
                    name: 'Touche',
                    report: {
                        shaping: 'Tenez votre clicker dans une main. Tenez l\'autre main ouverte à 2-3 centimètres du nez de votre chien (la paume en direction de votre chien). Le chien devrait naturellement vouloir renifler votre main. Dès que le chien regarde votre main, cliquez et récompensez. Retirez votre main après chaque clic, puis présentez-la à nouveau après que le chien ait mangé la friandise. Soyez patient. Laissez le chien se tendre vers votre main et évitez de déplacer votre main vers le nez du chien. Certains chiens peuvent être intimidés par un mouvement en direction de leur visage. Cliquez et récompensez tout mouvement en direction de votre main. Augmentez progressivement votre critère jusqu\'à ce que le nez du chien touche la paume de votre main. Cliquez et récompensez lorsque le nez du chien touche votre main. À ce stade, le chien doit toucher votre main sans hésiter, dès que vous la présentiez devant lui. Si ce n\'est pas le cas, revenez aux étapes a et b. Répétez ce processus jusqu\'à ce que le chien commence à montrer une intention délibérée de toucher votre main. Nous recherchons un touché “propre”, sans léchage ou tentative de prendre votre main dans la bouche. Si cela se produit, ne cliquez pas, retirez votre main et recommencez. Veillez à ne pas punir le chien de quelque façon que ce soit.',
                        signal: 'Une fois que le chien touche du nez automatiquement votre main, prononcez le mot « Touche » lorsqu\'il commence le mouvement. Vous devrez répéter cette séquence environ 50-100 fois pour que le chien puisse faire le lien entre le signal (le mot) et le comportement (toucher votre main).',
                        duration: 'Demandez au chien de toucher la main plusieurs fois avant de cliquer et récompenser. Déplacez votre main ou changez de main entre chaque touché. Cliquez par exemple après 1 contact, puis 3, puis 2, puis 4, puis 1, etc. Faites attention de récompenser de façon aléatoire.',
                        position: 'Lorsque le chien sait comment vous faire cliquer et touche du nez votre main dès que vous la présentiez, commencez à la présenter dans différentes positions. Présentez-la à gauche; à droite; au-dessous ou en-dessous du museau du chien. Le chien doit maintenant faire plus d\'efforts et tourner, baisser ou avancer la tête pour toucher votre main. Présentez aussi votre main légèrement hors de sa portée, encourageant ainsi le chien à faire un pas en avant pour établir le contact. N\'oubliez pas d\'alterner vos mains pour cet exercice.Répétez les étapes 1-3 en variant votre position. Asseyez-vous sur une chaise, sur le sol, tenez-vous debout sur un côté du chien, puis de l\'autre, couchez-vous sur le sol, sur un canapé, un lit, etc...',
                        distance: 'Éloignez progressivement votre main du chien, l\'encourageant ainsi à faire quelques pas pour établir le contact.',
                        distraction: 'Répétez ce processus tout en introduisant progressivement des distractions. Les distractions peuvent être un bruit à distance, une personne dans la salle ou un autre chien. Tapoter sur une table, dansez, lever un bras en l\'air, etc… Introduisez progressivement les niveaux de distraction en vous assurant que le chien puisse réussir à chaque étape.',
                        generalization: 'Répétez les étapes dans différents lieux. Travaillez avec votre chien dans une autre pièce, dans le jardin, dans un magasin, etc... Demandez à d\'autres éducateurs de travailler avec le chien. Augmentez progressivement le niveau de distraction jusqu\'à ce que le chien soit capable de réagir au signal dans la plupart des situations, y compris dans les lieux publics.',
                        mastery: 'Votre chien devrait maintenant réagir au signal « Touche » chaque fois que vous en avez besoin. Vous serez en mesure d\'utiliser cette commande pour déplacer votre chien, pour regagner son attention lorsqu\'il est distrait ou confus et pour lui apprendre d\'autres comportements tels que le rapport d\'objets, l\'alerte, les tâches de détection d\'odeur, la fermeture de portes ou de tiroirs, se coucher sous une table ou sous vos jambes, appuyer sur un bouton, etc.'
                    }
                },
                { 
                    name: 'Fini',
                    report: {
                        shaping: 'Observez votre chien et attendez qu\'il cesse de bouger. Soyez patient, laissez le chien se déplacer à sa guise et attendez qu\'il arrête de bouger, peu importe qu\'il soit debout, assis ou couché. Dès que le chien s\'immobilise pendant 1-2 secondes, prononcez le mot « Fini », puis faites un pas en arrière. Cela incitera le chien à se déplacer. Récompensez le chien dès qu\'il bouge (vous pouvez utiliser un clicker ou pas).',
                        signal: 'Prononcez le mot « Fini », puis faites un pas en arrière. Cliquez et récompensez dès que le chien bouge. Après 3-4 fois, diminuez progressivement votre mouvement vers l\'arrière (faites un pas plus petit, penchez-vous en arrière sans faire de pas, etc...) jusqu\'à ce que vous puissiez rester complètement immobile alors que le chien sort de sa position dès qu\'il entend le mot « Fini ».',
                        duration: 'Attendez que le chien reste immobile pendant une durée de plus en plus longue. Augmentez graduellement la durée et attendez que le chien cesse de bouger jusqu\'à 6 secondes avant de donner le signal « Fini ». Il est important d\'augmenter la durée aléatoirement. Vous pourrez, par exemple, attendre 4 secondes, puis 2 secondes, puis 5 secondes, avant de dire le mot «Fini», puis cliquez et récompensez dès que le chien bouge. Pour vous assurer de ne pas tomber dans un certain rythme, vous pouvez aussi utiliser un dé. Lancez le dé et le chiffre qui apparaît vous donnera le nombre de secondes.',
                        position: 'Répétez le comportement dans différentes positions (debout devant le chien, debout parallèle au chien, assis sur une chaise, assis sur le sol, couché, etc.). Chaque fois que vous changez de position, si vous devez répéter le signal, revenez en arrière de quelques étapes et développez le comportement à nouveau à partir de la nouvelle position.',
                        distance: 'Eloignez-vous d\'un pas ou deux de votre chien et prononcez le mot « Fini ». Le but est d\'enseigner au chien à réagir au signal même lorsqu\'il se trouve à une distance d\'au moins 2 mètres.',
                        distraction: '',
                        generalization: 'Utilisez le signal « Fini » lorsque vous travaillez sur d\'autres comportements tels que « Assis », « Couché », « À ta place », « Debout ». etc... Changez d\'endroit. Travaillez avec votre chien dans une autre pièce, dans le jardin, dans un magasin, etc... Demandez à d\'autres éducateurs de travailler avec le chien. Augmentez progressivement le niveau de distraction jusqu\'à ce que le chien soit capable de réagir au signal dans la plupart des situations, y compris dans les lieux publics.',
                        mastery: 'Développez progressivement le niveau de difficulté jusqu\'à ce que vous puissiez demander à votre chien de sortir de n\'importe quelle position, dans toutes sortes d\'endroits, avec beaucoup de distractions. Commencez à utiliser ce signal dans la vie quotidienne, dès que vous en avez besoin.'
                    }
                },
                { 
                    name: 'Assis',
                    report: {
                        shaping: 'Tenez une friandise dans votre main, présentez-la devant le nez du chien puis dirigez la au dessus de la tête du chien en direction de sa queue. En suivant votre mouvement, le chien devrait s\'asseoir. Cliquez dès que les fesses touchent le sol, et récompensez le chien en position. Récompensez en position 2-3 fois, en d\'autres termes, donnez-lui les friandises pendant qu\'il maintient la position assise. Si le chien se lève, cessez de récompenser, retirez votre main et recommencez. Répétez 4-6 fois, puis attendez que le chien s\'assoie de lui-même. Si le chien se désintéresse, leurrez-le en position 1-2 fois puis attendez à nouveau. Dès qu\'il pose les fesses au sol, cliquez et récompensez-le. Après l\'avoir récompensé 2-3 fois en position, cliquez et récompensez hors de position (en présentant la friandise hors de sa portée; ne la jetez pas au sol). Vous pouvez également utiliser le signal « Fini » si le chien le connaît déjà. Lorsque vous commencez, cela peut prendre quelques secondes à quelques minutes avant que le chien s\'assoie, mais vous devriez rapidement remarquer que le chien s\'exécute de plus en plus rapidement, montrant qu\'il comprend maintenant comment vous faire cliquer. Si nécessaire, vous pouvez aussi façonner le comportement en cliquant tout mouvement dans la bonne direction - autrement dit, tout abaissement des hanches jusqu\'a la position complete.',
                        signal: 'Une fois que le chien s\'assoie automatiquement et rapidement, prononcez le mot « Assis » alors qu\'il initie la position - en d\'autres termes, alors qu\'il commence à baisser les fesses. Assurez-vous que vous ne prononcez le mot qu\'une seule fois. Vous devrez répéter cette étape environ 50-100 fois pour le chien puisse faire le lien entre le signal (le mot) et le comportement (assis). Par la suite, vous pourrez prononcer le mot « Assis » pour déclencher la position.',
                        duration: 'Lorsque le chien s\'assoie, ne cliquez pas immédiatement. Attendez quelques secondes avant de cliquer et récompenser. Récompensez en position, alors que le chien est assis. Si le chien sort de sa position pour prendre la friandise, retirez votre main et attendez que le chien s\'assoie à nouveau. Attendez quelques secondes, puis récompenser le chien. Utilisez le mot « Fini » pour signaler au chien qu\'il peut sortir de sa position. Augmentez progressivement la durée du comportement jusqu\'à 6 secondes ou plus. Il est important d\'augmenter la durée aléatoirement. Récompensez après 4 secondes, puis 2 secondes, puis 5 secondes, etc. Utilisez le signal « Fini » pour que le chien se lève, cliquez et récompensez.',
                        position: 'Répétez les étapes précédentes tout en variant votre position. Asseyez-vous sur une chaise ou sur le sol, tenez-vous une fois à gauche et une fois à droite du chien, couchez-vous sur le canapé, marchez avec le chien, etc... Lorsque le chien est à votre côté, s\'il se met devant vous pour s\'asseoir, vous pouvez utiliser une barrière pour l\'empêcher d\'avancer. Par exemple, travaillez contre un mur ou utilisez une chaise. Éloignez progressivement la barrière (ou éloignez-vous) jusqu\'à ce que vous puissiez l\'éliminer complètement. Il est important de travailler le chien en alignement avec votre corps, des 2 cotés (à gauche et à droite).',
                        distance: 'Eloignez-vous d\'un pas de votre chien et demandez-lui de s\'asseoir. L\'objectif est de lui apprendre à réagir au signal « Assis », même lorsqu\'il se trouve à une distance d\'au moins 2 mètres. Cliquez, puis déplacez-vous vers le chien pour lui donner la friandise. Pour faciliter l\'apprentissage, vous pouvez attacher le chien. Donnez-lui la commande « Fini » ou un autre signal comme « Couché » ou « Debout » si vous lui avez déjà appris ces comportements.',
                        distraction: 'Augmentez graduellement le niveau des distractions. Demandez au chien de s\'asseoir pendant qu\'il y a un jouet, une balle ou même une friandise sur le sol, etc... Déplacez-vous autour du chien tout en distribuant plusieurs friandises pour maintenir la position. Si le chien se lève à un moment donné, diminuez les distractions et réintroduisez-les progressivement. Demandez au chien de s\'asseoir alors qu\'il y a une personne ou un autre chien à proximité. Prononcez un autre mot ou faites un autre son. Ne cliquez pas si le chien s\'assoit. Travaillez très progressivement et soyez créatif. Restez à cette étape jusqu\'à ce que le chien réponde en moins de 3 secondes à la commande « Assis » et maintient la position même en présence de niveaux intermédiaires de distractions.',
                        generalization: 'Répétez les étapes précédentes dans différents endroits. Vous pouvez travailler dans votre cuisine, votre salon, votre chambre et votre jardin. Augmentez progressivement le niveau de difficulté jusqu\'à ce que vous puissiez obtenir et garder l\'attention de votre chien dans toutes sortes d\'endroits, même animés (par exemple: centre commercial bondé ou animalerie un samedi).',
                        mastery: 'Augmentez progressivement le niveau de difficulté jusqu\'à ce que vous puissiez demander au chien de s\'asseoir dans toutes sortes d\'endroits avec différents niveaux de distraction. Utilisez maintenant ce signal dans la vie de tous les jours, chaque fois que vous en avez besoin, et variez le type de récompense. Demandez un « Assis » avant de laisser le chien aller à son bol de nourriture, de lui lancer une balle, de sortir par la porte, de le mettre en laisse, de lui donner l\'accès aux jeux avec d\'autres chiens, etc...'
                    }
                },
                { 
                    name: 'À ta place',
                    report: {
                        shaping: 'Tenez le lit (tapis ou serviette) dans une main, et votre clicker dans l\'autre. Dès que vous placez le lit sur le sol, le chien est susceptible de vouloir le renifler. Soyez prêt et ne manquez pas l\'occasion de renforcer tout comportement curieux. Cliquez pour tout mouvement dirigé vers le lit, comme un reniflement, un regard, une patte sur le lit, etc. Même un contact accidentel est à renforcer. Après avoir cliqué, jetez la nourriture sur le lit. Répétez cette étape jusqu\'à ce que le chien commence à faire des mouvements intentionnels vers le lit. Ne dites pas un mot, regardez le tapis et évitez de pointer ou d\'inciter le chien.',
                        signal: 'Une fois le que chien se dirige et se couche sur le lit de façon prévisible, prononcez les mots « À Ta Place » pendant qu\'il initie le mouvement. Vous devrez répéter cette étape environ 50-100 fois pour que le chien puisse faire le lien entre le signal (le mot) et le comportement (se coucher sur le lit). A chaque répétition, assurezvous de ne prononcer le signal qu\'une seule fois.',
                        duration: 'Il est temps d\'enseigner au chien à maintenir la position pendant une certaine durée de temps. Une fois que le chien est en position couchée sur le lit, attendez quelques secondes avant de le récompenser. Ne cliquez pas tout de suite et augmentez la durée du comportement petit à petit, jusqu\'à 30 secondes ou plus. Il est important d\'augmenter la durée aléatoirement. Récompensez après 4 secondes, puis 2 secondes, puis 5 secondes, etc. Pour éviter de tomber dans un certain rythme, vous pouvez utilisez un dé. Lancez le dé et le chiffre qui paraît définira le temps d\'attente avant de récompenser le chien. Utilisez le signal « Fini » pour que le chien se lève, cliquez et récompensez.',
                        position: 'Répétez les étapes précédentes tout en changeant votre position. Asseyez-vous sur une chaise, sur le sol, couchez-vous sur un canapé, sur le sol, placez-vous à différents angles du lit, etc. Chaque fois que vous changez de position, soyez prêt à diminuer votre critère et répéter quelques étapes précédentes.',
                        distance: 'Eloignez-vous petit à petit du lit. Reculez de quelques pas et demandez au chien d\'aller se coucher sur son lit. Augmentez progressivement la distance jusqu\'à ce que le chien se dirige vers le lit à une distance de 5 mètres ou plus.',
                        distraction: 'Répétez ce processus tout en introduisant progressivement des distractions. Les distractions peuvent être un bruit à distance, une personne dans la salle ou un autre chien. Introduisez progressivement les niveaux de distractions en vous assurant que le chien puisse réussir à chaque étape.',
                        generalization: 'Répétez ce comportement dans différents lieux et avec différents lits, serviettes ou tapis. Assurez-vous de commencer avec des niveaux de distractions très faibles. Vous pouvez travailler dans votre cuisine, votre salon, votre chambre à coucher et éventuellement sous la table au restaurant. Pour enseigner au chiens à aller à sa place lorsque des visiteurs sonnent la à la porte, remplacez le signal verbal « À Ta Place » avec le son de la sonnette d\'entrée. Commencez par enregistrer le son de votre sonnette de porte. Introduisez le son à un niveau très faible au début afin de minimiser la possibilité que le chien y réagisse. Utilisez la sonnerie comme signal pour le chien d\'aller sur son lit. Augmentez progressivement le volume jusqu\'à ce que vous ayez atteint le même niveau sonore que la sonnette. Une fois que le chien va automatiquement sur le lit et y reste, vous pouvez commencer à introduire des visiteurs. Il est préférable de commencer avec des membres de la famille avant d\'essayer avec d\'autres visiteurs.',
                        mastery: 'Augmentez progressivement le niveau de difficulté jusqu\'à ce que vous puissiez demander au chien d\'aller sur son lit dans toutes sortes d\'endroits avec différents niveaux de distractions, y compris lorsque vous avez des visiteurs.'
                    }
                },
                { 
                    name: 'On y va',
                    report: {
                        shaping: 'Avec votre chien et cliquez et récompensez tant qu\'il maintient la position. Dès qu\'il sort de la position à vos côtés, reculez rapidement, tout en l\'encourageant à vous suivre. Laissez glisser la laisse entre vos mains jusqu\'à ce que vous atteignez la poignée. Ne tirez pas le chien, mais encouragez-le plutôt à vous suivre. Reculez jusqu\'à ce que la tête du chien atteigne le niveau de vos jambes, puis avancez à nouveau. Le chien va naturellement se mettre en position. Faites quelques pas en avant et lorsque le chien est en position, cliquez et récompensez. Ne cliquez pas lorsque le chien vient vers vous. Cliquez lorsque le chien maintient la position, autrement vous aurez un chien qui va aller de l\'avant, puis en position, puis en avant, etc... Après plusieurs séances, vous aurez de moins en moins besoin de reculer et le chien commencera automatiquement à corriger sa position. Comme dans l\'étape précédente, chaque fois que le chien sort de sa position, faites demi-tour et marchez dans la direction opposée. Au début, vous ne pourrez pas vous déplacer sur de longues distances. Le but n\'est pas de se promener, mais plutôt d\'enseigner au chien à vous prêter attention et à maintenir la laisse détendue. Ici encore, cliquez et récompensez régulièrement, tant que le chien maintient la position et le contact visuel. Testez l\'attention du chien à vos mouvements en ralentissant, accélérant et changeant de direction.',
                        signal: 'À ce stade, le chien devrait avoir développé la capacité de vous prêter plus d\'attention même s\'il sort encore parfois de sa position. Il devrait aussi se remettre en position rapidement lorsque vous adoptez l\'une des 3 techniques que vous avez pratiquées (« Enracinez-vous », « Reculez à la ligne de départ » et « Faire demi-tour »). Selon la situation vous pourrez choisir l\'une ou l\'autre de ces stratégies où les combiner. Au moment où vous prenez un pas en avant, prononcez les mots « on y va ».',
                        duration: 'Augmentez progressivement le nombre de pas en position avant de récompenser, jusqu\'à ce que vous puissiez marcher avec le chien en position avec seulement une friandise occasionnelle. Aller de l\'avant est une récompense en soi pour le chien.',
                        position: 'Changez de vitesses et de directions pour encourager votre chien à vous porter plus d\'attention et ignorer ce qui se passe dans les alentours. Continuez à récompenser souvent à ce stade. Vous pouvez utiliser le clicker ou un marqueur verbal comme « Oui ». Si votre chien connaît d\'autres comportements, vous pouvez parfois vous arrêter et demander un « Assis » ou « Couché », puis avancez à nouveau en disant « on y va ». Changez de côté pour que le chien soit à l\'aise à gauche où à droite de l\'éducateur.',
                        distance: '',
                        distraction: 'Répétez ce processus tout en introduisant progressivement des distractions. Les distractions peuvent être un bruit à distance, une personne dans la salle ou un autre chien. Introduisez progressivement les niveaux de distraction en vous assurant que le chien puisse réussir à chaque étape.',
                        generalization: 'Répétez les étapes dans différents endroits. Vous pouvez commencer dans votre jardin, puis sur le trottoir de votre quartier, dans le parc, le centre commercial, etc.',
                        mastery: 'Augmentez progressivement le niveau de difficulté jusqu\'à ce que votre chien marche à vos côtés et synchronise ses mouvements avec les vôtres tout en maintenant la laisse détendue, dans toutes sortes d\'endroits avec toutes sortes de distractions.'
                    }
                },
                { 
                    name: 'Olfact.REC',
                    report: {
                        shaping: 'Nous allons commencer par associer l\'odeur avec les friandises de sorte que le chien développe une forte réaction émotionnelle, une excitation à l\'odeur. Odeur = friandises (oui !!). Vous allez utiliser des récompenses de forte valeur que vous n\'utiliserez pas pour d\'autres comportements. Cela permettra d\'accroître l\'attrait du chien pour la tâche. Placer un échantillons cible (Hypo) dans un flacon. Présentez le flacon devant le chien. Dès que le chien met son nez dessus, récompensez-le. Vous pouvez utiliser un clicker, mais à ce stade il peut être plus facile d\'utiliser le mot « Oui! » pour marquer le comportement, puis récompenser à la source. “Récompenser à la source” signifie qu\'on va donner la friandise au chien juste au-dessus de l\'odeur. Répétez cette étape environ 10 fois et sur 2-3 séances d\'éducation Mettez l\'échantillon dans un pot et placez le pot sur le sol devant vous. Cliquez et récompensez tout mouvement du chien vers le pot. Augmentez progressivement votre critère jusqu\'à ce que le chien mette son museau dans le pot. Cliquez et récompensez plusieurs fois juste au-dessus de l\'ouverture du pot, gardant ainsi le nez du chien juste au-dessus. À ce stade, restez accroupi juste à côté du pot et cliquez et récompensez le chien chaque fois qu\'il met son nez dans le pot.',
                        signal: 'Prononcez le mot « Check » dès que le chien commence à se diriger vers le pot.',
                        duration: 'Restez près du pot, dans la même position que pour l\'étape précédente mais une fois que le chien met son museau dans le pot, cliquez puis récompensez à quelques centimètres du pot. De cette façon, on encourage le chien à revenir systématiquement au-dessus du pot juste après avoir mangé la friandise. On va progressivement augmenter la durée du comportement (museau dans le pot) en retardant le clicker de plus en plus longtemps, jusqu\'à ce que le chien maintienne la position pendant au moins 6 secondes (ou jusqu\'à ce qu\'il entende le clicker). Il est important d\'augmenter la durée aléatoirement et cliquez par exemple après 4 secondes, puis 2 secondes, puis 5 secondes, etc...',
                        position: 'Variez votre position par rapport à la boîte. Levez-vous et déplacez-vous autour du pot. Assurez-vous de changer aussi votre orientation vi- à-vis du pot. Vous pouvez également commencer à varier votre position et vous asseoir sur une chaise ou sur le sol.',
                        distance: 'Augmentez progressivement votre distance par rapport au pot jusqu\'à ce que vous puissiez vous tenir à une distance d\'environ 5 mètres. Si votre chien aime courir après une balle ou tirer sur une corde, vous pouvez également cliquer et jouer. Utilisez uniquement un jouet si vous avez une bonne maîtrise du jeu, autrement dit, si vous pouvez facilement récupérer le jouet à tout moment pendant le jeu.',
                        distraction: 'Augmentez progressivement le niveau de distractions. Tapotez sur le mur pendant que le chien se dirige vers le pot et continuez à tapoter jusqu\'à ce que le chien produise le comportement voulu. En d\'autres termes, si le chien court vers vous au lieu du pot, ignorez-le, continuez à tapoter et donnez-lui le temps de décider de retourner vers le pot. Marchez sur place, levez un bras en l\'air, etc... Assurez-vous de continuer à modifier votre position autour du pot. Continuez à augmenter progressivement le niveau des distractions par la présence d\'une autre personne ou un autre chien.',
                        generalization: 'Répétez les étapes dans différents endroits. Vous pouvez le faire dans votre cuisine, votre salon ou votre jardin, par exemple. Commencez aussi à varier le type de flacons que vous utilisez.',
                        mastery: 'Augmentez peu à peu le niveau de difficulté jusqu\'à ce que vous puissiez obtenir de votre chien qu\'il place son museau dans le pot où qu\'il soit et en présence de différents types de distraction.'
                    }
                },
                { 
                    name: 'Les besoins',
                    report: {
                        shaping: 'A un moment où le chien est susceptible d\'avoir besoin de faire ses besoins, par exemple lorsqu\'il vient de se réveiller ou vient de manger, mettez le chien en laisse et sortez-le. Une fois dehors, donnez-lui accès à un coin d\'herbe. Résistez à la tentation d\'aller sur l\'herbe avec votre chien. Le but est que le chien fasse ses besoins dans le périmètre défini par la longueur de la laisse. Évitez de renforcer l\'habitude de renifler en long et en large, en prenant tout son temps. Alors que le chien commence à faire ses besoins, prononcez les mots «Dépêche-toi». Dès que le chien a fini, récompensez-le et félicitez-le avec enthousiasme. Répétez cette étape environ 50-100 fois pour que le chien fasse le lien entre le signal (les mots) et le comportement (faire ses besoins).',
                        signal: 'Testez la connexion entre le signal (les mots «Dépêche-toi») et le comportement (faire ses besoins) en disant «Dépêche-toi» avant que le chien commence à faire ses besoins. Si le signal déclenche le comportement, le tour est joué! Sinon, répétez la première étape un peu plus longtemps, puis essayez à nouveau.',
                        duration: '',
                        position: '',
                        distance: '',
                        distraction: '',
                        generalization: 'Répétez ce processus dans différents endroits pour que le chien prenne l\'habitude de faire ses besoins dans toutes sortes de situations.',
                        mastery: 'Augmentez progressivement le niveau de difficulté jusqu\'à ce que vous puissiez demander au chien de faire ses besoins dans toutes sortes d\'endroits et commencez à utiliser ce signal dans la vie de tous les jours.'
                    }
                },
                { 
                    name: 'Couché',
                    report: {
                        shaping: 'Travaillez le chien depuis la position assise et debout. Le but est d\'apprendre au chien a se coucher directement, quelle que soit sa position de départ. Depuis le “assis”: presentez une friandise devant le nez du chien puis, comme si vous dessiniez un grand L a l\'envers, amenez-la au sol, puis dans la direction opposée au chien sur environs 10 cms. Depuis la position “debout”, présentez la friandise devant le nez du chien puis amenez la au sol, entre les pattes avant du chien. Dès que le chien se couche, récompensez en position 2-3 fois, puis cliquez et récompensez hors de position (en mettant votre main hors de portée du chien) NE PRONONCEZ pas le signal, le mot « Couché » à ce stade. Si le chien connaît le signal « Fini » vous pouvez l\'utiliser pour sortir le chien de position, puis cliquez et récompensez. Repetez cette etape 6-8 fois, puis attendez que le chien offre de se coucher tout seul. Tant que le chien reste intéressé et semble essayer de comprendre la tâche, donnez-lui le temps de réfléchir. Si le chien se desinteresse apres 1-2 minutes, vous pouvez leurere 1-2 fois, puis laissez-le trouver tout seul comment vous faire cliquer (en se couchant). Dès que le chien se couche, cliquez et récompensez en position. Si le chien se lève, retirez la récompense, attendez que le chien se couche à nouveau, comptez jusqu\'à 3, puis récompensez. Récompensez 2-3 fois en position, puis cliquez et récompensez hors de position (en présentant votre main hors de portée) ou utiliser le signal «Fini».',
                        signal: 'Prononcez le mot «Couché» alors que le chien entame la position. Prononcez la commande d\'un ton calme et naturel dès que vous remarquez un mouvement vers le bas. Faites attention de ne dire le mot «Couché» qu\'une seule fois. Répétez cette étape 50-100 fois.',
                        duration: 'Lorsque le chien se couche, ne cliquez pas immédiatement. Attendez quelques secondes avant de cliquer et récompenser. Récompensez en position, alors que le chien est couché. Si le chien se lève pour prendre la récompense, retirez votre main et attendez patiemment que le chien se couche à nouveau. Attendez quelques secondes, puis récompenser le chien. Utilisez le signal «Fini» pour sortir le chien de position, cliquez et récompensez. Augmentez peu à peu la durée du comportement en retardant de plus en plus la récompense jusqu\'à ce que le chien maintienne la position pendant 6 secondes. Il est important d\'augmenter la durée aléatoirement. Récompensez après 4 secondes, puis 2 secondes, puis 5 secondes, etc. Utilisez le signal « Fini » pour que le chien se lève, cliquez et récompensez.',
                        position: 'Répétez le comportement tout en changeant votre position (debout devant le chien, debout parallèle au chien, assis sur une chaise, assis sur le sol, etc.). Chaque fois que vous modifiez vos critères, soyez prêt à revenir quelques pas en arrière. Si nécessaire, vous pouvez aussi façonner le comportement comme vous l\'avez fait lors de la première étape, alors que vous êtes dans de nouvelles positions. Le but est d\'enseigner au chien à se coucher où qu\'il soit. Si le chien se déplace pour se placer devant vous, vous pouvez utiliser une barrière comme une chaise ou en travaillant par exemple contre un mur. Vous allez progressivement éloigner la barrière jusqu\'à ce que vous puissiez l\'éliminer complètement.',
                        distance: 'Faites un pas en arrière et demandez au chien de se coucher. Le but ici est de pouvoir donner le signal «Couché» depuis une distance d\'environ 5 mètres. Cliquez puis déplacez-vous vers le chien pour le récompenser. Éloignez-vous progressivement jusqu\'à ce que le chien réagisse immédiatement alors que vous êtes à environ 5 mètres.',
                        distraction: 'Augmentez progressivement le niveau de distractions. Demandez au chien de se coucher pendant que vous tapotez sur la table ou sur le mur, alors que vous levez les bras en l\'air, en présence d\'un jouet ou une balle ou même de friandises sur le sol, etc. Déplacez-vous autour du chien tout en le récompensant régulièrement tant qu\'il maintient sa position. Si le chien se lève, réduisez les distractions puis augmentez-les progressivement. Demandez au chien de se coucher alors qu\'il y a d\'autres personnes à distance, puis de plus en plus proches. Demandez au chien de se coucher alors qu\'il y a un autre chien à proximité. Prononcez un mot ou faites un autre son. Travaillez très progressivement et soyez créatif. Restez à cette étape jusqu\'à ce que le chien réponde en moins de 3 secondes au signal «Couché» en présence de différents niveaux de distractions.',
                        generalization: 'Répétez ce comportement dans différents lieux. Travaillez avec votre chien dans une autre pièce, dans le jardin, à l\'arrière de la voiture, dans un magasin, au centre commercial, etc. Demandez à d\'autres éducateurs de travailler avec le chien.',
                        mastery: 'Augmentez progressivement le niveau de difficulté jusqu\'à ce que vous puissiez demander au chien de se coucher dans toutes sortes d\'endroits avec différents niveaux de distractions. Commencer à utiliser ce signal dans la vie de tous les jours, chaque fois que vous avez besoin que le chien se couche. Variez les récompenses aussi souvent que possible. Demandez un « Couché » avant de donner l\'accès au bol de nourriture, avant de lancer une balle, d\'ouvrir la porte du jardin, de mettre la laisse, etc.'
                    }
                },
                { 
                    name: 'À gauche',
                    report: {
                        shaping: 'Soyez prêt avec votre clicker en main et placez la plateforme sur le sol. Cliquez et récompensez tout mouvement vers la plateforme, comme un regard, un reniflement ou mieux encore, une patte sur la plateforme. Le but est d\'enseigner le chien à placer ses deux pattes avant sur la plateforme. Soyez patient et augmentez progressivement vos critères jusqu\'à ce que le chien mette ses deux pattes sur la plateforme et maintienne cette position. Vous pouvez aussi leurrer le chien pour qu\'il place ses deux pattes avant sur la plateforme. Dès que le chien place ses deux pattes avant sur la plateforme, cliquez et récompensez-le sur la plateforme plusieurs fois, puis cliquez et récompensez loin de la plateforme. Répétez cette étape jusqu\'à ce que le chien retourne immédiatement mettre ses pattes sur la plateforme après avoir mangé la friandise.',
                        signal: 'Prononcez les mots « A Gauche » pendant que le chien pivote pour être en position à vos côtés. Vous devrez répéter cette étape 50-100 fois pour le chien puisse faire le lien entre les mots « Au pied » et le comportement de pivotement des hanches en position.',
                        duration: '',
                        position: '',
                        distance: 'Commencez à prendre de plus grands pas loin du chien. L\'objectif est de pouvoir faire face au chien, prononcez les mots « A Gauche » et que le chien se déplace à vos côtés en parfaite position sur votre gauche.',
                        distraction: 'Augmenter progressivement le niveau de distractions. Dites « A Gauche » alors qu\'il ya un jouet, une balle ou même une friandises sur le sol. Dites « A Gauche » alors qu\'il y a d\'autres personnes ou un autre chien dans la pièce. Levez un bras en l\'air, etc... Travailler très progressivement et soyez créatif avec cette étape.',
                        generalization: 'Répétez les étapes dans différents endroits. Vous pouvez le faire dans votre cuisine, votre salon ou votre jardin, par exemple.',
                        mastery: 'Augmentez peu à peu le niveau de difficulté jusqu\'à ce que vous puissiez obtenir de votre chien qu\'il se place en position dans toutes sortes d\'endroits. Commencez à utiliser ce comportement dans le vie de tous les jours.'
                    }
                },
                { 
                    name: 'Debout',
                    report: {
                        shaping: 'Attendez que le chien soit assis ou couché. Il y a plusieurs façons d\'encourager un chien à se lever:\n a. Si vous avez enseigné le chien à toucher votre main (“Touche”), tenez votre main légèrement hors de sa portée. Lorsque le chien se lève pour toucher votre main, cliquez et récompensez. Faites attention de garder votre main assez proche du chien pour éviter qu\'il ne prenne un pas en avant. Dès que le chien se lève, cliquez et récompensez.\n b. Reculez d\'un pas. Le chien est susceptible de vouloir se rapprocher de vous. Cliquez et récompensez dès qu\'il se lève.',
                        signal: 'Une fois que le chien se lève dès que vous présentez votre main devant lui ou que vous preniez un pas en arrière, commencez à prononcer le mot « Debout » alors qu\'il initie la position - autrement dit, pendant qu\'il se lève. Vous devrez répéter cette étape environ 50-100 fois pour le chien puisse faire le lien entre le signal (le mot) et le comportement (debout).',
                        duration: 'Il est temps d\'enseigner le chien à maintenir la position debout pendant de plus longues durées. Une fois que le chien est en position, cliquez et récompensez plusieurs fois. Commencez aussi à introduire un délai de quelques secondes après que le chien se soit mis debout, avant de cliquer. Augmentez progressivement la durée du comportement jusqu\'à 6 secondes ou plus. Il est important d\'augmenter la durée aléatoirement et de cliquer, par exemple, après 4 secondes, puis 2 secondes, puis 5 secondes, etc.',
                        position: 'Répétez les étapes précédentes tout en changeant votre position. Placez-vous debout avec le chien sur votre gauche (position “Au pied”) ou sur votre droite. Asseyez-vous sur une chaise ou sur le sol, etc. Chaque fois que vous changez de position, soyez prêt à diminuer votre critère.',
                        distance: 'Augmentez progressivement votre distance par rapport au chien. Avec votre chien face à vous, prenez un pas en arrière et demandez-lui de se mettre « Debout ». Si le chien essaie de vous suivre, avancez vers lui, replacez le en position, puis faites un plus petit pas vers l\'arrière. Il est important d\'aider le chien à réussir. Dès que le chien se lève, cliquez puis aller vers lui pour le récompenser. Donnez-lui ensuite un autre signal tel que « Fini » ou bien « Couché » ou « Assis ».',
                        distraction: 'Augmentez progressivement le niveau des distractions. Demandez au chien de se tenir debout et de maintenir la position alors qu\'il y a un jouet, une balle ou même une friandises sur le sol. Déplacez-vous autour du chien tout en lui donnant plusieurs friandises pour qu\'il maintienne sa position. Si le chien se déplace, réduisez les distractions puis augmentez-les à nouveau, plus lentement. Demandez au chien de se tenir debout alors qu\'il y a d\'autres personnes présentes, ou un autre chien à proximité. Prononcez un autre mot ou faites un son. Travailler très progressivement et soyez créatif au cours de cette étape. Restez à cette étape jusqu\'à ce que le chien réagisse au signal « Debout » en moins de 3 secondes et qu\'il maintienne la position même en présence de distractions diverses.',
                        generalization: 'Répétez ce comportement dans différents lieux. Travaillez avec votre chien dans une autre pièce, dans le jardin, dans un magasin, au centre commercial, etc. Demandez à d\'autres éducateurs de travailler avec le chien.',
                        mastery: 'Augmentez progressivement le niveau de difficulté jusqu\'à ce que vous puissiez demander au chien de se coucher dans toutes sortes d\'endroits avec différents niveaux de distractions. Commencer à utiliser ce signal dans la vie de tous les jours, chaque fois que vous avez besoin que le chien se lève, comme pour mettre son harnais ou sa cape. Variez les récompenses aussi souvent que possible. Demandez un « Debout » avant de lancer une balle, de mettre la laisse, etc.'
                    }
                },
                { 
                    name: 'Viens',
                    report: {
                        shaping: 'Dans un endroit bien connu du chien et où il y a très peu de distractions, attendez jusqu\'à ce que le chien vous regarde, ou faites de petits bruits de bouche pour attirer son attention, puis éloignez-vous du chien, en l\'incitant à courir vers vous. Quand le chien vient vers vous, cliquez et récompensez. Vous pouvez aussi simplement attendre que votre chien se dirige dans votre direction, et puis cliquez et récompensez.\nRépétez l\'étape précédente, mais quand le chien vous approche, demandez un “Assis” devant vous avant de cliquer et récompenser. Vous pouvez également leurrer le chien en position. Restez à cette étape jusqu\'à ce que le chien s\'assoit automatiquement devant vous (sans que vous ayez à dire « Assis »).',
                        signal: 'Répétez les étapes ci-dessus et dès que vous remarquez que votre chien court dans votre direction, prononcez le mot « Viens ». Répétez cette étape 50-100 fois pour pour le chien puisse faire le lien entre le signal (le mot) et le comportement (venir vers vous et s\'asseoir).',
                        duration: '',
                        position: 'Appelez le chien lorsque vous êtes dans des positions différentes. Asseyez-vous sur une chaise ou sur le sol, couchez-vous sur le canapé, sur le sol ou le lit, etc.',
                        distance: 'Appelez progressivement le chien de plus en plus loin. Vous pouvez également commencer à l\'appeler d\'une pièce à l\'autre et lorsque vous êtes hors de vue. À ce stade, assurez-vous toujours d\'appeler le chien seulement lorsqu\'il y a de fortes chances qu\'il viendra vers vous. En cas de doute et si vous avez vraiment besoin qu\'il vienne, allez le chercher.',
                        distraction: 'Augmentez progressivement le niveau des distractions. S\'il ne répond pas à l\'appel, diminuez vos critères, utilisez des friandises à valeur plus élevée, réduisez le niveau des distractions, etc… Restez à cette étape jusqu\'à ce que le chien réagisse au signal en présence d\'un niveau moyen de distractions.',
                        generalization: 'Répétez ce comportement dans différents lieux. Travaillez avec votre chien dans une autre pièce, dans le jardin, dans un magasin, au centre commercial, etc. Demandez à d\'autres éducateurs de travailler avec le chien. Lorsque que vous changez d\'endroit, maintenez le niveau des distractions assez bas au début, puis augmentez-les graduellement jusqu\'à ce que le chien réagisse au signal “Viens” dans la plupart des situations, y compris dans les lieux publics.',
                        mastery: 'Augmentez progressivement le niveau de difficulté jusqu\'à ce que vous puissiez demander au chien de venir dans toutes sortes d\'endroits avec différents niveaux de distractions. Commencer à utiliser ce signal dans la vie de tous les jours, chaque fois que vous avez besoin que le chien vienne à vous. Variez les récompenses aussi souvent que possible. Demandez un « Viens » avant de lancer une balle, de mettre la laisse, etc.'
                    }
                },
            ]
        },
        {
            label: 'Niveau 2',
            behaviors: [
                { 
                    name: 'Olfact.DIS',
                    report: {
                        shaping: 'Placez l’échantillon dans le pot. Prenez soin d’utiliser le même pot pour chaque catégorie d’échantillon (marquez les pots). Mettez le chien en position « couché-pas-bougé » (si le chien connait ce comportement, autrement, attachez-le) et placez le pot sur le sol, à environ 2-5 mètres du chien. Demandez au chien d’investiguer le pot en lui donnant le signal « Check ». Cliquez lorsque le chien met son nez dans le pot et le maintien dans cette position pendant plusieurs secondes (4-6 secondes). Au son du clic, le chien devrait venir vers vous pour sa récompense. Mettez le chien en position couchée et répétez la séquence plusieurs fois.',
                        signal: '',
                        duration: '',
                        position: 'Variez votre position par rapport aux pots. Déplacez-vous autour d’eux en changeant votre angle ainsi que la direction de votre regard par rapport aux pots. Vous pouvez également varier votre position et vous asseoir sur une chaise, marcher sans arrêt, lever les bras en l’air, etc...',
                        distance: 'Eloignez-vous des pots. Laissez le chien travailler complètement seul et minimisez les risques d’influencer son comportement (vous déplacer et changer de position évitera de donner des indices visuels au chien). À ce stade, vous pouvez aussi vous retirer complètement de la situation en introduisant un distributeur de récompenses télécommandé (ex.: Pet Tutor).',
                        distraction: 'Augmentez progressivement le niveau des distractions. Tapotez sur une table ou sur un mur pendant que le chien se rend vers les pots et continuez à tapoter jusqu\'à ce que le chien indique le pot cible. Marchez sur place, levez un bras en l\'air, etc. Prenez soin de continuer à bouger autour des pots.Augmentez progressivement le niveau des distractions en introduisant une autre personne ou un autre chien dans la salle d’éducation.',
                        generalization: 'Répétez les étapes dans des différents endroits. Vous pouvez le faire dans votre cuisine, votre salon ou votre jardin, par exemple. Variez le type de flacons que vous utilisez.',
                        mastery: 'Augmentez peu à peu le niveau de difficulté jusqu\'à ce que votre chien indique le pot « cible » où qu’il soit et en présence de différents types de distraction.'
                    }
                },
                { 
                    name: 'Dessous',
                    report: {
                        shaping: 'Demandez au chien de toucher votre main 3-5 fois. Déplacez votre main sous la table, puis vers le sol. Lorsque le chien suit votre main sous la table, cliquez et récompensez. Si le chien montre de la résistance, tenez une friandise entre vos doigts, montrez-la au chien et déplacez-la rapidement sous la table, leurrant le chien dans la position que vous souhaitez. Cliquez et récompensez. Récompensez le chien 2-3 fois en position (couché sous la table), puis après quelques secondes, encouragez le chien à sortir de sous la table au signal «Fini». Répétez ce processus jusqu\'à ce que le chien se couche facilement sous la table. Dès que possible, diminuez le leurre jusqu\'à ce que vous n’en n\'ayez plus besoin.',
                        signal: 'Prononcez le mot « Dessous » alors que le chien se dirige vers la table. Vous devrez répéter cette étape 50-100 fois pour le chien fasse l’association entre le mot «Dessous» et le comportement « aller sous la table ».',
                        duration: 'Lorsque le chien se couche, ne cliquez pas immédiatement. Récompensez en position, alors que le chien est couché. Si le chien se lève pour prendre la friandise, retirez votre main et attendez que le chien se couche à nouveau. Attendez quelques secondes, puis récompensez le chien. Utilisez le signal «Fini» pour que le chien sorte de la position, cliquez et récompensez. Augmentez progressivement la durée en retardant la récompense jusqu\'à ce que le chien maintienne la position pendant plusieurs minutes avant d’être récompensé. Tout comme pour tout autre comportement, veillez à augmenter la durée de façon aléatoire. Vous pourrez parfois récompenser après quelques secondes, puis après quelques minutes.',
                        position: 'Imitez la situation telle qu’elle se produirait dans un restaurant. Asseyez-vous sur une chaise devant la table, puis demandez au chien d\'aller « Dessous ». Si le chien est confus, utilisez une des techniques décrites précédemment. Répétez jusqu\'à ce que le chien aille sous la table au signal verbal. Un léger accompagnement par un geste de la main est aussi accepté.',
                        distance: 'Leurrer, façonnez ou utilisez une cible pour apprendre au chien d’aller sous vos jambes lorsque vous êtes en position assise. Dès que le chien se couche, cliquez puis récompensez. Récompensez à nouveau quelques fois en position pour encourager le maintien de la position, puis sortez le chien de position avec le signal « Fini ». Cliquez et récompensez. Le chien doit sortir de position dans le même sens, et doit donc reculer. Cela lui évitera de s\'empêtrer dans la laisse. Comme la formation « Sous » la table, minimisez progressivement le ciblage ou le leurre et augmentez la durée du comportement. Cette position est idéale pour maintenir le chien hors du passage et évitera que d’autres personnes tentent d\'interagir avec lui.',
                        distraction: 'Augmentez progressivement le niveau des distractions. Pensez à tout ce qui pourrait être une distraction pour le chien, comme certains sons, certaines personnes, des chiens à distance, etc.',
                        generalization: 'Répétez les étapes ci-dessus dans des différents endroits et dans des différentes positions, ou avec d’autres personnes.',
                        mastery: 'Augmentez peu à peu le niveau de difficulté jusqu\'à ce que vous puissiez obtenir de votre chien qu’il recule dans toutes sortes d\'endroits. Utilisez ce comportement dans le vie de tous les jours, quand vous êtes assis à une table ou dans une salle d\'attente.'
                    }
                },
                { 
                    name: 'Poke',
                    report: {
                        shaping: 'Présentez au chien une spatule ou une réglette avec du ruban adhésif (cible). À ce stade, le chien devrait toucher du nez la cible sans hésitation. Dans le cas contraire, façonnez le comportement du chien et cliquez et récompensez le chien pour tout mouvement en direction de la cible, y compris un regard. Augmentez graduellement vos critères jusqu\'à ce que le chien touche la cible avec son nez.',
                        signal: 'Prononcez le mot « Poke » alors que le chien vous donne un coup de museau dans la cuisse. Répétez 50-100 fois.',
                        duration: 'Le comportement « Poke » doit être soutenu jusqu\'à ce que vous réagissiez. Le chien doit en effet insister assez longtemps pour attirer l\'attention d\'une personne et peut-être même la réveiller. Retardez le moment du Click et petit à petit attendez de plus en plus de coups de museaux. Récompensez aléatoirement en cliquant après 1 « poke », 4 « pokes », 3 « pokes », 1 « poke », etc., jusqu\'à ce que le chien « poke » pendant au moins 6 secondes.',
                        position: 'Répétez les étapes ci-dessus en variant votre position. Asseyez-vous sur une chaise ou sur le sol. Allongez-vous sur le sol, sur un canapé. Couvrez-vous avec une couverture, etc... Pour préparer le chien à alerter dans la voiture alors qu’il se trouve sur le siège arrière. Apprenez-lui à donner des coups de museau derrière l’épaule. Chaque fois que vous changez de position, soyez prêt à reprendre l’utilisation de la cible et du ruban adhésif.',
                        distance: '',
                        distraction: 'Augmentez progressivement le niveau des distractions jusqu\'à ce que vous puissiez inclure une autre personne ou un autre chien dans la salle d’éducation.',
                        generalization: 'Répétez les étapes dans différents endroits. Vous pouvez travailler dans des pièces différentes, puis à l\'extérieur, au centre commercial, dans les magasins, etc...',
                        mastery: 'Augmentez progressivement le niveau de difficulté jusqu\'à ce que vous puissiez demander au chien de donner des coups de museaux dans différents endroits et face à des différents niveaux de distractions.'
                    }
                },
                { 
                    name: 'Attends',
                    report: {
                        shaping: 'Ce comportement doit avoir été préalablement appris. Pour le rafraîchir, demandez au chien de se coucher 1-2 fois. Pour augmenter la durée, cliquez après quelques secondes, récompensez en position, puis sortez le chien de sa position avec un « Fini ». Cliquez et récompensez à nouveau. Répétez jusqu\'à ce que le chien maintienne la position pendant au moins 6 secondes.',
                        signal: 'Demandez au chien de se coucher. Une fois en position, dites le mot « Reste », attendez quelques secondes, puis récompensez en position. Sortez le chien de la position avec le signal « Fini », cliquez et récompensez.',
                        duration: 'Augmentez progressivement la durée, jusqu\'à ce que le chien maintienne la position pendant au moins 30 secondes.',
                        position: 'Répétez le comportement dans différentes positions (debout devant le chien, debout parallèle au chien, assis sur une chaise, assis sur le sol, couché, etc.). Chaque fois que vous changez votre position, soyez prêt à relâcher vos critères et développer le comportement à nouveau.',
                        distance: 'Commencez en face du chien. Prenez un petit pas en arrière ; puis revenez en position devant le chien, cliquez et récompensez. Si le petit pas en arrière sort le chien de position, diminuez votre mouvement de recul. Il est important d\'aider le chien à réussir à chaque étape. Si le chien sort de sa position, vous allez trop vite. Répétez cette étape jusqu\'à que le chien ne présente plus aucun mouvement vers l’avant lorsque vous reculez. Augmentez graduellement votre distance par rapport chien. Prenez deux pas en arrière; revenez vers le chien; cliquez et récompensez. Prenez 3 pas en arrière, 5 pas, etc. Vous pouvez décider de ne pas cliquer et seulement récompenser dès que vous revenez au chien. Ajouter le signal « Reste » juste avant de vous éloigner du chien. Vous pouvez également utiliser un signe de la main, comme vous paume levée face au chien avec vos doigts vers le haut. Déplacez-vous progressivement de plus en plus loin du chien jusqu\'à ce que vous puissiez vous éloigner d’environ 5 mètres et hors de vue du chien. Comme pour tout autre critère, augmentez la distance très progressivement. C’est toujours le chien qui dicte la vitesse d’apprentissage.',
                        distraction: 'Avec le chien en position, faites un pas de côté, puis revenez devant le chien, cliquez et récompensez. Prenez deux pas sur le côté, revenez devant le chien, cliquez et récompensez. Continuez à vous déplacer autour du chien très lentement jusqu\'à ce que vous puissiez marcher tout autour du chien. Répétez dans chaque direction. Levez les bras en l\'air, cliquez et récompensez. Si le chien a bougé, demandez-lui simplement de se remettre en position et répéter la procédure. Cette fois, ne levez pas vos bras aussi haut. Avec certains chiens, vous devrez peut-être commencer par lever vos mains (voire vos doigts) seulement au début. Continuez à augmenter lentement l’ampleur de vos mouvements jusqu\'à ce que vous puissiez sauter en l’air devant le chien, puis commencez à travailler sur d’autres positions, comme assis ou allongé sur le sol, tournez le dos au chien, etc.',
                        generalization: 'Répétez les étapes dans différents domaines. Vous pouvez le faire dans d’autres pièces puis passer a l\'extérieur, au centre commercial, dans les magasins, etc. puis, répétez les étapes ci-dessus avec le chien dans différentes positions («Assis» et «Debout»).',
                        mastery: 'Augmentez progressivement le niveau de difficulté jusqu\'à ce que vous puissiez obtenir de votre chien qu’il « Reste » dans toutes sortes d’endroits et avec différents niveaux de distractions. Utilisez ce comportement dans la vie quotidienne chaque fois que vous aurez besoin que le chien pour maintienne une position.'
                    }
                },
                { 
                    name: 'Tu laisse',
                    report: {
                        shaping: 'Placez une friandise dans votre main. Si le chien tente de la manger, fermez-la. Attendez que le chien fasse un petit mouvement en arrière, cliquez et récompensez le chien avec une autre friandise. Répétez jusqu’à ce que vous soyez capable de maintenir votre main ouverte devant le chien sans qu’il tente de prendre la nourriture. Placez la friandise sur le sol. Si le chien tente de la manger, couvrez-la avec votre main. Dès que votre chien recule, cliquez et récompensez avec une autre friandise. Assurez-vous que le chien ne puisse pas prendre la friandise et soyez prêt à bouger rapidement. Cliquez et récompensez tout mouvement en arrière. Répétez jusqu\'à ce que le chien ne cherche plus à obtenir la friandise.',
                        signal: 'Dès que le chien vous regarde, prononcez les mots « Tu laisses ». Cliquez et récompensez. Après 50-100 répétitions, vous pouvez commencer à donner le signal « Tu laisses » alors que le chien regarde la friandise et attendre qu’il se détourne et vous regarde.',
                        duration: '',
                        position: 'Répétez les étapes précédentes tout en changeant votre position (debout devant le chien, debout parallèle au chien, assis sur une chaise, assis sur le sol, couché, etc.). Chaque fois que vous changez de position, soyez prêt à diminuer vos critères.',
                        distance: 'A ce stade, le chien devrait vous regarder de manière fiable lorsque vous dites « Tu laisses ». Augmentez progressivement votre distance par rapport à l\'objet ou la friandise au sol, jusqu\'à ce que vous puissiez obtenir une réaction alors que vous êtes à 1-2 mètres du chien et de l’objet ou la friandise au sol. Cliquez et récompensez.',
                        distraction: 'Augmentez très progressivement le niveau des distractions. Pensez à tout ce qui pourrait être source de distraction pour le chien, comme certains sons, certaines personnes, des chiens à distance, etc.',
                        generalization: 'Répétez les étapes dans différents lieux. Vous pouvez travailler dans une autre pièce puis passer à l\'extérieur, au centre commercial, dans les magasins, etc.',
                        mastery: 'Augmentez progressivement le niveau de difficulté jusqu\'à ce que vous puissiez demander au chien de ne « Tu laisses » différents stimulis dans différents endroits et avec différents niveaux de distractions. Utilisez la commande dans la vie quotidienne chaque fois que vous devez obtenir du chien qu’il ignore quelque chose qui l’attire.'
                    }
                },
                { 
                    name: 'Saut Desc',
                    report: {
                        shaping: 'Avec le chien en laisse, marchez vers une plateforme basse. Cliquez et récompensez tout mouvement vers la plateforme, comme un regard, un sniff, un touché de la patte, etc. Répétez jusqu\'à ce que le chien montre des comportements intentionnels vers la plateforme. Cliquez et récompensez tous pas en direction de la plateforme : une patte, deux pattes, quatre pattes, etc. À ce stade, cliquez vers la plateforme, puis récompensez loin de la plateforme. De cette façon, le chien sera plus à même d’offrir des comportements en direction de la plateforme. Dès que le chien met les 4 pattes sur la plateforme, cliquez et offrez un jackpot au chien en plaçant une poignée de friandises devant lui sur la plateforme. Répétez cette étape jusqu\'à ce que le chien saute automatiquement sur la plateforme lorsque vous l’approchez et en descende lorsque vous commencez à vous en éloigner. Réduisez peu à peu vos mouvements par rapport à la plateforme jusqu\'à ce que vous puissiez vous tenir immobile à côté de la plateforme pour donner les commandes. Vous pouvez aider le chien en jetant une friandise au sol pour le faire descendre de la plateforme.',
                        signal: 'Alors que le chien initie son mouvement sur la plateforme, prononcez le mot « Saute ». Cliquez et récompensez une fois que le chien est sur la plateforme. Après quelques secondes, donnez le signal « Descends » (guidez votre chien avec votre main ou faites un pas de recul au besoin). Cliquez et récompensez le chien un fois qu’il est sur le sol, assis devant vous.',
                        duration: 'Retarder progressivement le clic après que le chien soit en position, jusqu\'à ce que le chien maintienne la position jusqu\'à 6 secondes. Comme toujours, vous devrez progressivement augmenter la durée autour d’une moyenne en cliquant après 2 secondes, 4 secondes, 1 seconde, etc.',
                        position: 'Demandez au chien de « Sauter » et « Descendre » alors que vous êtes debout à des angles différents, assis sur une chaise ou même sur le sol.',
                        distance: 'Augmentez progressivement la distance en vous arrêtant à quelques pas de la plateforme. Le but ici sera d\'envoyer le chien à la plateforme à partir d’une distance jusqu\'à 1 mètre.',
                        distraction: 'Répétez les étapes ci-dessus en augmentant progressivement le niveau des distractions. Tapotez sur le mur, travaillez en présence d’une autre personne, d’un autre chien, etc.',
                        generalization: 'Répétez les étapes ci-dessus dans des endroits différents et dans des différentes positions. Essayez sur des différentes surfaces comme un canapé, l\'arrière d\'une voiture, une petite table, etc.',
                        mastery: 'Augmentez progressivement le niveau de difficulté jusqu\'à ce que vous puissiez demander à votre chien de répondre aux signaux « Saute » et « Descends » dans des endroits différents et avec différents niveaux de distraction. Utilisez ces signaux dans des situations de vie quotidienne quand vous avez besoin que votre chien saute ou descende d’une surface élevée.'
                    }
                },
                { 
                    name: 'Roule',
                    report: {
                        shaping: 'Avec une friandise dans la main, montrez-la au chien puis amène-la vers le sol. Dès que le chien se couche, donnez-lui la friandise. Prenez une autre friandise, tenez-la devant le nez du chien, puis déplacez-la vers son épaule. En la suivant, le chien devrait pivoter ses hanches sur le côté. Donnez la friandise au chien. Prenez une autre friandise, placez-la devant le nez du chien et guidez sa tête de façon à ce qu’elle repose à plat sur le sol. Avec certains chiens, vous pourrez les leurrer en position avec une seule friandise, alors que d’autres auront besoin de plus de récompenses. Vous devrez progressivement diminuer votre mouvement de la main jusqu\'à ce que vous l’éliminiez complètement. Répétez cette étape avec le chien en position sur les deux côtés.',
                        signal: 'Prononcez le mot « Roule » alors que le chien commence à se mettre en position. Cliquez et récompensez une fois que le chien est couché sur le côté. Répétez 50-100 fois.',
                        duration: 'Retarder progressivement le clic après que le chien maintienne la position jusqu\'à 6 secondes. Comme toujours, cliquez après 2 secondes, 4 secondes, 1 seconde, etc.',
                        position: 'Demandez au chien de « Rouler » alors que vous êtes debout à des angles différents, assis sur une chaise ou même sur le sol. Assurez-vous également que le chien puisse se mettre en position depuis un « Assis » ou « Debout » et sur les deux côtés.',
                        distance: '',
                        distraction: 'Répétez les étapes ci-dessus en augmentant progressivement le niveau des distractions. Tapotez sur le mur, travaillez avec une autre personne à proximité, un autre chien, etc. Lorsque vous mettez le chien en position, commencez à le toucher. Manipulez délicatement les différentes parties du corps. Prenez une patte dans votre main, reposez-la au sol et donnez au chien une friandise (vous n\'avez pas besoin d\'utiliser un clicker). Tenez la patte un peu plus longtemps, regardez entre les coussinets, etc. Regardez dans l\'oreille du chien, donnez au chien une friandise, brossez le chien, donnez une friandise, etc. Travaillez à cette étape jusqu\'à ce que vous puissiez couper les ongles du chien, nettoyer ses oreilles avec une boule de coton et le brosser dans cette position.',
                        generalization: 'Répétez les étapes ci-dessus dans des endroits différents et dans des positions différentes. Essayez sur des surfaces différentes telles qu\'une table ou une plateforme.',
                        mastery: 'Augmentez peu à peu le niveau de difficulté jusqu\'à ce que vous puissiez obtenir de votre chien qu’il réponde au signal « Roule » dans des différents endroits et à différents niveaux de distraction. Utilisez ce signal dans des situations de vie quotidienne chaque fois que vous avez besoin que le chien reste immobile pendant que vous le manipulez.'
                    }
                },
                { 
                    name: 'À droite',
                    report: {
                        shaping: '',
                        signal: 'Prononcez les mots « À droite » pendant que le chien pivote pour être en position à vos côtés. Vous devrez répéter cette étape 50-100 fois pour le chien puisse faire le lien entre les mots « À droite » et le comportement de pivotement des hanches en position.',
                        duration: '',
                        position: '',
                        distance: 'Commencez à prendre de plus grands pas loin du chien. L\'objectif est de pouvoir être face au chien, prononcer les mots « À droite » et que le chien se déplace à vos côtés en parfaite position sur votre droite.',
                        distraction: 'Augmenter progressivement le niveau de distractions. Dites « À droite » alors qu\'il y a un jouet, une balle ou même une friandise sur le sol. Dites « À droite » alors qu\'il y a d’autres personnes ou un autre chien dans la pièce. Levez un bras en l’air, etc... Travaillez très progressivement et soyez créatif avec cette étape.',
                        generalization: 'Répétez les étapes dans différents endroits. Vous pouvez le faire dans votre cuisine, votre salon ou votre jardin, par exemple.',
                        mastery: 'Augmentez peu à peu le niveau de difficulté jusqu\'à ce que vous puissiez obtenir de votre chien qu’il se place en position dans toutes sortes d\'endroits. Commencez à utiliser ce comportement dans le vie de tous les jours.'
                    }
                },
                { 
                    name: 'Recule',
                    report: {
                        shaping: 'Avec le chien face à vous, cliquez et récompensez tout mouvement des pattes arrière. Augmentez graduellement vos critères jusqu\'à ce que le chien fasse un pas en arrière, et puis jusqu\'à ce qu’il recule de 2-3 pas minimum.',
                        signal: 'Prononcez le mot « recule » dès que le chien commence à reculer. Vous devrez répéter cette étape 50-100 fois pour le chien fasse l’association entre le mot « Recule » et le comportement de faire quelques pas en arrière en ligne droite. Vous pouvez ajouter un signe de la main à ce comportement. Avec le dos de votre main vers le chien, les doigts vers le bas, bougez votre main d’avant en arrière (signe de renvoi). Assurez-vous d’utiliser indépendamment la commande et le signal, ou le chien ne prêtera pas attention au signal verbal et répondra principalement au mouvement de la main.',
                        duration: '',
                        position: '',
                        distance: 'Augmentez progressivement la distance reculée en retardant le clic jusqu\'à ce que le chien recule correctement de 3-6 pas.',
                        distraction: 'Augmentez progressivement le niveau des distractions lorsque vous utilisez ce signal. Pensez à tout ce qui pourrait être une distraction pour le chien, comme certains sons, certaines personnes, des chiens à distance, etc.',
                        generalization: 'Répétez les étapes ci-dessus dans différents endroits et dans différentes positions. Vous pourriez être assis sur une chaise ou dans un fauteuil roulant. Vous pouvez également demander au chien « Recule » alors qu\'il est assis (dans ce cas le chien devra se lever pour reculer). Quand le chien est couché, il peut reculer aussi. Ceci est particulièrement utile pour des chiens qui ont tendance à ramper sous une table et se retrouvent dans le chemin des passants.',
                        mastery: 'Augmentez peu à peu le niveau de difficulté jusqu\'à ce que vous puissiez obtenir de votre chien qu’il recule dans toutes sortes d\'endroits. Commencez à utiliser ce comportement dans la vie de tous les jours.'
                    }
                },
            ]
        },
        {
            label: 'Niveau 3',
            behaviors: [
                { 
                    name: 'Alerte',
                    report: {
                        shaping: '',
                        signal: '',
                        duration: '',
                        position: '',
                        distance: '',
                        distraction: '',
                        generalization: '',
                        mastery: ''
                    }
                },
                { 
                    name: 'Genoux',
                    report: {
                        shaping: '',
                        signal: '',
                        duration: '',
                        position: '',
                        distance: '',
                        distraction: '',
                        generalization: '',
                        mastery: ''
                    }
                },
                { 
                    name: 'Va chercher de l\'aide',
                    report: {
                        shaping: '',
                        signal: '',
                        duration: '',
                        position: '',
                        distance: '',
                        distraction: '',
                        generalization: '',
                        mastery: ''
                    }
                },
                { 
                    name: 'Apporte',
                    report: {
                        shaping: '',
                        signal: '',
                        duration: '',
                        position: '',
                        distance: '',
                        distraction: '',
                        generalization: '',
                        mastery: ''
                    }
                },
                { 
                    name: 'Bouton',
                    report: {
                        shaping: '',
                        signal: '',
                        duration: '',
                        position: '',
                        distance: '',
                        distraction: '',
                        generalization: '',
                        mastery: ''
                    }
                },
                { 
                    name: 'Ouvre la porte',
                    report: {
                        shaping: '',
                        signal: '',
                        duration: '',
                        position: '',
                        distance: '',
                        distraction: '',
                        generalization: '',
                        mastery: ''
                    }
                },
                { 
                    name: 'Habille-toi',
                    report: {
                        shaping: '',
                        signal: '',
                        duration: '',
                        position: '',
                        distance: '',
                        distraction: '',
                        generalization: '',
                        mastery: ''
                    }
                },
            ]
        }
    ])

    return {
        reportHelp
    }
})