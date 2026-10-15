# Unnoise — หมอนสุขภาพอัจฉริยะ & Strava Sleep Community (v2.0)

ต้นแบบหน้าเว็บไซต์ธุรกิจและระบบจำลองสุขภาพการนอนหลับสไตล์ **Strava + Apple Health** (High-Fidelity UI Model) สำหรับใช้ส่งงานและนำเสนอต่ออาจารย์

---

## 📌 จุดเด่นและนวัตกรรมใหม่ในเวอร์ชัน 2.0
1. **ธีมใหม่: Minimalist Royal Navy & Crisp White**:
   - ปรับชุดสีเป็นน้ำเงินเข้ม Royal Navy (`#1E3A8A`), Tech Blue (`#2563EB`) บนพื้นขาวคลีนสไตล์ Sport-Tech สุขภาพระดับโลก
2. **Weekly Sleep Volume & Stats (สถิติปริมาณการนอนสไตล์ Strava)**:
   - กราฟแท่งรายสัปดาห์ (จันทร์ - อาทิตย์) เทียบกับเส้นประเป้าหมาย 8 ชั่วโมง (Goal Line)
   - สรุปชั่วโมงนอนรวมทั้งสัปดาห์ (56 ชม. 50 น.)
   - Sleep Consistency Streak (รักษาวินัยการนอนต่อเนื่อง 14 วันติด 🔥)
   - ดัชนี Sleep Recovery Index (94%)
3. **Unnoise Sleep Club / Community Feed (คอมมูนิตี้สไตล์ Strava)**:
   - ฟีดแชร์กิจกรรมการนอนของเพื่อนในกลุ่ม (เช่น คืนฟื้นฟูหลังวิ่ง 10K, คืนพักผ่อนเต็มอิ่ม)
   - **Interactive Kudos Button**: ปุ่มกดให้กำลังใจ/ปรบมือให้เพื่อน เมื่อคลิกตัวเลขจะเพิ่มขึ้นแบบ Real-time พร้อม Micro-animation
   - Monthly Leaderboard (กระดานคะแนนการนอนอันดับ 1-4)
   - Weekly Club Challenges (เช่น 7-Day Restorative Sleep, Snore-Free Nights)
4. **Interactive Sleep Dashboard Simulator**:
   - จำลองสถิติสุขภาพยามค่ำคืน (BPM, การกรน, ระยะการนอน 4 สเตจ, Sleep Score)
   - กราฟคลื่นหัวใจ Real-time Pulse Wave เต้นสดบน Canvas
5. **In-Browser Sound Therapy Simulator**:
   - สังเคราะห์คลื่นเสียงสดจริงผ่าน **Web Audio API** (สายฝน Gentle Rain, Pink Noise หลับลึก, เสียงลมธรรมชาติ)

---

## 🚀 วิธีเปิดใช้งาน
- **เปิดตรงผ่านเบราว์เซอร์**: ดับเบิลคลิกที่ไฟล์ `index.html` เพื่อเปิดใช้งานได้ทันทีบน Google Chrome, Microsoft Edge, Safari หรือ Firefox
- หรือเปิดผ่าน local server: `python -m http.server 8000`

---

## 📂 โครงสร้างเอกสารเชิงวิศวกรรม (Docs & ADRs)
```
peem/
├── index.html                   # โครงสร้างหน้าเว็บหลัก (v2.0)
├── assets/
│   ├── css/style.css            # ดีไซน์โทนน้ำเงิน-ขาว สไตล์ Strava + Apple Health
│   ├── js/app.js                # ตรรกะระบบ Interactive Dashboard, Kudos & Web Audio
│   └── img/                     # ภาพถ่าย 3D สินค้าจริงของหมอน Unnoise
├── docs/
│   ├── glossary.md              # Domain Glossary รวมคำศัพท์ผลิตภัณฑ์ & คอมมูนิตี้
│   ├── requirements.md          # เอกสารความต้องการระบบ (Requirements v2.0)
│   ├── design.md                # เอกสารระบบการออกแบบ (Design Spec v2.0)
│   ├── decision-log.md          # บันทึกประวัติการตัดสินใจในการพัฒนา
│   └── adr/
│       ├── 0001-project-scope-and-architecture.md
│       ├── 0002-interactive-simulator-and-audio.md
│       └── 0003-strava-community-and-blue-theme.md # การตัดสินใจธีมสีน้ำเงินและ Strava
└── README.md
```
