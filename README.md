# Unnoise — หมอนสุขภาพอัจฉริยะ, Sales-First E-Commerce & Strava Sleep Community (v4.0)

ต้นแบบหน้าเว็บไซต์ธุรกิจจำหน่ายหมอนสุขภาพอัจฉริยะระดับพรีเมียม ผสานภาพสินค้าจริง ระบบแนะนำหมอนตามสรีระ (**Pillow Finder Quiz**), โครงสร้างหมอนแยกส่วน 4 ชั้น (**Modular Anatomy**), สถิติการนอนรายสัปดาห์สไตล์ **Strava + Apple Health** และระบบคอมมูนิตี้ให้กำลังใจเพื่อน

---

## 📌 จุดเด่นและนวัตกรรมใหม่ในเวอร์ชัน 4.0
1. **โครงสร้างหน้าแรกแบบ Sales-First (เปิดเว็บมาเป็นการขายทันที)**:
   - **Hero Section**: ชูภาพถ่ายสินค้าจริง **Unnoise Smart Sleep Pillow with App Hub** แสดงหมอน แท็กแบรนด์ กล่อง Sleep Pod ไร้สาย และมือถือแสดงหน้าจอ Unnoise Sleep App คะแนนการนอน 85 พร้อมปุ่ม CTA สั่งซื้อและปุ่มค้นหารุ่นที่เหมาะกับคุณ
   - **Product Catalog Showcase**: แคตตาล็อกจำหน่ายสินค้า 4 รุ่นพร้อมราคา ส่วนลด และปุ่มสั่งซื้อทันทีหลัง Hero
   - **Personalized Pillow Finder Quiz**: แบบสอบถามอัจฉริยะ 3 ข้อ ค้นหาหมอนที่แมตช์กับสรีระคุณ พร้อมแสดงผลการวิเคราะห์ระดับความสูง-ความแน่นที่เหมาะสม
   - **Modular 4-Layer Ergonomics Showcase**: แสดงภาพถ่ายโครงสร้างหมอน 4 ชั้นแยกชิ้นถอดปรับระดับได้ (**Unnoise Modular Multi-Layer**) อธิบายชั้นปลอก Cooling Tencel, เมมโมรี่โฟม, แอร์แบ็ก และฐานรองรับคอ
2. **ผสานภาพถ่ายสินค้าจริง (User Uploaded Photography)**:
   - `assets/img/unnoise_app_pillow.png`: ภาพหมอนสุขภาพ Unnoise พร้อม Sleep Pod และสมาร์ตโฟนแสดงคะแนนการนอน
   - `assets/img/unnoise_layers.png`: ภาพโครงสร้างแยกส่วน 4 ชั้นพร้อมซิปถอดปรับระดับความสูง
   - `assets/img/unnoise_travel.jpg`: ภาพหมอนพกพาม้วนเก็บได้สำหรับนักกีฬาและผู้เดินทาง
   - `assets/img/unnoise_case.jpg`: ภาพปลอกหมอนใยไหมแท้ระบายความเย็น
3. **Commercial Clean Footer (ปรับท้ายเว็บเป็นธุรกิจพรีเมียม 100%)**:
   - นำข้อมูลเอกสารโครงงาน ข้อความเพื่อการศึกษา และลิงก์คู่มือวิจัยออกจาก Footer ทั้งหมด
   - แสดงหมวดหมู่สินค้า, บริการและนโยบายทดลองนอน 30 คืน, การรับประกัน 1 ปี, ช่องทางติดต่อทางการ (LINE, Call Center) และข้อกำหนด PDPA
4. **Weekly Sleep Volume & Stats (สถิติสัปดาห์สไตล์ Strava)**:
   - กราฟแท่งเปรียบเทียบชั่วโมงนอนจริงกับเป้าหมาย 8 ชั่วโมง (Goal Line)
   - สรุปชั่วโมงนอนรวมสัปดาห์ (56 ชม. 50 น.) และ Streak การนอนตรงเวลา 14 วันติด 🔥
5. **Unnoise Sleep Club / Community Feed**:
   - กิจกรรมการนอนของเพื่อนในเครือข่าย พร้อมระบบให้ **Kudos** แบบ Interactive
6. **In-Browser Sound Therapy Simulator (White/Pink Noise)**:
   - สังเคราะห์คลื่นเสียงสดจริงผ่าน **Web Audio API**

---

## 🚀 วิธีเปิดใช้งาน
- **หน้าแรก (Sales-First Landing, Products & Community)**: เปิดไฟล์ `index.html`
- **หน้าร้านค้าเฉพาะ (Dedicated Store & Quiz)**: เปิดไฟล์ `shop.html`
- หรือเปิดผ่าน local web server: `python -m http.server 8000`

---

## 📂 โครงสร้างเอกสารเชิงวิศวกรรม (Docs & ADRs)
```
peem/
├── index.html                   # หน้าแรก Sales-First Landing, Products & Community (v4.0)
├── shop.html                    # หน้าร้านค้าเฉพาะ & Pillow Finder Quiz (v4.0)
├── assets/
│   ├── css/style.css            # ดีไซน์โทน Navy-White, Drop Shadow 3D & Responsive
│   ├── js/app.js                # Interactive Simulator, Kudos, Quiz Engine & Modal
│   └── img/
│       ├── unnoise_app_pillow.png  # ภาพสินค้าจริง หมอน + Pod ไร้สาย + App
│       ├── unnoise_layers.png      # ภาพสินค้าจริง โครงสร้างหมอนแยกส่วน 4 ชั้น
│       ├── unnoise_travel.jpg      # หมอนพกพา Unnoise Travel
│       └── unnoise_case.jpg        # ปลอกหมอน Cooling Silk
├── docs/
│   ├── glossary.md              # Domain Glossary รวมคำศัพท์ผลิตภัณฑ์ & สรีรวิทยา
│   ├── requirements.md          # ข้อกำหนดระบบฉบับอัปเดต (v4.0 Sales-First)
│   ├── design.md                # Design System Spec โทนสี โครงสร้าง Component
│   ├── decision-log.md          # บันทึกประวัติการตัดสินใจในการพัฒนา
│   └── adr/
│       ├── 0001-project-scope-and-architecture.md
│       ├── 0002-interactive-simulator-and-audio.md
│       ├── 0003-strava-community-and-blue-theme.md
│       ├── 0004-dedicated-shop-and-recommendation-quiz.md
│       └── 0005-sales-first-landing-and-real-product-assets.md
└── README.md
```
