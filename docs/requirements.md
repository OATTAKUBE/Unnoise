# Requirements Specification: Unnoise Smart Sleep Pillow & Strava-Style Community

**โปรเจกต์**: Unnoise Smart Sleep Pillow (UI Model v2.0)  
**วันที่**: 2026-10-16  

---

## 1. วัตถุประสงค์ (Objectives)
สร้างโมเดลหน้าเว็บไซต์ธุรกิจ **Unnoise** (หมอนสุขภาพอัจฉริยะ) ในสไตล์ **Minimalist Blue & White (Sport-Tech)** พร้อมฟังก์ชันจำลองสถิติและการเชื่อมต่อสังคมแบบ **Strava-style Sleep Community & Stats** เพื่อส่งงานและนำเสนอต่ออาจารย์

## 2. ฟังก์ชันหลักของระบบ (Functional Requirements)
1. **Hero Section**:
   - ดีไซน์สีน้ำเงิน-ขาว มินิมอล เทคโนโลยีสุขภาพทรงคุณค่า
   - รูปภาพ 3D สินค้าจริง + Floating Biometric Badges โทนสีน้ำเงิน
2. **Interactive Sleep Dashboard Simulator**:
   - แดชบอร์ดวิเคราะห์การนอนหลับ สลับโหมดคืนหลับลึก vs คืนนอนกรน
   - กราฟคลื่นหัวใจ Real-time Pulse Wave โทนสีน้ำเงิน Tech Blue
3. **Strava-Style Weekly Sleep Volume & Consistency (ใหม่)**:
   - สรุปชั่วโมงนอนสัปดาห์ (Weekly Sleep Hours) เช่น 53h 20m
   - กราฟแท่งรายวัน (จันทร์ - อาทิตย์) พร้อมเส้นเกณฑ์เป้าหมาย 8 ชั่วโมง
   - Sleep Consistency Streak (14-Day Streak 🔥)
4. **Unnoise Sleep Club / Community Feed (ใหม่)**:
   - ฟีดกิจกรรมการนอนของเพื่อนในกลุ่ม คล้ายฟีดของ Strava
   - โชว์ชื่อผู้ใช้, รูปโปรไฟล์, ชื่อนอนหลับ, เวลาที่นอน, Deep Sleep % และคะแนน
   - **Interactive Kudos Button**: ปุ่มกดให้กำลังใจ/ปรบมือ กดแล้วตัวเลขนับเพิ่ม +1 ได้จริง
5. **Sound Therapy & White Noise Simulator**:
   - สังเคราะห์เสียงจริงด้วย Web Audio API (Rain, Pink Noise, Breeze)
6. **Sensor Technology & Product Pricing**:
   - 4 ชั้นโครงสร้างกายวิภาค และตารางเปรียบเทียบราคา 2 รุ่น
   - Pre-order Modal สรุปยอดสั่งจอง
