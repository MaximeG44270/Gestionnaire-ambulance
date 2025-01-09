import React, { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebaseConfig'; 

type Product = {
  productName: string;
  quantity: number;
  expiryDate: string;
  label: string;
  description: string;
  reference: string;
  manufacturer: string;
};

const ProductForm: React.FC = () => {
  const [productName, setProductName] = useState('');
  const [quantity, setQuantity] = useState<number | ''>('');
  const [expiryDate, setExpiryDate] = useState('');
  const [label, setLabel] = useState('');
  const [description, setDescription] = useState('');
  const [reference, setReference] = useState('');
  const [manufacturer, setManufacturer] = useState('');

  // Ici on ajoute les grosse donnée au lieu de 1/1
  const [data, setData] = useState<Product[]>([
    {
        productName: "Masque FFP2",
        quantity: 50,
        expiryDate: "01/06/25",
        label: "Oxygène",
        description: "Masque de protection respiratoire de haute qualité.",
        reference: "FFP2-001",
        manufacturer: "ProtecMed"
    },
    {
        productName: "Gel hydroalcoolique",
        quantity: 120,
        expiryDate: "12/12/24",
        label: "K.AES",
        description: "Gel désinfectant pour les mains à base d'alcool.",
        reference: "GHA-001",
        manufacturer: "CleanHands"
    },
    {
        productName: "Gants latex",
        quantity: 200,
        expiryDate: "01/03/25",
        label: "K.COVID",
        description: "Gants en latex pour usage médical.",
        reference: "GL-001",
        manufacturer: "MedGloves"
    },
    {
        productName: "Stéthoscope",
        quantity: 15,
        expiryDate: "N/A",
        label: "Soins et pansements",
        description: "Instrument médical pour ausculter les sons corporels.",
        reference: "ST-001",
        manufacturer: "MedInstruments"
    },
    {
        productName: "Thermomètre",
        quantity: 30,
        expiryDate: "02/07/25",
        label: "K.Accouchement",
        description: "Thermomètre médical pour mesurer la température corporelle.",
        reference: "TH-001",
        manufacturer: "TempCheck"
    },
    {
        productName: "Bande de gaze",
        quantity: 150,
        expiryDate: "09/09/25",
        label: "K.Hémoragie",
        description: "Bande de gaze stérile pour pansements.",
        reference: "BG-001",
        manufacturer: "WoundCare"
    },
    {
        productName: "Oxygène médical",
        quantity: 20,
        expiryDate: "N/A",
        label: "K.Membre",
        description: "Oxygène médical pour usage thérapeutique.",
        reference: "O2-001",
        manufacturer: "OxyCare"
    },
    {
        productName: "Bandage élastique",
        quantity: 80,
        expiryDate: "10/11/25",
        label: "K.Brûlure",
        description: "Bandage élastique pour soutien et compression.",
        reference: "BE-001",
        manufacturer: "ElasticBand"
    },
    {
        productName: "Bouteille désinfectante",
        quantity: 100,
        expiryDate: "05/12/25",
        label: "Oxygène",
        description: "Bouteille de solution désinfectante.",
        reference: "BD-001",
        manufacturer: "CleanSol"
    },
    {
        productName: "Seringue",
        quantity: 500,
        expiryDate: "04/08/25",
        label: "K.AES",
        description: "Seringue stérile pour injections.",
        reference: "SR-001",
        manufacturer: "InjectMed"
    },
    {
        productName: "Comprimés de Paracétamol",
        quantity: 1000,
        expiryDate: "05/01/26",
        label: "K.COVID",
        description: "Comprimés de paracétamol pour soulager la douleur et la fièvre.",
        reference: "CP-001",
        manufacturer: "PainRelief"
    },
    {
        productName: "Antibiotique",
        quantity: 250,
        expiryDate: "11/11/25",
        label: "Soins et pansements",
        description: "Antibiotique pour traiter les infections bactériennes.",
        reference: "AB-001",
        manufacturer: "BactFight"
    },
    {
        productName: "Masque chirurgical",
        quantity: 200,
        expiryDate: "15/04/25",
        label: "K.Accouchement",
        description: "Masque chirurgical pour usage médical.",
        reference: "MC-001",
        manufacturer: "SurgMask"
    },
    {
        productName: "Pansement adhésif",
        quantity: 350,
        expiryDate: "06/06/25",
        label: "K.Hémoragie",
        description: "Pansement adhésif pour couvrir les plaies.",
        reference: "PA-001",
        manufacturer: "AdhesiveCare"
    },
    {
        productName: "Gants de chirurgie",
        quantity: 70,
        expiryDate: "15/10/25",
        label: "K.Membre",
        description: "Gants stériles pour chirurgie.",
        reference: "GC-001",
        manufacturer: "SurgGloves"
    },
    {
        productName: "Antiseptique",
        quantity: 180,
        expiryDate: "11/09/25",
        label: "K.Brûlure",
        description: "Solution antiseptique pour désinfecter les plaies.",
        reference: "AS-001",
        manufacturer: "CleanWound"
    },
    {
        productName: "Seringues 10 ml",
        quantity: 400,
        expiryDate: "07/03/25",
        label: "Oxygène",
        description: "Seringues de 10 ml pour injections.",
        reference: "SR10-001",
        manufacturer: "InjectMed"
    },
    {
        productName: "Masque de protection",
        quantity: 120,
        expiryDate: "01/05/25",
        label: "K.AES",
        description: "Masque de protection pour usage médical.",
        reference: "MP-001",
        manufacturer: "ProtecMed"
    },
    {
        productName: "Gants non stériles",
        quantity: 250,
        expiryDate: "01/09/25",
        label: "K.COVID",
        description: "Gants non stériles pour examens médicaux.",
        reference: "GNS-001",
        manufacturer: "MedGloves"
    },
    {
        productName: "Stérilisateur",
        quantity: 5,
        expiryDate: "N/A",
        label: "Soins et pansements",
        description: "Appareil de stérilisation pour instruments médicaux.",
        reference: "STE-001",
        manufacturer: "SterilMed"
    },
    {
        productName: "Thermomètre sans contact",
        quantity: 40,
        expiryDate: "01/02/25",
        label: "K.Accouchement",
        description: "Thermomètre infrarouge sans contact.",
        reference: "TSC-001",
        manufacturer: "TempCheck"
    },
    {
        productName: "Pansement hydrocolloïde",
        quantity: 60,
        expiryDate: "15/06/25",
        label: "K.Hémoragie",
        description: "Pansement hydrocolloïde pour plaies.",
        reference: "PH-001",
        manufacturer: "WoundCare"
    },
    {
        productName: "Gants chirurgicaux",
        quantity: 100,
        expiryDate: "25/10/25",
        label: "K.Membre",
        description: "Gants chirurgicaux stériles.",
        reference: "GCH-001",
        manufacturer: "SurgGloves"
    },
    {
        productName: "Bandages compressifs",
        quantity: 90,
        expiryDate: "13/08/25",
        label: "K.Brûlure",
        description: "Bandages compressifs pour soutien.",
        reference: "BC-001",
        manufacturer: "CompressCare"
    },
    {
        productName: "Savon antiseptique",
        quantity: 200,
        expiryDate: "12/05/25",
        label: "Oxygène",
        description: "Savon antiseptique pour hygiène des mains.",
        reference: "SA-001",
        manufacturer: "CleanHands"
    },
    {
        productName: "Bouteille de gel désinfectant",
        quantity: 75,
        expiryDate: "01/04/25",
        label: "K.AES",
        description: "Bouteille de gel désinfectant pour les mains.",
        reference: "BGD-001",
        manufacturer: "CleanHands"
    },
    {
        productName: "Flacon de solution saline",
        quantity: 50,
        expiryDate: "03/12/25",
        label: "K.COVID",
        description: "Flacon de solution saline pour nettoyage des plaies.",
        reference: "FSS-001",
        manufacturer: "SalineSol"
    },
    {
        productName: "Sutures",
        quantity: 250,
        expiryDate: "25/07/25",
        label: "Soins et pansements",
        description: "Fils de suture pour chirurgie.",
        reference: "SU-001",
        manufacturer: "SurgSuture"
    },
    {
        productName: "Bande cohésive",
        quantity: 150,
        expiryDate: "30/11/25",
        label: "K.Accouchement",
        description: "Bande cohésive pour soutien et compression.",
        reference: "BCO-001",
        manufacturer: "CohesiveBand"
    },
    {
        productName: "Compresses stériles",
        quantity: 500,
        expiryDate: "20/05/25",
        label: "K.Hémoragie",
        description: "Compresses stériles pour pansements.",
        reference: "CS-001",
        manufacturer: "WoundCare"
    },
    {
        productName: "Thermomètre médical",
        quantity: 35,
        expiryDate: "08/01/25",
        label: "K.Membre",
        description: "Thermomètre médical pour mesurer la température corporelle.",
        reference: "TM-001",
        manufacturer: "TempCheck"
    },
    {
        productName: "Aiguilles à injecter",
        quantity: 800,
        expiryDate: "15/03/25",
        label: "K.Brûlure",
        description: "Aiguilles stériles pour injections.",
        reference: "AI-001",
        manufacturer: "InjectMed"
    },
    {
        productName: "Spirales contraceptives",
        quantity: 50,
        expiryDate: "02/10/25",
        label: "Oxygène",
        description: "Spirales contraceptives pour contrôle des naissances.",
        reference: "SC-001",
        manufacturer: "ContraceptCare"
    },
    {
        productName: "Lames de scalpel",
        quantity: 100,
        expiryDate: "06/06/25",
        label: "K.AES",
        description: "Lames de scalpel stériles pour chirurgie.",
        reference: "LS-001",
        manufacturer: "SurgScalpel"
    },
    {
        productName: "Aérosol médical",
        quantity: 30,
        expiryDate: "12/08/25",
        label: "K.COVID",
        description: "Aérosol médical pour traitement respiratoire.",
        reference: "AM-001",
        manufacturer: "AeroMed"
    },
    {
        productName: "Antibiotiques en crème",
        quantity: 150,
        expiryDate: "19/05/25",
        label: "Soins et pansements",
        description: "Crème antibiotique pour traiter les infections cutanées.",
        reference: "AC-001",
        manufacturer: "BactFight"
    },
    {
        productName: "Savon antiseptique liquide",
        quantity: 300,
        expiryDate: "18/09/25",
        label: "K.Accouchement",
        description: "Savon antiseptique liquide pour hygiène des mains.",
        reference: "SAL-001",
        manufacturer: "CleanHands"
    },
    {
        productName: "Pansement pour brûlures",
        quantity: 80,
        expiryDate: "14/07/25",
        label: "K.Hémoragie",
        description: "Pansement spécial pour brûlures.",
        reference: "PB-001",
        manufacturer: "BurnCare"
    },
    {
        productName: "Kits de premiers secours",
        quantity: 20,
        expiryDate: "N/A",
        label: "K.Membre",
        description: "Kit complet de premiers secours.",
        reference: "KPS-001",
        manufacturer: "FirstAidKit"
    },
    {
        productName: "Gants en nitrile",
        quantity: 400,
        expiryDate: "22/02/25",
        label: "K.Brûlure",
        description: "Gants en nitrile pour usage médical.",
        reference: "GN-001",
        manufacturer: "MedGloves"
    },
    {
        productName: "Compresses gazeuses",
        quantity: 200,
        expiryDate: "25/09/25",
        label: "Oxygène",
        description: "Compresses gazeuses stériles pour pansements.",
        reference: "CG-001",
        manufacturer: "WoundCare"
    },
    {
        productName: "Lentilles de contact",
        quantity: 100,
        expiryDate: "03/01/26",
        label: "K.AES",
        description: "Lentilles de contact pour correction visuelle.",
        reference: "LC-001",
        manufacturer: "VisionCare"
    },
    {
        productName: "Spray antiseptique",
        quantity: 50,
        expiryDate: "05/06/25",
        label: "K.COVID",
        description: "Spray antiseptique pour désinfecter les surfaces.",
        reference: "SPA-001",
        manufacturer: "CleanSol"
    },
    {
        productName: "Kit d'hygiène buccale",
        quantity: 80,
        expiryDate: "11/12/25",
        label: "Soins et pansements",
        description: "Kit complet pour l'hygiène buccale.",
        reference: "KHB-001",
        manufacturer: "OralCare"
    },
    {
        productName: "Pansement pour ampoules",
        quantity: 120,
        expiryDate: "09/01/25",
        label: "K.Accouchement",
        description: "Pansement spécial pour ampoules.",
        reference: "PAMP-001",
        manufacturer: "BlisterCare"
    },
    {
        productName: "Lubrifiant médical",
        quantity: 60,
        expiryDate: "21/10/25",
        label: "K.Hémoragie",
        description: "Lubrifiant médical pour usage externe.",
        reference: "LM-001",
        manufacturer: "MedLube"
    },
    {
        productName: "Pansement pour coupures",
        quantity: 150,
        expiryDate: "04/02/25",
        label: "K.Membre",
        description: "Pansement pour petites coupures.",
        reference: "PC-001",
        manufacturer: "CutCare"
    },
    {
        productName: "Bande de compression",
        quantity:100,
        expiryDate: "18/07/25",
        label: "K.Brûlure",
        description: "Bande de compression pour soutien.",
        reference: "BCMP-001",
        manufacturer: "CompressCare"
    },
    {
        productName: "Ciseaux médicaux",
        quantity: 30,
        expiryDate: "N/A",
        label: "Oxygène",
        description: "Ciseaux stériles pour usage médical.",
        reference: "CM-001",
        manufacturer: "MedInstruments"
    },
    {
        productName: "Thermomètre infrarouge",
        quantity: 45,
        expiryDate: "15/05/25",
        label: "K.AES",
        description: "Thermomètre infrarouge pour mesurer la température corporelle.",
        reference: "TI-001",
        manufacturer: "TempCheck"
    },
    {
        productName: "Aiguilles de suture",
        quantity: 300,
        expiryDate: "02/04/25",
        label: "K.COVID",
        description: "Aiguilles stériles pour sutures.",
        reference: "ASU-001",
        manufacturer: "SurgSuture"
    },
    {
        productName: "Patchs de froid",
        quantity: 200,
        expiryDate: "27/11/25",
        label: "Soins et pansements",
        description: "Patchs de froid pour soulager la douleur.",
        reference: "PF-001",
        manufacturer: "ColdPatch"
    },
    {
        productName: "Tensio-mètre",
        quantity: 60,
        expiryDate: "09/08/25",
        label: "K.Accouchement",
        description: "Appareil pour mesurer la pression artérielle.",
        reference: "TM-002",
        manufacturer: "BloodPressure"
    },
    {
        productName: "Masque chirurgical jetable",
        quantity: 350,
        expiryDate: "28/05/25",
        label: "K.Hémoragie",
        description: "Masque chirurgical jetable pour usage unique.",
        reference: "MCJ-001",
        manufacturer: "SurgMask"
    },
    {
        productName: "Système d'aspiration",
        quantity: 5,
        expiryDate: "N/A",
        label: "K.Membre",
        description: "Système d'aspiration pour usage médical.",
        reference: "SA-002",
        manufacturer: "MedAspiration"
    },
    {
        productName: "Pansements pour plaies",
        quantity: 500,
        expiryDate: "03/12/25",
        label: "K.Brûlure",
        description: "Pansements stériles pour plaies.",
        reference: "PP-001",
        manufacturer: "WoundCare"
    },
    {
        productName: "Aérosol pour inhalation",
        quantity: 80,
        expiryDate: "17/09/25",
        label: "Oxygène",
        description: "Aérosol pour inhalation thérapeutique.",
        reference: "AI-002",
        manufacturer: "AeroMed"
    },
    {
        productName: "Bande de fixation",
        quantity: 250,
        expiryDate: "06/03/25",
        label: "K.AES",
        description: "Bande de fixation pour pansements.",
        reference: "BF-001",
        manufacturer: "AdhesiveCare"
    },
    {
        productName: "Pince chirurgicale",
        quantity: 100,
        expiryDate: "15/10/25",
        label: "K.COVID",
        description: "Pince chirurgicale stérile.",
        reference: "PC-002",
        manufacturer: "SurgInstruments"
    },
    {
        productName: "Stérilisateurs à vapeur",
        quantity: 10,
        expiryDate: "N/A",
        label: "Soins et pansements",
        description: "Stérilisateur à vapeur pour instruments médicaux.",
        reference: "SV-001",
        manufacturer: "SterilMed"
    },
    {
        productName: "Détergent médical",
        quantity: 150,
        expiryDate: "30/06/25",
        label: "K.Accouchement",
        description: "Détergent pour nettoyage médical.",
        reference: "DM-001",
        manufacturer: "MedClean"
    },
    {
        productName: "Kit d'urgence",
        quantity: 20,
        expiryDate: "N/A",
        label: "K.Hémoragie",
        description: "Kit d'urgence complet pour premiers secours.",
        reference: "KU-001",
        manufacturer: "EmergencyKit"
    },
    {
        productName: "Plastiques pour plaies",
        quantity: 180,
        expiryDate: "23/07/25",
        label: "K.Membre",
        description: "Plastiques stériles pour couvrir les plaies.",
        reference: "PPP-001",
        manufacturer: "WoundCare"
    },
    {
        productName: "Trousse de premiers secours",
        quantity: 50,
        expiryDate: "N/A",
        label: "K.Brûlure",
        description: "Trousse complète de premiers secours.",
        reference: "TPS-001",
        manufacturer: "FirstAidKit"
    },
    {
        productName: "Gel anesthésiant",
        quantity: 60,
        expiryDate: "05/02/25",
        label: "Oxygène",
        description: "Gel anesthésiant pour usage externe.",
        reference: "GA-001",
        manufacturer: "PainRelief"
    },
    {
        productName: "Lampe de poche médicale",
        quantity: 70,
        expiryDate: "N/A",
        label: "K.AES",
        description: "Lampe de poche pour examens médicaux.",
        reference: "LPM-001",
        manufacturer: "MedLight"
    },
    {
        productName: "Tablettes de magnésium",
        quantity: 100,
        expiryDate: "12/11/25",
        label: "K.COVID",
        description: "Tablettes de magnésium pour supplémentation.",
        reference: "TMG-001",
        manufacturer: "MagnesiumPlus"
    },
    {
        productName: "Pommade antibactérienne",
        quantity: 150,
        expiryDate: "30/04/25",
        label: "Soins et pansements",
        description: "Pommade antibactérienne pour traiter les infections cutanées.",
        reference: "PAB-001",
        manufacturer: "BactFight"
    },
    {
        productName: "Bande de fixation élastique",
        quantity: 200,
        expiryDate: "02/08/25",
        label: "K.Accouchement",
        description: "Bande de fixation élastique pour soutien.",
        reference: "BFE-001",
        manufacturer: "ElasticBand"
    },
    {
        productName: "Cicatrisation rapide",
        quantity: 120,
        expiryDate: "20/09/25",
        label: "K.Hémoragie",
        description: "Produit pour cicatrisation rapide des plaies.",
        reference: "CR-001",
        manufacturer: "WoundCare"
    },
    {
        productName: "Lance à perfusion",
        quantity: 50,
        expiryDate: "N/A",
        label: "K.Membre",
        description: "Lance à perfusion pour administration de liquides.",
        reference: "LP-001",
        manufacturer: "PerfusionMed"
    },
    {
        productName: "Bande cohésive absorbante",
        quantity: 150,
        expiryDate: "01/03/25",
        label: "K.Brûlure",
        description: "Bande cohésive absorbante pour pansements.",
        reference: "BCA-001",
        manufacturer: "CohesiveBand"
    },
    {
        productName: "Tampons hémostatiques",
        quantity: 100,
        expiryDate: "15/06/25",
        label: "Oxygène",
        description: "Tampons hémostatiques pour arrêter les saignements.",
        reference: "TH-001",
        manufacturer: "HemoStop"
    },
    {
        productName: "Solution de lavage oculaire",
        quantity: 80,
        expiryDate: "23/05/25",
        label: "K.AES",
        description: "Solution pour lavage oculaire.",
        reference: "SLO-001",
        manufacturer: "EyeCare"
    },
    {
        productName: "Gants de protection",
        quantity: 400,
        expiryDate: "12/07/25",
        label: "K.COVID",
        description: "Gants de protection pour usage médical.",
        reference: "GP-001",
        manufacturer: "MedGloves"
    },
    {
        productName: "Plâtre médical",
        quantity: 100,
        expiryDate: "14/04/25",
        label: "Soins et pansements",
        description: "Plâtre médical pour immobilisation.",
        reference: "PM-001",
        manufacturer: "CastCare"
    },
    {
        productName: "Pansement pour fractures",
        quantity: 50,
        expiryDate: "01/10/25",
        label: "K.Accouchement",
        description: "Pansement spécial pour fractures.",
        reference: "PF-001",
        manufacturer: "FractureCare"
    },
    {
        productName: "Pistolet à injection",
        quantity: 30,
        expiryDate: "N/A",
        label: "K.Hémoragie",
        description: "Pistolet à injection pour administration de médicaments.",
        reference: "PI-001",
        manufacturer: "InjectMed"
    },
    {
        productName: "Bandages de sport",
        quantity: 200,
        expiryDate: "22/03/25",
        label: "K.Membre",
        description: "Bandages pour soutien lors des activités sportives.",
        reference: "BS-001",
        manufacturer: "SportCare"
    },
    {
        productName: "Coton-tiges médicaux",
        quantity: 500,
        expiryDate: "N/A",
        label: "K.Brûlure",
        description: "Coton-tiges stériles pour usage médical.",
        reference: "CT-001",
        manufacturer: "MedCotton"
    },
    {
        productName: "Tensiomètre électronique",
        quantity: 40,
        expiryDate: "11/11/25",
        label: "Oxygène",
        description: "Tensiomètre électronique pour mesurer la pression artérielle.",
        reference: "TE-001",
        manufacturer: "BloodPressure"
    },
    {
        productName: "Masque respiratoire",
        quantity: 300,
        expiryDate: "28/02/25",
        label: "K.AES",
        description: "Masque respiratoire pour protection respiratoire.",
        reference: "MR-001",
        manufacturer: "RespMask"
    },
    {
        productName: "Coussins chauffants",
        quantity: 50,
        expiryDate: "03/09/25",
        label: "K.COVID",
        description: "Coussins chauffants pour soulager la douleur.",
        reference: "CH-001",
        manufacturer: "HeatCare"
    },
    {
        productName: "Bande de compression médicale",
        quantity: 150,
        expiryDate: "21/06/25",
        label: "Soins et pansements",
        description: "Bande de compression pour soutien médical.",
        reference: "BCM-001",
        manufacturer: "CompressCare"
    },
    {
        productName: "Patchs chauffants",
        quantity: 200,
        expiryDate: "12/12/25",
        label: "K.Accouchement",
        description: "Patchs chauffants pour soulager la douleur.",
        reference: "PH-001",
        manufacturer: "HeatPatch"
    },
    {
        productName: "Solution désinfectante",
        quantity: 500,
        expiryDate: "25/05/25",
        label: "K.Hémoragie",
        description: "Solution désinfectante pour surfaces et instruments.",
        reference: "SD-001",
        manufacturer: "CleanSol"
    },
    {
        productName: "Désinfectant pour surfaces",
        quantity: 100,
        expiryDate: "N/A",
        label: "K.Membre",
        description: "Désinfectant pour nettoyer les surfaces médicales.",
        reference: "DS-001",
        manufacturer: "SurfaceClean"
    },
    {
        productName: "Seringue sans aiguille",
        quantity: 300,
        expiryDate: "05/01/26",
        label: "K.Brûlure",
        description: "Seringue sans aiguille pour administration de médicaments.",
        reference: "SSA-001",
        manufacturer: "InjectMed"
    },
    {
        productName: "Bande d'immobilisation",
        quantity: 100,
        expiryDate: "30/07/25",
        label: "Oxygène",
        description: "Bande d'immobilisation pour soutien des membres.",
        reference: "BI-001",
        manufacturer: "ImmobilCare"
    },
    {
        productName: "Kit de réanimation",
        quantity: 10,
        expiryDate: "N/A",
        label: "K.AES",
        description: "Kit complet de réanimation.",
        reference: "KR-001",
        manufacturer: "ReanimationKit"
    },
    {
        productName: "Chiffons médicaux",
        quantity: 200,
        expiryDate: "10/09/25",
        label: "K.COVID",
        description: "Chiffons stériles pour usage médical.",
        reference: "CM-002",
        manufacturer: "MedCloth"
    },
    {
        productName: "Crème réparatrice",
        quantity: 100,
        expiryDate: "17/11/25",
        label: "Soins et pansements",
        description: "Crème réparatrice pour la peau.",
        reference: "CR-002",
        manufacturer: "SkinCare"
    },
    {
        productName: "Gants pour examen médical",
        quantity: 300,
        expiryDate: "04/02/25",
        label: "K.Accouchement",
        description: "Gants stériles pour examens médicaux.",
        reference: "GEM-001",
        manufacturer: "MedGloves"
    },
    {
        productName: "Soluté pour perfusion",
        quantity: 50,
        expiryDate: "N/A",
        label: "K.Hémoragie",
        description: "Soluté pour perfusion intraveineuse.",
        reference: "SP-001",
        manufacturer: "PerfusionSol"
    },
    {
        productName: "Pansement anti-UV",
        quantity: 60,
        expiryDate: "03/06/25",
        label: "K.Membre",
        description: "Pansement protecteur contre les UV.",
        reference: "PAUV-001",
        manufacturer: "UVProtect"
    },
    {
        productName: "Pansements pour traumatismes",
        quantity: 150,
        expiryDate: "12/07/25",
        label: "K.Brûlure",
        description: "Pansements pour soins des traumatismes.",
        reference: "PT-001",
        manufacturer: "TraumaCare"
    }
  ]);

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!productName || !quantity || !expiryDate || !label || !description || !reference || !manufacturer) {
      setError('Tous les champs sont obligatoires.');
      setSuccess('');
      return;
    }

    try {
      await addDoc(collection(db, 'products'), {
        productName,
        quantity: Number(quantity),
        expiryDate,
        label,
        description,
        reference,
        manufacturer,
        createdAt: new Date(),
      });

      setProductName('');
      setQuantity('');
      setExpiryDate('');
      setLabel('');
      setDescription('');
      setReference('');
      setManufacturer('');
      setError('');
      setSuccess('Produit ajouté avec succès !');
    } catch (err) {
      console.error('Erreur lors de l\'ajout du produit:', err);
      setError('Une erreur est survenue. Veuillez réessayer.');
      setSuccess('');
    }
  };

  const handleMassUpload = async () => {
    if (data.length === 0) {
      setError('Le tableau des produits est vide.');
      setSuccess('');
      return;
    }

    try {
      const batchPromises = data.map((product) =>
        addDoc(collection(db, 'products'), {
          ...product,
          createdAt: new Date(),
        })
      );

      await Promise.all(batchPromises);

      setData([]);
      setError('');
      setSuccess('Tous les produits ont été ajoutés avec succès !');
    } catch (err) {
      console.error('Erreur lors de l\'ajout des produits:', err);
      setError('Une erreur est survenue lors de l\'ajout en masse. Veuillez réessayer.');
      setSuccess('');
    }
  };

  return (
    <div style={{ maxWidth: '500px', margin: '0 auto', padding: '1rem' }}>
      <h2>AJOUTER UN PRODUIT EN BASE DE DONNÉE</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {success && <p style={{ color: 'green' }}>{success}</p>}

      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <input
          type="text"
          placeholder="Nom du produit"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Quantité"
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value) || '')}
        />
        <input
          type="date"
          placeholder="Date de péremption"
          value={expiryDate}
          onChange={(e) => setExpiryDate(e.target.value)}
        />
        <input
          type="text"
          placeholder="Libellé"
          value={label}
          onChange={(e) => setLabel(e.target.value)}
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows={3}
        ></textarea>
        <input
          type="text"
          placeholder="Référence"
          value={reference}
          onChange={(e) => setReference(e.target.value)}
        />
        <input
          type="text"
          placeholder="Nom du fabriquant"
          value={manufacturer}
          onChange={(e) => setManufacturer(e.target.value)}
        />
        <button type="submit" style={{ padding: '0.5rem', backgroundColor: 'blue', color: 'white', border: 'none' }}>
          Ajouter
        </button>
      </form>


      {/* Ici c'est le bouton pour envoyer en masse les donnée le mettre hidden */}
      <button
        onClick={handleMassUpload}
        style={{ marginTop: '1rem', padding: '0.5rem', backgroundColor: 'green', color: 'white', border: 'none' }}
      >
        Ajouter tous les produits
      </button>
    </div>
  );
};

export default ProductForm;