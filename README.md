# Unnoise — หมอนสุขภาพอัจฉริยะ, Strava Sleep Community & Store (v3.0)

ต้นแบบหน้าเว็บไซต์ธุรกิจ, ระบบจำลองสุขภาพการนอนหลับสไตล์ **Strava + Apple Health** และระบบร้านค้าพร้อม **Pillow Finder Quiz** (High-Fidelity UI Model) สำหรับใช้ส่งงานและนำเสนอต่ออาจารย์

---

## 📌 จุดเด่นและนวัตกรรมใหม่ในเวอร์ชัน 3.0
1. **หน้าร้านค้าและรายการสินค้าครบวงจร (`shop.html`)**:
   - แสดงรายการสินค้า 4 ชนิด พร้อมสเปกเด่นและภาพถ่ายสินค้าจริง:
     - **Unnoise Pro Sound & Air** (฿7,990) — รุ่นท็อปถุงลมแก้กรน + ลำโพงคลื่นกระดูก
     - **Unnoise Essential** (฿4,990) — รุ่นมาตรฐานวัดคลื่นหัวใจ BCG 99.2%
     - **Unnoise Travel Compact** (฿3,490) — หมอนพกพาม้วนเก็บได้สำหรับนักเดินทางและนักกีฬา
     - **Unnoise Cooling Silk Pillowcase** (฿1,290) — ปลอกหมอนใยไหมแท้ผสมเจลเย็น
   - ระบบแท็บกรองสินค้า (ทั้งหมด, หมอนอัจฉริยะ, หมอนพกพา, อุปกรณ์เสริม)
2. **Interactive Pillow Finder Quiz (แบบสอบถามค้นหาหมอนที่เหมาะกับคุณ)**:
   - ผู้ใช้ตอบคำถาม 3 ข้อสั้นๆ (ท่านอน, ปัญหาการนอน, สัมผัสความแน่นที่ชอบ)
   - ระบบประมวลผลคำนวณ **Match Score** (เช่น แมตช์ 98%) แนะนำสเปกความสูงและความแน่น พร้อมปุ่มกดสั่งจองรุ่นนั้นทันที
3. **ธีม Minimalist Royal Navy & Crisp White**:
   - สไตล์ Sport-Tech สุขภาพพรีเมียม สบายตาและล้ำสมัย
4. **Weekly Sleep Volume & Stats (สถิติสัปดาห์สไตล์ Strava)**:
   - กราฟแท่งรายสัปดาห์เทียบกับเส้นเป้าหมาย 8 ชั่วโมง (Goal Line)
   - สรุปชั่วโมงนอนสัปดาห์ (56 ชม. 50 น.) และ Streak การนอนตรงเวลา 14 วันติด 🔥
5. **Unnoise Sleep Club / Community Feed**:
   - ฟีดกิจกรรมการนอนของเพื่อน และปุ่มกดให้ **Kudos** แบบ Interactive
6. **In-Browser Sound Therapy Simulator (White/Pink Noise)**:
   - สังเคราะห์คลื่นเสียงสดจริงผ่าน **Web Audio API**

---

## 🚀 วิธีเปิดใช้งาน
- **หน้าแรก (Landing & Community)**: เปิดไฟล์ `index.html`
- **หน้าร้านค้า (Store & Pillow Quiz)**: เปิดไฟล์ `shop.html` หรือคลิกปุ่ม "ร้านค้า" จากหน้าแรก
- หรือเปิดผ่าน local server: `python -m http.server 8000`

---

## 📂 โครงสร้างเอกสารเชิงวิศวกรรม (Docs & ADRs)
```
peem/
├── index.html                   # หน้าแรก Landing & Community (v3.0)
├── shop.html                    # หน้าร้านค้า & Pillow Finder Quiz (v3.0)
├── assets/
│   ├── css/style.css            # ดีไซน์โทนน้ำเงิน-ขาว สไตล์ Strava + Apple Health
│   ├── js/app.js                # ตรรกะ Interactive Dashboard, Kudos & Pillow Quiz
│   └── img/                     # ภาพถ่าย 3D สินค้าจริง (Pro, Travel, Silk Case)
├── docs/
│   ├── glossary.md              # Domain Glossary รวมคำศัพท์ผลิตภัณฑ์ & คอมมูนิตี้
│   ├── requirements.md          # เอกสารความต้องการระบบ (Requirements v3.0)
│   ├── design.md                # เอกสารระบบการออกแบบ (Design Spec v3.0)
│   ├── decision-log.md          # บันทึกประวัติการตัดสินใจในการพัฒนา
│   └── adr/
│       ├── 0001-project-scope-and-architecture.md
│       ├── 0002-interactive-simulator-and-audio.md
│       ├── 0003-strava-community-and-blue-theme.md
│       └── 0004-dedicated-shop-and-recommendation-quiz.md
└── README.md
```
