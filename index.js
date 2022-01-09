const Discord = require("discord.js");
const Client = new Discord.Client({
    intents: [
        Discord.Intents.FLAGS.GUILDS,
        Discord.Intents.FLAGS.GUILD_MESSAGES,
    ]
});

const prefix = "!";

Client.on("ready", () => {
    console.log("bot opérationnel");
});

Client.login("OTI4OTk1OTY5ODY4MTM2NTA4.Ydg46w.HDwFDya2YKB_iJAIfoNekDCalgE");

Client.on("messageCreate", message => {
    if (message.author.bot) return;

    //Sauvetage

    //1
    if(message.content === prefix + "alpagaga"){
        message.channel.send("alpagaga à sauver https://garyatrics.com/gow_assets/Pets/Cards_Pet_046_small.png");
    }
    
    //2
    if(message.content === prefix + "araignette"){
        message.channel.send("araignette à sauver https://garyatrics.com/gow_assets/Pets/Cards_Pet_029_small.png");
    }

    //3
    if(message.content === prefix + "arbuste de fête"){
        message.channel.send("Arbuste De Fête à sauver https://garyatrics.com/gow_assets/Pets/Cards_Pet_124_small.png");
    }

    //4
    if(message.content === prefix + "attrape-queue"){
        message.channel.send("Attrape-Queue à sauver https://garyatrics.com/gow_assets/Pets/Cards_Pet_139_small.png");
    }

    //5
    if(message.content === prefix + "<3"){
        message.channel.send("<3 à sauver https://garyatrics.com/gow_assets/Pets/Cards_Pet_134_small.png");
    }

    //6
    if(message.content === prefix + "aubelet"){
        message.channel.send("Aubelet à sauver https://garyatrics.com/gow_assets/Pets/Cards_Pet_028_small.png");
    }

    //7
    if(message.content === prefix + "auraio"){
        message.channel.send("Auraio à sauver https://garyatrics.com/gow_assets/Pets/Cards_Pet_001_small.png");
    }

    //8
    if(message.content === prefix + "ballerinette"){
        message.channel.send("Ballerinette à sauver https://garyatrics.com/gow_assets/Pets/Cards_Pet_060_small.png");
    }

    //9
    if(message.content === prefix + "bardouaf"){
        message.channel.send("Bardouaf à sauver https://garyatrics.com/gow_assets/Pets/Cards_Pet_164_small.png");
    }

    //10
    if(message.content === prefix + "bave-boule"){
        message.channel.send("Bave-Boule à sauver https://garyatrics.com/gow_assets/Pets/Cards_Pet_032_small.png");
    }

    //11
    if(message.content === prefix + "bébé barbe"){
        message.channel.send("Bébé Barbe à sauver https://garyatrics.com/gow_assets/Pets/Cards_Pet_082_small.png");
    }

    //12
    if(message.content === prefix + "bébête-noire"){
        message.channel.send("Bébête-Noire à sauver https://garyatrics.com/gow_assets/Pets/Cards_Pet_016_small.png");
    }

    //13
    if(message.content === prefix + "belz"){
        message.channel.send("Belz à sauver https://garyatrics.com/gow_assets/Pets/Cards_Pet_105_small.png");
    }

    //14
    if(message.content === prefix + "bichette"){
        message.channel.send("Bichette à sauver https://garyatrics.com/gow_assets/Pets/Cards_Pet_093_small.png");
    }

    //15
    if(message.content === prefix + "bleu-bec"){
        message.channel.send("Bleu-Bec à sauver https://garyatrics.com/gow_assets/Pets/Cards_Pet_013_small.png");
    }

    //16
    if(message.content === prefix + "boeuf porte-bonheur"){
        message.channel.send("Boeuf Porte-Bonheur à sauver https://garyatrics.com/gow_assets/Pets/Cards_Pet_155_small.png");
    }

    //17
    if(message.content === prefix + "boris karlouafouaf"){
        message.channel.send("Boris Karlouafouaf à sauver https://garyatrics.com/gow_assets/Pets/Cards_Pet_169_small.png");
    }

    //18
    if(message.content === prefix + "bouboulneige"){
        message.channel.send("Bouboulneige à sauver https://garyatrics.com/gow_assets/Pets/Cards_Pet_094_small.png");
    }

    //19
    if(message.content === prefix + "boueux"){
        message.channel.send("Boueux à sauver https://garyatrics.com/gow_assets/Pets/Cards_Pet_048_small.png");
    }

    //20
    if(message.content === prefix + "branchelet"){
        message.channel.send("Branchelet à sauver https://garyatrics.com/gow_assets/Pets/Cards_Pet_023_small.png");
    }

    //21
    if(message.content === prefix + "cactucador"){
        message.channel.send("Cactucador à sauver https://garyatrics.com/gow_assets/Pets/Cards_Pet_039_small.png");
    }

    //22
    if(message.content === prefix + "cadeau"){
        message.channel.send("Cadeau Carnassier à sauver https://garyatrics.com/gow_assets/Pets/Cards_Pet_171_small.png");
    }

    //23
    if(message.content === prefix + "cerbérou"){
        message.channel.send("Cerbérou à sauver https://garyatrics.com/gow_assets/Pets/Cards_Pet_014_small.png");
    }

    //24
    if(message.content === prefix + "champichou"){
        message.channel.send("Champichou à sauver https://garyatrics.com/gow_assets/Pets/Cards_Pet_004_small.png");
    }

    //25
    if(message.content === prefix + "chanceux"){
        message.channel.send("Chanceux à sauver https://garyatrics.com/gow_assets/Pets/Cards_Pet_033_small.png");
    }

    //26
    if(message.content === prefix + "chat ninja"){
        message.channel.send("Chat Ninja à sauver https://garyatrics.com/gow_assets/Pets/Cards_Pet_101_small.png");
    }

    //27
    if(message.content === prefix + "chaton de guerre"){
        message.channel.send("Chaton de Guerre à sauver https://garyatrics.com/gow_assets/Pets/Cards_Pet_163_small.png");
    }

    //28
    if(message.content === prefix + "chaton infernal"){
        message.channel.send("Chaton Infernal à sauver https://garyatrics.com/gow_assets/Pets/Cards_Pet_161_small.png");
    }

     //29
     if(message.content === prefix + "chaton kobold"){
        message.channel.send("Chaton Kobold à sauver https://garyatrics.com/gow_assets/Pets/Cards_Pet_117_small.png");
    }

    //30
    if(message.content === prefix + "chaton sith"){
        message.channel.send("Chaton Sith à sauver https://garyatrics.com/gow_assets/Pets/Cards_Pet_084_small.png");
    }

    //31
    if(message.content === prefix + "chaton-dragon"){
        message.channel.send("Chaton-Dragon à sauver https://garyatrics.com/gow_assets/Pets/Cards_Pet_098_small.png");
    }

    //32
    if(message.content === prefix + "chauve-chat"){
        message.channel.send("Chauve-Chat à sauver https://garyatrics.com/gow_assets/Pets/Cards_Pet_129_small.png");
    }

    //33
    if(message.content === prefix + "chauve-souriant"){
        message.channel.send("Chauve-Souriant à sauver https://garyatrics.com/gow_assets/Pets/Cards_Pet_012_small.png");
    }

    //34
    if(message.content === prefix + "chevrotou"){
        message.channel.send("Chevrotou à sauver https://garyatrics.com/gow_assets/Pets/Cards_Pet_007_small.png");
    }

    //35
    if(message.content === prefix + "chiméra"){
        message.channel.send("Chiméra à sauver https://garyatrics.com/gow_assets/Pets/Cards_Pet_011_small.png");
    }

    //36
    if(message.content === prefix + "chiot pirate"){
        message.channel.send("Chiot Pirate à sauver https://garyatrics.com/gow_assets/Pets/Cards_Pet_128_small.png");
    }

    //37
    if(message.content === prefix + "chiot-chaud"){
        message.channel.send("Chiot-Chaud à sauver https://garyatrics.com/gow_assets/Pets/Cards_Pet_024_small.png");
    }

    //38
    if(message.content === prefix + "Chouette mouillée"){
        message.channel.send("Chouette Mouillée à sauver https://garyatrics.com/gow_assets/Pets/Cards_Pet_175_small.png");
    }

    //39
    if(message.content === prefix + "clochette"){
        message.channel.send("Clochette à sauver https://garyatrics.com/gow_assets/Pets/Cards_Pet_162_small.png");
    }

    //40
    if(message.content === prefix + "clodibis"){
        message.channel.send("Clodibis à sauver https://garyatrics.com/gow_assets/Pets/Cards_Pet_111_small.png");
    }

    //41
    if(message.content === prefix + "compagnobot"){
        message.channel.send("Compagnobot à sauver https://garyatrics.com/gow_assets/Pets/Cards_Pet_145_small.png");
    }

    //42
    if(message.content === prefix + "cookie compact"){
        message.channel.send("Cookie Compact à sauver https://garyatrics.com/gow_assets/Pets/Cards_Pet_148_small.png");
    }

    //43
    if(message.content === prefix + "corgi de guerre"){
        message.channel.send("Corgi De Guerre à sauver https://garyatrics.com/gow_assets/Pets/Cards_Pet_043_small.png");
    }

    //44
    if(message.content === prefix + "crabounet"){
        message.channel.send("Crabounet à sauver https://garyatrics.com/gow_assets/Pets/Cards_Pet_000_small.png");
    }

    //45
    if(message.content === prefix + "crâneuse"){
        message.channel.send("Crâneuse à sauver https://garyatrics.com/gow_assets/Pets/Cards_Pet_168_small.png");
    }

    //46
    if(message.content === prefix + "croqu' bulbe"){
        message.channel.send("Croqu' Bulbe à sauver https://garyatrics.com/gow_assets/Pets/Cards_Pet_104_small.png");
    }

    //47
    if(message.content === prefix + "croqueur de lapins"){
        message.channel.send("Croqueur De Lapins à sauver https://garyatrics.com/gow_assets/Pets/Cards_Pet_158_small.png");
    }

    //48
    if(message.content === prefix + "démoneige"){
        message.channel.send("Démoneige à sauver https://garyatrics.com/gow_assets/Pets/Cards_Pet_126_small.png");
    }

    //49
    if(message.content === prefix + "diablotin"){
        message.channel.send("Diablotin à sauver https://garyatrics.com/gow_assets/Pets/Cards_Pet_062_small.png");
    }

    //50
    if(message.content === prefix + "dinotaure"){
        message.channel.send("Dinotaure à sauver https://garyatrics.com/gow_assets/Pets/Cards_Pet_152_small.png");
    }

     //51
     if(message.content === prefix + "dragamin"){
        message.channel.send("Dragamin à sauver https://garyatrics.com/gow_assets/Pets/Cards_Pet_120_small.png");
    }

    //52
    if(message.content === prefix + "dragochaton vénéré"){
        message.channel.send("Dragochaton Vénéré à sauver https://garyatrics.com/gow_assets/Pets/Cards_Pet_118_small.png");
    }

    //53
    if(message.content === prefix + "dragolito"){
        message.channel.send("Dragolito à sauver https://garyatrics.com/gow_assets/Pets/Cards_Pet_058_small.png");
    }

    //54
    if(message.content === prefix + "dragounet"){
        message.channel.send("Dragounet à sauver https://garyatrics.com/gow_assets/Pets/Cards_Pet_008_small.png");
    }

    //55
    if(message.content === prefix + "droidobot"){
        message.channel.send("Droidobot à sauver https://garyatrics.com/gow_assets/Pets/Cards_Pet_115_small.png");
    }
	
	 //56
    if(message.content === prefix + "éclair maléfique"){
        message.channel.send("Eclair Maléfique à sauver https://garyatrics.com/gow_assets/Pets/Cards_Pet_170_small.png");
    }

     //57
     if(message.content === prefix + "écusouris"){
        message.channel.send("Ecusouris à sauver https://garyatrics.com/gow_assets/Pets/Cards_Pet_108_small.png");
    }

    //58
    if(message.content === prefix + "elliot"){
        message.channel.send("Elliot à sauver https://garyatrics.com/gow_assets/Pets/Cards_Pet_166_small.png");
    }

    //59
    if(message.content === prefix + "enfée"){
        message.channel.send("Enfée à sauver https://garyatrics.com/gow_assets/Pets/Cards_Pet_059_small.png");
    }

    //60
    if(message.content === prefix + "étagère meurtrière"){
        message.channel.send("Etagère Meurtrière à sauver https://garyatrics.com/gow_assets/Pets/Cards_Pet_151_small.png");
    }

    //61
    if(message.content === prefix + "étoilée"){
        message.channel.send("Etoilée à sauver https://garyatrics.com/gow_assets/Pets/Cards_Pet_167_small.png");
    }

    //62
    if(message.content === prefix + "falabelle"){
        message.channel.send("Falabelle à sauver https://garyatrics.com/gow_assets/Pets/Cards_Pet_075_small.png");
    }

    //63
    if(message.content === prefix + "fauxcerf"){
        message.channel.send("Fauxcerf à sauver https://garyatrics.com/gow_assets/Pets/Cards_Pet_159_small.png");
    }

    //64
    if(message.content === prefix + "feuillade"){
        message.channel.send("Feuillade à sauver https://garyatrics.com/gow_assets/Pets/Cards_Pet_071_small.png");
    }

    //65
    if(message.content === prefix + "fils de tau"){
        message.channel.send("Fils De Tau à sauver https://garyatrics.com/gow_assets/Pets/Cards_Pet_070_small.png");
    }

    //66
    if(message.content === prefix + "gargouillis"){
        message.channel.send("Gargouillis à sauver https://garyatrics.com/gow_assets/Pets/Cards_Pet_091_small.png");
    }

    //67
    if(message.content === prefix + "géant-de-poche"){
        message.channel.send("Géant-De-Poche à sauver https://garyatrics.com/gow_assets/Pets/Cards_Pet_086_small.png");
    }

    //68
    if(message.content === prefix + "gelétine"){
        message.channel.send("Gelétine à sauver https://garyatrics.com/gow_assets/Pets/Cards_Pet_021_small.png");
    }

    //69
    if(message.content === prefix + "goblinou"){
        message.channel.send("Goblinou à sauver https://garyatrics.com/gow_assets/Pets/Cards_Pet_090_small.png");
    }

    //70
    if(message.content === prefix + "griffonou"){
        message.channel.send("Griffonou à sauver https://garyatrics.com/gow_assets/Pets/Cards_Pet_003_small.png");
    }

    //71
    if(message.content === prefix + "hamsterthalamus"){
        message.channel.send("Hamsterthalamus à sauver https://garyatrics.com/gow_assets/Pets/Cards_Pet_141_small.png");
    }

    //72
    if(message.content === prefix + "helmut sombre"){
        message.channel.send("Helmut Sombre à sauver https://garyatrics.com/gow_assets/Pets/Cards_Pet_137_small.png");
    }

    //73
    if(message.content === prefix + "hurleur"){
        message.channel.send("Hurleur à sauver https://garyatrics.com/gow_assets/Pets/Cards_Pet_147_small.png");
    }

    //74
    if(message.content === prefix + "jack pasrackham"){
        message.channel.send("Jack Pasrackham à sauver https://garyatrics.com/gow_assets/Pets/Cards_Pet_144_small.png");
    }

    //75
    if(message.content === prefix + "kurandarito"){
        message.channel.send("Kurandarito à sauver https://garyatrics.com/gow_assets/Pets/Cards_Pet_143_small.png");
    }

    //76
    if(message.content === prefix + "lampiotte"){
        message.channel.send("Lampiotte à sauver https://garyatrics.com/gow_assets/Pets/Cards_Pet_156_small.png");
    }

    //77
    if(message.content === prefix + "laphibou"){
        message.channel.send("Laphibou à sauver https://garyatrics.com/gow_assets/Pets/Cards_Pet_047_small.png");
    }

    //78
    if(message.content === prefix + "lapilope"){
        message.channel.send("Lapilope à sauver https://garyatrics.com/gow_assets/Pets/Cards_Pet_135_small.png");
    }

    //79
    if(message.content === prefix + "lapin des neiges"){
        message.channel.send("Lapin Des Neiges à sauver https://garyatrics.com/gow_assets/Pets/Cards_Pet_051_small.png");
    }

    //80
    if(message.content === prefix + "lapinette"){
        message.channel.send("Lapinette à sauver https://garyatrics.com/gow_assets/Pets/Cards_Pet_087_small.png");
    }

    //81
    if(message.content === prefix + "légérement critique"){
        message.channel.send("Légérement Critique à sauver https://garyatrics.com/gow_assets/Pets/Cards_Pet_160_small.png");
    }
});

client.login(process.env.TOKEN);