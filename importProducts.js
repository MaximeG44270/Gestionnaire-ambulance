"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var app_1 = require("firebase/app");
var firestore_1 = require("firebase/firestore");
var firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,
    measurementId: process.env.REACT_APP_MEASUREMENT_ID
};
var app = (0, app_1.initializeApp)(firebaseConfig);
var db = (0, firestore_1.getFirestore)(app);
// Données à importer ici dans l'ordre du dessus
var data = [
    {
        name: "Masque FFP2",
        quantity: "50",
        expirationDate: "01/06/25",
        label: "Oxygène",
        description: "Masque de protection respiratoire de haute qualité.",
        reference: "FFP2-001",
        manufacturer: "ProtecMed"
    },
    {
        name: "Gel hydroalcoolique",
        quantity: "120",
        expirationDate: "12/12/24",
        label: "K.AES",
        description: "Gel désinfectant pour les mains à base d'alcool.",
        reference: "GHA-001",
        manufacturer: "CleanHands"
    },
    {
        name: "Gants latex",
        quantity: "200",
        expirationDate: "01/03/25",
        label: "K.COVID",
        description: "Gants en latex pour usage médical.",
        reference: "GL-001",
        manufacturer: "MedGloves"
    },
    {
        name: "Stéthoscope",
        quantity: "15",
        expirationDate: "N/A",
        label: "Soins et pansements",
        description: "Instrument médical pour ausculter les sons corporels.",
        reference: "ST-001",
        manufacturer: "MedInstruments"
    },
    {
        name: "Thermomètre",
        quantity: "30",
        expirationDate: "02/07/25",
        label: "K.Accouchement",
        description: "Thermomètre médical pour mesurer la température corporelle.",
        reference: "TH-001",
        manufacturer: "TempCheck"
    },
    {
        name: "Bande de gaze",
        quantity: "150",
        expirationDate: "09/09/25",
        label: "K.Hémoragie",
        description: "Bande de gaze stérile pour pansements.",
        reference: "BG-001",
        manufacturer: "WoundCare"
    },
    {
        name: "Oxygène médical",
        quantity: "20",
        expirationDate: "N/A",
        label: "K.Membre",
        description: "Oxygène médical pour usage thérapeutique.",
        reference: "O2-001",
        manufacturer: "OxyCare"
    },
    {
        name: "Bandage élastique",
        quantity: "80",
        expirationDate: "10/11/25",
        label: "K.Brûlure",
        description: "Bandage élastique pour soutien et compression.",
        reference: "BE-001",
        manufacturer: "ElasticBand"
    },
    {
        name: "Bouteille désinfectante",
        quantity: "100",
        expirationDate: "05/12/25",
        label: "Oxygène",
        description: "Bouteille de solution désinfectante.",
        reference: "BD-001",
        manufacturer: "CleanSol"
    },
    {
        name: "Seringue",
        quantity: "500",
        expirationDate: "04/08/25",
        label: "K.AES",
        description: "Seringue stérile pour injections.",
        reference: "SR-001",
        manufacturer: "InjectMed"
    },
    {
        name: "Comprimés de Paracétamol",
        quantity: "1000",
        expirationDate: "05/01/26",
        label: "K.COVID",
        description: "Comprimés de paracétamol pour soulager la douleur et la fièvre.",
        reference: "CP-001",
        manufacturer: "PainRelief"
    },
    {
        name: "Antibiotique",
        quantity: "250",
        expirationDate: "11/11/25",
        label: "Soins et pansements",
        description: "Antibiotique pour traiter les infections bactériennes.",
        reference: "AB-001",
        manufacturer: "BactFight"
    },
    {
        name: "Masque chirurgical",
        quantity: "200",
        expirationDate: "15/04/25",
        label: "K.Accouchement",
        description: "Masque chirurgical pour usage médical.",
        reference: "MC-001",
        manufacturer: "SurgMask"
    },
    {
        name: "Pansement adhésif",
        quantity: "350",
        expirationDate: "06/06/25",
        label: "K.Hémoragie",
        description: "Pansement adhésif pour couvrir les plaies.",
        reference: "PA-001",
        manufacturer: "AdhesiveCare"
    },
    {
        name: "Gants de chirurgie",
        quantity: "70",
        expirationDate: "15/10/25",
        label: "K.Membre",
        description: "Gants stériles pour chirurgie.",
        reference: "GC-001",
        manufacturer: "SurgGloves"
    },
    {
        name: "Antiseptique",
        quantity: "180",
        expirationDate: "11/09/25",
        label: "K.Brûlure",
        description: "Solution antiseptique pour désinfecter les plaies.",
        reference: "AS-001",
        manufacturer: "CleanWound"
    },
    {
        name: "Seringues 10 ml",
        quantity: "400",
        expirationDate: "07/03/25",
        label: "Oxygène",
        description: "Seringues de 10 ml pour injections.",
        reference: "SR10-001",
        manufacturer: "InjectMed"
    },
    {
        name: "Masque de protection",
        quantity: "120",
        expirationDate: "01/05/25",
        label: "K.AES",
        description: "Masque de protection pour usage médical.",
        reference: "MP-001",
        manufacturer: "ProtecMed"
    },
    {
        name: "Gants non stériles",
        quantity: "250",
        expirationDate: "01/09/25",
        label: "K.COVID",
        description: "Gants non stériles pour examens médicaux.",
        reference: "GNS-001",
        manufacturer: "MedGloves"
    },
    {
        name: "Stérilisateur",
        quantity: "5",
        expirationDate: "N/A",
        label: "Soins et pansements",
        description: "Appareil de stérilisation pour instruments médicaux.",
        reference: "STE-001",
        manufacturer: "SterilMed"
    },
    {
        name: "Thermomètre sans contact",
        quantity: "40",
        expirationDate: "01/02/25",
        label: "K.Accouchement",
        description: "Thermomètre infrarouge sans contact.",
        reference: "TSC-001",
        manufacturer: "TempCheck"
    },
    {
        name: "Pansement hydrocolloïde",
        quantity: "60",
        expirationDate: "15/06/25",
        label: "K.Hémoragie",
        description: "Pansement hydrocolloïde pour plaies.",
        reference: "PH-001",
        manufacturer: "WoundCare"
    },
    {
        name: "Gants chirurgicaux",
        quantity: "100",
        expirationDate: "25/10/25",
        label: "K.Membre",
        description: "Gants chirurgicaux stériles.",
        reference: "GCH-001",
        manufacturer: "SurgGloves"
    },
    {
        name: "Bandages compressifs",
        quantity: "90",
        expirationDate: "13/08/25",
        label: "K.Brûlure",
        description: "Bandages compressifs pour soutien.",
        reference: "BC-001",
        manufacturer: "CompressCare"
    },
    {
        name: "Savon antiseptique",
        quantity: "200",
        expirationDate: "12/05/25",
        label: "Oxygène",
        description: "Savon antiseptique pour hygiène des mains.",
        reference: "SA-001",
        manufacturer: "CleanHands"
    },
    {
        name: "Bouteille de gel désinfectant",
        quantity: "75",
        expirationDate: "01/04/25",
        label: "K.AES",
        description: "Bouteille de gel désinfectant pour les mains.",
        reference: "BGD-001",
        manufacturer: "CleanHands"
    },
    {
        name: "Flacon de solution saline",
        quantity: "50",
        expirationDate: "03/12/25",
        label: "K.COVID",
        description: "Flacon de solution saline pour nettoyage des plaies.",
        reference: "FSS-001",
        manufacturer: "SalineSol"
    },
    {
        name: "Sutures",
        quantity: "250",
        expirationDate: "25/07/25",
        label: "Soins et pansements",
        description: "Fils de suture pour chirurgie.",
        reference: "SU-001",
        manufacturer: "SurgSuture"
    },
    {
        name: "Bande cohésive",
        quantity: "150",
        expirationDate: "30/11/25",
        label: "K.Accouchement",
        description: "Bande cohésive pour soutien et compression.",
        reference: "BCO-001",
        manufacturer: "CohesiveBand"
    },
    {
        name: "Compresses stériles",
        quantity: "500",
        expirationDate: "20/05/25",
        label: "K.Hémoragie",
        description: "Compresses stériles pour pansements.",
        reference: "CS-001",
        manufacturer: "WoundCare"
    },
    {
        name: "Thermomètre médical",
        quantity: "35",
        expirationDate: "08/01/25",
        label: "K.Membre",
        description: "Thermomètre médical pour mesurer la température corporelle.",
        reference: "TM-001",
        manufacturer: "TempCheck"
    },
    {
        name: "Aiguilles à injecter",
        quantity: "800",
        expirationDate: "15/03/25",
        label: "K.Brûlure",
        description: "Aiguilles stériles pour injections.",
        reference: "AI-001",
        manufacturer: "InjectMed"
    },
    {
        name: "Spirales contraceptives",
        quantity: "50",
        expirationDate: "02/10/25",
        label: "Oxygène",
        description: "Spirales contraceptives pour contrôle des naissances.",
        reference: "SC-001",
        manufacturer: "ContraceptCare"
    },
    {
        name: "Lames de scalpel",
        quantity: "100",
        expirationDate: "06/06/25",
        label: "K.AES",
        description: "Lames de scalpel stériles pour chirurgie.",
        reference: "LS-001",
        manufacturer: "SurgScalpel"
    },
    {
        name: "Aérosol médical",
        quantity: "30",
        expirationDate: "12/08/25",
        label: "K.COVID",
        description: "Aérosol médical pour traitement respiratoire.",
        reference: "AM-001",
        manufacturer: "AeroMed"
    },
    {
        name: "Antibiotiques en crème",
        quantity: "150",
        expirationDate: "19/05/25",
        label: "Soins et pansements",
        description: "Crème antibiotique pour traiter les infections cutanées.",
        reference: "AC-001",
        manufacturer: "BactFight"
    },
    {
        name: "Savon antiseptique liquide",
        quantity: "300",
        expirationDate: "18/09/25",
        label: "K.Accouchement",
        description: "Savon antiseptique liquide pour hygiène des mains.",
        reference: "SAL-001",
        manufacturer: "CleanHands"
    },
    {
        name: "Pansement pour brûlures",
        quantity: "80",
        expirationDate: "14/07/25",
        label: "K.Hémoragie",
        description: "Pansement spécial pour brûlures.",
        reference: "PB-001",
        manufacturer: "BurnCare"
    },
    {
        name: "Kits de premiers secours",
        quantity: "20",
        expirationDate: "N/A",
        label: "K.Membre",
        description: "Kit complet de premiers secours.",
        reference: "KPS-001",
        manufacturer: "FirstAidKit"
    },
    {
        name: "Gants en nitrile",
        quantity: "400",
        expirationDate: "22/02/25",
        label: "K.Brûlure",
        description: "Gants en nitrile pour usage médical.",
        reference: "GN-001",
        manufacturer: "MedGloves"
    },
    {
        name: "Compresses gazeuses",
        quantity: "200",
        expirationDate: "25/09/25",
        label: "Oxygène",
        description: "Compresses gazeuses stériles pour pansements.",
        reference: "CG-001",
        manufacturer: "WoundCare"
    },
    {
        name: "Lentilles de contact",
        quantity: "100",
        expirationDate: "03/01/26",
        label: "K.AES",
        description: "Lentilles de contact pour correction visuelle.",
        reference: "LC-001",
        manufacturer: "VisionCare"
    },
    {
        name: "Spray antiseptique",
        quantity: "50",
        expirationDate: "05/06/25",
        label: "K.COVID",
        description: "Spray antiseptique pour désinfecter les surfaces.",
        reference: "SPA-001",
        manufacturer: "CleanSol"
    },
    {
        name: "Kit d'hygiène buccale",
        quantity: "80",
        expirationDate: "11/12/25",
        label: "Soins et pansements",
        description: "Kit complet pour l'hygiène buccale.",
        reference: "KHB-001",
        manufacturer: "OralCare"
    },
    {
        name: "Pansement pour ampoules",
        quantity: "120",
        expirationDate: "09/01/25",
        label: "K.Accouchement",
        description: "Pansement spécial pour ampoules.",
        reference: "PAMP-001",
        manufacturer: "BlisterCare"
    },
    {
        name: "Lubrifiant médical",
        quantity: "60",
        expirationDate: "21/10/25",
        label: "K.Hémoragie",
        description: "Lubrifiant médical pour usage externe.",
        reference: "LM-001",
        manufacturer: "MedLube"
    },
    {
        name: "Pansement pour coupures",
        quantity: "150",
        expirationDate: "04/02/25",
        label: "K.Membre",
        description: "Pansement pour petites coupures.",
        reference: "PC-001",
        manufacturer: "CutCare"
    },
    {
        name: "Bande de compression",
        quantity: "100",
        expirationDate: "18/07/25",
        label: "K.Brûlure",
        description: "Bande de compression pour soutien.",
        reference: "BCMP-001",
        manufacturer: "CompressCare"
    },
    {
        name: "Ciseaux médicaux",
        quantity: "30",
        expirationDate: "N/A",
        label: "Oxygène",
        description: "Ciseaux stériles pour usage médical.",
        reference: "CM-001",
        manufacturer: "MedInstruments"
    },
    {
        name: "Thermomètre infrarouge",
        quantity: "45",
        expirationDate: "15/05/25",
        label: "K.AES",
        description: "Thermomètre infrarouge pour mesurer la température corporelle.",
        reference: "TI-001",
        manufacturer: "TempCheck"
    },
    {
        name: "Aiguilles de suture",
        quantity: "300",
        expirationDate: "02/04/25",
        label: "K.COVID",
        description: "Aiguilles stériles pour sutures.",
        reference: "ASU-001",
        manufacturer: "SurgSuture"
    },
    {
        name: "Patchs de froid",
        quantity: "200",
        expirationDate: "27/11/25",
        label: "Soins et pansements",
        description: "Patchs de froid pour soulager la douleur.",
        reference: "PF-001",
        manufacturer: "ColdPatch"
    },
    {
        name: "Tensio-mètre",
        quantity: "60",
        expirationDate: "09/08/25",
        label: "K.Accouchement",
        description: "Appareil pour mesurer la pression artérielle.",
        reference: "TM-002",
        manufacturer: "BloodPressure"
    },
    {
        name: "Masque chirurgical jetable",
        quantity: "350",
        expirationDate: "28/05/25",
        label: "K.Hémoragie",
        description: "Masque chirurgical jetable pour usage unique.",
        reference: "MCJ-001",
        manufacturer: "SurgMask"
    },
    {
        name: "Système d'aspiration",
        quantity: "5",
        expirationDate: "N/A",
        label: "K.Membre",
        description: "Système d'aspiration pour usage médical.",
        reference: "SA-002",
        manufacturer: "MedAspiration"
    },
    {
        name: "Pansements pour plaies",
        quantity: "500",
        expirationDate: "03/12/25",
        label: "K.Brûlure",
        description: "Pansements stériles pour plaies.",
        reference: "PP-001",
        manufacturer: "WoundCare"
    },
    {
        name: "Aérosol pour inhalation",
        quantity: "80",
        expirationDate: "17/09/25",
        label: "Oxygène",
        description: "Aérosol pour inhalation thérapeutique.",
        reference: "AI-002",
        manufacturer: "AeroMed"
    },
    {
        name: "Bande de fixation",
        quantity: "250",
        expirationDate: "06/03/25",
        label: "K.AES",
        description: "Bande de fixation pour pansements.",
        reference: "BF-001",
        manufacturer: "AdhesiveCare"
    },
    {
        name: "Pince chirurgicale",
        quantity: "100",
        expirationDate: "15/10/25",
        label: "K.COVID",
        description: "Pince chirurgicale stérile.",
        reference: "PC-002",
        manufacturer: "SurgInstruments"
    },
    {
        name: "Stérilisateurs à vapeur",
        quantity: "10",
        expirationDate: "N/A",
        label: "Soins et pansements",
        description: "Stérilisateur à vapeur pour instruments médicaux.",
        reference: "SV-001",
        manufacturer: "SterilMed"
    },
    {
        name: "Détergent médical",
        quantity: "150",
        expirationDate: "30/06/25",
        label: "K.Accouchement",
        description: "Détergent pour nettoyage médical.",
        reference: "DM-001",
        manufacturer: "MedClean"
    },
    {
        name: "Kit d'urgence",
        quantity: "20",
        expirationDate: "N/A",
        label: "K.Hémoragie",
        description: "Kit d'urgence complet pour premiers secours.",
        reference: "KU-001",
        manufacturer: "EmergencyKit"
    },
    {
        name: "Plastiques pour plaies",
        quantity: "180",
        expirationDate: "23/07/25",
        label: "K.Membre",
        description: "Plastiques stériles pour couvrir les plaies.",
        reference: "PPP-001",
        manufacturer: "WoundCare"
    },
    {
        name: "Trousse de premiers secours",
        quantity: "50",
        expirationDate: "N/A",
        label: "K.Brûlure",
        description: "Trousse complète de premiers secours.",
        reference: "TPS-001",
        manufacturer: "FirstAidKit"
    },
    {
        name: "Gel anesthésiant",
        quantity: "60",
        expirationDate: "05/02/25",
        label: "Oxygène",
        description: "Gel anesthésiant pour usage externe.",
        reference: "GA-001",
        manufacturer: "PainRelief"
    },
    {
        name: "Lampe de poche médicale",
        quantity: "70",
        expirationDate: "N/A",
        label: "K.AES",
        description: "Lampe de poche pour examens médicaux.",
        reference: "LPM-001",
        manufacturer: "MedLight"
    },
    {
        name: "Tablettes de magnésium",
        quantity: "1000",
        expirationDate: "12/11/25",
        label: "K.COVID",
        description: "Tablettes de magnésium pour supplémentation.",
        reference: "TMG-001",
        manufacturer: "MagnesiumPlus"
    },
    {
        name: "Pommade antibactérienne",
        quantity: "150",
        expirationDate: "30/04/25",
        label: "Soins et pansements",
        description: "Pommade antibactérienne pour traiter les infections cutanées.",
        reference: "PAB-001",
        manufacturer: "BactFight"
    },
    {
        name: "Bande de fixation élastique",
        quantity: "200",
        expirationDate: "02/08/25",
        label: "K.Accouchement",
        description: "Bande de fixation élastique pour soutien.",
        reference: "BFE-001",
        manufacturer: "ElasticBand"
    },
    {
        name: "Cicatrisation rapide",
        quantity: "120",
        expirationDate: "20/09/25",
        label: "K.Hémoragie",
        description: "Produit pour cicatrisation rapide des plaies.",
        reference: "CR-001",
        manufacturer: "WoundCare"
    },
    {
        name: "Lance à perfusion",
        quantity: "50",
        expirationDate: "N/A",
        label: "K.Membre",
        description: "Lance à perfusion pour administration de liquides.",
        reference: "LP-001",
        manufacturer: "PerfusionMed"
    },
    {
        name: "Bande cohésive absorbante",
        quantity: "150",
        expirationDate: "01/03/25",
        label: "K.Brûlure",
        description: "Bande cohésive absorbante pour pansements.",
        reference: "BCA-001",
        manufacturer: "CohesiveBand"
    },
    {
        name: "Tampons hémostatiques",
        quantity: "100",
        expirationDate: "15/06/25",
        label: "Oxygène",
        description: "Tampons hémostatiques pour arrêter les saignements.",
        reference: "TH-001",
        manufacturer: "HemoStop"
    },
    {
        name: "Solution de lavage oculaire",
        quantity: "80",
        expirationDate: "23/05/25",
        label: "K.AES",
        description: "Solution pour lavage oculaire.",
        reference: "SLO-001",
        manufacturer: "EyeCare"
    },
    {
        name: "Gants de protection",
        quantity: "400",
        expirationDate: "12/07/25",
        label: "K.COVID",
        description: "Gants de protection pour usage médical.",
        reference: "GP-001",
        manufacturer: "MedGloves"
    },
    {
        name: "Plâtre médical",
        quantity: "100",
        expirationDate: "14/04/25",
        label: "Soins et pansements",
        description: "Plâtre médical pour immobilisation.",
        reference: "PM-001",
        manufacturer: "CastCare"
    },
    {
        name: "Pansement pour fractures",
        quantity: "50",
        expirationDate: "01/10/25",
        label: "K.Accouchement",
        description: "Pansement spécial pour fractures.",
        reference: "PF-001",
        manufacturer: "FractureCare"
    },
    {
        name: "Pistolet à injection",
        quantity: "30",
        expirationDate: "N/A",
        label: "K.Hémoragie",
        description: "Pistolet à injection pour administration de médicaments.",
        reference: "PI-001",
        manufacturer: "InjectMed"
    },
    {
        name: "Bandages de sport",
        quantity: "200",
        expirationDate: "22/03/25",
        label: "K.Membre",
        description: "Bandages pour soutien lors des activités sportives.",
        reference: "BS-001",
        manufacturer: "SportCare"
    },
    {
        name: "Coton-tiges médicaux",
        quantity: "500",
        expirationDate: "N/A",
        label: "K.Brûlure",
        description: "Coton-tiges stériles pour usage médical.",
        reference: "CT-001",
        manufacturer: "MedCotton"
    },
    {
        name: "Tensiomètre électronique",
        quantity: "40",
        expirationDate: "11/11/25",
        label: "Oxygène",
        description: "Tensiomètre électronique pour mesurer la pression artérielle.",
        reference: "TE-001",
        manufacturer: "BloodPressure"
    },
    {
        name: "Masque respiratoire",
        quantity: "300",
        expirationDate: "28/02/25",
        label: "K.AES",
        description: "Masque respiratoire pour protection respiratoire.",
        reference: "MR-001",
        manufacturer: "RespMask"
    },
    {
        name: "Coussins chauffants",
        quantity: "50",
        expirationDate: "03/09/25",
        label: "K.COVID",
        description: "Coussins chauffants pour soulager la douleur.",
        reference: "CH-001",
        manufacturer: "HeatCare"
    },
    {
        name: "Bande de compression médicale",
        quantity: "150",
        expirationDate: "21/06/25",
        label: "Soins et pansements",
        description: "Bande de compression pour soutien médical.",
        reference: "BCM-001",
        manufacturer: "CompressCare"
    },
    {
        name: "Patchs chauffants",
        quantity: "200",
        expirationDate: "12/12/25",
        label: "K.Accouchement",
        description: "Patchs chauffants pour soulager la douleur.",
        reference: "PH-001",
        manufacturer: "HeatPatch"
    },
    {
        name: "Solution désinfectante",
        quantity: "500",
        expirationDate: "25/05/25",
        label: "K.Hémoragie",
        description: "Solution désinfectante pour surfaces et instruments.",
        reference: "SD-001",
        manufacturer: "CleanSol"
    },
    {
        name: "Désinfectant pour surfaces",
        quantity: "100",
        expirationDate: "N/A",
        label: "K.Membre",
        description: "Désinfectant pour nettoyer les surfaces médicales.",
        reference: "DS-001",
        manufacturer: "SurfaceClean"
    },
    {
        name: "Seringue sans aiguille",
        quantity: "300",
        expirationDate: "05/01/26",
        label: "K.Brûlure",
        description: "Seringue sans aiguille pour administration de médicaments.",
        reference: "SSA-001",
        manufacturer: "InjectMed"
    },
    {
        name: "Bande d'immobilisation",
        quantity: "100",
        expirationDate: "30/07/25",
        label: "Oxygène",
        description: "Bande d'immobilisation pour soutien des membres.",
        reference: "BI-001",
        manufacturer: "ImmobilCare"
    },
    {
        name: "Kit de réanimation",
        quantity: "10",
        expirationDate: "N/A",
        label: "K.AES",
        description: "Kit complet de réanimation.",
        reference: "KR-001",
        manufacturer: "ReanimationKit"
    },
    {
        name: "Chiffons médicaux",
        quantity: "200",
        expirationDate: "10/09/25",
        label: "K.COVID",
        description: "Chiffons stériles pour usage médical.",
        reference: "CM-002",
        manufacturer: "MedCloth"
    },
    {
        name: "Crème réparatrice",
        quantity: "100",
        expirationDate: "17/11/25",
        label: "Soins et pansements",
        description: "Crème réparatrice pour la peau.",
        reference: "CR-002",
        manufacturer: "SkinCare"
    },
    {
        name: "Gants pour examen médical",
        quantity: "300",
        expirationDate: "04/02/25",
        label: "K.Accouchement",
        description: "Gants stériles pour examens médicaux.",
        reference: "GEM-001",
        manufacturer: "MedGloves"
    },
    {
        name: "Soluté pour perfusion",
        quantity: "50",
        expirationDate: "N/A",
        label: "K.Hémoragie",
        description: "Soluté pour perfusion intraveineuse.",
        reference: "SP-001",
        manufacturer: "PerfusionSol"
    },
    {
        name: "Pansement anti-UV",
        quantity: "60",
        expirationDate: "03/06/25",
        label: "K.Membre",
        description: "Pansement protecteur contre les UV.",
        reference: "PAUV-001",
        manufacturer: "UVProtect"
    },
    {
        name: "Pansements pour traumatismes",
        quantity: "150",
        expirationDate: "12/07/25",
        label: "K.Brûlure",
        description: "Pansements pour soins des traumatismes.",
        reference: "PT-001",
        manufacturer: "TraumaCare"
    }
];
// Fonction pour convertir une date au format "DD/MM/YY" en Date
function parseDate(dateStr) {
    if (dateStr === 'N/A')
        return null;
    var _a = dateStr.split('/'), day = _a[0], month = _a[1], year = _a[2];
    if (!day || !month || !year)
        return null;
    // Convertit l'année à 2 chiffres en année complète (20XX)
    var fullYear = 2000 + parseInt(year);
    return new Date(fullYear, parseInt(month) - 1, parseInt(day));
}
// Fonction pour ajouter les données à Firestore
function addProductsToFirestore(products) {
    return __awaiter(this, void 0, void 0, function () {
        var _i, products_1, product, quantity, expiryDate, productData, err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _i = 0, products_1 = products;
                    _a.label = 1;
                case 1:
                    if (!(_i < products_1.length)) return [3 /*break*/, 6];
                    product = products_1[_i];
                    _a.label = 2;
                case 2:
                    _a.trys.push([2, 4, , 5]);
                    quantity = parseInt(product.quantity);
                    if (isNaN(quantity)) {
                        console.error("Quantit\u00E9 invalide pour ".concat(product.name, ", ignor\u00E9"));
                        return [3 /*break*/, 5];
                    }
                    expiryDate = parseDate(product.expirationDate);
                    productData = {
                        productName: product.name,
                        quantity: quantity,
                        label: product.label,
                        description: product.description,
                        reference: product.reference,
                        manufacturer: product.manufacturer,
                        createdAt: firestore_1.Timestamp.now()
                    };
                    // Ajoute expiryDate uniquement si elle est valide
                    if (expiryDate) {
                        productData.expiryDate = firestore_1.Timestamp.fromDate(expiryDate);
                    }
                    console.log("Données envoyées à Firestore :", productData);
                    console.log("Vérification quantité :", product.quantity, "Convertie :", quantity);
                    // Ajoute le document
                    return [4 /*yield*/, (0, firestore_1.addDoc)((0, firestore_1.collection)(db, 'products'), productData)];
                case 3:
                    // Ajoute le document
                    _a.sent();
                    console.log("Produit ".concat(product.name, " ajout\u00E9 avec succ\u00E8s !"));
                    return [3 /*break*/, 5];
                case 4:
                    err_1 = _a.sent();
                    console.error("Erreur lors de l'ajout du produit ".concat(product.name, ":"), err_1);
                    return [3 /*break*/, 5];
                case 5:
                    _i++;
                    return [3 /*break*/, 1];
                case 6: return [2 /*return*/];
            }
        });
    });
}
addProductsToFirestore(data);
