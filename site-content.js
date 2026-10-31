const SITE_BASE = "https://k-vaishnavi12.github.io/medicare-ai-chatbot/";

const SITE_PASSAGES = [
  {
    title: "Home page",
    url: SITE_BASE,
    text: "The home page headline is “Smart Healthcare, Simplified with AI.” The eyebrow says “A clearer path to care.” The description says: Explore specialists and trusted general guidance in one welcoming place. Your healthcare decisions stay with qualified professionals. Buttons are Get Started and Find a Doctor. The note under them says: Information only · Not a medical diagnosis or emergency service. Floating lines say “Compassionate care” and “Care, with clarity.” The chatbot on this page answers questions about every website section."
  },
  {
    title: "About page",
    url: SITE_BASE + "about.html",
    text: "The About page title is “Made for better questions.” MediCare AI is a concept for more accessible care. This demonstration helps you explore specialties and understand how a clinician-reviewed care journey could look. It does not connect to a clinic or store patient records. MediCare AI is a proposed AI-assisted digital healthcare platform that connects patients, doctors, pharmacists, and administrators. It brings appointment management, patient records, healthcare assistance, and digital prescriptions into one responsive web application. Proposed technology is React, TypeScript, Tailwind CSS, shadcn/ui, Supabase, and a securely integrated AI API. Languages are English, Hindi, and Telugu."
  },
  {
    title: "Problem the website addresses",
    url: SITE_BASE + "about.html",
    text: "Healthcare services can feel fragmented when appointments, medical history, prescriptions, and follow-up instructions are managed through separate channels. Patients may have difficulty finding suitable doctors, keeping track of their health information, understanding care instructions, or accessing prescription records. MediCare AI aims to address these gaps through a unified digital platform. It helps patients connect with doctors, manage appointments, access digital prescriptions, and receive general AI-assisted healthcare guidance. Doctors get organized patient information and prescription workflows, while clinical decisions stay under professional control."
  },
  {
    title: "Who the website is for",
    url: SITE_BASE + "about.html",
    text: "Primary users are patients who need appointments, health-record access, reminders, and prescription management; doctors who review patient information and manage consultations and prescriptions; caregivers or family members assisting patients; and people seeking general health information through an AI assistant. Secondary users are pharmacists who support safe medicine use, clinic and hospital administrators, and healthcare organizations and medical support staff."
  },
  {
    title: "Real-world scenarios on the website",
    url: SITE_BASE + "about.html",
    text: "The website describes these scenarios: patients searching for doctors by medical specialization; booking, viewing, or cancelling appointments; doctors reviewing patient profiles and medical history; creating, editing, and approving digital prescriptions after clinical review; patients viewing, downloading, or printing prescriptions; medicine reminders and previous prescriptions; an AI symptom checker or chatbot for general health information; and sharing prescription details through a QR-code verification workflow. The platform supports routine digital healthcare interactions. It does not replace an in-person assessment or professional medical judgment."
  },
  {
    title: "Impact explained on the website",
    url: SITE_BASE + "about.html",
    text: "The intended impact is to make it easier to find doctors and manage appointments, provide access to digital prescriptions and previous records, support continuity of care through reminders and follow-up information, reduce paperwork, help doctors organize patient information and prescription workflows, improve access to general healthcare information, encourage awareness of medicine allergies and interactions, and improve accessibility through English, Hindi, and Telugu. Overall, MediCare AI aims to make everyday healthcare interactions more connected, organized, and accessible while keeping diagnosis and treatment decisions with qualified healthcare professionals."
  },
  {
    title: "What makes this website different",
    url: SITE_BASE + "about.html",
    text: "Traditional workflows may use separate systems or paper for appointments, patient information, and prescriptions. MediCare AI proposes one digital experience with separate patient, doctor, and administrator dashboards; registration, login, and profiles; doctor discovery by specialization; digital prescription creation, editing, approval, download, and printing; QR-code verification; AI symptom guidance, chatbot support, and specialist suggestions; allergy and drug-interaction alerts when reliable data exists; medicine reminders and prescription history; English, Hindi, and Telugu; and a responsive desktop and mobile interface. The distinction is patient-facing convenience, doctor-controlled prescriptions, and carefully bounded AI assistance in one platform."
  },
  {
    title: "Testing and demonstration status",
    url: SITE_BASE + "about.html",
    text: "The project brief describes the intended application and required features. It does not provide evidence that the platform has been deployed, clinically validated, or tested by a healthcare organization. A prototype can use realistic sample patient profiles, doctor accounts, appointments, and example prescriptions. Sample data must be clearly identified as demonstration data and must not be represented as real patient records or clinical validation. Suggested demos include registering with patient and doctor demo accounts, searching for a doctor and booking a sample appointment, viewing a sample profile and history, creating a draft prescription and showing doctor approval, downloading a sample prescription PDF and checking its QR code, and using the symptom checker and chatbot for non-emergency educational examples."
  },
  {
    title: "Services page",
    url: SITE_BASE + "services.html",
    text: "The Services page kicker is “What you can explore” and the title is “Care that feels less complicated.” Three services are explained. Explore specialists: browse fictional sample clinicians by area of practice and learn which specialties commonly address different needs. General guidance: find plain-language answers to common care-navigation questions without sharing private health information. Clinician-led decisions: see a sample document layout. Real prescriptions require a licensed clinician’s assessment and approval."
  },
  {
    title: "How AI is used on the website",
    url: SITE_BASE + "services.html",
    text: "Artificial intelligence is a support layer. It can interpret user-entered symptoms to provide general health guidance, answer common healthcare questions, and suggest an appropriate medical specialty. For doctors, AI can help organize clinical notes and summarize relevant information for review. Capabilities include a symptom checker that encourages appropriate consultation, a healthcare chatbot, specialist suggestions, help organizing clinical notes, alerts for potential medicine allergies and drug interactions when reliable reference data is available, and multilingual access in English, Hindi, and Telugu. Responsible AI safeguard: AI must not independently diagnose patients or issue prescriptions. It must not replace a doctor’s judgment. Doctors review and approve all prescriptions. Users should be directed to qualified professionals for medical decisions or urgent concerns."
  },
  {
    title: "Dashboards and modules",
    url: SITE_BASE + "services.html",
    text: "Patient dashboard: profile and medical history, appointments, prescriptions, reminders, symptom checker, and chatbot. Doctor dashboard: patient information, appointment management, clinical notes, and prescription drafting and approval. Admin dashboard: patient and doctor management, doctor verification, appointment and prescription monitoring, and platform statistics. Prescription module: structured prescription form, doctor signature, PDF download and print, and QR-code verification. Technology layer: React, TypeScript, Tailwind CSS, shadcn/ui, Supabase, and secure AI API integration."
  },
  {
    title: "Doctors page",
    url: SITE_BASE + "doctors.html",
    text: "The Doctors page kicker is “Meet the directory” and the title is “Find your kind of specialist.” The disclaimer says: Illustrative profiles only. These are not available clinicians or bookable appointments. Filters are All, General medicine, Cardiology, and Dermatology. A general medicine clinician is often a good first contact. They can assess needs and suggest an appropriate specialty when necessary."
  },
  {
    title: "Dr. Ananya Rao",
    url: SITE_BASE + "doctors.html",
    text: "Dr. Ananya Rao is a sample profile in General medicine. She is described as a first point of contact for everyday health concerns and care coordination. This is an illustrative profile, not an available clinician or a bookable appointment."
  },
  {
    title: "Dr. Vikram Mehta",
    url: SITE_BASE + "doctors.html",
    text: "Dr. Vikram Mehta is a sample profile in Cardiology. The profile is focused on heart and circulatory health assessment and management. This is an illustrative profile, not an available clinician or a bookable appointment."
  },
  {
    title: "Dr. Sahana Iyer",
    url: SITE_BASE + "doctors.html",
    text: "Dr. Sahana Iyer is a sample profile in Dermatology. The profile is focused on evaluation of skin, hair, and nail conditions. This is an illustrative profile, not an available clinician or a bookable appointment."
  },
  {
    title: "Guidance page",
    url: SITE_BASE + "guidance.html",
    text: "The Guidance page kicker is “Helpful starting points” and the title is “Ask a general question.” It says: Choose a topic below. No symptoms or personal details are collected. The answer label is “General information.” The safety line says: This information cannot diagnose conditions, recommend individual treatments, or replace professional care. The default prompt says: Select a topic to read general healthcare guidance. For advice about your own health, speak with a qualified clinician."
  },
  {
    title: "How do I choose a specialist?",
    url: SITE_BASE + "guidance.html",
    text: "How do I choose a specialist? A general medicine clinician is often a good first contact. They can assess your needs and suggest an appropriate specialty when necessary. Hindi: सामान्य चिकित्सा चिकित्सक अक्सर अच्छा पहला संपर्क होते हैं। वे जरूरत का आकलन कर उपयुक्त विशेषता सुझा सकते हैं। Telugu: సాధారణ వైద్య నిపుణుడు తరచుగా మంచి మొదటి సంప్రదింపు. వారు అవసరాలను అంచనా వేసి అవసరమైతే సరైన స్పెషాలిటీని సూచించవచ్చు."
  },
  {
    title: "What should I ask about a medicine?",
    url: SITE_BASE + "guidance.html",
    text: "What should I ask about a medicine? Ask your clinician or pharmacist about the intended use, dosing, possible side effects, interactions, and what to do if you miss a dose. Share any known allergies with them. The website does not give a personal dose or a personal prescription."
  },
  {
    title: "When should I seek urgent help?",
    url: SITE_BASE + "guidance.html",
    text: "When should I seek urgent help? If you think someone has a medical emergency, seek immediate local emergency assistance. Do not rely on an online information tool for urgent decisions. Hindi: यदि चिकित्सा आपातस्थिति की आशंका हो तो तुरंत स्थानीय आपातकालीन सेवाओं से संपर्क करें। तत्काल निर्णय के लिए ऑनलाइन जानकारी पर निर्भर न रहें। Telugu: వైద్య అత్యవసర పరిస్థితి అనిపిస్తే వెంటనే స్థానిక అత్యవసర సేవలను సంప్రదించండి. అత్యవసర నిర్ణయాల కోసం ఆన్‌లైన్ సమాచారంపై ఆధారపడవద్దు."
  },
  {
    title: "Prescriptions page",
    url: SITE_BASE + "prescriptions.html",
    text: "The Prescriptions page kicker is “Document preview” and the title is “A clearer care record.” The button says “Print / Save sample as PDF.” The sample heading is “Sample prescription layout” and the subtitle is “Illustration only · Not a valid prescription.” Fields are: Patient — Example Patient (fictional); Clinician — Example Clinician (fictional); Date — Illustrative document; Reference — DEMO ONLY · NOT VERIFIABLE. Assessment: Requires an in-person or appropriately conducted clinical evaluation. Medicine, dose, frequency, duration: To be determined by a licensed clinician. Instructions and follow-up: To be discussed with a licensed clinician. Clinician signature: Not signed. No QR verification is available for this sample."
  },
  {
    title: "How digital prescriptions work",
    url: SITE_BASE + "prescriptions.html",
    text: "On the proposed platform, doctors create, edit, and approve digital prescriptions after clinical review. Patients can view, download, or print approved prescriptions. A QR code can support prescription checking. Medicine reminders and prescription history support follow-up. AI must not independently issue prescriptions. All prescriptions require review and approval by a qualified doctor. The sample on this website is not a valid prescription and has no verifiable QR code."
  },
  {
    title: "Data and privacy explained on the website",
    url: SITE_BASE + "website-details.html",
    text: "The platform may process patient profile details and contact information, medical history and patient-provided health information, symptoms and consultation notes, doctor profiles, specializations, and availability, prescription details including medicine name, dosage, frequency, duration, and instructions, medicine allergy information and drug-interaction reference data, appointment records, follow-up dates, and reminder preferences, and account roles and administrative verification records. Medical records are sensitive. The system should apply role-based access, secure authentication, protected storage, and data minimization. This public website and chatbot do not store patient records."
  },
  {
    title: "Challenges and skills explained on the website",
    url: SITE_BASE + "website-details.html",
    text: "Design challenges listed on the website include protecting sensitive patient information and role-based access, separate workflows for patients, doctors, and administrators, ensuring prescriptions are reviewed and approved by doctors, presenting AI health guidance without implying diagnosis, using reliable reference data for allergy and interaction alerts, generating readable printable prescription PDFs with QR-code verification, keeping appointment and prescription records consistent, supporting English, Hindi, and Telugu, and making the application responsive and accessible. Skills connected to the project include problem identification, responsible AI in healthcare, prompt engineering, user-centered dashboards, role-based workflows, structured records, React and TypeScript, Tailwind CSS and shadcn/ui, Supabase for authentication and storage, and secure server-side AI integration."
  },
  {
    title: "Safety and privacy note",
    url: SITE_BASE + "website-details.html",
    text: "MediCare AI is a proposed healthcare support platform. AI outputs are informational and must not be treated as a medical diagnosis or prescription. All prescriptions require review and approval by a qualified doctor. Emergency symptoms require immediate local emergency care. The footer says: An informational demonstration. For emergencies, contact local emergency services. The production system should undergo security, privacy, usability, and clinical-safety review before real-world use."
  },
  {
    title: "Languages on the website",
    url: SITE_BASE + "guidance.html",
    text: "The website language control offers English, Hindi (हिन्दी), and Telugu (తెలుగు). Navigation labels in Hindi are होम, परिचय, सेवाएं, and डॉक्टर. Navigation labels in Telugu are హోమ్, గురించి, సేవలు, and వైద్యులు. The chatbot answers in the selected language for core topics and can explain every English website page."
  },
  {
    title: "All website links",
    url: SITE_BASE + "website-details.html",
    text: "Public website links: Home " + SITE_BASE + " About " + SITE_BASE + "about.html Services " + SITE_BASE + "services.html Doctors " + SITE_BASE + "doctors.html Guidance " + SITE_BASE + "guidance.html Prescriptions " + SITE_BASE + "prescriptions.html FAQ " + SITE_BASE + "faq.html Full details " + SITE_BASE + "website-details.html Sitemap " + SITE_BASE + "sitemap.xml. Ask about any of these pages and the chatbot explains that page."
  }
];
