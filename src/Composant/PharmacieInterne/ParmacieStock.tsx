import React, { useState } from "react";
import Stock from "./Stock";

interface Product {
    name: string;
    quantity: string;
    expirationDate: string;
    label: string;
    description: string;
    reference: string;
    manufacturer: string;
}

const data: Product[] = [
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


const isExpiringOrExpired = (expirationDate: string): boolean => {
    const today = new Date();
    
    if (expirationDate === "N/A") {
        return false;
    }

    const [day, month, year] = expirationDate.split("/");
    const expiration = new Date(`20${year}-${month}-${day}`);

    const threeMonthsFromNow = new Date();
    threeMonthsFromNow.setMonth(today.getMonth() + 3);

    return expiration <= threeMonthsFromNow;
};

const PharmacieStock: React.FC = () => {
    const [selectedButton, setSelectedButton] = useState<string | null>(null);
    const [searchQuery, setSearchQuery] = useState<string>("");

    const handleButtonClick = (buttonName: string) => {
        setSelectedButton(buttonName);
    };

    const filteredData = data.filter((row) => {
    if (selectedButton && row.label !== selectedButton) return false;
    return row.name.toLowerCase().includes(searchQuery.toLowerCase());
});

    const expiringOrExpiredData = data.filter((row) => isExpiringOrExpired(row.expirationDate));

    return (
        <div>
            <div className="flex flex-col md:flex-row w-full">
{/* ---------------------------------------- BLOCK LEFT ---------------------------------------- */}
                <div className="w-full overflow-y-auto max-h-80vh scrollbar-hide flex flex-col md:ml-4 md:w-1/2 md:mt-4">
{/* ---------------------------------------- FIRST BLOCK ---------------------------------------- */}
                    <div className="w-full flex flex-col items-center md:mt-0">
                        <p className="items-center text-center text-2xl w-full FC-BM mr-4 p-4 font-carving-black">
                            Pharmacie sur site
                        </p>
                    </div>

{/* ---------------------------------------- THREE BLOCK ---------------------------------------- */}
                    <div className="w-full flex flex-col justify-center items-center mt-4">
                        <p className="bg-BM w-full rounded-t-lg h-12 content-center text-xl font-carving-black text-white text-center">
                            Date de péremption
                        </p>
                        <div className="bg-white grid grid-cols-[2fr_1fr_1fr] text-center w-full text-black p-4 font-carving-bold">
                            <p className="text-left text-gray-500 font-bold">Produits</p>
                            <p className="text-center text-gray-500 hidden font-bold">Quantité</p>
                            <p className="text-center text-gray-500 hidden font-bold">Date Péremption</p>
                        </div>
                        <div className="bg-white text-center grid w-full text-black rounded-b-lg shadow-lg p-4 max-h-52 overflow-y-auto">
                            {expiringOrExpiredData.map((row, rowIndex) => (
                                <div key={`${row.name}-${row.expirationDate}`} className="grid grid-cols-[2fr_1fr_1fr] w-full mb-2">
                                    <p className="text-left">{row.name}</p>
                                    <p className="text-center hidden">{row.quantity}</p>
                                    <p className="text-center hidden">{row.expirationDate}</p>
                                </div>
                            ))}
                        </div>
                    </div>

{/* ---------------------------------------- FOUR BLOCK ---------------------------------------- */}
                    <div className="w-full flex flex-col justify-center items-center mt-4">
                        <div className="w-full flex flex-col justify-center items-center mb-4">
                            <div className="w-full flex justify-between flex-wrap">
                                <div className="flex flex-col xl:flex-wrap xl:flex-row w-full xl:gap-y-4">
                                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3 w-full">
                                      <button
                                        className="bg-slate-400 text-white px-4 py-2 rounded-lg font-carving-bold"
                                        onClick={() => handleButtonClick('Soins et pansements')}>Soins et pansements</button>
                                      <button
                                        className="bg-slate-400 text-white px-4 py-2 rounded-lg font-carving-bold"
                                        onClick={() => handleButtonClick('K.AES')}>K.AES</button>
                                      <button
                                        className="bg-slate-400 text-white px-4 py-2 rounded-lg font-carving-bold"
                                        onClick={() => handleButtonClick('K.COVID')}>K.COVID</button>
                                      <button
                                        className="bg-slate-400 text-white px-4 py-2 rounded-lg font-carving-bold"
                                        onClick={() => handleButtonClick('Oxygène')}>Oxygène</button>
                                      <button
                                        className="bg-slate-400 text-white px-4 py-2 rounded-lg font-carving-bold"
                                        onClick={() => handleButtonClick('K.Accouchement')}>K.Accouchement</button>
                                      <button
                                        className="bg-slate-400 text-white px-4 py-2 rounded-lg font-carving-bold"
                                        onClick={() => handleButtonClick('K.Hémoragie')}>K.Hémoragie</button>
                                      <button
                                        className="bg-slate-400 text-white px-4 py-2 rounded-lg font-carving-bold"
                                        onClick={() => handleButtonClick('K.Membre')}>K.Membre</button>
                                      <button
                                        className="bg-slate-400 text-white px-4 py-2 rounded-lg font-carving-bold"
                                        onClick={() => handleButtonClick('K.Brûlure')}>K.Brûlure</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Stock selectedButton={selectedButton} filteredData={filteredData} />
                </div>

{/* ---------------------------------------- RIGHT BLOCK ---------------------------------------- */}
                <div className="w-full flex flex-col mt-8 items-center md:mt-0 md:ml-4 md:w-1/2">
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Rechercher..."
                        className="px-4 py-2 border mb-4 md:mt-8 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500 font-carving-semi-bold"
                    />
                    
{/* ---------------------------------------- FIRST BLOCK ---------------------------------------- */}
                    <p className="bg-BM w-full rounded-t-lg h-12 content-center text-xl lg:mt-2 font-carving-black text-white text-center">
                        Date de péremption
                    </p>
                    <div className="bg-white w-full mb-4 text-black rounded-b-lg shadow-lg p-4 h-52 overflow-y-auto">
                        <p className="text-left FC-BM font-bold">Description :</p>

                    </div>

{/* ---------------------------------------- SECOND BLOCK ---------------------------------------- */}
                    <div className="w-full flex justify-between mt-4">
                        <button className="bg-green-500 text-white px-4 py-2 rounded-lg w-[48%]">
                            Ajouter
                        </button>
                        <button className="bg-red-500 text-white px-4 py-2 rounded-lg w-[48%]">
                            Retirer
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PharmacieStock;