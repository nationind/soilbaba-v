import React, { useState } from "react";

export default function App() {
  const [language, setLanguage] = useState("en");

  const content = {
    en: {
      title: "Know Your Soil. Grow Better.",
      subtitle: "Affordable, scientific soil testing for every Indian farmer — delivered at your doorstep.",
      howItWorks: "How It Works",
      steps: ["1. Book Test", "2. Sample Collection", "3. Analysis", "4. Report"],
      stepDetails: ["Via app, call, or website", "We come to your farm", "Lab testing by experts", "SMS & App-based advice"],
      whyTest: "Why Test Your Soil?",
      benefits: [
        "Increase crop yield by 20–40%",
        "Save on unnecessary fertilizers",
        "Improve long-term soil health",
        "Reduce input costs and chemical use"
      ],
      pricing: "Pricing Plans",
      plans: [
        { name: "Basic", desc: "Soil Test + SMS Report", price: "₹199" },
        { name: "Pro", desc: "Test + App Access + Fertilizer Plan", price: "₹349" },
        { name: "Expert", desc: "2 Seasonal Tests + Crop Advisory", price: "₹599/year" }
      ],
      contact: "Book a Test or Contact Us",
      testimonials: "What Our Farmers Say",
      gallery: "Watch How We Work",
      footer: "© 2025 SoilSense. All rights reserved."
    },
    hi: {
      title: "अपनी मिट्टी को जानिए, बेहतर खेती कीजिए।",
      subtitle: "हर किसान के लिए किफायती, वैज्ञानिक मिट्टी परीक्षण — सीधे आपके खेत तक।",
      howItWorks: "कैसे काम करता है",
      steps: ["1. टेस्ट बुक करें", "2. सैंपल कलेक्शन", "3. विश्लेषण", "4. रिपोर्ट"],
      stepDetails: ["ऐप, कॉल या वेबसाइट से", "हम आपकी खेत पर आएंगे", "विशेषज्ञों द्वारा परीक्षण", "SMS और ऐप पर रिपोर्ट"],
      whyTest: "मिट्टी का परीक्षण क्यों ज़रूरी है?",
      benefits: [
        "20–40% अधिक फसल उत्पादन",
        "बिना ज़रूरत के खाद बचाएं",
        "दीर्घकालिक मिट्टी की गुणवत्ता बेहतर करें",
        "इनपुट लागत और रसायन घटाएं"
      ],
      pricing: "प्लान और मूल्य",
      plans: [
        { name: "बेसिक", desc: "मिट्टी टेस्ट + SMS रिपोर्ट", price: "₹199" },
        { name: "प्रो", desc: "टेस्ट + ऐप एक्सेस + खाद योजना", price: "₹349" },
        { name: "एक्सपर्ट", desc: "2 सीजनल टेस्ट + फसल सलाह", price: "₹599/साल" }
      ],
      contact: "टेस्ट बुक करें या संपर्क करें",
      testimonials: "हमारे किसानों की राय",
      gallery: "हम कैसे काम करते हैं",
      footer: "© 2025 SoilSense. सर्वाधिकार सुरक्षित।"
    },
    mr: {
      title: "आपली माती ओळखा. चांगले पिकवा.",
      subtitle: "प्रत्येक शेतकऱ्यांसाठी परवडणारे, वैज्ञानिक माती चाचणी — तुमच्या शेतात थेट सेवा.",
      howItWorks: "कसे कार्य करते",
      steps: ["1. चाचणी बुक करा", "2. नमुना संकलन", "3. विश्लेषण", "4. अहवाल"],
      stepDetails: ["अ‍ॅप, कॉल किंवा वेबसाइट", "आम्ही तुमच्या शेतात येतो", "तज्ज्ञांकडून तपासणी", "SMS आणि अ‍ॅपवर अहवाल"],
      whyTest: "मातीची चाचणी का आवश्यक आहे?",
      benefits: [
        "२०–४०% अधिक उत्पादन",
        "अनावश्यक खतांवर बचत",
        "मातीचा दीर्घकालीन दर्जा सुधारतो",
        "खर्च आणि रसायने कमी होतात"
      ],
      pricing: "किंमती योजना",
      plans: [
        { name: "बेसिक", desc: "माती चाचणी + SMS अहवाल", price: "₹199" },
        { name: "प्रो", desc: "चाचणी + अ‍ॅप प्रवेश + खत योजना", price: "₹349" },
        { name: "एक्सपर्ट", desc: "२ हंगामी चाचण्या + पीक सल्ला", price: "₹599/वर्ष" }
      ],
      contact: "चाचणी बुक करा किंवा संपर्क करा",
      testimonials: "आमच्या शेतकऱ्यांचे मत",
      gallery: "आम्ही कसे काम करतो ते पाहा",
      footer: "© 2025 SoilSense. सर्व हक्क राखीव."
    }
  };

  const t = content[language];

  return (
    <div style={{ fontFamily: "Arial, sans-serif", backgroundColor: "#f0fdf4", padding: "20px" }}>
      {/* Language Switch */}
      <div style={{ textAlign: "right", marginBottom: "10px" }}>
        <select onChange={(e) => setLanguage(e.target.value)} value={language}>
          <option value="en">English</option>
          <option value="hi">हिंदी</option>
          <option value="mr">मराठी</option>
        </select>
      </div>

      {/* Hero */}
      <section style={{ textAlign: "center", padding: "40px 0", backgroundColor: "#fff", borderRadius: "10px" }}>
        <h1 style={{ fontSize: "2.5rem", color: "#065f46" }}>{t.title}</h1>
        <p style={{ fontSize: "1.1rem", color: "#047857", marginTop: "10px" }}>{t.subtitle}</p>
        <div style={{ marginTop: "20px" }}>
          <a href="https://wa.me/917415620100?text=Hi%20I%20want%20to%20book%20a%20soil%20test" target="_blank" rel="noopener noreferrer">
            <button style={{ marginRight: "10px", backgroundColor: "#047857", color: "#fff", padding: "10px 16px", border: "none", borderRadius: "5px" }}>
              Request Soil Test
            </button>
          </a>
        </div>
      </section>

      {/* How It Works */}
      <section style={{ padding: "20px 0" }}>
        <h2 style={{ fontSize: "1.5rem", color: "#065f46", textAlign: "center" }}>{t.howItWorks}</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: "20px", marginTop: "20px", textAlign: "center" }}>
          {t.steps.map((step, i) => (
            <div key={i}><h3>{step}</h3><p>{t.stepDetails[i]}</p></div>
          ))}
        </div>
      </section>

      {/* Benefits */}
      <section style={{ backgroundColor: "#fff", padding: "20px", borderRadius: "10px", marginTop: "30px" }}>
        <h2 style={{ fontSize: "1.5rem", color: "#065f46", textAlign: "center" }}>{t.whyTest}</h2>
        <ul style={{ listStyleType: "disc", paddingLeft: "20px", marginTop: "15px" }}>
          {t.benefits.map((b, i) => <li key={i}>{b}</li>)}
        </ul>
      </section>

      {/* Pricing */}
      <section style={{ padding: "20px 0", marginTop: "30px" }}>
        <h2 style={{ fontSize: "1.5rem", color: "#065f46", textAlign: "center" }}>{t.pricing}</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "20px", marginTop: "20px" }}>
          {t.plans.map((plan, i) => (
            <div key={i} style={{ border: "1px solid #d1fae5", padding: "20px", borderRadius: "10px", backgroundColor: "#fff" }}>
              <h3 style={{ color: "#047857" }}>{plan.name}</h3>
              <p>{plan.desc}</p>
              <p style={{ fontWeight: "bold", marginTop: "10px" }}>{plan.price}</p>
            </div>
          ))}
        </div>
      </section>

      {/* YouTube Section */}
      <section style={{ padding: "30px", marginTop: "30px" }}>
        <h2 style={{ fontSize: "1.5rem", color: "#065f46", textAlign: "center" }}>{t.gallery}</h2>
        <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="YouTube video" frameBorder="0" allowFullScreen></iframe>
        </div>
      </section>

      {/* Google Form Section */}
      <section style={{ backgroundColor: "#d1fae5", padding: "30px", borderRadius: "10px", marginTop: "30px" }}>
        <h2 style={{ fontSize: "1.5rem", color: "#065f46", textAlign: "center" }}>{t.contact}</h2>
        <div style={{ maxWidth: "600px", margin: "0 auto" }}>
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLScXXXXX/viewform?embedded=true"
            width="100%"
            height="600"
            frameBorder="0"
            title="Google Form"
          >
            Loading…
          </iframe>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ textAlign: "center", fontSize: "0.9rem", color: "#065f46", marginTop: "40px" }}>
        <p>{t.footer}</p>
      </footer>
    </div>
  );
}
