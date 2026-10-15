# ADR 0003: Strava-Style Social Sleep Community, Weekly Volume Stats, and Navy/White Design System

- **สถานะ (Status)**: Accepted
- **วันที่ (Date)**: 2026-10-16
- **หัวข้อ**: การเปลี่ยนธีมเป็นสีน้ำเงิน-ขาวมินิมอล และการเพิ่มส่วนแสดงคอมมูนิตี้และสถิติการนอนสไตล์ Strava

### 1. บริบท (Context)
ผู้ใช้ต้องการปรับทิศทางของหน้าเว็บ Unnoise:
1. เปลี่ยนชุดสีจากเขียว Sage เป็น **น้ำเงิน Royal Navy / Tech Blue และขาวคลีนมินิมอล** สไตล์แอปกีฬาและสุขภาพระดับโลก
2. เพิ่ม **Community Showcase สไตล์ Strava** เพื่อให้ผู้ใช้สามารถติดตามการนอนของเพื่อน ให้ Kudos และสร้างแรงจูงใจในการนอนหลับ
3. เพิ่ม **Weekly Sleep Volume & Stats Dashboard** สรุปชั่วโมงการนอนรายสัปดาห์ กราฟแท่งรายวัน จันทร์-อาทิตย์ และสถิติ Streak การนอนตรงเวลา

### 2. การตัดสินใจ (Decision)
1. **Color Palette Transformation**:
   - Primary: `#1E3A8A` (Deep Royal Navy)
   - Accent: `#2563EB` (Tech Blue)
   - Secondary Glow: `#38BDF8` (Sky Blue)
   - Backgrounds: `#F8FAFC` (Clean White / Slate-50) & `#FFFFFF`
   - Borders: `#E2E8F0`
2. **Strava-Style Sleep Activity Feed Component**:
   - สร้างการ์ดแชร์ผลการนอนของสมาชิกในคอมมูนิตี้ (เช่น "Peem", "Coach May", "Dr. Tanakorn")
   - ใส่ข้อมูล Activity Summary: ระยะเวลานอน, สัดส่วนหลับลึก, Sleep Score badge
   - ฟังก์ชัน Interactive **"Give Kudos"** ที่คลิกแล้วมี Micro-animation ปรบมือ/หัวใจ และนับจำนวน Kudos เพิ่มขึ้นทันที
3. **Weekly Volume & Consistency Section**:
   - กราฟแท่งเทียบความยาวการนอนแต่ละวัน จันทร์-อาทิตย์ พร้อมเส้น Target Line (8 ชม.)
   - การ์ดสรุป Weekly Volume (53 ชม. 20 นาที), ค่าเฉลี่ย Sleep Score, และ Streak การนอนต่อเนื่อง

### 3. ผลลัพธ์ (Consequences)
- ภาพลักษณ์ของแบรนด์ Unnoise ดูมีความเป็น Sport-Tech และ Social Platform มากขึ้นอย่างชัดเจน คล้าย Strava + Oura + Whoop
- หน้าเว็บมีมิติของการใช้งานจริง (Network Effects & Community Engagement) นอกเหนือจากการขายฮาร์ดแวร์เดี่ยวๆ
