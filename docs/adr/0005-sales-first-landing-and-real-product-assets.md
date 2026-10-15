# ADR 0005: Sales-First E-Commerce Layout, Real Product Asset Integration, and Commercial Footer

- **สถานะ (Status)**: Accepted
- **วันที่ (Date)**: 2026-10-16
- **หัวข้อ**: การปรับโครงสร้างเว็บไซต์ให้เน้นการขายเป็นอันดับแรก (Sales-First), ผสานภาพผลิตภัณฑ์จริงของ Unnoise และการนำข้อมูลโครงงานออกจาก Footer

### 1. บริบท (Context)
ผู้ใช้ต้องการปรับทิศทางของเว็บไซต์ Unnoise:
1. **Sales-First Experience**: เมื่อผู้ใช้เปิดหน้าเว็บมา ให้เข้าสู่การนำเสนอและขายสินค้าทันที (Catalog & Purchase CTA) นำหน้าระบบจำลอง
2. **Real Product Assets**: ผสานรูปภาพหมอนทั้ง 2 รูปแบบที่ผู้ใช้ส่งมา:
   - ภาพหมอน Unnoise พร้อมแท็กแบรนด์, Sleep Hub Pod และ Mobile Application (`unnoise_app_pillow.png`)
   - ภาพหมอนถอดปรับระดับความสูงแบบ Multi-layer Exploded View (`unnoise_layers.png`)
3. **Commercial Footer**: ตัดหัวข้อ "เอกสารโครงงาน" และ "ข้อมูลโครงงานเพื่อการศึกษา" ออกจาก Footer ให้ดูเป็นเว็บแบรนด์ธุรกิจระดับพรีเมียมอย่างแท้จริง

### 2. การตัดสินใจ (Decision)
1. **ลำดับการแสดงผลหน้าแรก (Information Hierarchy)**:
   - `Header`: Navigation Bar พร้อมปุ่ม "สั่งซื้อทันที"
   - `Hero Section`: ใช้ภาพผลิตภัณฑ์จริง (`unnoise_app_pillow.png`) โชว์ตัวหมอน Unnoise คู่กับสมาร์ทโฟนแอปและ Sleep Pod
   - `Product Lineup & Quick Buy`: นำรายการสินค้าหลักทั้งรุ่น Smart Pillow with App และ Modular Multi-Layer Pillow ขึ้นมาจัดแสดงและสั่งซื้อได้ทันที
   - `Pillow Finder Quiz`: แบบสอบถามช่วยตัดสินใจเลือกรุ่นและสเปก
   - `Anatomical Multi-Layer Section`: แสดงภาพ Exploded Layer View (`unnoise_layers.png`) ถอดเปลี่ยนชั้นโฟมปรับความสูงได้
   - `Interactive Dashboard & Strava Community`: ฟังก์ชันจำลองสุขภาพและคอมมูนิตี้สำหรับผู้ใช้
   - `Sound Therapy Simulator`: ระบบเสียงบำบัด White/Pink Noise
   - `Commercial Footer`: ข้อมูลบริการลูกค้า นโยบายทดลองนอน 30 วัน และการรับประกัน 1 ปี (ลบเอกสารโครงงานออก)
2. **การอัปเดตรูปภาพสินค้าในระบบ**:
   - `assets/img/unnoise_app_pillow.png` เป็นภาพหลักของ Unnoise Smart Pillow
   - `assets/img/unnoise_layers.png` เป็นภาพของ Unnoise Multi-Layer Modular Pillow

### 3. ผลลัพธ์ (Consequences)
- เว็บไซต์มีภาพลักษณ์เชิงพาณิชย์ (Commercial E-Commerce) 100% พร้อมรูปภาพตรงแบรนด์ Unnoise ชัดเจน
- ประสบการณ์ผู้ใช้ลื่นไหล ตั้งแต่เห็นสินค้า เลือกดูสเปก ทำแบบสอบถาม และกดสั่งซื้อ
